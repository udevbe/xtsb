import * as net from 'net'
import * as os from 'os'
import { readServerHello, writeClientHello } from './auth'
import { Unmarshaller } from './xjsbInternals'
import { Setup } from './xproto'

export interface XConnectionOptions {
  display?: string
  xAuthority?: string
}

export class XConnection {
  readonly socket: net.Socket
  readonly displayNum: string
  readonly setup: Setup

  private readonly unusedIds: number[] = []
  private nextResourceId: number
  private readonly resourceIdShift: number
  private readonly resourceIdBase: number

  private sequenceNumber: number = 0
  private readonly pendingReplies: Map<number, { resolve: (value?: any | PromiseLike<any>) => void, reject: (reason?: any) => void }> = new Map()

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

  sendRequest<T>(requestParts: ArrayBuffer[], opcode: number, isChecked: boolean, replyUnmarshaller?: Unmarshaller<T>): Promise<T> {
    // TODO isChecked
    const requestBuffer = createRequestBuffer(requestParts)

    if (replyUnmarshaller) {
      const promise = new Promise<Buffer>((resolve, reject) => {
        this.pendingReplies.set(this.sequenceNumber++, { resolve, reject })
      }).then(rawReply => replyUnmarshaller(rawReply, 0).value)
      // TODO opcode
      this.socket.write(requestBuffer)
      return promise
    } else {
      // @ts-ignore
      return Promise.resolve()
    }
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
