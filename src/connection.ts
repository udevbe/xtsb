import * as net from 'net'
import * as os from 'os'
import { readServerHello, writeClientHello } from './auth'
import { unpackFrom } from './struct'
import { errors, events, RequestChecker, Unmarshaller } from './xjsbInternals'
import { GetInputFocusReply, Setup } from './xproto'

export interface XConnectionOptions {
  display?: string
  xAuthority?: string
}

type ReplyResolver = { resolve: (value?: any | PromiseLike<any>) => void, resolveWithError: (reason?: any) => void }

const resolveWithError = (reject: (reason?: any) => void) => (rawError: Uint8Array) => {
  const errorCode = rawError[1]
  const [errorUnmarshaller, ErrorClass] = errors[errorCode]
  const errorBody = errorUnmarshaller(rawError.buffer, rawError.byteOffset)
  reject(new ErrorClass(errorBody.value))
}

const unmarshallGetInputFocusReply: Unmarshaller<GetInputFocusReply> = (buffer, offset = 0) => {
  const [revertTo, focus] = unpackFrom('<xB2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      revertTo,
      focus
    },
    offset
  }
}


export class XConnection {
  readonly socket: net.Socket
  readonly displayNum: string
  readonly setup: Setup

  private readonly unusedIds: number[] = []
  private nextResourceId: number
  private readonly resourceIdShift: number
  private readonly resourceIdBase: number

  private requestSequenceNumber: number = 0
  private readonly replyResolvers: ReplyResolver[] = []

  constructor(
    socket: net.Socket,
    displayNum: string,
    setup: Setup,
    nextResourceId: number,
    resourceIdShift: number,
    resourceIdBase: number
  ) {
    this.socket = socket
    this.displayNum = displayNum
    this.setup = setup
    this.nextResourceId = nextResourceId
    this.resourceIdShift = resourceIdShift
    this.resourceIdBase = resourceIdBase

    socket.on('data', data => this.onData(data))
  }

  allocateID(): number {
    if (this.unusedIds.length > 0) {
      return this.unusedIds.pop() as number
    }
    // TODO: handle overflow (XCMiscGetXIDRange from XC_MISC ext)
    return (++this.nextResourceId << this.resourceIdShift) + this.resourceIdBase
  }

  releaseID(id: number) {
    this.unusedIds.push(id)
  }

  close() {
    this.socket.end()
  }

  private onData(data: Uint8Array) {
    let offset = 0

    while ((data.byteOffset + offset) < data.byteLength) {
      const packet = new Uint8Array(data.buffer, data.byteOffset + offset)

      const type = packet[0]
      if (type === 0) {
        const replySequenceNumber = packet[2] | packet[3] << 8
        this.resolvePreviousReplyResolvers(replySequenceNumber)
        const replyResolver = this.findReplyResolver(replySequenceNumber)
        replyResolver.resolveWithError(packet)
        offset += 32
      } else if (type === 1) {
        const replySequenceNumber = packet[2] | packet[3] << 8
        const length = 32 + (4* (packet[4] | packet[5] << 8 | packet[6] << 16 | packet[7] << 24))
        this.resolvePreviousReplyResolvers(replySequenceNumber)
        const replyResolver = this.findReplyResolver(replySequenceNumber)
        replyResolver.resolve(packet)
        offset += length
      } else {
        // Event
        events[type](this, packet)
        offset += 32
      }
    }
  }

  sendVoidRequest(requestParts: ArrayBuffer[], opcode: number): RequestChecker {
    const requestBuffer = createRequestBuffer(requestParts)
    requestBuffer[0] = opcode
    new Uint16Array(requestBuffer.buffer, requestBuffer.byteOffset)[1] = new Uint32Array(requestBuffer.buffer, requestBuffer.byteOffset).length

    const voidRequestPromise = new Promise<void>((resolve, reject) => {
      this.replyResolvers.push({ resolve, resolveWithError: resolveWithError(reject) })

      this.requestSequenceNumber++
      this.socket.write(requestBuffer)
    })

    // TODO return a requestChecker object that can fire an explicit noop request (a 'sync') to check if the request was processed with or without error.
    return {
      check: (): Promise<void> => {
        // fire a poor man 'sync' call to ensure the xserver has processed our previous actual call.
        this.sendRequest<GetInputFocusReply>([new ArrayBuffer(4)], 43, unmarshallGetInputFocusReply)
        return voidRequestPromise
      }
    }
  }

  sendRequest<T>(requestParts: ArrayBuffer[], opcode: number, replyUnmarshaller: Unmarshaller<T>): Promise<T> {
    const requestBuffer = createRequestBuffer(requestParts)
    requestBuffer[0] = opcode
    new Uint16Array(requestBuffer.buffer, requestBuffer.byteOffset)[1] = new Uint32Array(requestBuffer.buffer, requestBuffer.byteOffset).length

    const promise = new Promise<Uint8Array>((resolve, reject) => {
      this.replyResolvers.push({ resolve, resolveWithError: resolveWithError(reject) })
    }).then(rawReply => replyUnmarshaller(rawReply.buffer, rawReply.byteOffset).value)

    this.requestSequenceNumber++
    this.socket.write(requestBuffer)
    return promise
  }

  private findReplyResolver(replySequenceNumber: number): ReplyResolver {
    const requestNumberOffset = this.requestSequenceNumber - replySequenceNumber
    const replyResolverIndex = (this.replyResolvers.length - requestNumberOffset) - 1
    return this.replyResolvers[replyResolverIndex]
  }

  private resolvePreviousReplyResolvers(replySequenceNumber: number) {
    const requestNumberOffset = this.requestSequenceNumber - replySequenceNumber
    const replyResolverIndex = (this.replyResolvers.length - requestNumberOffset) - 1
    this.replyResolvers.splice(0, replyResolverIndex).forEach(previousReplyResolver => previousReplyResolver.resolve())
  }
}

function createRequestBuffer(requestParts: ArrayBuffer[]): Uint8Array {
  const requestSize = requestParts.reduce((previousValue, currentValue) => previousValue + currentValue.byteLength, 0)
  return requestParts
    .reduce<{ buffer: Uint8Array, offset: number }>(
      ({ buffer, offset },
       currentValue
      ) => {
        buffer.set(new Uint8Array(currentValue), offset)
        return { buffer, offset: offset + currentValue.byteLength }
      },
      { buffer: new Uint8Array(requestSize), offset: 0 }
    ).buffer
}


async function connectSocket(host: string, displayNum: string, socketPath?: string): Promise<net.Socket> {
  return new Promise((resolve, reject) => {
    const socket = socketPath ? net.createConnection(socketPath) : net.createConnection(6000 + parseInt(displayNum, 10), host)
    socket.on('ready', () => {
      // client.init(stream)
      resolve(socket)
    })
    socket.on('error', (err: NodeJS.ErrnoException) => {
      if (socket.connecting && socketPath && err.code === 'ENOENT') {
        return connectSocket('localhost', displayNum)
      } else if (socket.connecting) {
        reject(err)
      } else {
        socket.destroy(err)
      }
    })
  })
}

async function startHandshake(socket: net.Socket, displayNum: string, authHost: string, socketFamily: 'IPv4' | 'IPv6' | undefined, xAuthority?: string): Promise<Setup> {
  return new Promise<Setup>(resolve => {
    socket.once('data', data => {
      const setup = readServerHello(data)
      resolve(setup)
    })
    writeClientHello(socket, displayNum, authHost, socketFamily, xAuthority)
  })
}

async function createXConnection(socket: net.Socket, displayNum: string, xAuthority?: string): Promise<XConnection> {
  let authHost = socket.remoteAddress
  let authFamily = socket.remoteFamily as 'IPv4' | 'IPv6' | undefined
  if (!authHost || authHost === '127.0.0.1' || authHost === '::1') {
    authHost = os.hostname()
    authFamily = undefined
  }

  const setup = await startHandshake(socket, displayNum, authHost, authFamily, xAuthority)
  const nextResourceId = 0
  let resourceIdShift = 0
  while (!((setup.resourceIdMask >> resourceIdShift) & 1)) {
    resourceIdShift++
  }

  return new XConnection(socket, displayNum, setup, nextResourceId, resourceIdShift, setup.resourceIdBase)
}

export async function connect(options?: XConnectionOptions): Promise<XConnection> {
  const display = options?.display ?? (process.env.DISPLAY) ?? ':0'
  const xAuthority = options?.xAuthority

  const displayMatch = display.match(/^(?:[^:]*?\/)?(.*):(\d+)(?:.(\d+))?$/)
  if (!displayMatch) {
    throw new Error('Cannot parse display')
  }

  const host = displayMatch[1]
  const displayNum = displayMatch[2] ?? '0'
  const screenNum = displayMatch[3] ?? '0'

  let socketPath: string | undefined
  // try local socket on non-windows platforms
  if (['cygwin', 'win32', 'win64'].indexOf(process.platform) < 0) {
    // FIXME check if mac is ok?
    // @ts-ignore
    if (process.platform === 'darwin' || process.platform === 'mac') {
      // socket path on OSX is /tmp/launch-(some id)/org.x:0
      if (display[0] === '/') {
        socketPath = display
      }
    } else if (!host) {
      socketPath = '/tmp/.X11-unix/X' + displayNum
    }
  }

  const socket = await connectSocket(host, displayNum, socketPath)

  return createXConnection(socket, displayNum, xAuthority)
}
