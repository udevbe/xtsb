import { WINDOW, PIXMAP } from './xcb'
import { REGION } from './xcbXFixes'
//
// This file generated automatically from composite.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection, chars } from './connection'
import Protocol from './Protocol'
import type { Unmarshaller, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import { unpackFrom, pack } from './struct'

export class Composite extends Protocol {
  static MAJOR_VERSION = 0
  static MINOR_VERSION = 4
}

const errorInits: ((firstError: number) => void)[] = []
const eventInits: ((firstEvent: number) => void)[] = []

let protocolExtension: Composite | undefined = undefined

export async function getComposite(xConnection: XConnection): Promise<Composite> {
  if (protocolExtension) {
    return protocolExtension
  }
  const queryExtensionReply = await xConnection.queryExtension(chars('Composite'))
  if (queryExtensionReply.present === 0) {
    throw new Error('Composite extension not present.')
  }
  const { firstError, firstEvent, majorOpcode } = queryExtensionReply
  protocolExtension = new Composite(xConnection, majorOpcode)
  errorInits.forEach(init => init(firstError))
  eventInits.forEach(init => init(firstEvent))
  return protocolExtension
}


export const enum Redirect {
  Automatic = 0,
  Manual = 1,
}

export type QueryVersionCookie = Promise<QueryVersionReply>

export type QueryVersionReply = {
  majorVersion: number
  minorVersion: number
}

export const unmarshallQueryVersionReply: Unmarshaller<QueryVersionReply> = (buffer, offset = 0) => {
  const [majorVersion, minorVersion] = unpackFrom('<xx2x4xII16x', buffer, offset)
  offset += 32

  return {
    value: {
      majorVersion,
      minorVersion
    },
    offset
  }
}

export type GetOverlayWindowCookie = Promise<GetOverlayWindowReply>

export type GetOverlayWindowReply = {
  overlayWin: WINDOW
}

export const unmarshallGetOverlayWindowReply: Unmarshaller<GetOverlayWindowReply> = (buffer, offset = 0) => {
  const [overlayWin] = unpackFrom('<xx2x4xI20x', buffer, offset)
  offset += 32

  return {
    value: {
      overlayWin
    },
    offset
  }
}


declare module './xcbComposite' {
  interface Composite {
    queryVersion(clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie
  }
}

Composite.prototype.queryVersion = function(clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', clientMajorVersion, clientMinorVersion))

  return this.xConnection.sendRequest<QueryVersionReply>(requestParts, 0, unmarshallQueryVersionReply)
}


declare module './xcbComposite' {
  interface Composite {
    redirectWindow(window: WINDOW, update: Redirect): RequestChecker
  }
}

Composite.prototype.redirectWindow = function(window: WINDOW, update: Redirect): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', window, update))

  return this.xConnection.sendVoidRequest(requestParts, 1)
}


declare module './xcbComposite' {
  interface Composite {
    redirectSubwindows(window: WINDOW, update: Redirect): RequestChecker
  }
}

Composite.prototype.redirectSubwindows = function(window: WINDOW, update: Redirect): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', window, update))

  return this.xConnection.sendVoidRequest(requestParts, 2)
}


declare module './xcbComposite' {
  interface Composite {
    unredirectWindow(window: WINDOW, update: Redirect): RequestChecker
  }
}

Composite.prototype.unredirectWindow = function(window: WINDOW, update: Redirect): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', window, update))

  return this.xConnection.sendVoidRequest(requestParts, 3)
}


declare module './xcbComposite' {
  interface Composite {
    unredirectSubwindows(window: WINDOW, update: Redirect): RequestChecker
  }
}

Composite.prototype.unredirectSubwindows = function(window: WINDOW, update: Redirect): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIB3x', window, update))

  return this.xConnection.sendVoidRequest(requestParts, 4)
}


declare module './xcbComposite' {
  interface Composite {
    createRegionFromBorderClip(region: REGION, window: WINDOW): RequestChecker
  }
}

Composite.prototype.createRegionFromBorderClip = function(region: REGION, window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', region, window))

  return this.xConnection.sendVoidRequest(requestParts, 5)
}


declare module './xcbComposite' {
  interface Composite {
    nameWindowPixmap(window: WINDOW, pixmap: PIXMAP): RequestChecker
  }
}

Composite.prototype.nameWindowPixmap = function(window: WINDOW, pixmap: PIXMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', window, pixmap))

  return this.xConnection.sendVoidRequest(requestParts, 6)
}


declare module './xcbComposite' {
  interface Composite {
    getOverlayWindow(window: WINDOW): GetOverlayWindowCookie
  }
}

Composite.prototype.getOverlayWindow = function(window: WINDOW): GetOverlayWindowCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.xConnection.sendRequest<GetOverlayWindowReply>(requestParts, 7, unmarshallGetOverlayWindowReply)
}


declare module './xcbComposite' {
  interface Composite {
    releaseOverlayWindow(window: WINDOW): RequestChecker
  }
}

Composite.prototype.releaseOverlayWindow = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.xConnection.sendVoidRequest(requestParts, 8)
}

