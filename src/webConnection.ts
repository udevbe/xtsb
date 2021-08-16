import { SetupConnection, XConnectionSocket } from './connection'
import { Setup } from './xcb'

function isSetup(setup: any): setup is Setup {
  // TODO we could check all Setup attributes but it would be a long list...
  return (
    setup.rootsLen !== undefined &&
    setup.protocolMinorVersion !== undefined &&
    setup.protocolMajorVersion !== undefined &&
    setup.length !== undefined
  )
}

function createXConnectionSocket(webSocket: WebSocket): XConnectionSocket {
  webSocket.binaryType = 'arraybuffer'
  const xConnectionSocket: XConnectionSocket = {
    close() {
      webSocket.close()
    },
    write(data: Uint8Array) {
      webSocket.send(data)
    },
  }
  webSocket.onmessage = (ev: MessageEvent<ArrayBuffer>) =>
    xConnectionSocket.onData?.(new Uint8Array(ev.data, 0, ev.data.byteLength))
  webSocket.onerror = (ev) => {
    xConnectionSocket.close()
    console.error('XConnection is in error: ' + ev)
  }
  return xConnectionSocket
}

async function auth(webSocket: WebSocket) {
  return new Promise<Setup>((resolve, reject) => {
    webSocket.onmessage = (ev) => {
      const message = JSON.parse(ev.data)
      if (isSetup(message)) {
        resolve(message)
      } else {
        reject('Expected xcb Setup, got: ' + ev)
      }
    }
    webSocket.onerror = (ev) => {
      reject('WebSocket is in error: ' + ev)
    }
  })
}

export const webConnectionSetup: (webSocket: WebSocket) => SetupConnection = (webSocket) => async () => {
  const setup = await auth(webSocket)
  const xConnectionSocket = createXConnectionSocket(webSocket)
  return { setup, xConnectionSocket }
}
