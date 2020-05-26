import * as net from 'net'
import * as os from 'os'
import { pack } from './struct'

export interface XConnectionOptions {
  display?: string
  xAuthority?: string,
  debug?: boolean,
  disableBigRequests?: boolean
}

export class XConnection {
  readonly socket: net.Socket
  readonly displayNum: string

  constructor(socket: net.Socket, displayNum: string) {
    this.socket = socket
    this.displayNum = displayNum
  }

  close() {
    this.socket.end()
  }
}

async function connectSocket(host: string, displayNum: string, socketPath?: string): Promise<net.Socket> {
  return new Promise((resolve, reject) => {
    const socket = socketPath ? net.createConnection(socketPath) : net.createConnection(6000 + parseInt(displayNum, 10), host)
    socket.on('connect', () => {
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

function writeClientHello(xConnection: XConnection, authHost: string, socketFamily: 'IPv4' | 'IPv6' | undefined): void {
  // TODO handle cookie read error
  const cookie = await getAuthString(xConnection.displayNum, authHost, socketFamily)

  if (!cookie) {
    throw new Error('No Cookie found :(')
  }

  const byteOrder = getByteOrder()
  const protocolMajor = 11 // TODO: config? env?
  const protocolMinor = 0
  pack('BxHHHHxxss')
  stream.pack(
    'CxSSSSxxpp',
    [
      byteOrder,
      protocolMajor,
      protocolMinor,
      cookie.authName.length,
      cookie.authData.length,
      cookie.authName,
      cookie.authData
    ]
  )
  stream.flush()
}

async function startHandshake(xConnection: XConnection, authHost: string, socketFamily: 'IPv4' | 'IPv6' | undefined): Promise<void> {
  writeClientHello(xConnection, authHost, socketFamily)
  await readServerHello(this.packStream, (err, display) => {
    if (err) {
      this.emit('error', err)
      return
    }
    this.expectReplyHeader()
    if (display) {
      this.display = display
      display.client = this
      this.emit('connect', display)
    }
  })
}

async function createXConnection(socket: net.Socket, displayNum: string): Promise<XConnection> {
  let authHost = socket.remoteAddress
  let authFamily = socket.remoteFamily as 'IPv4' | 'IPv6' | undefined
  if (!authHost || authHost === '127.0.0.1' || authHost === '::1') {
    authHost = os.hostname()
    authFamily = undefined
  }

  let xConnection = new XConnection(socket, displayNum)
  await startHandshake(xConnection, authHost, authFamily)
  return xConnection
}

export async function connect(options?: XConnectionOptions): Promise<XConnection> {
  const display: string = options?.display ?? (process.env.DISPLAY) ?? ':0'

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

  return createXConnection(socket, displayNum)
  //
  // const client = new XConnection(socket)
  //
  //
  // if (initCb) {
  //   client.on('connect', display => {
  //     // opt-in BigReq
  //     if (!options.disableBigRequests) {
  //       client.require<BigRequest>('big-requests', (err, BigReq) => {
  //         if (err) {
  //           return initCb(err)
  //         }
  //         if (BigReq) {
  //           BigReq.Enable((err, maxLen) => {
  //             if (err) {
  //               initCb(err)
  //               return
  //             }
  //             display.max_request_length = maxLen
  //             cbCalled = true
  //             initCb(null, display)
  //           })
  //         }
  //       })
  //     } else {
  //       cbCalled = true
  //       initCb(null, display)
  //     }
  //   })
  // }
  // return client
}
