import TypedArray = NodeJS.TypedArray
import { XConnection } from './connection'

export type UnmarshallResult<T> = {
  value: T,
  offset: number
}

export interface Unmarshaller<T> {
  (buffer: ArrayBuffer, offset: number): UnmarshallResult<T>
}

export interface EventHandler<T> {
  (event: T): void
}

interface RawEventHandler {
  (xConnection: XConnection, rawEvent: Buffer): void
}

export const events: { [key: number]: RawEventHandler } = {}
export const errors: { [key: number]: [Unmarshaller<any>, new (errorBody: any) => Error] } = {}

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



export function notUndefined<T>(x: T | undefined): x is T {
  return x !== undefined
}
