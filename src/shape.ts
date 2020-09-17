//
// This file generated automatically from shape.xml by ts_client.py.
// Edit at your peril.
//

const _global = (window /* browser */ || global /* node */) as any
import { XConnection } from './connection'
import type { Unmarshaller, EventHandler, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import { xcbSimpleList, xcbComplexList, typePad, notUndefined, events, errors } from './xjsbInternals'
import { unpackFrom, pack } from './struct'

import * as xproto from './xproto'

const MAJOR_VERSION = 1
const MINOR_VERSION = 1


declare global {
  export enum SO {
    Set = 0,
    Union = 1,
    Intersect = 2,
    Subtract = 3,
    Invert = 4,
  }
}

declare global {
  export enum SK {
    Bounding = 0,
    Clip = 1,
    Input = 2,
  }
}

export type NotifyEvent = {
  shapeKind: SK
  affectedWindow: WINDOW
  extentsX: number
  extentsY: number
  extentsWidth: number
  extentsHeight: number
  serverTime: TIMESTAMP
  shaped: number
}

declare global {
  let unmarshallNotifyEvent: Unmarshaller<NotifyEvent>
}
const _unmarshallNotifyEvent: Unmarshaller<NotifyEvent> = (buffer, offset=0) => {
  const [ shapeKind, affectedWindow, extentsX, extentsY, extentsWidth, extentsHeight, serverTime, shaped ] = unpackFrom('<xB2xIhhHHIB11x', buffer, offset)
  offset += 32

  return {
    value: {
      shapeKind,
      affectedWindow,
      extentsX,
      extentsY,
      extentsWidth,
      extentsHeight,
      serverTime,
      shaped,
    },
    offset
  }
}
_global.unmarshallNotifyEvent = _unmarshallNotifyEvent
export interface NotifyEventHandler extends EventHandler<NotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onNotifyEvent?: NotifyEventHandler
  }
}


export type QueryVersionCookie = Promise<QueryVersion>

export type QueryVersion = {
  majorVersion: number
  minorVersion: number
}

declare global {
  let unmarshallQueryVersion: Unmarshaller<QueryVersion>
}
const _unmarshallQueryVersion: Unmarshaller<QueryVersion> = (buffer, offset=0) => {
  const [ majorVersion, minorVersion ] = unpackFrom('<xx2x4xHH', buffer, offset)
  offset += 12

  return {
    value: {
      majorVersion,
      minorVersion,
    },
    offset
  }
}
_global.unmarshallQueryVersion = _unmarshallQueryVersion

export type QueryExtentsCookie = Promise<QueryExtents>

export type QueryExtents = {
  boundingShaped: number
  clipShaped: number
  boundingShapeExtentsX: number
  boundingShapeExtentsY: number
  boundingShapeExtentsWidth: number
  boundingShapeExtentsHeight: number
  clipShapeExtentsX: number
  clipShapeExtentsY: number
  clipShapeExtentsWidth: number
  clipShapeExtentsHeight: number
}

declare global {
  let unmarshallQueryExtents: Unmarshaller<QueryExtents>
}
const _unmarshallQueryExtents: Unmarshaller<QueryExtents> = (buffer, offset=0) => {
  const [ boundingShaped, clipShaped, boundingShapeExtentsX, boundingShapeExtentsY, boundingShapeExtentsWidth, boundingShapeExtentsHeight, clipShapeExtentsX, clipShapeExtentsY, clipShapeExtentsWidth, clipShapeExtentsHeight ] = unpackFrom('<xx2x4xBB2xhhHHhhHH', buffer, offset)
  offset += 28

  return {
    value: {
      boundingShaped,
      clipShaped,
      boundingShapeExtentsX,
      boundingShapeExtentsY,
      boundingShapeExtentsWidth,
      boundingShapeExtentsHeight,
      clipShapeExtentsX,
      clipShapeExtentsY,
      clipShapeExtentsWidth,
      clipShapeExtentsHeight,
    },
    offset
  }
}
_global.unmarshallQueryExtents = _unmarshallQueryExtents

export type InputSelectedCookie = Promise<InputSelected>

export type InputSelected = {
  enabled: number
}

declare global {
  let unmarshallInputSelected: Unmarshaller<InputSelected>
}
const _unmarshallInputSelected: Unmarshaller<InputSelected> = (buffer, offset=0) => {
  const [ enabled ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      enabled,
    },
    offset
  }
}
_global.unmarshallInputSelected = _unmarshallInputSelected

export type GetRectanglesCookie = Promise<GetRectangles>

export type GetRectangles = {
  ordering: ClipOrdering
  rectanglesLen: number
  rectangles: RECTANGLE[]
}

declare global {
  let unmarshallGetRectangles: Unmarshaller<GetRectangles>
}
const _unmarshallGetRectangles: Unmarshaller<GetRectangles> = (buffer, offset=0) => {
  const [ ordering, rectanglesLen ] = unpackFrom('<xB2x4xI20x', buffer, offset)
  offset += 32
  const rectanglesWithOffset = xcbComplexList(buffer, offset, rectanglesLen, unmarshallRECTANGLE)
  offset = rectanglesWithOffset.offset
  const rectangles = rectanglesWithOffset.value

  return {
    value: {
      ordering,
      rectanglesLen,
      rectangles,
    },
    offset
  }
}
_global.unmarshallGetRectangles = _unmarshallGetRectangles


declare global {
  export type OP = number
}


declare global {
  export type KIND = number
}


declare module './connection' {
  interface XConnection {
    queryVersion (): QueryVersionCookie
  }
}

XConnection.prototype.queryVersion = function(): QueryVersionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<QueryVersion>(requestParts, 0, unmarshallQueryVersion)
}


declare module './connection' {
  interface XConnection {
    rectangles (operation: SO, destinationKind: SK, ordering: ClipOrdering, destinationWindow: WINDOW, xOffset: number, yOffset: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.rectangles = function(operation: SO, destinationKind: SK, ordering: ClipOrdering, destinationWindow: WINDOW, xOffset: number, yOffset: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBBBxIhh', operation, destinationKind, ordering, destinationWindow, xOffset, yOffset))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 1)
}


declare module './connection' {
  interface XConnection {
    mask (operation: SO, destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceBitmap: PIXMAP): RequestChecker
  }
}

XConnection.prototype.mask = function(operation: SO, destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceBitmap: PIXMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBB2xIhhI', operation, destinationKind, destinationWindow, xOffset, yOffset, sourceBitmap))

  return this.sendVoidRequest(requestParts, 2)
}


declare module './connection' {
  interface XConnection {
    combine (operation: SO, destinationKind: SK, sourceKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceWindow: WINDOW): RequestChecker
  }
}

XConnection.prototype.combine = function(operation: SO, destinationKind: SK, sourceKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceWindow: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBBBxIhhI', operation, destinationKind, sourceKind, destinationWindow, xOffset, yOffset, sourceWindow))

  return this.sendVoidRequest(requestParts, 3)
}


declare module './connection' {
  interface XConnection {
    offset (destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number): RequestChecker
  }
}

XConnection.prototype.offset = function(destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIhh', destinationKind, destinationWindow, xOffset, yOffset))

  return this.sendVoidRequest(requestParts, 4)
}


declare module './connection' {
  interface XConnection {
    queryExtents (destinationWindow: WINDOW): QueryExtentsCookie
  }
}

XConnection.prototype.queryExtents = function(destinationWindow: WINDOW): QueryExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', destinationWindow))

  return this.sendRequest<QueryExtents>(requestParts, 5, unmarshallQueryExtents)
}


declare module './connection' {
  interface XConnection {
    selectInput (destinationWindow: WINDOW, enable: number): RequestChecker
  }
}

XConnection.prototype.selectInput = function(destinationWindow: WINDOW, enable: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', destinationWindow, enable))

  return this.sendVoidRequest(requestParts, 6)
}


declare module './connection' {
  interface XConnection {
    inputSelected (destinationWindow: WINDOW): InputSelectedCookie
  }
}

XConnection.prototype.inputSelected = function(destinationWindow: WINDOW): InputSelectedCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', destinationWindow))

  return this.sendRequest<InputSelected>(requestParts, 7, unmarshallInputSelected)
}


declare module './connection' {
  interface XConnection {
    getRectangles (window: WINDOW, sourceKind: SK): GetRectanglesCookie
  }
}

XConnection.prototype.getRectangles = function(window: WINDOW, sourceKind: SK): GetRectanglesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', window, sourceKind))

  return this.sendRequest<GetRectangles>(requestParts, 8, unmarshallGetRectangles)
}

events[0] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onNotifyEvent?.(event)
}
