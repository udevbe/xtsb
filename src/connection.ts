import * as net from 'net'
import * as os from 'os'
import { readServerHello, writeClientHello } from './auth'
import { Unmarshaller, events, errors } from './xjsbInternals'
import { Setup } from './xproto'

export interface XConnectionOptions {
  display?: string
  xAuthority?: string
}

type ReplyResolver = { resolve: (value?: any | PromiseLike<any>) => void, reject: (reason?: any) => void }

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

  allocateID() {
    if (this.unusedIds.length > 0) {
      return this.unusedIds.pop()
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

  private onData(data: Buffer) {
    const type = data.readUInt8(0)

    if (type === 0) {
      const replySequenceNumber = data.readUInt16LE(2)
      // TODO resolve older replyResolvers, these are void request that cam now considered ok
      const replyResolver = this.findReplyResolver(replySequenceNumber)
      replyResolver.reject(data)
    } else if (type === 1) {
      const replySequenceNumber = data.readUInt16LE(2)
      // TODO resolve older replyResolvers, these are void request that cam now considered ok
      const replyResolver = this.findReplyResolver(replySequenceNumber)
      replyResolver.resolve(data)
    } else {
      // Event
      events[type](this, data)
    }
  }

  sendRequest<T>(requestParts: ArrayBuffer[], opcode: number, replyUnmarshaller?: Unmarshaller<T>): Promise<T> {
    // TODO isChecked
    const requestBuffer = createRequestBuffer(requestParts)
    requestBuffer[0] = opcode
    new Uint16Array(requestBuffer)[1] = requestBuffer.length

    if (replyUnmarshaller) {
      const promise = new Promise<Buffer>((resolve, reject) => {
        this.replyResolvers.push({
          resolve,
          reject: (rawError: Buffer) => {
            const errorCode = rawError.readUInt8(1)
            const [errorUnmarshaller, ErrorClass] = errors[errorCode]
            const errorBody = errorUnmarshaller(rawError, 0)
            reject(new ErrorClass(errorBody))
          }
        })
      }).then(rawReply => replyUnmarshaller(rawReply, 0).value)

      this.requestSequenceNumber++
      this.socket.write(requestBuffer)
      return promise
    } else {
      // TODO return a requestChecker object that can fire an explicit noop request (a 'sync') to check if the request was processed with or without error.
      return new Promise<T>((resolve, reject) => {
        this.replyResolvers.push({ resolve, reject })

        this.requestSequenceNumber++
        this.socket.write(requestBuffer)
      })
    }
  }

  private findReplyResolver(replySequenceNumber: number): ReplyResolver {
    const requestNumberOffset = this.requestSequenceNumber - replySequenceNumber
    const pendingReplyIndex = (this.replyResolvers.length - requestNumberOffset) - 1
    return this.replyResolvers[pendingReplyIndex]
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

  const xConnection = new XConnection(socket, displayNum, setup, nextResourceId, resourceIdShift, setup.resourceIdBase)

  return xConnection
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
