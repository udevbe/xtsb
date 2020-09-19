import { XConnection } from './connection'

export default class Protocol {
  xConnection: XConnection

  constructor(xConnection: XConnection, wireErrors: () => void | undefined, wireEvents: () => void | undefined) {
    this.xConnection = xConnection
    wireErrors?.()
    wireEvents?.()
  }
}
