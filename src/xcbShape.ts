import {WINDOW, unmarshallRECTANGLE, PIXMAP, RECTANGLE, ClipOrdering, TIMESTAMP} from './xcb'
//
// This file generated automatically from shape.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection, chars} from './connection'
import Protocol from './Protocol'
import type { Unmarshaller, EventHandler, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import { xcbComplexList, events} from './xjsbInternals'
import { unpackFrom, pack } from './struct'

export class Shape extends Protocol {
 static MAJOR_VERSION = 1
 static MINOR_VERSION = 1
}

const errorInits: ((firstError: number) => void)[] = []
const eventInits: ((firstEvent: number) => void)[] = []

let protocolExtension: Shape | undefined = undefined

export async function getShape(xConnection: XConnection): Promise<Shape> {
  if (protocolExtension) {
    return protocolExtension
  }
  const queryExtensionReply = await xConnection.queryExtension(chars('SHAPE'))
  if (queryExtensionReply.present === 0) {
    throw new Error('Shape extension not present.')
  }
  const { firstError, firstEvent, majorOpcode } = queryExtensionReply
  protocolExtension = new Shape(xConnection, majorOpcode)
  errorInits.forEach(init => init(firstError))
  eventInits.forEach(init => init(firstEvent))
  return protocolExtension
}


export enum SO {
  Set= 0,
  Union= 1,
  Intersect= 2,
  Subtract= 3,
  Invert= 4,
}

export enum SK {
  Bounding= 0,
  Clip= 1,
  Input= 2,
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

export const unmarshallNotifyEvent: Unmarshaller<NotifyEvent> = (buffer, offset=0) => {
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
export interface NotifyEventHandler extends EventHandler<NotifyEvent> {}

declare module './xcbShape' {
  interface Shape {
    onNotifyEvent?: NotifyEventHandler
  }
}


export type QueryVersionCookie = Promise<QueryVersionReply>

export type QueryVersionReply = {
  majorVersion: number
  minorVersion: number
}

export const unmarshallQueryVersionReply: Unmarshaller<QueryVersionReply> = (buffer, offset=0) => {
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

export type QueryExtentsCookie = Promise<QueryExtentsReply>

export type QueryExtentsReply = {
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

export const unmarshallQueryExtentsReply: Unmarshaller<QueryExtentsReply> = (buffer, offset=0) => {
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

export type InputSelectedCookie = Promise<InputSelectedReply>

export type InputSelectedReply = {
  enabled: number
}

export const unmarshallInputSelectedReply: Unmarshaller<InputSelectedReply> = (buffer, offset=0) => {
  const [ enabled ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      enabled,
    },
    offset
  }
}

export type GetRectanglesCookie = Promise<GetRectanglesReply>

export type GetRectanglesReply = {
  ordering: ClipOrdering
  rectanglesLen: number
  rectangles: RECTANGLE[]
}

export const unmarshallGetRectanglesReply: Unmarshaller<GetRectanglesReply> = (buffer, offset=0) => {
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


export type OP = number


export type KIND = number


declare module './xcbShape' {
  interface Shape {
    queryVersion (): QueryVersionCookie
  }
}

Shape.prototype.queryVersion = function(): QueryVersionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.xConnection.sendRequest<QueryVersionReply>(requestParts, 0, unmarshallQueryVersionReply)
}


declare module './xcbShape' {
  interface Shape {
    rectangles (operation: SO, destinationKind: SK, ordering: ClipOrdering, destinationWindow: WINDOW, xOffset: number, yOffset: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

Shape.prototype.rectangles = function(operation: SO, destinationKind: SK, ordering: ClipOrdering, destinationWindow: WINDOW, xOffset: number, yOffset: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBBBxIhh', operation, destinationKind, ordering, destinationWindow, xOffset, yOffset))
  rectangles.forEach(({  x,   y,   width,   height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.xConnection.sendVoidRequest(requestParts, 1)
}


declare module './xcbShape' {
  interface Shape {
    mask (operation: SO, destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceBitmap: PIXMAP): RequestChecker
  }
}

Shape.prototype.mask = function(operation: SO, destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceBitmap: PIXMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBB2xIhhI', operation, destinationKind, destinationWindow, xOffset, yOffset, sourceBitmap))

  return this.xConnection.sendVoidRequest(requestParts, 2)
}


declare module './xcbShape' {
  interface Shape {
    combine (operation: SO, destinationKind: SK, sourceKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceWindow: WINDOW): RequestChecker
  }
}

Shape.prototype.combine = function(operation: SO, destinationKind: SK, sourceKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number, sourceWindow: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBBBxIhhI', operation, destinationKind, sourceKind, destinationWindow, xOffset, yOffset, sourceWindow))

  return this.xConnection.sendVoidRequest(requestParts, 3)
}


declare module './xcbShape' {
  interface Shape {
    offset (destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number): RequestChecker
  }
}

Shape.prototype.offset = function(destinationKind: SK, destinationWindow: WINDOW, xOffset: number, yOffset: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIhh', destinationKind, destinationWindow, xOffset, yOffset))

  return this.xConnection.sendVoidRequest(requestParts, 4)
}


declare module './xcbShape' {
  interface Shape {
    queryExtents (destinationWindow: WINDOW): QueryExtentsCookie
  }
}

Shape.prototype.queryExtents = function(destinationWindow: WINDOW): QueryExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', destinationWindow))

  return this.xConnection.sendRequest<QueryExtentsReply>(requestParts, 5, unmarshallQueryExtentsReply)
}


declare module './xcbShape' {
  interface Shape {
    selectInput (destinationWindow: WINDOW, enable: number): RequestChecker
  }
}

Shape.prototype.selectInput = function(destinationWindow: WINDOW, enable: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', destinationWindow, enable))

  return this.xConnection.sendVoidRequest(requestParts, 6)
}


declare module './xcbShape' {
  interface Shape {
    inputSelected (destinationWindow: WINDOW): InputSelectedCookie
  }
}

Shape.prototype.inputSelected = function(destinationWindow: WINDOW): InputSelectedCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', destinationWindow))

  return this.xConnection.sendRequest<InputSelectedReply>(requestParts, 7, unmarshallInputSelectedReply)
}


declare module './xcbShape' {
  interface Shape {
    getRectangles (window: WINDOW, sourceKind: SK): GetRectanglesCookie
  }
}

Shape.prototype.getRectangles = function(window: WINDOW, sourceKind: SK): GetRectanglesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', window, sourceKind))

  return this.xConnection.sendRequest<GetRectanglesReply>(requestParts, 8, unmarshallGetRectanglesReply)
}

eventInits.push((firstEvent) => {
  events[firstEvent+0] = (xConnection: XConnection, rawEvent: Uint8Array) => {
    if(protocolExtension === undefined) return
    const event = unmarshallNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
    protocolExtension.onNotifyEvent?.(event)
  }
})
