import TypedArray = NodeJS.TypedArray
import * as net from 'net'

export interface XExtension {
  events: { [key: string]: any }
  errors: { [key: string]: any }
}

export type UnmarshallResult<T> = {
  value: T,
  offset: number
}

export interface Unmarshaller<T> {
  (buffer: ArrayBuffer, offset: number): UnmarshallResult<T>
}

export function xcbComplexList<T>(buffer: ArrayBuffer, offset: number, listLength: number, unmarshall: Unmarshaller<T>): UnmarshallResult<T[]> {
  const value: T[] = []
  for (let i = 0; i < listLength; i++) {
    const valueWithOffset = unmarshall(buffer, offset)
    offset = valueWithOffset.offset
    value.push(valueWithOffset.value)
  }
  return { value, offset }
}

export function xcbSimpleList<T extends TypedArray>(buffer: ArrayBuffer, offset: number, listLength: number, typedArrayConstructor: new (buffer: ArrayBuffer, offset: number, listLength: number) => T, primitiveLength: number): UnmarshallResult<T> {
  offset += (listLength * primitiveLength)
  const value = new typedArrayConstructor(buffer, offset, listLength)
  return { value, offset }
}

export function typePad(alignSize: number, offset: number): number {
  return -offset & (alignSize > 4 ? 3 : alignSize - 1)
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

export function sendRequest<T>(socket: net.Socket, requestParts: ArrayBuffer[], opcode: number, isVoidReply: boolean, isChecked: boolean, replyUnmarshaller?: Unmarshaller<T>): Promise<T> {
  const requestBuffer = createRequestBuffer(requestParts)
  return new Promise<T>(resolve => {
    socket.write(new Uint8Array(requestBuffer))
    // TODO
  })
}
