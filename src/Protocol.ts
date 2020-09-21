import { XConnection } from './connection'

export default class Protocol {
  xConnection: XConnection
  majorOpcode: number

  constructor(xConnection: XConnection, majorOpcode: number) {
    this.xConnection = xConnection
    this.majorOpcode = majorOpcode
  }
}
