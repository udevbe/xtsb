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
}

Int8Array.prototype.chars = function() {
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
}

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
  readonly socket: XConnectionSocket
  readonly setup: Setup

  private readonly unusedIds: number[] = []
  private nextResourceId: number
  private readonly resourceIdShift: number

  private requestSequenceNumber: number = 0
  private readonly replyResolvers: ReplyResolver[] = []

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

    while (data.byteOffset + offset < data.byteLength) {
      const packet = new Uint8Array(data.buffer, data.byteOffset + offset)

      const type = packet[0]
      if (type === 0) {
        const replySequenceNumber = packet[2] | (packet[3] << 8)
        this.resolvePreviousReplyResolvers(replySequenceNumber)
        const replyResolver = this.findReplyResolver(replySequenceNumber)
        replyResolver.resolveWithError(packet)
        offset += 32
      } else if (type === 1) {
        const replySequenceNumber = packet[2] | (packet[3] << 8)
        const length =
          32 + 4 * (packet[4] | (packet[5] << 8) | (packet[6] << 16) | (packet[7] << 24))
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
    new Uint16Array(requestBuffer.buffer, requestBuffer.byteOffset)[1] = new Uint32Array(
      requestBuffer.buffer,
      requestBuffer.byteOffset
    ).length

    const voidRequestPromise = new Promise<void>((resolve, reject) => {
      this.replyResolvers.push({ resolve, resolveWithError: resolveWithError(reject) })

      this.requestSequenceNumber++
      this.socket.write(requestBuffer)
    })

    // TODO return a requestChecker object that can fire an explicit noop request (a 'sync') to check if the request was processed with or without error.
    return {
      check: (): Promise<void> => {
        // fire a poor man 'sync' call to ensure the xserver has processed our previous actual call.
        // tslint:disable-next-line:no-floating-promises
        this.sendRequest<GetInputFocusReply>([new ArrayBuffer(4)], 43, unmarshallGetInputFocusReply)
        return voidRequestPromise
      }
    }
  }

  sendRequest<T>(
    requestParts: ArrayBuffer[],
    opcode: number,
    replyUnmarshaller: Unmarshaller<T>
  ): Promise<T> {
    const requestBuffer = createRequestBuffer(requestParts)
    requestBuffer[0] = opcode
    new Uint16Array(requestBuffer.buffer, requestBuffer.byteOffset)[1] =
      new Uint32Array(
        requestBuffer.buffer,
        requestBuffer.byteOffset
      ).length

    const promise = new Promise<Uint8Array>((resolve, reject) => {
      this.replyResolvers.push({ resolve, resolveWithError: resolveWithError(reject) })
    }).then((rawReply) => replyUnmarshaller(rawReply.buffer, rawReply.byteOffset).value)

    this.requestSequenceNumber++
    this.socket.write(requestBuffer)
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
