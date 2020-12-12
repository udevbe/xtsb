import { unpackFrom } from './struct'
import { GetInputFocusReply, Setup } from './xcb'
import { errors, events, RequestChecker, Unmarshaller } from './xjsbInternals'

const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder()

export function chars(chars: string): Int8Array {
  return new Int8Array(textEncoder.encode(chars).buffer)
}

declare global {
  interface Int8Array {
    chars(): string
  }

  interface Uint8Array {
    chars(): string
  }
}

export type TypedArray =
  Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array

Int8Array.prototype.chars = function() {
  return textDecoder.decode(this)
}

Uint8Array.prototype.chars = function() {
  return textDecoder.decode(this)
}

export function pad(buffer: ArrayBuffer) {
  if (buffer.byteLength % 4 === 0) {
    return buffer
  }

  const paddedBuffer = new ArrayBuffer((buffer.byteLength + 3) & ~0x3)
  new Uint8Array(paddedBuffer).set(new Uint8Array(buffer))
  return paddedBuffer
}

export interface XConnectionSocketFactory {
  (xConnectionOptions?: XConnectionOptions): Promise<XConnectionSocket>
}

export interface XConnectionSocket {
  onData?: (data: Uint8Array) => void

  write(data: Uint8Array): void

  close(): void
}

export interface XConnectionOptions {
  display?: string
  xAuthority?: string
}

type ReplyResolver = {
  resolve: (value?: any | PromiseLike<any>) => void
  resolveWithError: (reason?: any) => void
  requestName: string
}

const unmarshallGetInputFocusReply: Unmarshaller<GetInputFocusReply> = (buffer, offset = 0) => {
  const [responseType, revertTo, focus] = unpackFrom('<BB2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      responseType,
      revertTo,
      focus
    },
    offset
  }
}

export class XConnection {
  readonly socket: XConnectionSocket
  readonly setup: Setup

  defaultExceptionHandler?: (error: Error) => void

  private readonly unusedIds: number[] = []
  private nextResourceId: number
  private readonly resourceIdShift: number

  private requestSequenceNumber: number = 0
  private readonly replyResolvers: ReplyResolver[] = []

  private readonly receivedEvents: Uint8Array[] = []
  private sendBuffer: Uint8Array[] = []
  private receiveBuffer: Uint8Array[] = []

  onPreEventLoop?: () => void
  onPostEventLoop?: () => void

  constructor(socket: XConnectionSocket, setup: Setup) {
    this.nextResourceId = 0
    this.resourceIdShift = 0
    this.setup = setup

    while (!((setup.resourceIdMask >> this.resourceIdShift) & 1)) {
      this.resourceIdShift++
    }

    this.socket = socket
    socket.onData = (data) => this.onData(data)
  }

  flush() {
    this.sendBuffer.forEach(value => this.socket.write(value))
    this.sendBuffer = []
  }

  resolveWithError(reject: (reason?: any) => void) {
    return (rawError: Uint8Array) => {
      const errorCode = rawError[1]
      const [errorUnmarshaller, ErrorClass] = errors[errorCode]
      const errorBody = errorUnmarshaller(rawError.buffer, rawError.byteOffset)
      const error = new ErrorClass(errorBody.value)
      if (this.defaultExceptionHandler) {
        this.defaultExceptionHandler(error)
      } else {
        reject(error)
      }
    }
  }

  allocateID(): number {
    if (this.unusedIds.length > 0) {
      return this.unusedIds.pop() as number
    }
    // TODO: handle overflow (XCMiscGetXIDRange from XC_MISC ext)
    return (++this.nextResourceId << this.resourceIdShift) + this.setup.resourceIdBase
  }

  releaseID(id: number) {
    this.unusedIds.push(id)
  }

  close() {
    this.socket.close()
  }

  private onData(data: Uint8Array) {
    let offset = 0
    let messages: Uint8Array

    // check if we need to prepend previously received partial data
    if (this.receiveBuffer.length > 0) {
      const length = this.receiveBuffer.reduce((previousValue, currentValue) => previousValue + currentValue.byteLength, 0)
      const previousData = new Uint8Array(length)
      this.receiveBuffer.forEach(value => {
        previousData.set(value, offset)
        offset += value.byteLength
      })
      this.receiveBuffer = []
      messages = new Uint8Array(previousData.byteLength + data.byteLength)
      messages.set(previousData, 0)
      messages.set(data, offset)
      offset = 0
    } else {
      messages = data
    }

    const eventPromises: Promise<void>[] = []
    while (messages.byteOffset + offset < messages.byteLength) {
      const bytesRemaining = messages.byteLength - messages.byteOffset
      // check for partial data (we need at least 32 bytes for it to be considered a message
      if (bytesRemaining < 32) {
        this.receiveBuffer.push(new Uint8Array(messages.buffer, messages.byteOffset + offset, bytesRemaining))
        return
      }

      const header = new Uint8Array(messages.buffer, messages.byteOffset + offset, 32)
      const type = header[0]

      if (type === 0) {
        const length = 32
        const packet = new Uint8Array(messages.buffer, messages.byteOffset + offset, length)
        const replySequenceNumber = packet[2] | (packet[3] << 8)
        this.resolvePreviousReplyResolvers(replySequenceNumber)
        const replyResolver = this.findReplyResolver(replySequenceNumber)
        replyResolver.resolveWithError(packet)
        offset += length
      } else if (type === 1) {
        const replySequenceNumber = header[2] | (header[3] << 8)
        const length = 32 + 4 * (header[4] | (header[5] << 8) | (header[6] << 16) | (header[7] << 24))
        // check if we have enough bytes remaining to construct the reply
        if (length > (bytesRemaining - offset)) {
          this.receiveBuffer.push(new Uint8Array(messages.buffer, messages.byteOffset + offset, bytesRemaining - offset))
          return
        }
        this.resolvePreviousReplyResolvers(replySequenceNumber)
        const replyResolver = this.findReplyResolver(replySequenceNumber)
        const packet = new Uint8Array(messages.buffer, messages.byteOffset + offset, length)
        replyResolver.resolve(packet)
        offset += length
      } else {
        // Event
        if (offset === 0) {
          this.onPreEventLoop?.()
        }
        const length = 32
        const packet = new Uint8Array(messages.buffer, messages.byteOffset + offset, length)
        eventPromises.push(this.onEvent(packet))
        offset += length
      }
    }
    Promise.all(eventPromises).then(() => this.onPostEventLoop?.())
  }

  private async onEvent(packet: Uint8Array) {
    if (this.receivedEvents.push(packet) > 1) {
      return
    }

    let nextEvent
    while ((nextEvent = this.receivedEvents[0]) !== undefined) {
      await events[nextEvent[0] & 0x7F](this, nextEvent)
      this.receivedEvents.shift()
    }
  }

  sendVoidRequest(requestParts: ArrayBuffer[], opcode: number, minorOpcode: number, requestName: string): RequestChecker {
    const requestBuffer = createRequestBuffer(requestParts)
    requestBuffer[0] = opcode
    if (minorOpcode) {
      requestBuffer[1] = minorOpcode
    }
    new Uint16Array(requestBuffer.buffer, requestBuffer.byteOffset)[1] = new Uint32Array(
      requestBuffer.buffer,
      requestBuffer.byteOffset
    ).length

    const voidRequestPromise = new Promise<void>((resolve, reject) => {
      this.replyResolvers.push({
        resolve,
        resolveWithError: this.resolveWithError(reject),
        requestName
      })

      this.requestSequenceNumber++
      this.sendBuffer.push(requestBuffer)
    })

    return {
      check: (): Promise<void> => {
        // fire a poor man 'sync' call to ensure the xserver has processed our previous actual call.
        // tslint:disable-next-line:no-floating-promises
        this.sendRequest<GetInputFocusReply>([new ArrayBuffer(4)], 43, unmarshallGetInputFocusReply, 0, 'GetInputFocus')
        return voidRequestPromise
      }
    }
  }

  sendRequest<T>(
    requestParts: ArrayBuffer[],
    opcode: number,
    replyUnmarshaller: Unmarshaller<T>,
    minorOpcode: number,
    requestName: string
  ): Promise<T> {
    const requestBuffer = createRequestBuffer(requestParts)
    requestBuffer[0] = opcode
    if (minorOpcode) {
      requestBuffer[1] = minorOpcode
    }
    new Uint16Array(requestBuffer.buffer, requestBuffer.byteOffset)[1] =
      new Uint32Array(
        requestBuffer.buffer,
        requestBuffer.byteOffset
      ).length

    const promise = new Promise<Uint8Array>((resolve, reject) => {
      this.replyResolvers.push({
        resolve,
        resolveWithError: this.resolveWithError(reject),
        requestName
      })
    }).then((rawReply) => replyUnmarshaller(rawReply.buffer, rawReply.byteOffset).value)

    this.requestSequenceNumber++
    this.sendBuffer.push(requestBuffer)
    this.flush()
    return promise
  }

  private findReplyResolver(replySequenceNumber: number): ReplyResolver {
    const requestNumberOffset = this.requestSequenceNumber - replySequenceNumber
    const replyResolverIndex = this.replyResolvers.length - requestNumberOffset - 1
    return this.replyResolvers[replyResolverIndex]
  }

  private resolvePreviousReplyResolvers(replySequenceNumber: number) {
    const requestNumberOffset = this.requestSequenceNumber - replySequenceNumber
    const replyResolverIndex = this.replyResolvers.length - requestNumberOffset - 1
    this.replyResolvers
      .splice(0, replyResolverIndex)
      .forEach((previousReplyResolver) => previousReplyResolver.resolve())
  }
}

function createRequestBuffer(requestParts: ArrayBuffer[]): Uint8Array {
  const requestSize = requestParts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.byteLength,
    0
  )
  return requestParts.reduce<{ buffer: Uint8Array; offset: number }>(
    ({ buffer, offset }, currentValue) => {
      buffer.set(new Uint8Array(currentValue), offset)
      return { buffer, offset: offset + currentValue.byteLength }
    },
    { buffer: new Uint8Array(requestSize), offset: 0 }
  ).buffer
}

export interface SetupConnection {
  (): Promise<{ setup: Setup, xConnectionSocket: XConnectionSocket }>
}

export async function connect(setupConnection: SetupConnection): Promise<XConnection> {
  const { setup, xConnectionSocket } = await setupConnection()
  return new XConnection(xConnectionSocket, setup)
}
