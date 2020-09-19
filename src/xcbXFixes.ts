import {WINDOW, ATOM, CURSOR, unmarshallRECTANGLE, RECTANGLE, PIXMAP, GCONTEXT, TIMESTAMP} from './xcb'
import {KIND, SK} from './xcbShape'
import {PICTURE} from './xcbRender'
//
// This file generated automatically from xfixes.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection } from './connection'
import Protocol from './Protocol'
import type { Unmarshaller, EventHandler, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import { xcbSimpleList, xcbComplexList, typePad, notUndefined, events, errors } from './xjsbInternals'
import { unpackFrom, pack } from './struct'


export class XFixes extends Protocol {
 static MAJOR_VERSION = 5
 static MINOR_VERSION = 0
}


export type QueryVersionCookie = Promise<QueryVersionReply>

export type QueryVersionReply = {
  majorVersion: number
  minorVersion: number
}

export const unmarshallQueryVersionReply: Unmarshaller<QueryVersionReply> = (buffer, offset=0) => {
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

export enum SaveSetMode {
  Insert= 0,
  Delete= 1,
}

export enum SaveSetTarget {
  Nearest= 0,
  Root= 1,
}

export enum SaveSetMapping {
  Map= 0,
  Unmap= 1,
}

export enum SelectionEvent {
  SetSelectionOwner= 0,
  SelectionWindowDestroy= 1,
  SelectionClientClose= 2,
}

export enum SelectionEventMask {
  SetSelectionOwner= 1,
  SelectionWindowDestroy= 2,
  SelectionClientClose= 4,
}

export type SelectionNotifyEvent = {
  subtype: SelectionEvent
  window: WINDOW
  owner: WINDOW
  selection: ATOM
  timestamp: TIMESTAMP
  selectionTimestamp: TIMESTAMP
}

export const unmarshallSelectionNotifyEvent: Unmarshaller<SelectionNotifyEvent> = (buffer, offset=0) => {
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
export interface SelectionNotifyEventHandler extends EventHandler<SelectionNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onXFixesSelectionNotifyEvent?: SelectionNotifyEventHandler
  }
}


export enum CursorNotify {
  DisplayCursor= 0,
}

export enum CursorNotifyMask {
  DisplayCursor= 1,
}

export type CursorNotifyEvent = {
  subtype: CursorNotify
  window: WINDOW
  cursorSerial: number
  timestamp: TIMESTAMP
  name: ATOM
}

export const unmarshallCursorNotifyEvent: Unmarshaller<CursorNotifyEvent> = (buffer, offset=0) => {
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
export interface CursorNotifyEventHandler extends EventHandler<CursorNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onXFixesCursorNotifyEvent?: CursorNotifyEventHandler
  }
}


export type GetCursorImageCookie = Promise<GetCursorImageReply>

export type GetCursorImageReply = {
  x: number
  y: number
  width: number
  height: number
  xhot: number
  yhot: number
  cursorSerial: number
  cursorImage: Uint32Array
}

export const unmarshallGetCursorImageReply: Unmarshaller<GetCursorImageReply> = (buffer, offset=0) => {
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

export type RegionError = {
}

export const unmarshallBadRegionError: Unmarshaller<RegionError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}

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

export enum Region {
  None= 0,
}

export type FetchRegionCookie = Promise<FetchRegionReply>

export type FetchRegionReply = {
  extents: RECTANGLE
  rectangles: RECTANGLE[]
}

export const unmarshallFetchRegionReply: Unmarshaller<FetchRegionReply> = (buffer, offset=0) => {
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

export type GetCursorNameCookie = Promise<GetCursorNameReply>

export type GetCursorNameReply = {
  atom: ATOM
  nbytes: number
  name: Int8Array
}

export const unmarshallGetCursorNameReply: Unmarshaller<GetCursorNameReply> = (buffer, offset=0) => {
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

export type GetCursorImageAndNameCookie = Promise<GetCursorImageAndNameReply>

export type GetCursorImageAndNameReply = {
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

export const unmarshallGetCursorImageAndNameReply: Unmarshaller<GetCursorImageAndNameReply> = (buffer, offset=0) => {
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

export enum BarrierDirections {
  PositiveX= 1,
  PositiveY= 2,
  NegativeX= 4,
  NegativeY= 8,
}


declare module './xcbXFixes' {
  interface XFixes {
    queryVersion (clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie
  }
}

XFixes.prototype.queryVersion = function(clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', clientMajorVersion, clientMinorVersion))

  return this.xConnection.sendRequest<QueryVersionReply>(requestParts, 0, unmarshallQueryVersionReply)
}


declare module './xcbXFixes' {
  interface XFixes {
    changeSaveSet (mode: SaveSetMode, target: SaveSetTarget, map: SaveSetMapping, window: WINDOW): RequestChecker
  }
}

XFixes.prototype.changeSaveSet = function(mode: SaveSetMode, target: SaveSetTarget, map: SaveSetMapping, window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBBBxI', mode, target, map, window))

  return this.xConnection.sendVoidRequest(requestParts, 1)
}


declare module './xcbXFixes' {
  interface XFixes {
    selectSelectionInput (window: WINDOW, selection: ATOM, eventMask: number): RequestChecker
  }
}

XFixes.prototype.selectSelectionInput = function(window: WINDOW, selection: ATOM, eventMask: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', window, selection, eventMask))

  return this.xConnection.sendVoidRequest(requestParts, 2)
}


declare module './xcbXFixes' {
  interface XFixes {
    selectCursorInput (window: WINDOW, eventMask: number): RequestChecker
  }
}

XFixes.prototype.selectCursorInput = function(window: WINDOW, eventMask: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', window, eventMask))

  return this.xConnection.sendVoidRequest(requestParts, 3)
}


declare module './xcbXFixes' {
  interface XFixes {
    getCursorImage (): GetCursorImageCookie
  }
}

XFixes.prototype.getCursorImage = function(): GetCursorImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.xConnection.sendRequest<GetCursorImageReply>(requestParts, 4, unmarshallGetCursorImageReply)
}


export type REGION = number


declare module './xcbXFixes' {
  interface XFixes {
    createRegion (region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XFixes.prototype.createRegion = function(region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.xConnection.sendVoidRequest(requestParts, 5)
}


declare module './xcbXFixes' {
  interface XFixes {
    createRegionFromBitmap (region: REGION, bitmap: PIXMAP): RequestChecker
  }
}

XFixes.prototype.createRegionFromBitmap = function(region: REGION, bitmap: PIXMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, bitmap))

  return this.xConnection.sendVoidRequest(requestParts, 6)
}


declare module './xcbXFixes' {
  interface XFixes {
    createRegionFromWindow (region: REGION, window: WINDOW, kind: SK): RequestChecker
  }
}

XFixes.prototype.createRegionFromWindow = function(region: REGION, window: WINDOW, kind: SK): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIB3x', region, window, kind))

  return this.xConnection.sendVoidRequest(requestParts, 7)
}


declare module './xcbXFixes' {
  interface XFixes {
    createRegionFromGC (region: REGION, gc: GCONTEXT): RequestChecker
  }
}

XFixes.prototype.createRegionFromGC = function(region: REGION, gc: GCONTEXT): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, gc))

  return this.xConnection.sendVoidRequest(requestParts, 8)
}


declare module './xcbXFixes' {
  interface XFixes {
    createRegionFromPicture (region: REGION, picture: PICTURE): RequestChecker
  }
}

XFixes.prototype.createRegionFromPicture = function(region: REGION, picture: PICTURE): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, picture))

  return this.xConnection.sendVoidRequest(requestParts, 9)
}


declare module './xcbXFixes' {
  interface XFixes {
    destroyRegion (region: REGION): RequestChecker
  }
}

XFixes.prototype.destroyRegion = function(region: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))

  return this.xConnection.sendVoidRequest(requestParts, 10)
}


declare module './xcbXFixes' {
  interface XFixes {
    setRegion (region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XFixes.prototype.setRegion = function(region: REGION, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.xConnection.sendVoidRequest(requestParts, 11)
}


declare module './xcbXFixes' {
  interface XFixes {
    copyRegion (source: REGION, destination: REGION): RequestChecker
  }
}

XFixes.prototype.copyRegion = function(source: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', source, destination))

  return this.xConnection.sendVoidRequest(requestParts, 12)
}


declare module './xcbXFixes' {
  interface XFixes {
    unionRegion (source1: REGION, source2: REGION, destination: REGION): RequestChecker
  }
}

XFixes.prototype.unionRegion = function(source1: REGION, source2: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', source1, source2, destination))

  return this.xConnection.sendVoidRequest(requestParts, 13)
}


declare module './xcbXFixes' {
  interface XFixes {
    intersectRegion (source1: REGION, source2: REGION, destination: REGION): RequestChecker
  }
}

XFixes.prototype.intersectRegion = function(source1: REGION, source2: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', source1, source2, destination))

  return this.xConnection.sendVoidRequest(requestParts, 14)
}


declare module './xcbXFixes' {
  interface XFixes {
    subtractRegion (source1: REGION, source2: REGION, destination: REGION): RequestChecker
  }
}

XFixes.prototype.subtractRegion = function(source1: REGION, source2: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', source1, source2, destination))

  return this.xConnection.sendVoidRequest(requestParts, 15)
}


declare module './xcbXFixes' {
  interface XFixes {
    invertRegion (source: REGION, bounds: RECTANGLE, destination: REGION): RequestChecker
  }
}

XFixes.prototype.invertRegion = function(source: REGION, bounds: RECTANGLE, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', source))
  new Error('FIXME support sending this type: RECTANGLE ')
  requestParts.push(pack('<I', destination))

  return this.xConnection.sendVoidRequest(requestParts, 16)
}


declare module './xcbXFixes' {
  interface XFixes {
    translateRegion (region: REGION, dx: number, dy: number): RequestChecker
  }
}

XFixes.prototype.translateRegion = function(region: REGION, dx: number, dy: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIhh', region, dx, dy))

  return this.xConnection.sendVoidRequest(requestParts, 17)
}


declare module './xcbXFixes' {
  interface XFixes {
    regionExtents (source: REGION, destination: REGION): RequestChecker
  }
}

XFixes.prototype.regionExtents = function(source: REGION, destination: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', source, destination))

  return this.xConnection.sendVoidRequest(requestParts, 18)
}


declare module './xcbXFixes' {
  interface XFixes {
    fetchRegion (region: REGION): FetchRegionCookie
  }
}

XFixes.prototype.fetchRegion = function(region: REGION): FetchRegionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', region))

  return this.xConnection.sendRequest<FetchRegionReply>(requestParts, 19, unmarshallFetchRegionReply)
}


declare module './xcbXFixes' {
  interface XFixes {
    setGCClipRegion (gc: GCONTEXT, region: REGION, xOrigin: number, yOrigin: number): RequestChecker
  }
}

XFixes.prototype.setGCClipRegion = function(gc: GCONTEXT, region: REGION, xOrigin: number, yOrigin: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', gc, region, xOrigin, yOrigin))

  return this.xConnection.sendVoidRequest(requestParts, 20)
}


declare module './xcbXFixes' {
  interface XFixes {
    setWindowShapeRegion (dest: WINDOW, destKind: SK, xOffset: number, yOffset: number, region: REGION): RequestChecker
  }
}

XFixes.prototype.setWindowShapeRegion = function(dest: WINDOW, destKind: SK, xOffset: number, yOffset: number, region: REGION): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3xhhI', dest, destKind, xOffset, yOffset, region))

  return this.xConnection.sendVoidRequest(requestParts, 21)
}


declare module './xcbXFixes' {
  interface XFixes {
    setPictureClipRegion (picture: PICTURE, region: REGION, xOrigin: number, yOrigin: number): RequestChecker
  }
}

XFixes.prototype.setPictureClipRegion = function(picture: PICTURE, region: REGION, xOrigin: number, yOrigin: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', picture, region, xOrigin, yOrigin))

  return this.xConnection.sendVoidRequest(requestParts, 22)
}


declare module './xcbXFixes' {
  interface XFixes {
    setCursorName (cursor: CURSOR, name: Int8Array): RequestChecker
  }
}

XFixes.prototype.setCursorName = function(cursor: CURSOR, name: Int8Array): RequestChecker {
  const nbytes = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', cursor, nbytes))
  requestParts.push(name.buffer)

  return this.xConnection.sendVoidRequest(requestParts, 23)
}


declare module './xcbXFixes' {
  interface XFixes {
    getCursorName (cursor: CURSOR): GetCursorNameCookie
  }
}

XFixes.prototype.getCursorName = function(cursor: CURSOR): GetCursorNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cursor))

  return this.xConnection.sendRequest<GetCursorNameReply>(requestParts, 24, unmarshallGetCursorNameReply)
}


declare module './xcbXFixes' {
  interface XFixes {
    getCursorImageAndName (): GetCursorImageAndNameCookie
  }
}

XFixes.prototype.getCursorImageAndName = function(): GetCursorImageAndNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.xConnection.sendRequest<GetCursorImageAndNameReply>(requestParts, 25, unmarshallGetCursorImageAndNameReply)
}


declare module './xcbXFixes' {
  interface XFixes {
    changeCursor (source: CURSOR, destination: CURSOR): RequestChecker
  }
}

XFixes.prototype.changeCursor = function(source: CURSOR, destination: CURSOR): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', source, destination))

  return this.xConnection.sendVoidRequest(requestParts, 26)
}


declare module './xcbXFixes' {
  interface XFixes {
    changeCursorByName (src: CURSOR, name: Int8Array): RequestChecker
  }
}

XFixes.prototype.changeCursorByName = function(src: CURSOR, name: Int8Array): RequestChecker {
  const nbytes = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', src, nbytes))
  requestParts.push(name.buffer)

  return this.xConnection.sendVoidRequest(requestParts, 27)
}


declare module './xcbXFixes' {
  interface XFixes {
    expandRegion (source: REGION, destination: REGION, left: number, right: number, top: number, bottom: number): RequestChecker
  }
}

XFixes.prototype.expandRegion = function(source: REGION, destination: REGION, left: number, right: number, top: number, bottom: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIHHHH', source, destination, left, right, top, bottom))

  return this.xConnection.sendVoidRequest(requestParts, 28)
}


declare module './xcbXFixes' {
  interface XFixes {
    hideCursor (window: WINDOW): RequestChecker
  }
}

XFixes.prototype.hideCursor = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.xConnection.sendVoidRequest(requestParts, 29)
}


declare module './xcbXFixes' {
  interface XFixes {
    showCursor (window: WINDOW): RequestChecker
  }
}

XFixes.prototype.showCursor = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.xConnection.sendVoidRequest(requestParts, 30)
}


export type BARRIER = number


declare module './xcbXFixes' {
  interface XFixes {
    createPointerBarrier (barrier: BARRIER, window: WINDOW, x1: number, y1: number, x2: number, y2: number, directions: number, devices: Uint16Array): RequestChecker
  }
}

XFixes.prototype.createPointerBarrier = function(barrier: BARRIER, window: WINDOW, x1: number, y1: number, x2: number, y2: number, directions: number, devices: Uint16Array): RequestChecker {
  const numDevices = devices.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIHHHHI2xH', barrier, window, x1, y1, x2, y2, directions, numDevices))
  requestParts.push(devices.buffer)

  return this.xConnection.sendVoidRequest(requestParts, 31)
}


declare module './xcbXFixes' {
  interface XFixes {
    deletePointerBarrier (barrier: BARRIER): RequestChecker
  }
}

XFixes.prototype.deletePointerBarrier = function(barrier: BARRIER): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', barrier))

  return this.xConnection.sendVoidRequest(requestParts, 32)
}

events[0] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallSelectionNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onXFixesSelectionNotifyEvent?.(event)
}
events[1] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallCursorNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onXFixesCursorNotifyEvent?.(event)
}
errors[0] = [unmarshallBadRegionError, BadRegion]
