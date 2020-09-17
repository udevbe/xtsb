//
// This file generated automatically from xfixes.xml by ts_client.py.
// Edit at your peril.
//

const _global = (window /* browser */ || global /* node */) as any
import { XConnection } from './connection'
import type { Unmarshaller, EventHandler, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import { xcbSimpleList, xcbComplexList, typePad, notUndefined, events, errors } from './xjsbInternals'
import { unpackFrom, pack } from './struct'

import * as xproto from './xproto'
import * as render from './render'
import * as shape from './shape'

const MAJOR_VERSION = 5
const MINOR_VERSION = 0


export type QueryVersionCookie = Promise<QueryVersion>

export type QueryVersion = {
  majorVersion: number
  minorVersion: number
}

declare global {
  let unmarshallQueryVersion: Unmarshaller<QueryVersion>
}
const _unmarshallQueryVersion: Unmarshaller<QueryVersion> = (buffer, offset=0) => {
  const [ majorVersion, minorVersion ] = unpackFrom('<xx2x4xII16x', buffer, offset)
  offset += 32

  return {
    value: {
      majorVersion,
      minorVersion,
    },
    offset
  }
}
_global.unmarshallQueryVersion = _unmarshallQueryVersion

declare global {
  export enum SaveSetMode {
    Insert = 0,
    Delete = 1,
  }
}

declare global {
  export enum SaveSetTarget {
    Nearest = 0,
    Root = 1,
  }
}

declare global {
  export enum SaveSetMapping {
    Map = 0,
    Unmap = 1,
  }
}

declare global {
  export enum SelectionEvent {
    SetSelectionOwner = 0,
    SelectionWindowDestroy = 1,
    SelectionClientClose = 2,
  }
}

declare global {
  export enum SelectionEventMask {
    SetSelectionOwner = 1,
    SelectionWindowDestroy = 2,
    SelectionClientClose = 4,
  }
}

export type SelectionNotifyEvent = {
  subtype: SelectionEvent
  window: WINDOW
  owner: WINDOW
  selection: ATOM
  timestamp: TIMESTAMP
  selectionTimestamp: TIMESTAMP
}

declare global {
  let unmarshallSelectionNotifyEvent: Unmarshaller<SelectionNotifyEvent>
}
const _unmarshallSelectionNotifyEvent: Unmarshaller<SelectionNotifyEvent> = (buffer, offset=0) => {
  const [ subtype, window, owner, selection, timestamp, selectionTimestamp ] = unpackFrom('<xB2xIIIII8x', buffer, offset)
  offset += 32

  return {
    value: {
      subtype,
      window,
      owner,
      selection,
      timestamp,
      selectionTimestamp,
    },
    offset
  }
}
_global.unmarshallSelectionNotifyEvent = _unmarshallSelectionNotifyEvent
export interface SelectionNotifyEventHandler extends EventHandler<SelectionNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onSelectionNotifyEvent?: SelectionNotifyEventHandler
  }
}


declare global {
  export enum CursorNotify {
    DisplayCursor = 0,
  }
}

declare global {
  export enum CursorNotifyMask {
    DisplayCursor = 1,
  }
}

export type CursorNotifyEvent = {
  subtype: CursorNotify
  window: WINDOW
  cursorSerial: number
  timestamp: TIMESTAMP
  name: ATOM
}

declare global {
  let unmarshallCursorNotifyEvent: Unmarshaller<CursorNotifyEvent>
}
const _unmarshallCursorNotifyEvent: Unmarshaller<CursorNotifyEvent> = (buffer, offset=0) => {
  const [ subtype, window, cursorSerial, timestamp, name ] = unpackFrom('<xB2xIIII12x', buffer, offset)
  offset += 32

  return {
    value: {
      subtype,
      window,
      cursorSerial,
      timestamp,
      name,
    },
    offset
  }
}
_global.unmarshallCursorNotifyEvent = _unmarshallCursorNotifyEvent
export interface CursorNotifyEventHandler extends EventHandler<CursorNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onCursorNotifyEvent?: CursorNotifyEventHandler
  }
}


export type GetCursorImageCookie = Promise<GetCursorImage>

export type GetCursorImage = {
  x: number
  y: number
  width: number
  height: number
  xhot: number
  yhot: number
  cursorSerial: number
  cursorImage: Uint32Array
}

declare global {
  let unmarshallGetCursorImage: Unmarshaller<GetCursorImage>
}
const _unmarshallGetCursorImage: Unmarshaller<GetCursorImage> = (buffer, offset=0) => {
  const [ x, y, width, height, xhot, yhot, cursorSerial ] = unpackFrom('<xx2x4xhhHHHHI8x', buffer, offset)
  offset += 32
  const cursorImageWithOffset = xcbSimpleList(buffer, offset, (width * height), Uint32Array, 4)
  offset = cursorImageWithOffset.offset
  const cursorImage = cursorImageWithOffset.value

  return {
    value: {
      x,
      y,
      width,
      height,
      xhot,
      yhot,
      cursorSerial,
      cursorImage,
    },
    offset
  }
}
_global.unmarshallGetCursorImage = _unmarshallGetCursorImage

export type RegionError = {
}

declare global {
  let unmarshallBadRegionError: Unmarshaller<BadRegionError>
}
const _unmarshallBadRegionError: Unmarshaller<BadRegionError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
_global.unmarshallBadRegionError = _unmarshallBadRegionError

export class BadRegion extends Error {
  readonly xError: RegionError
  constructor (error: RegionError) {
    super()
    Object.setPrototypeOf(this, BadRegion.prototype)
    this.name = 'RegionError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

declare global {
  export enum Region {
    None = 0,
  }
}

export type FetchRegionCookie = Promise<FetchRegion>

export type FetchRegion = {
  extents: RECTANGLE
  rectangles: RECTANGLE[]
}

declare global {
  let unmarshallFetchRegion: Unmarshaller<FetchRegion>
}
const _unmarshallFetchRegion: Unmarshaller<FetchRegion> = (buffer, offset=0) => {
  const extentsWithOffset = unmarshallRECTANGLE(buffer, offset)
  const extents = extentsWithOffset.value
  offset = extentsWithOffset.offset
  offset += typePad(8, offset)
  const rectanglesWithOffset = xcbComplexList(buffer, offset, (length / 2), unmarshallRECTANGLE)
  offset = rectanglesWithOffset.offset
  const rectangles = rectanglesWithOffset.value

  return {
    value: {
      extents,
      rectangles,
    },
    offset
  }
}
_global.unmarshallFetchRegion = _unmarshallFetchRegion

export type GetCursorNameCookie = Promise<GetCursorName>

export type GetCursorName = {
  atom: ATOM
  nbytes: number
  name: Int8Array
}

declare global {
  let unmarshallGetCursorName: Unmarshaller<GetCursorName>
}
const _unmarshallGetCursorName: Unmarshaller<GetCursorName> = (buffer, offset=0) => {
  const [ atom, nbytes ] = unpackFrom('<xx2x4xIH18x', buffer, offset)
  offset += 32
  const nameWithOffset = xcbSimpleList(buffer, offset, nbytes, Int8Array, 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      atom,
      nbytes,
      name,
    },
    offset
  }
}
_global.unmarshallGetCursorName = _unmarshallGetCursorName

export type GetCursorImageAndNameCookie = Promise<GetCursorImageAndName>

export type GetCursorImageAndName = {
  x: number
  y: number
  width: number
  height: number
  xhot: number
  yhot: number
  cursorSerial: number
  cursorAtom: ATOM
  nbytes: number
  cursorImage: Uint32Array
  name: Int8Array
}

declare global {
  let unmarshallGetCursorImageAndName: Unmarshaller<GetCursorImageAndName>
}
const _unmarshallGetCursorImageAndName: Unmarshaller<GetCursorImageAndName> = (buffer, offset=0) => {
  const [ x, y, width, height, xhot, yhot, cursorSerial, cursorAtom, nbytes ] = unpackFrom('<xx2x4xhhHHHHIIH2x', buffer, offset)
  offset += 32
  const cursorImageWithOffset = xcbSimpleList(buffer, offset, (width * height), Uint32Array, 4)
  offset = cursorImageWithOffset.offset
  const cursorImage = cursorImageWithOffset.value
  offset += typePad(1, offset)
  const nameWithOffset = xcbSimpleList(buffer, offset, nbytes, Int8Array, 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      x,
      y,
      width,
      height,
      xhot,
      yhot,
      cursorSerial,
      cursorAtom,
      nbytes,
      cursorImage,
      name,
    },
    offset
  }
}
_global.unmarshallGetCursorImageAndName = _unmarshallGetCursorImageAndName

declare global {
  export enum BarrierDirections {
    PositiveX = 1,
    PositiveY = 2,
    NegativeX = 4,
    NegativeY = 8,
  }
}


declare module './connection' {
  interface XConnection {
    queryVersion (clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie
  }
}

XConnection.prototype.queryVersion = function(clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', clientMajorVersion, clientMinorVersion))

  return this.sendRequest<QueryVersion>(requestParts, 0, unmarshallQueryVersion)
}


declare module './connection' {
  interface XConnection {
    changeSaveSet (mode: SaveSetMode, target: SaveSetTarget, map: SaveSetMapping, window: WINDOW): RequestChecker
  }
}

XConnection.prototype.changeSaveSet = function(mode: SaveSetMode, target: SaveSetTarget, map: SaveSetMapping, window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBBBxI', mode, target, map, window))

  return this.sendVoidRequest(requestParts, 1)
}


declare module './connection' {
  interface XConnection {
    selectSelectionInput (window: WINDOW, selection: ATOM, eventMask: number): RequestChecker
  }
}

XConnection.prototype.selectSelectionInput = function(window: WINDOW, selection: ATOM, eventMask: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', window, selection, eventMask))

  return this.sendVoidRequest(requestParts, 2)
}


declare module './connection' {
  interface XConnection {
    selectCursorInput (window: WINDOW, eventMask: number): RequestChecker
  }
}

XConnection.prototype.selectCursorInput = function(window: WINDOW, eventMask: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', window, eventMask))

  return this.sendVoidRequest(requestParts, 3)
}


declare module './connection' {
  interface XConnection {
    getCursorImage (): GetCursorImageCookie
  }
}

XConnection.prototype.getCursorImage = function(): GetCursorImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetCursorImage>(requestParts, 4, unmarshallGetCursorImage)
}


declare global {
  export type REGION = number
}


declare module './connection' {
  interface XConnection {
    createRegion (region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.createRegion = function(region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 5)
}


declare module './connection' {
  interface XConnection {
    createRegionFromBitmap (region: REGION, bitmap: PIXMAP): RequestChecker
  }
}

XConnection.prototype.createRegionFromBitmap = function(region: REGION, bitmap: PIXMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, bitmap))

  return this.sendVoidRequest(requestParts, 6)
}


declare module './connection' {
  interface XConnection {
    createRegionFromWindow (region: REGION, window: WINDOW, kind: SK): RequestChecker
  }
}

XConnection.prototype.createRegionFromWindow = function(region: REGION, window: WINDOW, kind: SK): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIB3x', region, window, kind))

  return this.sendVoidRequest(requestParts, 7)
}


declare module './connection' {
  interface XConnection {
    createRegionFromGC (region: REGION, gc: GCONTEXT): RequestChecker
  }
}

XConnection.prototype.createRegionFromGC = function(region: REGION, gc: GCONTEXT): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, gc))

  return this.sendVoidRequest(requestParts, 8)
}


declare module './connection' {
  interface XConnection {
    createRegionFromPicture (region: REGION, picture: PICTURE): RequestChecker
  }
}

XConnection.prototype.createRegionFromPicture = function(region: REGION, picture: PICTURE): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, picture))

  return this.sendVoidRequest(requestParts, 9)
}


declare module './connection' {
  interface XConnection {
    destroyRegion (region: REGION): RequestChecker
  }
}

XConnection.prototype.destroyRegion = function(region: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))

  return this.sendVoidRequest(requestParts, 10)
}


declare module './connection' {
  interface XConnection {
    setRegion (region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.setRegion = function(region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 11)
}


declare module './connection' {
  interface XConnection {
    copyRegion (source: REGION, destination: REGION): RequestChecker
  }
}

XConnection.prototype.copyRegion = function(source: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', source, destination))

  return this.sendVoidRequest(requestParts, 12)
}


declare module './connection' {
  interface XConnection {
    unionRegion (source1: REGION, source2: REGION, destination: REGION): RequestChecker
  }
}

XConnection.prototype.unionRegion = function(source1: REGION, source2: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', source1, source2, destination))

  return this.sendVoidRequest(requestParts, 13)
}


declare module './connection' {
  interface XConnection {
    intersectRegion (source1: REGION, source2: REGION, destination: REGION): RequestChecker
  }
}

XConnection.prototype.intersectRegion = function(source1: REGION, source2: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', source1, source2, destination))

  return this.sendVoidRequest(requestParts, 14)
}


declare module './connection' {
  interface XConnection {
    subtractRegion (source1: REGION, source2: REGION, destination: REGION): RequestChecker
  }
}

XConnection.prototype.subtractRegion = function(source1: REGION, source2: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', source1, source2, destination))

  return this.sendVoidRequest(requestParts, 15)
}


declare module './connection' {
  interface XConnection {
    invertRegion (source: REGION, bounds: RECTANGLE, destination: REGION): RequestChecker
  }
}

XConnection.prototype.invertRegion = function(source: REGION, bounds: RECTANGLE, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', source))
  throw new Error('FIXME support sending this type: RECTANGLE ')
  requestParts.push(pack('<I', destination))

  return this.sendVoidRequest(requestParts, 16)
}


declare module './connection' {
  interface XConnection {
    translateRegion (region: REGION, dx: number, dy: number): RequestChecker
  }
}

XConnection.prototype.translateRegion = function(region: REGION, dx: number, dy: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIhh', region, dx, dy))

  return this.sendVoidRequest(requestParts, 17)
}


declare module './connection' {
  interface XConnection {
    regionExtents (source: REGION, destination: REGION): RequestChecker
  }
}

XConnection.prototype.regionExtents = function(source: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', source, destination))

  return this.sendVoidRequest(requestParts, 18)
}


declare module './connection' {
  interface XConnection {
    fetchRegion (region: REGION): FetchRegionCookie
  }
}

XConnection.prototype.fetchRegion = function(region: REGION): FetchRegionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))

  return this.sendRequest<FetchRegion>(requestParts, 19, unmarshallFetchRegion)
}


declare module './connection' {
  interface XConnection {
    setGCClipRegion (gc: GCONTEXT, region: REGION, xOrigin: number, yOrigin: number): RequestChecker
  }
}

XConnection.prototype.setGCClipRegion = function(gc: GCONTEXT, region: REGION, xOrigin: number, yOrigin: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', gc, region, xOrigin, yOrigin))

  return this.sendVoidRequest(requestParts, 20)
}


declare module './connection' {
  interface XConnection {
    setWindowShapeRegion (dest: WINDOW, destKind: SK, xOffset: number, yOffset: number, region: REGION): RequestChecker
  }
}

XConnection.prototype.setWindowShapeRegion = function(dest: WINDOW, destKind: SK, xOffset: number, yOffset: number, region: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3xhhI', dest, destKind, xOffset, yOffset, region))

  return this.sendVoidRequest(requestParts, 21)
}


declare module './connection' {
  interface XConnection {
    setPictureClipRegion (picture: PICTURE, region: REGION, xOrigin: number, yOrigin: number): RequestChecker
  }
}

XConnection.prototype.setPictureClipRegion = function(picture: PICTURE, region: REGION, xOrigin: number, yOrigin: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', picture, region, xOrigin, yOrigin))

  return this.sendVoidRequest(requestParts, 22)
}


declare module './connection' {
  interface XConnection {
    setCursorName (cursor: CURSOR, name: Int8Array): RequestChecker
  }
}

XConnection.prototype.setCursorName = function(cursor: CURSOR, name: Int8Array): RequestChecker {
  const nbytes = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', cursor, nbytes))
  requestParts.push(name.buffer)

  return this.sendVoidRequest(requestParts, 23)
}


declare module './connection' {
  interface XConnection {
    getCursorName (cursor: CURSOR): GetCursorNameCookie
  }
}

XConnection.prototype.getCursorName = function(cursor: CURSOR): GetCursorNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cursor))

  return this.sendRequest<GetCursorName>(requestParts, 24, unmarshallGetCursorName)
}


declare module './connection' {
  interface XConnection {
    getCursorImageAndName (): GetCursorImageAndNameCookie
  }
}

XConnection.prototype.getCursorImageAndName = function(): GetCursorImageAndNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetCursorImageAndName>(requestParts, 25, unmarshallGetCursorImageAndName)
}


declare module './connection' {
  interface XConnection {
    changeCursor (source: CURSOR, destination: CURSOR): RequestChecker
  }
}

XConnection.prototype.changeCursor = function(source: CURSOR, destination: CURSOR): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', source, destination))

  return this.sendVoidRequest(requestParts, 26)
}


declare module './connection' {
  interface XConnection {
    changeCursorByName (src: CURSOR, name: Int8Array): RequestChecker
  }
}

XConnection.prototype.changeCursorByName = function(src: CURSOR, name: Int8Array): RequestChecker {
  const nbytes = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', src, nbytes))
  requestParts.push(name.buffer)

  return this.sendVoidRequest(requestParts, 27)
}


declare module './connection' {
  interface XConnection {
    expandRegion (source: REGION, destination: REGION, left: number, right: number, top: number, bottom: number): RequestChecker
  }
}

XConnection.prototype.expandRegion = function(source: REGION, destination: REGION, left: number, right: number, top: number, bottom: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIHHHH', source, destination, left, right, top, bottom))

  return this.sendVoidRequest(requestParts, 28)
}


declare module './connection' {
  interface XConnection {
    hideCursor (window: WINDOW): RequestChecker
  }
}

XConnection.prototype.hideCursor = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 29)
}


declare module './connection' {
  interface XConnection {
    showCursor (window: WINDOW): RequestChecker
  }
}

XConnection.prototype.showCursor = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 30)
}


declare global {
  export type BARRIER = number
}


declare module './connection' {
  interface XConnection {
    createPointerBarrier (barrier: BARRIER, window: WINDOW, x1: number, y1: number, x2: number, y2: number, directions: number, devices: Uint16Array): RequestChecker
  }
}

XConnection.prototype.createPointerBarrier = function(barrier: BARRIER, window: WINDOW, x1: number, y1: number, x2: number, y2: number, directions: number, devices: Uint16Array): RequestChecker {
  const numDevices = devices.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIHHHHI2xH', barrier, window, x1, y1, x2, y2, directions, numDevices))
  requestParts.push(devices.buffer)

  return this.sendVoidRequest(requestParts, 31)
}


declare module './connection' {
  interface XConnection {
    deletePointerBarrier (barrier: BARRIER): RequestChecker
  }
}

XConnection.prototype.deletePointerBarrier = function(barrier: BARRIER): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', barrier))

  return this.sendVoidRequest(requestParts, 32)
}

events[0] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallSelectionNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onSelectionNotifyEvent?.(event)
}
events[1] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallCursorNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onCursorNotifyEvent?.(event)
}
errors[0] = [unmarshallRegionError, BadRegion]
