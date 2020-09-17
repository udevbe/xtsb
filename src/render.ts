//
// This file generated automatically from render.xml by ts_client.py.
// Edit at your peril.
//

const _global = (window /* browser */ || global /* node */) as any
import { XConnection } from './connection'
import type { Unmarshaller, EventHandler, RequestChecker } from './xjsbInternals'
// tslint:disable-next-line:no-duplicate-imports
import { xcbSimpleList, xcbComplexList, typePad, notUndefined, events, errors } from './xjsbInternals'
import { unpackFrom, pack } from './struct'

import * as xproto from './xproto'

const MAJOR_VERSION = 0
const MINOR_VERSION = 11


declare global {
  export enum PictType {
    Indexed = 0,
    Direct = 1,
  }
}

declare global {
  export enum Picture {
    None = 0,
  }
}

declare global {
  export enum PictOp {
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
}

declare global {
  export enum PolyEdge {
    Sharp = 0,
    Smooth = 1,
  }
}

declare global {
  export enum PolyMode {
    Precise = 0,
    Imprecise = 1,
  }
}

declare global {
  export enum CP {
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
}

declare global {
  export enum SubPixel {
    Unknown = 0,
    HorizontalRGB = 1,
    HorizontalBGR = 2,
    VerticalRGB = 3,
    VerticalBGR = 4,
    None = 5,
  }
}

declare global {
  export enum Repeat {
    None = 0,
    Normal = 1,
    Pad = 2,
    Reflect = 3,
  }
}

declare global {
  export type GLYPH = number
}


declare global {
  export type GLYPHSET = number
}


declare global {
  export type PICTURE = number
}


declare global {
  export type PICTFORMAT = number
}


declare global {
  export type FIXED = number
}


export type PictFormatError = {
}

declare global {
  let unmarshallPictFormatError: Unmarshaller<PictFormatError>
}
const _unmarshallPictFormatError: Unmarshaller<PictFormatError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
_global.unmarshallPictFormatError = _unmarshallPictFormatError

export class BadPictFormat extends Error {
  readonly xError: PictFormatError
  constructor (error: PictFormatError) {
    super()
    Object.setPrototypeOf(this, BadPictFormat.prototype)
    this.name = 'PictFormatError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type PictureError = {
}

declare global {
  let unmarshallPictureError: Unmarshaller<PictureError>
}
const _unmarshallPictureError: Unmarshaller<PictureError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
_global.unmarshallPictureError = _unmarshallPictureError

export class BadPicture extends Error {
  readonly xError: PictureError
  constructor (error: PictureError) {
    super()
    Object.setPrototypeOf(this, BadPicture.prototype)
    this.name = 'PictureError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type PictOpError = {
}

declare global {
  let unmarshallPictOpError: Unmarshaller<PictOpError>
}
const _unmarshallPictOpError: Unmarshaller<PictOpError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
_global.unmarshallPictOpError = _unmarshallPictOpError

export class BadPictOp extends Error {
  readonly xError: PictOpError
  constructor (error: PictOpError) {
    super()
    Object.setPrototypeOf(this, BadPictOp.prototype)
    this.name = 'PictOpError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type GlyphSetError = {
}

declare global {
  let unmarshallGlyphSetError: Unmarshaller<GlyphSetError>
}
const _unmarshallGlyphSetError: Unmarshaller<GlyphSetError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
_global.unmarshallGlyphSetError = _unmarshallGlyphSetError

export class BadGlyphSet extends Error {
  readonly xError: GlyphSetError
  constructor (error: GlyphSetError) {
    super()
    Object.setPrototypeOf(this, BadGlyphSet.prototype)
    this.name = 'GlyphSetError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type GlyphError = {
}

declare global {
  let unmarshallGlyphError: Unmarshaller<GlyphError>
}
const _unmarshallGlyphError: Unmarshaller<GlyphError> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
_global.unmarshallGlyphError = _unmarshallGlyphError

export class BadGlyph extends Error {
  readonly xError: GlyphError
  constructor (error: GlyphError) {
    super()
    Object.setPrototypeOf(this, BadGlyph.prototype)
    this.name = 'GlyphError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

declare global {
  export type DIRECTFORMAT  = {
  redShift: number
  redMask: number
  greenShift: number
  greenMask: number
  blueShift: number
  blueMask: number
  alphaShift: number
  alphaMask: number
  }
}

declare global {
  let unmarshallDIRECTFORMAT: Unmarshaller<DIRECTFORMAT>
}
const _unmarshallDIRECTFORMAT: Unmarshaller<DIRECTFORMAT> = (buffer, offset=0) => {
  const [ redShift, redMask, greenShift, greenMask, blueShift, blueMask, alphaShift, alphaMask ] = unpackFrom('<HHHHHHHH', buffer, offset)
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
      alphaMask,
    },
    offset
  }
}
_global.unmarshallDIRECTFORMAT = _unmarshallDIRECTFORMAT

declare global {
  export type PICTFORMINFO  = {
  id: PICTFORMAT
  _type: PictType
  depth: number
  direct: DIRECTFORMAT
  colormap: COLORMAP
  }
}

declare global {
  let unmarshallPICTFORMINFO: Unmarshaller<PICTFORMINFO>
}
const _unmarshallPICTFORMINFO: Unmarshaller<PICTFORMINFO> = (buffer, offset=0) => {
  const [ id, _type, depth ] = unpackFrom('<IBB2x', buffer, offset)
  offset += 8
  const directWithOffset = unmarshallDIRECTFORMAT(buffer, offset)
  const direct = directWithOffset.value
  offset = directWithOffset.offset
    offset += typePad(4, offset)
  const [ colormap ] = unpackFrom('<I', buffer, offset)
  offset += 4

  return {
    value: {
      id,
      _type,
      depth,
      direct,
      colormap,
    },
    offset
  }
}
_global.unmarshallPICTFORMINFO = _unmarshallPICTFORMINFO

declare global {
  export type PICTVISUAL  = {
  visual: VISUALID
  format: PICTFORMAT
  }
}

declare global {
  let unmarshallPICTVISUAL: Unmarshaller<PICTVISUAL>
}
const _unmarshallPICTVISUAL: Unmarshaller<PICTVISUAL> = (buffer, offset=0) => {
  const [ visual, format ] = unpackFrom('<II', buffer, offset)
  offset += 8

  return {
    value: {
      visual,
      format,
    },
    offset
  }
}
_global.unmarshallPICTVISUAL = _unmarshallPICTVISUAL

declare global {
  export type PICTDEPTH  = {
  depth: number
  numVisuals: number
  visuals: PICTVISUAL[]
  }
}

declare global {
  let unmarshallPICTDEPTH: Unmarshaller<PICTDEPTH>
}
const _unmarshallPICTDEPTH: Unmarshaller<PICTDEPTH> = (buffer, offset=0) => {
  const [ depth, numVisuals ] = unpackFrom('<BxH4x', buffer, offset)
  offset += 8
  const visualsWithOffset = xcbComplexList(buffer, offset, numVisuals, unmarshallPICTVISUAL)
  offset = visualsWithOffset.offset
  const visuals = visualsWithOffset.value

  return {
    value: {
      depth,
      numVisuals,
      visuals,
    },
    offset
  }
}
_global.unmarshallPICTDEPTH = _unmarshallPICTDEPTH

declare global {
  export type PICTSCREEN  = {
  numDepths: number
  fallback: PICTFORMAT
  depths: PICTDEPTH[]
  }
}

declare global {
  let unmarshallPICTSCREEN: Unmarshaller<PICTSCREEN>
}
const _unmarshallPICTSCREEN: Unmarshaller<PICTSCREEN> = (buffer, offset=0) => {
  const [ numDepths, fallback ] = unpackFrom('<II', buffer, offset)
  offset += 8
  const depthsWithOffset = xcbComplexList(buffer, offset, numDepths, unmarshallPICTDEPTH)
  offset = depthsWithOffset.offset
  const depths = depthsWithOffset.value

  return {
    value: {
      numDepths,
      fallback,
      depths,
    },
    offset
  }
}
_global.unmarshallPICTSCREEN = _unmarshallPICTSCREEN

declare global {
  export type INDEXVALUE  = {
  pixel: number
  red: number
  green: number
  blue: number
  alpha: number
  }
}

declare global {
  let unmarshallINDEXVALUE: Unmarshaller<INDEXVALUE>
}
const _unmarshallINDEXVALUE: Unmarshaller<INDEXVALUE> = (buffer, offset=0) => {
  const [ pixel, red, green, blue, alpha ] = unpackFrom('<IHHHH', buffer, offset)
  offset += 12

  return {
    value: {
      pixel,
      red,
      green,
      blue,
      alpha,
    },
    offset
  }
}
_global.unmarshallINDEXVALUE = _unmarshallINDEXVALUE

declare global {
  export type COLOR  = {
  red: number
  green: number
  blue: number
  alpha: number
  }
}

declare global {
  let unmarshallCOLOR: Unmarshaller<COLOR>
}
const _unmarshallCOLOR: Unmarshaller<COLOR> = (buffer, offset=0) => {
  const [ red, green, blue, alpha ] = unpackFrom('<HHHH', buffer, offset)
  offset += 8

  return {
    value: {
      red,
      green,
      blue,
      alpha,
    },
    offset
  }
}
_global.unmarshallCOLOR = _unmarshallCOLOR

declare global {
  export type POINTFIX  = {
  x: FIXED
  y: FIXED
  }
}

declare global {
  let unmarshallPOINTFIX: Unmarshaller<POINTFIX>
}
const _unmarshallPOINTFIX: Unmarshaller<POINTFIX> = (buffer, offset=0) => {
  const [ x, y ] = unpackFrom('<ii', buffer, offset)
  offset += 8

  return {
    value: {
      x,
      y,
    },
    offset
  }
}
_global.unmarshallPOINTFIX = _unmarshallPOINTFIX

declare global {
  export type LINEFIX  = {
  p1: POINTFIX
  p2: POINTFIX
  }
}

declare global {
  let unmarshallLINEFIX: Unmarshaller<LINEFIX>
}
const _unmarshallLINEFIX: Unmarshaller<LINEFIX> = (buffer, offset=0) => {
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
      p2,
    },
    offset
  }
}
_global.unmarshallLINEFIX = _unmarshallLINEFIX

declare global {
  export type TRIANGLE  = {
  p1: POINTFIX
  p2: POINTFIX
  p3: POINTFIX
  }
}

declare global {
  let unmarshallTRIANGLE: Unmarshaller<TRIANGLE>
}
const _unmarshallTRIANGLE: Unmarshaller<TRIANGLE> = (buffer, offset=0) => {
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
      p3,
    },
    offset
  }
}
_global.unmarshallTRIANGLE = _unmarshallTRIANGLE

declare global {
  export type TRAPEZOID  = {
  top: FIXED
  bottom: FIXED
  left: LINEFIX
  right: LINEFIX
  }
}

declare global {
  let unmarshallTRAPEZOID: Unmarshaller<TRAPEZOID>
}
const _unmarshallTRAPEZOID: Unmarshaller<TRAPEZOID> = (buffer, offset=0) => {
  const [ top, bottom ] = unpackFrom('<ii', buffer, offset)
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
      right,
    },
    offset
  }
}
_global.unmarshallTRAPEZOID = _unmarshallTRAPEZOID

declare global {
  export type GLYPHINFO  = {
  width: number
  height: number
  x: number
  y: number
  xOff: number
  yOff: number
  }
}

declare global {
  let unmarshallGLYPHINFO: Unmarshaller<GLYPHINFO>
}
const _unmarshallGLYPHINFO: Unmarshaller<GLYPHINFO> = (buffer, offset=0) => {
  const [ width, height, x, y, xOff, yOff ] = unpackFrom('<HHhhhh', buffer, offset)
  offset += 12

  return {
    value: {
      width,
      height,
      x,
      y,
      xOff,
      yOff,
    },
    offset
  }
}
_global.unmarshallGLYPHINFO = _unmarshallGLYPHINFO

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

export type QueryPictFormatsCookie = Promise<QueryPictFormats>

export type QueryPictFormats = {
  numFormats: number
  numScreens: number
  numDepths: number
  numVisuals: number
  numSubpixel: number
  formats: PICTFORMINFO[]
  screens: PICTSCREEN[]
  subpixels: Uint32Array
}

declare global {
  let unmarshallQueryPictFormats: Unmarshaller<QueryPictFormats>
}
const _unmarshallQueryPictFormats: Unmarshaller<QueryPictFormats> = (buffer, offset=0) => {
  const [ numFormats, numScreens, numDepths, numVisuals, numSubpixel ] = unpackFrom('<xx2x4xIIIII4x', buffer, offset)
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
      subpixels,
    },
    offset
  }
}
_global.unmarshallQueryPictFormats = _unmarshallQueryPictFormats

export type QueryPictIndexValuesCookie = Promise<QueryPictIndexValues>

export type QueryPictIndexValues = {
  numValues: number
  values: INDEXVALUE[]
}

declare global {
  let unmarshallQueryPictIndexValues: Unmarshaller<QueryPictIndexValues>
}
const _unmarshallQueryPictIndexValues: Unmarshaller<QueryPictIndexValues> = (buffer, offset=0) => {
  const [ numValues ] = unpackFrom('<xx2x4xI20x', buffer, offset)
  offset += 32
  const valuesWithOffset = xcbComplexList(buffer, offset, numValues, unmarshallINDEXVALUE)
  offset = valuesWithOffset.offset
  const values = valuesWithOffset.value

  return {
    value: {
      numValues,
      values,
    },
    offset
  }
}
_global.unmarshallQueryPictIndexValues = _unmarshallQueryPictIndexValues

declare global {
  export type TRANSFORM  = {
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
}

declare global {
  let unmarshallTRANSFORM: Unmarshaller<TRANSFORM>
}
const _unmarshallTRANSFORM: Unmarshaller<TRANSFORM> = (buffer, offset=0) => {
  const [ matrix11, matrix12, matrix13, matrix21, matrix22, matrix23, matrix31, matrix32, matrix33 ] = unpackFrom('<iiiiiiiii', buffer, offset)
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
      matrix33,
    },
    offset
  }
}
_global.unmarshallTRANSFORM = _unmarshallTRANSFORM

export type QueryFiltersCookie = Promise<QueryFilters>

export type QueryFilters = {
  numAliases: number
  numFilters: number
  aliases: Uint16Array
  filters: STR[]
}

declare global {
  let unmarshallQueryFilters: Unmarshaller<QueryFilters>
}
const _unmarshallQueryFilters: Unmarshaller<QueryFilters> = (buffer, offset=0) => {
  const [ numAliases, numFilters ] = unpackFrom('<xx2x4xII16x', buffer, offset)
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
      filters,
    },
    offset
  }
}
_global.unmarshallQueryFilters = _unmarshallQueryFilters

declare global {
  export type ANIMCURSORELT  = {
  cursor: CURSOR
  delay: number
  }
}

declare global {
  let unmarshallANIMCURSORELT: Unmarshaller<ANIMCURSORELT>
}
const _unmarshallANIMCURSORELT: Unmarshaller<ANIMCURSORELT> = (buffer, offset=0) => {
  const [ cursor, delay ] = unpackFrom('<II', buffer, offset)
  offset += 8

  return {
    value: {
      cursor,
      delay,
    },
    offset
  }
}
_global.unmarshallANIMCURSORELT = _unmarshallANIMCURSORELT

declare global {
  export type SPANFIX  = {
  l: FIXED
  r: FIXED
  y: FIXED
  }
}

declare global {
  let unmarshallSPANFIX: Unmarshaller<SPANFIX>
}
const _unmarshallSPANFIX: Unmarshaller<SPANFIX> = (buffer, offset=0) => {
  const [ l, r, y ] = unpackFrom('<iii', buffer, offset)
  offset += 12

  return {
    value: {
      l,
      r,
      y,
    },
    offset
  }
}
_global.unmarshallSPANFIX = _unmarshallSPANFIX

declare global {
  export type TRAP  = {
  top: SPANFIX
  bot: SPANFIX
  }
}

declare global {
  let unmarshallTRAP: Unmarshaller<TRAP>
}
const _unmarshallTRAP: Unmarshaller<TRAP> = (buffer, offset=0) => {
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
      bot,
    },
    offset
  }
}
_global.unmarshallTRAP = _unmarshallTRAP


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
    queryPictFormats (): QueryPictFormatsCookie
  }
}

XConnection.prototype.queryPictFormats = function(): QueryPictFormatsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<QueryPictFormats>(requestParts, 1, unmarshallQueryPictFormats)
}


declare module './connection' {
  interface XConnection {
    queryPictIndexValues (format: PICTFORMAT): QueryPictIndexValuesCookie
  }
}

XConnection.prototype.queryPictIndexValues = function(format: PICTFORMAT): QueryPictIndexValuesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', format))

  return this.sendRequest<QueryPictIndexValues>(requestParts, 2, unmarshallQueryPictIndexValues)
}


declare module './connection' {
  interface XConnection {
    createPicture (pid: PICTURE, drawable: DRAWABLE, format: PICTFORMAT, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker
  }
}

XConnection.prototype.createPicture = function(pid: PICTURE, drawable: DRAWABLE, format: PICTFORMAT, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
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

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xIIII', pid, drawable, format, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 4)
}


declare module './connection' {
  interface XConnection {
    changePicture (picture: PICTURE, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker
  }
}

XConnection.prototype.changePicture = function(picture: PICTURE, valueList: Partial<{ repeat: Repeat, alphamap: PICTURE, alphaxorigin: number, alphayorigin: number, clipxorigin: number, clipyorigin: number, clipmask: PIXMAP, graphicsexposure: number, subwindowmode: SubwindowMode, polyedge: PolyEdge, polymode: PolyMode, dither: ATOM, componentalpha: number }>): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
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

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xII', picture, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 5)
}


declare module './connection' {
  interface XConnection {
    setPictureClipRectangles (picture: PICTURE, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.setPictureClipRectangles = function(picture: PICTURE, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIhh', picture, clipXOrigin, clipYOrigin))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 6)
}


declare module './connection' {
  interface XConnection {
    freePicture (picture: PICTURE): RequestChecker
  }
}

XConnection.prototype.freePicture = function(picture: PICTURE): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))

  return this.sendVoidRequest(requestParts, 7)
}


declare module './connection' {
  interface XConnection {
    composite (op: PictOp, src: PICTURE, mask: PICTURE, dst: PICTURE, srcX: number, srcY: number, maskX: number, maskY: number, dstX: number, dstY: number, width: number, height: number): RequestChecker
  }
}

XConnection.prototype.composite = function(op: PictOp, src: PICTURE, mask: PICTURE, dst: PICTURE, srcX: number, srcY: number, maskX: number, maskY: number, dstX: number, dstY: number, width: number, height: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhhhhhhHH', op, src, mask, dst, srcX, srcY, maskX, maskY, dstX, dstY, width, height))

  return this.sendVoidRequest(requestParts, 8)
}


declare module './connection' {
  interface XConnection {
    trapezoids (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trapsLen: number, traps: TRAPEZOID[]): RequestChecker
  }
}

XConnection.prototype.trapezoids = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trapsLen: number, traps: TRAPEZOID[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  traps.forEach(({top, bottom, left, right}) => {
  requestParts.push(pack('<ii', top, bottom))
  throw new Error('FIXME support sending this type: LINEFIX ')
  throw new Error('FIXME support sending this type: LINEFIX ')

  })

  return this.sendVoidRequest(requestParts, 10)
}


declare module './connection' {
  interface XConnection {
    triangles (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trianglesLen: number, triangles: TRIANGLE[]): RequestChecker
  }
}

XConnection.prototype.triangles = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, trianglesLen: number, triangles: TRIANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  triangles.forEach(({p1, p2, p3}) => {
  throw new Error('FIXME support sending this type: POINTFIX ')
  throw new Error('FIXME support sending this type: POINTFIX ')
  throw new Error('FIXME support sending this type: POINTFIX ')

  })

  return this.sendVoidRequest(requestParts, 11)
}


declare module './connection' {
  interface XConnection {
    triStrip (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker
  }
}

XConnection.prototype.triStrip = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  points.forEach(({x, y}) => {
  requestParts.push(pack('<ii', x, y))

  })

  return this.sendVoidRequest(requestParts, 12)
}


declare module './connection' {
  interface XConnection {
    triFan (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker
  }
}

XConnection.prototype.triFan = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, srcX: number, srcY: number, pointsLen: number, points: POINTFIX[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIhh', op, src, dst, maskFormat, srcX, srcY))
  points.forEach(({x, y}) => {
  requestParts.push(pack('<ii', x, y))

  })

  return this.sendVoidRequest(requestParts, 13)
}


declare module './connection' {
  interface XConnection {
    createGlyphSet (gsid: GLYPHSET, format: PICTFORMAT): RequestChecker
  }
}

XConnection.prototype.createGlyphSet = function(gsid: GLYPHSET, format: PICTFORMAT): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', gsid, format))

  return this.sendVoidRequest(requestParts, 17)
}


declare module './connection' {
  interface XConnection {
    referenceGlyphSet (gsid: GLYPHSET, existing: GLYPHSET): RequestChecker
  }
}

XConnection.prototype.referenceGlyphSet = function(gsid: GLYPHSET, existing: GLYPHSET): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', gsid, existing))

  return this.sendVoidRequest(requestParts, 18)
}


declare module './connection' {
  interface XConnection {
    freeGlyphSet (glyphset: GLYPHSET): RequestChecker
  }
}

XConnection.prototype.freeGlyphSet = function(glyphset: GLYPHSET): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', glyphset))

  return this.sendVoidRequest(requestParts, 19)
}


declare module './connection' {
  interface XConnection {
    addGlyphs (glyphset: GLYPHSET, glyphids: Uint32Array, glyphs: GLYPHINFO[], dataLen: number, data: Uint8Array): RequestChecker
  }
}

XConnection.prototype.addGlyphs = function(glyphset: GLYPHSET, glyphids: Uint32Array, glyphs: GLYPHINFO[], dataLen: number, data: Uint8Array): RequestChecker {
  const glyphsLen = glyphids.length
  const glyphsLen = glyphs.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', glyphset, glyphsLen))
  requestParts.push(glyphids.buffer)
  glyphs.forEach(({width, height, x, y, xOff, yOff}) => {
  requestParts.push(pack('<HHhhhh', width, height, x, y, xOff, yOff))

  })
  requestParts.push(data.buffer)

  return this.sendVoidRequest(requestParts, 20)
}


declare module './connection' {
  interface XConnection {
    freeGlyphs (glyphset: GLYPHSET, glyphsLen: number, glyphs: Uint32Array): RequestChecker
  }
}

XConnection.prototype.freeGlyphs = function(glyphset: GLYPHSET, glyphsLen: number, glyphs: Uint32Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', glyphset))
  requestParts.push(glyphs.buffer)

  return this.sendVoidRequest(requestParts, 22)
}


declare module './connection' {
  interface XConnection {
    compositeGlyphs8 (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker
  }
}

XConnection.prototype.compositeGlyphs8 = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIIhh', op, src, dst, maskFormat, glyphset, srcX, srcY))
  requestParts.push(glyphcmds.buffer)

  return this.sendVoidRequest(requestParts, 23)
}


declare module './connection' {
  interface XConnection {
    compositeGlyphs16 (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker
  }
}

XConnection.prototype.compositeGlyphs16 = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIIhh', op, src, dst, maskFormat, glyphset, srcX, srcY))
  requestParts.push(glyphcmds.buffer)

  return this.sendVoidRequest(requestParts, 24)
}


declare module './connection' {
  interface XConnection {
    compositeGlyphs32 (op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker
  }
}

XConnection.prototype.compositeGlyphs32 = function(op: PictOp, src: PICTURE, dst: PICTURE, maskFormat: PICTFORMAT, glyphset: GLYPHSET, srcX: number, srcY: number, glyphcmdsLen: number, glyphcmds: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xIIIIhh', op, src, dst, maskFormat, glyphset, srcX, srcY))
  requestParts.push(glyphcmds.buffer)

  return this.sendVoidRequest(requestParts, 25)
}


declare module './connection' {
  interface XConnection {
    fillRectangles (op: PictOp, dst: PICTURE, color: COLOR, rectsLen: number, rects: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.fillRectangles = function(op: PictOp, dst: PICTURE, color: COLOR, rectsLen: number, rects: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xB3xI', op, dst))
  throw new Error('FIXME support sending this type: COLOR ')
  rects.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 26)
}


declare module './connection' {
  interface XConnection {
    createCursor (cid: CURSOR, source: PICTURE, x: number, y: number): RequestChecker
  }
}

XConnection.prototype.createCursor = function(cid: CURSOR, source: PICTURE, x: number, y: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIHH', cid, source, x, y))

  return this.sendVoidRequest(requestParts, 27)
}


declare module './connection' {
  interface XConnection {
    setPictureTransform (picture: PICTURE, transform: TRANSFORM): RequestChecker
  }
}

XConnection.prototype.setPictureTransform = function(picture: PICTURE, transform: TRANSFORM): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  throw new Error('FIXME support sending this type: TRANSFORM ')

  return this.sendVoidRequest(requestParts, 28)
}


declare module './connection' {
  interface XConnection {
    queryFilters (drawable: DRAWABLE): QueryFiltersCookie
  }
}

XConnection.prototype.queryFilters = function(drawable: DRAWABLE): QueryFiltersCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', drawable))

  return this.sendRequest<QueryFilters>(requestParts, 29, unmarshallQueryFilters)
}


declare module './connection' {
  interface XConnection {
    setPictureFilter (picture: PICTURE, filter: Int8Array, valuesLen: number, values: Int32Array): RequestChecker
  }
}

XConnection.prototype.setPictureFilter = function(picture: PICTURE, filter: Int8Array, valuesLen: number, values: Int32Array): RequestChecker {
  const filterLen = filter.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', picture, filterLen))
  requestParts.push(filter.buffer)
  requestParts.push(pack('<x', ))
  requestParts.push(values.buffer)

  return this.sendVoidRequest(requestParts, 30)
}


declare module './connection' {
  interface XConnection {
    createAnimCursor (cid: CURSOR, cursorsLen: number, cursors: ANIMCURSORELT[]): RequestChecker
  }
}

XConnection.prototype.createAnimCursor = function(cid: CURSOR, cursorsLen: number, cursors: ANIMCURSORELT[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cid))
  cursors.forEach(({cursor, delay}) => {
  requestParts.push(pack('<II', cursor, delay))

  })

  return this.sendVoidRequest(requestParts, 31)
}


declare module './connection' {
  interface XConnection {
    addTraps (picture: PICTURE, xOff: number, yOff: number, trapsLen: number, traps: TRAP[]): RequestChecker
  }
}

XConnection.prototype.addTraps = function(picture: PICTURE, xOff: number, yOff: number, trapsLen: number, traps: TRAP[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIhh', picture, xOff, yOff))
  traps.forEach(({top, bot}) => {
  throw new Error('FIXME support sending this type: SPANFIX ')
  throw new Error('FIXME support sending this type: SPANFIX ')

  })

  return this.sendVoidRequest(requestParts, 32)
}


declare module './connection' {
  interface XConnection {
    createSolidFill (picture: PICTURE, color: COLOR): RequestChecker
  }
}

XConnection.prototype.createSolidFill = function(picture: PICTURE, color: COLOR): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  throw new Error('FIXME support sending this type: COLOR ')

  return this.sendVoidRequest(requestParts, 33)
}


declare module './connection' {
  interface XConnection {
    createLinearGradient (picture: PICTURE, p1: POINTFIX, p2: POINTFIX, stops: Int32Array, colors: COLOR[]): RequestChecker
  }
}

XConnection.prototype.createLinearGradient = function(picture: PICTURE, p1: POINTFIX, p2: POINTFIX, stops: Int32Array, colors: COLOR[]): RequestChecker {
  const numStops = stops.length
  const numStops = colors.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  throw new Error('FIXME support sending this type: POINTFIX ')
  throw new Error('FIXME support sending this type: POINTFIX ')
  requestParts.push(pack('<I', numStops))
  requestParts.push(stops.buffer)
  colors.forEach(({red, green, blue, alpha}) => {
  requestParts.push(pack('<HHHH', red, green, blue, alpha))

  })

  return this.sendVoidRequest(requestParts, 34)
}


declare module './connection' {
  interface XConnection {
    createRadialGradient (picture: PICTURE, inner: POINTFIX, outer: POINTFIX, innerRadius: FIXED, outerRadius: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker
  }
}

XConnection.prototype.createRadialGradient = function(picture: PICTURE, inner: POINTFIX, outer: POINTFIX, innerRadius: FIXED, outerRadius: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker {
  const numStops = stops.length
  const numStops = colors.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  throw new Error('FIXME support sending this type: POINTFIX ')
  throw new Error('FIXME support sending this type: POINTFIX ')
  requestParts.push(pack('<iiI', innerRadius, outerRadius, numStops))
  requestParts.push(stops.buffer)
  colors.forEach(({red, green, blue, alpha}) => {
  requestParts.push(pack('<HHHH', red, green, blue, alpha))

  })

  return this.sendVoidRequest(requestParts, 35)
}


declare module './connection' {
  interface XConnection {
    createConicalGradient (picture: PICTURE, center: POINTFIX, angle: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker
  }
}

XConnection.prototype.createConicalGradient = function(picture: PICTURE, center: POINTFIX, angle: FIXED, stops: Int32Array, colors: COLOR[]): RequestChecker {
  const numStops = stops.length
  const numStops = colors.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', picture))
  throw new Error('FIXME support sending this type: POINTFIX ')
  requestParts.push(pack('<iI', angle, numStops))
  requestParts.push(stops.buffer)
  colors.forEach(({red, green, blue, alpha}) => {
  requestParts.push(pack('<HHHH', red, green, blue, alpha))

  })

  return this.sendVoidRequest(requestParts, 36)
}

errors[0] = [unmarshallPictFormatError, BadPictFormat]
errors[1] = [unmarshallPictureError, BadPicture]
errors[2] = [unmarshallPictOpError, BadPictOp]
errors[3] = [unmarshallGlyphSetError, BadGlyphSet]
errors[4] = [unmarshallGlyphError, BadGlyph]
