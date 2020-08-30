import { SetupConnection, XConnectionSocket } from './connection'
import { Setup } from './xproto'

function isSetup(setup: any): setup is Setup {
  // TODO we could check all Setup attributes but it would be a long list...
  return setup.rootsLen !== undefined
    && setup.protocolMinorVersion !== undefined
    && setup.protocolMajorVersion !== undefined
    && setup.length !== undefined
}

function createXConnectionSocket(webSocket: WebSocket): XConnectionSocket {
  webSocket.binaryType = 'arraybuffer'
  const xConnectionSocket = {
    close() {
      webSocket.close()
    },
    write(data: Uint8Array) {
      webSocket.send(data)
    }
  }
  webSocket.onmessage = ev => xConnectionSocket?.write(ev.data)
  webSocket.onerror = ev => {
    xConnectionSocket.close()
    console.error('XConnection is in error: ' + ev)
  }
  return xConnectionSocket
}

async function auth(webSocket: WebSocket) {
  return new Promise<Setup>((resolve, reject) => {
    webSocket.onmessage = ev => {
      const message = JSON.parse(ev.data)
      if (message?.reply === 'connectAck' && isSetup(message?.replyArgs)) {
        resolve(message.replyArgs)
      } else {
        reject('Expected connectAck, got: ' + ev)
      }
    }
    webSocket.onerror = ev => {
      reject('WebSocket is in error: ' + ev)
    }
  })
}

export const webConnectionSetup: (webSocket: WebSocket) => SetupConnection =
  (webSocket) => async () => {
    const setup = await auth(webSocket)
    const xConnectionSocket = createXConnectionSocket(webSocket)
    return { setup, xConnectionSocket }
  }
