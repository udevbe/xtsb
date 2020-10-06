import {
  VISUALID,
  CURSOR,
  STR,
  RECTANGLE,
  DRAWABLE,
  PIXMAP,
  unmarshallSTR,
  SubwindowMode,
  COLORMAP,
  ATOM
} from './xcb'
//
// This file generated automatically from render.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection, chars, pad } from './connection'
import Protocol from './Protocol'
import type { Unmarshaller, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import {
  xcbSimpleList,
  xcbComplexList,
  typePad,
  notUndefined,
  events,
  errors
} from './xjsbInternals'
import { unpackFrom, pack } from './struct'

export class Render extends Protocol {
  static MAJOR_VERSION = 0
  static MINOR_VERSION = 11
}

const errorInits: ((firstError: number) => void)[] = []
const eventInits: ((firstEvent: number) => void)[] = []

let protocolExtension: Render | undefined = undefined

export async function getRender(xConnection: XConnection): Promise<Render> {
  if (protocolExtension) {
    return protocolExtension
  }
  const queryExtensionReply = await xConnection.queryExtension(chars('RENDER'))
  if (queryExtensionReply.present === 0) {
    throw new Error('Render extension not present.')
  }
  const { firstError, firstEvent, majorOpcode } = queryExtensionReply
  protocolExtension = new Render(xConnection, majorOpcode)
  errorInits.forEach(init => init(firstError))
  eventInits.forEach(init => init(firstEvent))
  return protocolExtension
}


export const enum PictType {
  Indexed = 0,
  Direct = 1,
}

export const enum Picture {
  None = 0,
}

export const enum PictOp {
  Clear = 0,
  Src = 1,
  Dst = 2,
  Over = 3,
  OverReverse = 4,
  In = 5,
  InReverse = 6,
  Out = 7,
  OutReverse = 8,
  Atop = 9,
  AtopReverse = 10,
  Xor = 11,
  Add = 12,
  Saturate = 13,
  DisjointClear = 16,
  DisjointSrc = 17,
  DisjointDst = 18,
  DisjointOver = 19,
  DisjointOverReverse = 20,
  DisjointIn = 21,
  DisjointInReverse = 22,
  DisjointOut = 23,
  DisjointOutReverse = 24,
  DisjointAtop = 25,
  DisjointAtopReverse = 26,
  DisjointXor = 27,
  ConjointClear = 32,
  ConjointSrc = 33,
  ConjointDst = 34,
  ConjointOver = 35,
  ConjointOverReverse = 36,
  ConjointIn = 37,
  ConjointInReverse = 38,
  ConjointOut = 39,
  ConjointOutReverse = 40,
  ConjointAtop = 41,
  ConjointAtopReverse = 42,
  ConjointXor = 43,
  Multiply = 48,
  Screen = 49,
  Overlay = 50,
  Darken = 51,
  Lighten = 52,
  ColorDodge = 53,
  ColorBurn = 54,
  HardLight = 55,
  SoftLight = 56,
  Difference = 57,
  Exclusion = 58,
  HSLHue = 59,
  HSLSaturation = 60,
  HSLColor = 61,
  HSLLuminosity = 62,
}

export const enum PolyEdge {
  Sharp = 0,
  Smooth = 1,
}

export const enum PolyMode {
  Precise = 0,
  Imprecise = 1,
}

export const enum CP {
  Repeat = 1,
  AlphaMap = 2,
  AlphaXOrigin = 4,
  AlphaYOrigin = 8,
  ClipXOrigin = 16,
  ClipYOrigin = 32,
  ClipMask = 64,
  GraphicsExposure = 128,
  SubwindowMode = 256,
  PolyEdge = 512,
  PolyMode = 1024,
  Dither = 2048,
  ComponentAlpha = 4096,
}

export const enum SubPixel {
  Unknown = 0,
  HorizontalRGB = 1,
  HorizontalBGR = 2,
  VerticalRGB = 3,
  VerticalBGR = 4,
  None = 5,
}

export const enum Repeat {
  None = 0,
  Normal = 1,
  Pad = 2,
  Reflect = 3,
}

export type GLYPH = number


export type GLYPHSET = number


export type PICTURE = number


export type PICTFORMAT = number


export type FIXED = number


export type PictFormatError = {}

export const unmarshallPictFormatError: Unmarshaller<PictFormatError> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export class BadPictFormat extends Error {
  readonly xError: PictFormatError

  constructor(error: PictFormatError) {
    super()
    Object.setPrototypeOf(this, BadPictFormat.prototype)
    this.name = 'PictFormatError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type PictureError = {}

export const unmarshallPictureError: Unmarshaller<PictureError> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export class BadPicture extends Error {
  readonly xError: PictureError

  constructor(error: PictureError) {
    super()
    Object.setPrototypeOf(this, BadPicture.prototype)
    this.name = 'PictureError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type PictOpError = {}

export const unmarshallPictOpError: Unmarshaller<PictOpError> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export class BadPictOp extends Error {
  readonly xError: PictOpError

  constructor(error: PictOpError) {
    super()
    Object.setPrototypeOf(this, BadPictOp.prototype)
    this.name = 'PictOpError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type GlyphSetError = {}

export const unmarshallGlyphSetError: Unmarshaller<GlyphSetError> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export class BadGlyphSet extends Error {
  readonly xError: GlyphSetError

  constructor(error: GlyphSetError) {
    super()
    Object.setPrototypeOf(this, BadGlyphSet.prototype)
    this.name = 'GlyphSetError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type GlyphError = {}

export const unmarshallGlyphError: Unmarshaller<GlyphError> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export class BadGlyph extends Error {
  readonly xError: GlyphError

  constructor(error: GlyphError) {
    super()
    Object.setPrototypeOf(this, BadGlyph.prototype)
    this.name = 'GlyphError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type DIRECTFORMAT = {
  redShift: number
  redMask: number
  greenShift: number
  greenMask: number
  blueShift: number
  blueMask: number
  alphaShift: number
  alphaMask: number
}

export const unmarshallDIRECTFORMAT: Unmarshaller<DIRECTFORMAT> = (buffer, offset = 0) => {
  const [redShift, redMask, greenShift, greenMask, blueShift, blueMask, alphaShift, alphaMask] = unpackFrom('<HHHHHHHH', buffer, offset)
  offset += 16

  return {
    value: {
      redShift,
      redMask,
      greenShift,
      greenMask,
      blueShift,
      blueMask,
      alphaShift,
      alphaMask
    },
    offset
  }
}

export type PICTFORMINFO = {
  id: PICTFORMAT
  _type: PictType
  depth: number
  direct: DIRECTFORMAT
  colormap: COLORMAP
}

export const unmarshallPICTFORMINFO: Unmarshaller<PICTFORMINFO> = (buffer, offset = 0) => {
  const [id, _type, depth] = unpackFrom('<IBB2x', buffer, offset)
  offset += 8
  const directWithOffset = unmarshallDIRECTFORMAT(buffer, offset)
  const direct = directWithOffset.value
  offset = directWithOffset.offset
  offset += typePad(4, offset)
  const [colormap] = unpackFrom('<I', buffer, offset)
  offset += 4

  return {
    value: {
      id,
      _type,
      depth,
      direct,
      colormap
    },
    offset
  }
}

export type PICTVISUAL = {
  visual: VISUALID
  format: PICTFORMAT
}

export const unmarshallPICTVISUAL: Unmarshaller<PICTVISUAL> = (buffer, offset = 0) => {
  const [visual, format] = unpackFrom('<II', buffer, offset)
  offset += 8

  return {
    value: {
      visual,
      format
    },
    offset
  }
}

export type PICTDEPTH = {
  depth: number
  numVisuals: number
  visuals: PICTVISUAL[]
}

export const unmarshallPICTDEPTH: Unmarshaller<PICTDEPTH> = (buffer, offset = 0) => {
  const [depth, numVisuals] = unpackFrom('<BxH4x', buffer, offset)
  offset += 8
  const visualsWithOffset = xcbComplexList(buffer, offset, numVisuals, unmarshallPICTVISUAL)
  offset = visualsWithOffset.offset
  const visuals = visualsWithOffset.value

  return {
    value: {
      depth,
      numVisuals,
      visuals
    },
    offset
  }
}

export type PICTSCREEN = {
  numDepths: number
  fallback: PICTFORMAT
  depths: PICTDEPTH[]
}

export const unmarshallPICTSCREEN: Unmarshaller<PICTSCREEN> = (buffer, offset = 0) => {
  const [numDepths, fallback] = unpackFrom('<II', buffer, offset)
  offset += 8
  const depthsWithOffset = xcbComplexList(buffer, offset, numDepths, unmarshallPICTDEPTH)
  offset = depthsWithOffset.offset
  const depths = depthsWithOffset.value

  return {
    value: {
      numDepths,
      fallback,
      depths
    },
    offset
  }
}

export type INDEXVALUE = {
  pixel: number
  red: number
  green: number
  blue: number
  alpha: number
}

export const unmarshallINDEXVALUE: Unmarshaller<INDEXVALUE> = (buffer, offset = 0) => {
  const [pixel, red, green, blue, alpha] = unpackFrom('<IHHHH', buffer, offset)
  offset += 12

  return {
    value: {
      pixel,
      red,
      green,
      blue,
      alpha
    },
    offset
  }
}

export type COLOR = {
  red: number
  green: number
  blue: number
  alpha: number
}

export const unmarshallCOLOR: Unmarshaller<COLOR> = (buffer, offset = 0) => {
  const [red, green, blue, alpha] = unpackFrom('<HHHH', buffer, offset)
  offset += 8

  return {
    value: {
      red,
      green,
      blue,
      alpha
    },
    offset
  }
}

export type POINTFIX = {
  x: FIXED
  y: FIXED
}

export const unmarshallPOINTFIX: Unmarshaller<POINTFIX> = (buffer, offset = 0) => {
  const [x, y] = unpackFrom('<ii', buffer, offset)
  offset += 8

  return {
    value: {
      x,
      y
    },
    offset
  }
}

export type LINEFIX = {
  p1: POINTFIX
  p2: POINTFIX
}

export const unmarshallLINEFIX: Unmarshaller<LINEFIX> = (buffer, offset = 0) => {
  const p1WithOffset = unmarshallPOINTFIX(buffer, offset)
  const p1 = p1WithOffset.value
  offset = p1WithOffset.offset
  offset += typePad(8, offset)
  const p2WithOffset = unmarshallPOINTFIX(buffer, offset)
  const p2 = p2WithOffset.value
  offset = p2WithOffset.offset

  return {
    value: {
      p1,
      p2
    },
    offset
  }
}

export type TRIANGLE = {
  p1: POINTFIX
  p2: POINTFIX
  p3: POINTFIX
}

export const unmarshallTRIANGLE: Unmarshaller<TRIANGLE> = (buffer, offset = 0) => {
  const p1WithOffset = unmarshallPOINTFIX(buffer, offset)
  const p1 = p1WithOffset.value
  offset = p1WithOffset.offset
  offset += typePad(8, offset)
  const p2WithOffset = unmarshallPOINTFIX(buffer, offset)
  const p2 = p2WithOffset.value
  offset = p2WithOffset.offset
  offset += typePad(8, offset)
  const p3WithOffset = unmarshallPOINTFIX(buffer, offset)
  const p3 = p3WithOffset.value
  offset = p3WithOffset.offset

  return {
    value: {
      p1,
      p2,
      p3
    },
    offset
  }
}

export type TRAPEZOID = {
  top: FIXED
  bottom: FIXED
  left: LINEFIX
  right: LINEFIX
}

export const unmarshallTRAPEZOID: Unmarshaller<TRAPEZOID> = (buffer, offset = 0) => {
  const [top, bottom] = unpackFrom('<ii', buffer, offset)
  offset += 8
  const leftWithOffset = unmarshallLINEFIX(buffer, offset)
  const left = leftWithOffset.value
  offset = leftWithOffset.offset
  offset += typePad(16, offset)
  const rightWithOffset = unmarshallLINEFIX(buffer, offset)
  const right = rightWithOffset.value
  offset = rightWithOffset.offset

  return {
    value: {
      top,
      bottom,
      left,
      right
    },
    offset
  }
}

export type GLYPHINFO = {
  width: number
  height: number
  x: number
  y: number
  xOff: number
  yOff: number
}

export const unmarshallGLYPHINFO: Unmarshaller<GLYPHINFO> = (buffer, offset = 0) => {
  const [width, height, x, y, xOff, yOff] = unpackFrom('<HHhhhh', buffer, offset)
  offset += 12

  return {
    value: {
      width,
      height,
      x,
      y,
      xOff,
      yOff
    },
    offset
  }
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

export type QueryPictFormatsCookie = Promise<QueryPictFormatsReply>

export type QueryPictFormatsReply = {
  numFormats: number
  numScreens: number
  numDepths: number
  numVisuals: number
  numSubpixel: number
  formats: PICTFORMINFO[]
  screens: PICTSCREEN[]
  subpixels: Uint32Array
}

export const unmarshallQueryPictFormatsReply: Unmarshaller<QueryPictFormatsReply> = (buffer, offset = 0) => {
  const [numFormats, numScreens, numDepths, numVisuals, numSubpixel] = unpackFrom('<xx2x4xIIIII4x', buffer, offset)
  offset += 32
  const formatsWithOffset = xcbComplexList(buffer, offset, numFormats, unmarshallPICTFORMINFO)
  offset = formatsWithOffset.offset
  const formats = formatsWithOffset.value
  offset += typePad(4, offset)
  const screensWithOffset = xcbComplexList(buffer, offset, numScreens, unmarshallPICTSCREEN)
  offset = screensWithOffset.offset
  const screens = screensWithOffset.value
  offset += typePad(4, offset)
  const subpixelsWithOffset = xcbSimpleList(buffer, offset, numSubpixel, Uint32Array, 4)
  offset = subpixelsWithOffset.offset
  const subpixels = subpixelsWithOffset.value

  return {
    value: {
      numFormats,
      numScreens,
      numDepths,
      numVisuals,
      numSubpixel,
      formats,
      screens,
      subpixels
    },
    offset
  }
}

export type QueryPictIndexValuesCookie = Promise<QueryPictIndexValuesReply>

export type QueryPictIndexValuesReply = {
  numValues: number
  values: INDEXVALUE[]
}

export const unmarshallQueryPictIndexValuesReply: Unmarshaller<QueryPictIndexValuesReply> = (buffer, offset = 0) => {
  const [numValues] = unpackFrom('<xx2x4xI20x', buffer, offset)
  offset += 32
  const valuesWithOffset = xcbComplexList(buffer, offset, numValues, unmarshallINDEXVALUE)
  offset = valuesWithOffset.offset
  const values = valuesWithOffset.value

  return {
    value: {
      numValues,
      values
    },
    offset
  }
}

export type TRANSFORM = {
  matrix11: FIXED
  matrix12: FIXED
  matrix13: FIXED
  matrix21: FIXED
  matrix22: FIXED
  matrix23: FIXED
  matrix31: FIXED
  matrix32: FIXED
  matrix33: FIXED
}

export const unmarshallTRANSFORM: Unmarshaller<TRANSFORM> = (buffer, offset = 0) => {
  const [matrix11, matrix12, matrix13, matrix21, matrix22, matrix23, matrix31, matrix32, matrix33] = unpackFrom('<iiiiiiiii', buffer, offset)
  offset += 36

  return {
    value: {
      matrix11,
      matrix12,
      matrix13,
      matrix21,
      matrix22,
      matrix23,
      matrix31,
      matrix32,
      matrix33
    },
    offset
  }
}

export type QueryFiltersCookie = Promise<QueryFiltersReply>

export type QueryFiltersReply = {
  numAliases: number
  numFilters: number
  aliases: Uint16Array
  filters: STR[]
}

export const unmarshallQueryFiltersReply: Unmarshaller<QueryFiltersReply> = (buffer, offset = 0) => {
  const [numAliases, numFilters] = unpackFrom('<xx2x4xII16x', buffer, offset)
  offset += 32
  const aliasesWithOffset = xcbSimpleList(buffer, offset, numAliases, Uint16Array, 2)
  offset = aliasesWithOffset.offset
  const aliases = aliasesWithOffset.value
  offset += typePad(4, offset)
  const filtersWithOffset = xcbComplexList(buffer, offset, numFilters, unmarshallSTR)
  offset = filtersWithOffset.offset
  const filters = filtersWithOffset.value

  return {
    value: {
      numAliases,
      numFilters,
      aliases,
      filters
    },
    offset
  }
}

export type ANIMCURSORELT = {
  cursor: CURSOR
  delay: number
}

export const unmarshallANIMCURSORELT: Unmarshaller<ANIMCURSORELT> = (buffer, offset = 0) => {
  const [cursor, delay] = unpackFrom('<II', buffer, offset)
  offset += 8

  return {
    value: {
      cursor,
      delay
    },
    offset
  }
}

export type SPANFIX = {
  l: FIXED
  r: FIXED
  y: FIXED
}

export const unmarshallSPANFIX: Unmarshaller<SPANFIX> = (buffer, offset = 0) => {
  const [l, r, y] = unpackFrom('<iii', buffer, offset)
  offset += 12

  return {
    value: {
      l,
      r,
      y
    },
    offset
  }
}

export type TRAP = {
  top: SPANFIX
  bot: SPANFIX
}

export const unmarshallTRAP: Unmarshaller<TRAP> = (buffer, offset = 0) => {
  const topWithOffset = unmarshallSPANFIX(buffer, offset)
  const top = topWithOffset.value
  offset = topWithOffset.offset
  offset += typePad(12, offset)
  const botWithOffset = unmarshallSPANFIX(buffer, offset)
  const bot = botWithOffset.value
  offset = botWithOffset.offset

  return {
    value: {
      top,
      bot
    },
    offset
  }
}


declare module './xcbRender' {
  interface Render {
    queryVersion(clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie
  }
}

Render.prototype.queryVersion = function(clientMajorVersion: number, clientMinorVersion: number): QueryVersionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', clientMajorVersion, clientMinorVersion))

  return this.xConnection.sendRequest<QueryVersionReply>(requestParts, this.majorOpcode, unmarshallQueryVersionReply, 0)
}


declare module './xcbRender' {
  interface Render {
    queryPictFormats(): QueryPictFormatsCookie
  }
}

Render.prototype.queryPictFormats = function(): QueryPictFormatsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.xConnection.sendRequest<QueryPictFormatsReply>(requestParts, this.majorOpcode, unmarshallQueryPictFormatsReply, 1)
}


declare module './xcbRender' {
  interface Render {
    queryPictIndexValues(format: PICTFORMAT): QueryPictIndexValuesCookie
  }
}

Render.prototype.queryPictIndexValues = function(format: PICTFORMAT): QueryPictIndexValuesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', format))

  return this.xConnection.sendRequest<QueryPictIndexValuesReply>(requestParts, this.majorOpcode, unmarshallQueryPictIndexValuesReply, 2)
}


declare module './xcbRender' {
  interface Render {
    createPicture(pid: PICTURE, drawable: DRAWABLE, format: PICTFORMAT, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker
  }
}

Render.prototype.createPicture = function(pid: PICTURE, drawable: DRAWABLE, format: PICTFORMAT, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    repeat: 'I',
    alphamap: 'I',
    alphaxorigin: 'i',
    alphayorigin: 'i',
    clipxorigin: 'i',
    clipyorigin: 'i',
    clipmask: 'I',
    graphicsexposure: 'I',
    subwindowmode: 'I',
    polyedge: 'I',
    polymode: 'I',
    dither: 'I',
    componentalpha: 'I'
  }

  const valueListBitmasks: { [key: string]: number } = {
    repeat: CP.Repeat,
    alphamap: CP.AlphaMap,
    alphaxorigin: CP.AlphaXOrigin,
    alphayorigin: CP.AlphaYOrigin,
    clipxorigin: CP.ClipXOrigin,
    clipyorigin: CP.ClipYOrigin,
    clipmask: CP.ClipMask,
    graphicsexposure: CP.GraphicsExposure,
    subwindowmode: CP.SubwindowMode,
    polyedge: CP.PolyEdge,
    polymode: CP.PolyMode,
    dither: CP.Dither,
    componentalpha: CP.ComponentAlpha
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xIIII', pid, drawable, format, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 4)
}


declare module './xcbRender' {
  interface Render {
    changePicture(picture: PICTURE, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker
  }
}

Render.prototype.changePicture = function(picture: PICTURE, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    repeat: 'I',
    alphamap: 'I',
    alphaxorigin: 'i',
    alphayorigin: 'i',
    clipxorigin: 'i',
    clipyorigin: 'i',
    clipmask: 'I',
    graphicsexposure: 'I',
    subwindowmode: 'I',
    polyedge: 'I',
    polymode: 'I',
    dither: 'I',
    componentalpha: 'I'
  }

  const valueListBitmasks: { [key: string]: number } = {
    repeat: CP.Repeat,
    alphamap: CP.AlphaMap,
    alphaxorigin: CP.AlphaXOrigin,
    alphayorigin: CP.AlphaYOrigin,
    clipxorigin: CP.ClipXOrigin,
    clipyorigin: CP.ClipYOrigin,
    clipmask: CP.ClipMask,
    graphicsexposure: CP.GraphicsExposure,
    subwindowmode: CP.SubwindowMode,
    polyedge: CP.PolyEdge,
    polymode: CP.PolyMode,
    dither: CP.Dither,
    componentalpha: CP.ComponentAlpha
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xII', picture, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 5)
}


declare module './xcbRender' {
  interface Render {
    setPictureClipRectangles(picture: PICTURE, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

Render.prototype.setPictureClipRectangles = function(picture: PICTURE, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIhh', picture, clipXOrigin, clipYOrigin))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 6)
}


declare module './xcbRender' {
  interface Render {
    freePicture(picture: PICTURE): RequestChecker
  }
}

Render.prototype.freePicture = function(picture: PICTURE): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 7)
}


declare module './xcbRender' {
  interface Render {
    composite(op: PictOp, src: PICTURE, mask: PICTURE, dst: PICTURE, srcX: number, srcY: number, maskX: number, maskY: number, dstX: number, dstY: number, width: number, height: number): RequestChecker
  }
}

Render.prototype.composite = function(op: PictOp, src: PICTURE, mask: PICTURE, dst: PICTURE, srcX: number, srcY: number, maskX: number, maskY: number, dstX: number, dstY: number, width: number, height: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhhhhhhHH', op, src, mask, dst, srcX, srcY, maskX, maskY, dstX, dstY, width, height))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 8)
}


declare module './xcbRender' {
  interface Render {
    trapezoids(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trapsLen: number, traps: TRAPEZOID[]): RequestChecker
  }
}

Render.prototype.trapezoids = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trapsLen: number, traps: TRAPEZOID[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  traps.forEach(({ top, bottom, left, right }) => {
    requestParts.push(pack('<ii', top, bottom))
    requestParts.push(pack('<ii', left.p1.x, left.p1.y))

    requestParts.push(pack('<ii', left.p2.x, left.p2.y))


    requestParts.push(pack('<ii', right.p1.x, right.p1.y))

    requestParts.push(pack('<ii', right.p2.x, right.p2.y))


  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 10)
}


declare module './xcbRender' {
  interface Render {
    triangles(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trianglesLen: number, triangles: TRIANGLE[]): RequestChecker
  }
}

Render.prototype.triangles = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trianglesLen: number, triangles: TRIANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  triangles.forEach(({ p1, p2, p3 }) => {
    requestParts.push(pack('<ii', p1.x, p1.y))

    requestParts.push(pack('<ii', p2.x, p2.y))

    requestParts.push(pack('<ii', p3.x, p3.y))


  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 11)
}


declare module './xcbRender' {
  interface Render {
    triStrip(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker
  }
}

Render.prototype.triStrip = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('<ii', x, y))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 12)
}


declare module './xcbRender' {
  interface Render {
    triFan(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker
  }
}

Render.prototype.triFan = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('<ii', x, y))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 13)
}


declare module './xcbRender' {
  interface Render {
    createGlyphSet(gsid: GLYPHSET, format: PICTFORMAT): RequestChecker
  }
}

Render.prototype.createGlyphSet = function(gsid: GLYPHSET, format: PICTFORMAT): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', gsid, format))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 17)
}


declare module './xcbRender' {
  interface Render {
    referenceGlyphSet(gsid: GLYPHSET, existing: GLYPHSET): RequestChecker
  }
}

Render.prototype.referenceGlyphSet = function(gsid: GLYPHSET, existing: GLYPHSET): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', gsid, existing))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 18)
}


declare module './xcbRender' {
  interface Render {
    freeGlyphSet(glyphset: GLYPHSET): RequestChecker
  }
}

Render.prototype.freeGlyphSet = function(glyphset: GLYPHSET): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', glyphset))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 19)
}


declare module './xcbRender' {
  interface Render {
    addGlyphs(glyphset: GLYPHSET, glyphids: Uint32Array, glyphs: GLYPHINFO[], dataLen: number, data: Uint8Array): RequestChecker
  }
}

Render.prototype.addGlyphs = function(glyphset: GLYPHSET, glyphids: Uint32Array, glyphs: GLYPHINFO[], dataLen: number, data: Uint8Array): RequestChecker {
  const glyphsLen = glyphids.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', glyphset, glyphsLen))
  requestParts.push(pad(glyphids.buffer))
  glyphs.forEach(({ width, height, x, y, xOff, yOff }) => {
    requestParts.push(pack('<HHhhhh', width, height, x, y, xOff, yOff))

  })
  requestParts.push(pad(data.buffer))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 20)
}


declare module './xcbRender' {
  interface Render {
    freeGlyphs(glyphset: GLYPHSET, glyphsLen: number, glyphs: Uint32Array): RequestChecker
  }
}

Render.prototype.freeGlyphs = function(glyphset: GLYPHSET, glyphsLen: number, glyphs: Uint32Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', glyphset))
  requestParts.push(pad(glyphs.buffer))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 22)
}


declare module './xcbRender' {
  interface Render {
    compositeGlyphs8(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker
  }
}

Render.prototype.compositeGlyphs8 = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIIhh', op, src, dst, maskFormat, glyphset, srcX, srcY))
  requestParts.push(pad(glyphcmds.buffer))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 23)
}


declare module './xcbRender' {
  interface Render {
    compositeGlyphs16(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker
  }
}

Render.prototype.compositeGlyphs16 = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIIhh', op, src, dst, maskFormat, glyphset, srcX, srcY))
  requestParts.push(pad(glyphcmds.buffer))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 24)
}


declare module './xcbRender' {
  interface Render {
    compositeGlyphs32(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker
  }
}

Render.prototype.compositeGlyphs32 = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIIhh', op, src, dst, maskFormat, glyphset, srcX, srcY))
  requestParts.push(pad(glyphcmds.buffer))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 25)
}


declare module './xcbRender' {
  interface Render {
    fillRectangles(op: PictOp, dst: PICTURE, color: COLOR, rectsLen: number, rects: RECTANGLE[]): RequestChecker
  }
}

Render.prototype.fillRectangles = function(op: PictOp, dst: PICTURE, color: COLOR, rectsLen: number, rects: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xI', op, dst))
  requestParts.push(pack('<HHHH', color.red, color.green, color.blue, color.alpha))

  rects.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 26)
}


declare module './xcbRender' {
  interface Render {
    createCursor(cid: CURSOR, source: PICTURE, x: number, y: number): RequestChecker
  }
}

Render.prototype.createCursor = function(cid: CURSOR, source: PICTURE, x: number, y: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIHH', cid, source, x, y))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 27)
}


declare module './xcbRender' {
  interface Render {
    setPictureTransform(picture: PICTURE, transform: TRANSFORM): RequestChecker
  }
}

Render.prototype.setPictureTransform = function(picture: PICTURE, transform: TRANSFORM): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  requestParts.push(pack('<iiiiiiiii', transform.matrix11, transform.matrix12, transform.matrix13, transform.matrix21, transform.matrix22, transform.matrix23, transform.matrix31, transform.matrix32, transform.matrix33))


  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 28)
}


declare module './xcbRender' {
  interface Render {
    queryFilters(drawable: DRAWABLE): QueryFiltersCookie
  }
}

Render.prototype.queryFilters = function(drawable: DRAWABLE): QueryFiltersCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', drawable))

  return this.xConnection.sendRequest<QueryFiltersReply>(requestParts, this.majorOpcode, unmarshallQueryFiltersReply, 29)
}


declare module './xcbRender' {
  interface Render {
    setPictureFilter(picture: PICTURE, filter: Int8Array, valuesLen: number, values: Int32Array): RequestChecker
  }
}

Render.prototype.setPictureFilter = function(picture: PICTURE, filter: Int8Array, valuesLen: number, values: Int32Array): RequestChecker {
  const filterLen = filter.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', picture, filterLen))
  requestParts.push(pad(filter.buffer))
  requestParts.push(pack('<x'))
  requestParts.push(pad(values.buffer))

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 30)
}


declare module './xcbRender' {
  interface Render {
    createAnimCursor(cid: CURSOR, cursorsLen: number, cursors: ANIMCURSORELT[]): RequestChecker
  }
}

Render.prototype.createAnimCursor = function(cid: CURSOR, cursorsLen: number, cursors: ANIMCURSORELT[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cid))
  cursors.forEach(({ cursor, delay }) => {
    requestParts.push(pack('<II', cursor, delay))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 31)
}


declare module './xcbRender' {
  interface Render {
    addTraps(picture: PICTURE, xOff: number, yOff: number, trapsLen: number, traps: TRAP[]): RequestChecker
  }
}

Render.prototype.addTraps = function(picture: PICTURE, xOff: number, yOff: number, trapsLen: number, traps: TRAP[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIhh', picture, xOff, yOff))
  traps.forEach(({ top, bot }) => {
    requestParts.push(pack('<iii', top.l, top.r, top.y))

    requestParts.push(pack('<iii', bot.l, bot.r, bot.y))


  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 32)
}


declare module './xcbRender' {
  interface Render {
    createSolidFill(picture: PICTURE, color: COLOR): RequestChecker
  }
}

Render.prototype.createSolidFill = function(picture: PICTURE, color: COLOR): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  requestParts.push(pack('<HHHH', color.red, color.green, color.blue, color.alpha))


  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 33)
}


declare module './xcbRender' {
  interface Render {
    createLinearGradient(picture: PICTURE, p1: POINTFIX, p2: POINTFIX, stops: Int32Array, colors: COLOR[]): RequestChecker
  }
}

Render.prototype.createLinearGradient = function(picture: PICTURE, p1: POINTFIX, p2: POINTFIX, stops: Int32Array, colors: COLOR[]): RequestChecker {
  const numStops = stops.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  requestParts.push(pack('<ii', p1.x, p1.y))

  requestParts.push(pack('<ii', p2.x, p2.y))

  requestParts.push(pack('<I', numStops))
  requestParts.push(pad(stops.buffer))
  colors.forEach(({ red, green, blue, alpha }) => {
    requestParts.push(pack('<HHHH', red, green, blue, alpha))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 34)
}


declare module './xcbRender' {
  interface Render {
    createRadialGradient(picture: PICTURE, inner: POINTFIX, outer: POINTFIX, innerRadius: FIXED, outerRadius: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker
  }
}

Render.prototype.createRadialGradient = function(picture: PICTURE, inner: POINTFIX, outer: POINTFIX, innerRadius: FIXED, outerRadius: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker {
  const numStops = stops.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  requestParts.push(pack('<ii', inner.x, inner.y))

  requestParts.push(pack('<ii', outer.x, outer.y))

  requestParts.push(pack('<iiI', innerRadius, outerRadius, numStops))
  requestParts.push(pad(stops.buffer))
  colors.forEach(({ red, green, blue, alpha }) => {
    requestParts.push(pack('<HHHH', red, green, blue, alpha))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 35)
}


declare module './xcbRender' {
  interface Render {
    createConicalGradient(picture: PICTURE, center: POINTFIX, angle: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker
  }
}

Render.prototype.createConicalGradient = function(picture: PICTURE, center: POINTFIX, angle: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker {
  const numStops = stops.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  requestParts.push(pack('<ii', center.x, center.y))

  requestParts.push(pack('<iI', angle, numStops))
  requestParts.push(pad(stops.buffer))
  colors.forEach(({ red, green, blue, alpha }) => {
    requestParts.push(pack('<HHHH', red, green, blue, alpha))

  })

  return this.xConnection.sendVoidRequest(requestParts, this.majorOpcode, 36)
}

errorInits.push(firstError => {
  errors[firstError + 0] = [unmarshallPictFormatError, BadPictFormat]
})
errorInits.push(firstError => {
  errors[firstError + 1] = [unmarshallPictureError, BadPicture]
})
errorInits.push(firstError => {
  errors[firstError + 2] = [unmarshallPictOpError, BadPictOp]
})
errorInits.push(firstError => {
  errors[firstError + 3] = [unmarshallGlyphSetError, BadGlyphSet]
})
errorInits.push(firstError => {
  errors[firstError + 4] = [unmarshallGlyphError, BadGlyph]
})
