//
// This file generated automatically from xproto.xml by ts_client.py.
// Edit at your peril.
//

import {
  xcbSimpleList,
  xcbComplexList,
  UnmarshallResult,
  Unmarshaller,
  typePad,
  sendRequest
} from './xjsbInternals'
import { unpackFrom, pack } from './struct'
import TypedArray = NodeJS.TypedArray


export type CHAR2B = {
  byte1: number
  byte2: number
}

const unmarshallCHAR2B: Unmarshaller<CHAR2B> = (buffer, offset = 0) => {
  const [byte1, byte2] = unpackFrom('BB', buffer, offset)
  offset += 2

  return {
    value: {
      byte1,
      byte2
    },
    offset
  }
}

export type WINDOW = number


export type PIXMAP = number


export type CURSOR = number


export type FONT = number


export type GCONTEXT = number


export type COLORMAP = number


export type ATOM = number


export type DRAWABLE = number


export type FONTABLE = number


export type BOOL32 = number


export type VISUALID = number


export type TIMESTAMP = number


export type KEYSYM = number


export type KEYCODE = number


export type KEYCODE32 = number


export type BUTTON = number


export type POINT = {
  x: number
  y: number
}

const unmarshallPOINT: Unmarshaller<POINT> = (buffer, offset = 0) => {
  const [x, y] = unpackFrom('hh', buffer, offset)
  offset += 4

  return {
    value: {
      x,
      y
    },
    offset
  }
}

export type RECTANGLE = {
  x: number
  y: number
  width: number
  height: number
}

const unmarshallRECTANGLE: Unmarshaller<RECTANGLE> = (buffer, offset = 0) => {
  const [x, y, width, height] = unpackFrom('hhHH', buffer, offset)
  offset += 8

  return {
    value: {
      x,
      y,
      width,
      height
    },
    offset
  }
}

export type ARC = {
  x: number
  y: number
  width: number
  height: number
  angle1: number
  angle2: number
}

const unmarshallARC: Unmarshaller<ARC> = (buffer, offset = 0) => {
  const [x, y, width, height, angle1, angle2] = unpackFrom('hhHHhh', buffer, offset)
  offset += 12

  return {
    value: {
      x,
      y,
      width,
      height,
      angle1,
      angle2
    },
    offset
  }
}

export type FORMAT = {
  depth: number
  bitsPerPixel: number
  scanlinePad: number
}

const unmarshallFORMAT: Unmarshaller<FORMAT> = (buffer, offset = 0) => {
  const [depth, bitsPerPixel, scanlinePad] = unpackFrom('BBB5x', buffer, offset)
  offset += 8

  return {
    value: {
      depth,
      bitsPerPixel,
      scanlinePad
    },
    offset
  }
}

export enum VisualClass {
  StaticGray = 0,
  GrayScale = 1,
  StaticColor = 2,
  PseudoColor = 3,
  TrueColor = 4,
  DirectColor = 5,
}

export type VISUALTYPE = {
  visualId: VISUALID
  _class: VisualClass
  bitsPerRgbValue: number
  colormapEntries: number
  redMask: number
  greenMask: number
  blueMask: number
}

const unmarshallVISUALTYPE: Unmarshaller<VISUALTYPE> = (buffer, offset = 0) => {
  const [visualId, _class, bitsPerRgbValue, colormapEntries, redMask, greenMask, blueMask] = unpackFrom('IBBHIII4x', buffer, offset)
  offset += 24

  return {
    value: {
      visualId,
      _class,
      bitsPerRgbValue,
      colormapEntries,
      redMask,
      greenMask,
      blueMask
    },
    offset
  }
}

export type DEPTH = {
  depth: number
  visualsLen: number
  visuals: VISUALTYPE[]
}

const unmarshallDEPTH: Unmarshaller<DEPTH> = (buffer, offset = 0) => {
  const [depth, visualsLen] = unpackFrom('BxH4x', buffer, offset)
  offset += 8
  const visualsWithOffset = xcbComplexList(buffer, offset, visualsLen, unmarshallVISUALTYPE)
  offset = visualsWithOffset.offset
  const visuals = visualsWithOffset.value

  return {
    value: {
      depth,
      visualsLen,
      visuals
    },
    offset
  }
}

export enum EventMask {
  NoEvent = 0,
  KeyPress = 1,
  KeyRelease = 2,
  ButtonPress = 4,
  ButtonRelease = 8,
  EnterWindow = 16,
  LeaveWindow = 32,
  PointerMotion = 64,
  PointerMotionHint = 128,
  Button1Motion = 256,
  Button2Motion = 512,
  Button3Motion = 1024,
  Button4Motion = 2048,
  Button5Motion = 4096,
  ButtonMotion = 8192,
  KeymapState = 16384,
  Exposure = 32768,
  VisibilityChange = 65536,
  StructureNotify = 131072,
  ResizeRedirect = 262144,
  SubstructureNotify = 524288,
  SubstructureRedirect = 1048576,
  FocusChange = 2097152,
  PropertyChange = 4194304,
  ColorMapChange = 8388608,
  OwnerGrabButton = 16777216,
}

export enum BackingStore {
  NotUseful = 0,
  WhenMapped = 1,
  Always = 2,
}

export type SCREEN = {
  root: WINDOW
  defaultColormap: COLORMAP
  whitePixel: number
  blackPixel: number
  currentInputMasks: number
  widthInPixels: number
  heightInPixels: number
  widthInMillimeters: number
  heightInMillimeters: number
  minInstalledMaps: number
  maxInstalledMaps: number
  rootVisual: VISUALID
  backingStores: BackingStore
  saveUnders: number
  rootDepth: number
  allowedDepthsLen: number
  allowedDepths: DEPTH[]
}

const unmarshallSCREEN: Unmarshaller<SCREEN> = (buffer, offset = 0) => {
  const [root, defaultColormap, whitePixel, blackPixel, currentInputMasks, widthInPixels, heightInPixels, widthInMillimeters, heightInMillimeters, minInstalledMaps, maxInstalledMaps, rootVisual, backingStores, saveUnders, rootDepth, allowedDepthsLen] = unpackFrom('IIIIIHHHHHHIBBBB', buffer, offset)
  offset += 40
  const allowedDepthsWithOffset = xcbComplexList(buffer, offset, allowedDepthsLen, unmarshallDEPTH)
  offset = allowedDepthsWithOffset.offset
  const allowedDepths = allowedDepthsWithOffset.value

  return {
    value: {
      root,
      defaultColormap,
      whitePixel,
      blackPixel,
      currentInputMasks,
      widthInPixels,
      heightInPixels,
      widthInMillimeters,
      heightInMillimeters,
      minInstalledMaps,
      maxInstalledMaps,
      rootVisual,
      backingStores,
      saveUnders,
      rootDepth,
      allowedDepthsLen,
      allowedDepths
    },
    offset
  }
}

export type SetupRequest = {
  byteOrder: number
  protocolMajorVersion: number
  protocolMinorVersion: number
  authorizationProtocolNameLen: number
  authorizationProtocolDataLen: number
  authorizationProtocolName: number[] | string
  authorizationProtocolData: number[] | string
}

const unmarshallSetupRequest: Unmarshaller<SetupRequest> = (buffer, offset = 0) => {
  const [byteOrder, protocolMajorVersion, protocolMinorVersion, authorizationProtocolNameLen, authorizationProtocolDataLen] = unpackFrom('BxHHHH2x', buffer, offset)
  offset += 12
  const authorizationProtocolNameWithOffset = xcbSimpleList(buffer, offset, authorizationProtocolNameLen, 'b', 1)
  offset = authorizationProtocolNameWithOffset.offset
  const authorizationProtocolName = authorizationProtocolNameWithOffset.value
  offset += 1
  offset += typePad(1, offset)
  const authorizationProtocolDataWithOffset = xcbSimpleList(buffer, offset, authorizationProtocolDataLen, 'b', 1)
  offset = authorizationProtocolDataWithOffset.offset
  const authorizationProtocolData = authorizationProtocolDataWithOffset.value

  return {
    value: {
      byteOrder,
      protocolMajorVersion,
      protocolMinorVersion,
      authorizationProtocolNameLen,
      authorizationProtocolDataLen,
      authorizationProtocolName,
      authorizationProtocolData
    },
    offset
  }
}

export type SetupFailed = {
  status: number
  reasonLen: number
  protocolMajorVersion: number
  protocolMinorVersion: number
  length: number
  reason: number[] | string
}

const unmarshallSetupFailed: Unmarshaller<SetupFailed> = (buffer, offset = 0) => {
  const [status, reasonLen, protocolMajorVersion, protocolMinorVersion, length] = unpackFrom('BBHHH', buffer, offset)
  offset += 8
  const reasonWithOffset = xcbSimpleList(buffer, offset, reasonLen, 'b', 1)
  offset = reasonWithOffset.offset
  const reason = reasonWithOffset.value

  return {
    value: {
      status,
      reasonLen,
      protocolMajorVersion,
      protocolMinorVersion,
      length,
      reason
    },
    offset
  }
}

export type SetupAuthenticate = {
  status: number
  length: number
  reason: number[] | string
}

const unmarshallSetupAuthenticate: Unmarshaller<SetupAuthenticate> = (buffer, offset = 0) => {
  const [status, length] = unpackFrom('B5xH', buffer, offset)
  offset += 8
  const reasonWithOffset = xcbSimpleList(buffer, offset, (length * 4), 'b', 1)
  offset = reasonWithOffset.offset
  const reason = reasonWithOffset.value

  return {
    value: {
      status,
      length,
      reason
    },
    offset
  }
}

export enum ImageOrder {
  LSBFirst = 0,
  MSBFirst = 1,
}

export type Setup = {
  status: number
  protocolMajorVersion: number
  protocolMinorVersion: number
  length: number
  releaseNumber: number
  resourceIdBase: number
  resourceIdMask: number
  motionBufferSize: number
  vendorLen: number
  maximumRequestLength: number
  rootsLen: number
  pixmapFormatsLen: number
  imageByteOrder: ImageOrder
  bitmapFormatBitOrder: ImageOrder
  bitmapFormatScanlineUnit: number
  bitmapFormatScanlinePad: number
  minKeycode: KEYCODE
  maxKeycode: KEYCODE
  vendor: number[] | string
  pixmapFormats: FORMAT[]
  roots: SCREEN[]
}

const unmarshallSetup: Unmarshaller<Setup> = (buffer, offset = 0) => {
  const [status, protocolMajorVersion, protocolMinorVersion, length, releaseNumber, resourceIdBase, resourceIdMask, motionBufferSize, vendorLen, maximumRequestLength, rootsLen, pixmapFormatsLen, imageByteOrder, bitmapFormatBitOrder, bitmapFormatScanlineUnit, bitmapFormatScanlinePad, minKeycode, maxKeycode] = unpackFrom('BxHHHIIIIHHBBBBBBBB4x', buffer, offset)
  offset += 40
  const vendorWithOffset = xcbSimpleList(buffer, offset, vendorLen, 'b', 1)
  offset = vendorWithOffset.offset
  const vendor = vendorWithOffset.value
  offset += 1
  offset += typePad(8, offset)
  const pixmapFormatsWithOffset = xcbComplexList(buffer, offset, pixmapFormatsLen, unmarshallFORMAT)
  offset = pixmapFormatsWithOffset.offset
  const pixmapFormats = pixmapFormatsWithOffset.value
  offset += typePad(4, offset)
  const rootsWithOffset = xcbComplexList(buffer, offset, rootsLen, unmarshallSCREEN)
  offset = rootsWithOffset.offset
  const roots = rootsWithOffset.value

  return {
    value: {
      status,
      protocolMajorVersion,
      protocolMinorVersion,
      length,
      releaseNumber,
      resourceIdBase,
      resourceIdMask,
      motionBufferSize,
      vendorLen,
      maximumRequestLength,
      rootsLen,
      pixmapFormatsLen,
      imageByteOrder,
      bitmapFormatBitOrder,
      bitmapFormatScanlineUnit,
      bitmapFormatScanlinePad,
      minKeycode,
      maxKeycode,
      vendor,
      pixmapFormats,
      roots
    },
    offset
  }
}

export enum ModMask {
  Shift = 1,
  Lock = 2,
  Control = 4,
  _1 = 8,
  _2 = 16,
  _3 = 32,
  _4 = 64,
  _5 = 128,
  Any = 32768,
}

export enum KeyButMask {
  Shift = 1,
  Lock = 2,
  Control = 4,
  Mod1 = 8,
  Mod2 = 16,
  Mod3 = 32,
  Mod4 = 64,
  Mod5 = 128,
  Button1 = 256,
  Button2 = 512,
  Button3 = 1024,
  Button4 = 2048,
  Button5 = 4096,
}

export enum Window {
  None = 0,
}

export enum ButtonMask {
  _1 = 256,
  _2 = 512,
  _3 = 1024,
  _4 = 2048,
  _5 = 4096,
  Any = 32768,
}

export enum Motion {
  Normal = 0,
  Hint = 1,
}

export enum NotifyDetail {
  Ancestor = 0,
  Virtual = 1,
  Inferior = 2,
  Nonlinear = 3,
  NonlinearVirtual = 4,
  Pointer = 5,
  PointerRoot = 6,
  None = 7,
}

export enum NotifyMode {
  Normal = 0,
  Grab = 1,
  Ungrab = 2,
  WhileGrabbed = 3,
}

export enum Visibility {
  Unobscured = 0,
  PartiallyObscured = 1,
  FullyObscured = 2,
}

export enum Place {
  OnTop = 0,
  OnBottom = 1,
}

export enum Property {
  NewValue = 0,
  Delete = 1,
}

export enum Time {
  CurrentTime = 0,
}

export enum Atom {
  None = 0,
  Any = 0,
  PRIMARY = 1,
  SECONDARY = 2,
  ARC = 3,
  ATOM = 4,
  BITMAP = 5,
  CARDINAL = 6,
  COLORMAP = 7,
  CURSOR = 8,
  cutBuffer0 = 9,
  cutBuffer1 = 10,
  cutBuffer2 = 11,
  cutBuffer3 = 12,
  cutBuffer4 = 13,
  cutBuffer5 = 14,
  cutBuffer6 = 15,
  cutBuffer7 = 16,
  DRAWABLE = 17,
  FONT = 18,
  INTEGER = 19,
  PIXMAP = 20,
  POINT = 21,
  RECTANGLE = 22,
  resourceManager = 23,
  rgbColorMap = 24,
  rgbBestMap = 25,
  rgbBlueMap = 26,
  rgbDefaultMap = 27,
  rgbGrayMap = 28,
  rgbGreenMap = 29,
  rgbRedMap = 30,
  STRING = 31,
  VISUALID = 32,
  WINDOW = 33,
  wmCommand = 34,
  wmHints = 35,
  wmClientMachine = 36,
  wmIconName = 37,
  wmIconSize = 38,
  wmName = 39,
  wmNormalHints = 40,
  wmSizeHints = 41,
  wmZoomHints = 42,
  minSpace = 43,
  normSpace = 44,
  maxSpace = 45,
  endSpace = 46,
  superscriptX = 47,
  superscriptY = 48,
  subscriptX = 49,
  subscriptY = 50,
  underlinePosition = 51,
  underlineThickness = 52,
  strikeoutAscent = 53,
  strikeoutDescent = 54,
  italicAngle = 55,
  xHeight = 56,
  quadWidth = 57,
  WEIGHT = 58,
  pointSize = 59,
  RESOLUTION = 60,
  COPYRIGHT = 61,
  NOTICE = 62,
  fontName = 63,
  familyName = 64,
  fullName = 65,
  capHeight = 66,
  wmClass = 67,
  wmTransientFor = 68,
}

export enum ColormapState {
  Uninstalled = 0,
  Installed = 1,
}

export enum Colormap {
  None = 0,
}

export type ClientMessageData = {
  data8: number[]
  data16: number[]
  data32: number[]
}

const unmarshallClientMessageData: Unmarshaller<ClientMessageData> = (buffer, offset = 0) => {
  let size = 0

  const data8WithOffset = xcbSimpleList(buffer, offset, 20, 'B', 1)
  const data8 = data8WithOffset.value
  size = Math.max(size, data8WithOffset.offset - offset)
  const data16WithOffset = xcbSimpleList(buffer, offset, 10, 'H', 2)
  const data16 = data16WithOffset.value
  size = Math.max(size, data16WithOffset.offset - offset)
  const data32WithOffset = xcbSimpleList(buffer, offset, 5, 'I', 4)
  const data32 = data32WithOffset.value
  size = Math.max(size, data32WithOffset.offset - offset)
  offset += size

  return {
    value: {
      data8,
      data16,
      data32
    },
    offset
  }
}

export enum Mapping {
  Modifier = 0,
  Keyboard = 1,
  Pointer = 2,
}

export enum WindowClass {
  CopyFromParent = 0,
  InputOutput = 1,
  InputOnly = 2,
}

export enum CW {
  BackPixmap = 1,
  BackPixel = 2,
  BorderPixmap = 4,
  BorderPixel = 8,
  BitGravity = 16,
  WinGravity = 32,
  BackingStore = 64,
  BackingPlanes = 128,
  BackingPixel = 256,
  OverrideRedirect = 512,
  SaveUnder = 1024,
  EventMask = 2048,
  DontPropagate = 4096,
  Colormap = 8192,
  Cursor = 16384,
}

export enum BackPixmap {
  None = 0,
  ParentRelative = 1,
}

export enum Gravity {
  BitForget = 0,
  WinUnmap = 0,
  NorthWest = 1,
  North = 2,
  NorthEast = 3,
  West = 4,
  Center = 5,
  East = 6,
  SouthWest = 7,
  South = 8,
  SouthEast = 9,
  Static = 10,
}

export enum MapState {
  Unmapped = 0,
  Unviewable = 1,
  Viewable = 2,
}

export type GetWindowAttributesCookie = Promise<GetWindowAttributesReply>

export type GetWindowAttributesReply = {
  backingStore: BackingStore
  visual: VISUALID
  _class: WindowClass
  bitGravity: Gravity
  winGravity: Gravity
  backingPlanes: number
  backingPixel: number
  saveUnder: number
  mapIsInstalled: number
  mapState: MapState
  overrideRedirect: number
  colormap: COLORMAP
  allEventMasks: number
  yourEventMask: number
  doNotPropagateMask: number
}

const unmarshallGetWindowAttributesReply: Unmarshaller<GetWindowAttributesReply> = (buffer, offset = 0) => {
  const [backingStore, visual, _class, bitGravity, winGravity, backingPlanes, backingPixel, saveUnder, mapIsInstalled, mapState, overrideRedirect, colormap, allEventMasks, yourEventMask, doNotPropagateMask] = unpackFrom('xB2x4xIHBBIIBBBBIIIH2x', buffer, offset)
  offset += 44

  return {
    value: {
      backingStore,
      visual,
      _class,
      bitGravity,
      winGravity,
      backingPlanes,
      backingPixel,
      saveUnder,
      mapIsInstalled,
      mapState,
      overrideRedirect,
      colormap,
      allEventMasks,
      yourEventMask,
      doNotPropagateMask
    },
    offset
  }
}

export enum SetMode {
  Insert = 0,
  Delete = 1,
}

export enum ConfigWindow {
  X = 1,
  Y = 2,
  Width = 4,
  Height = 8,
  BorderWidth = 16,
  Sibling = 32,
  StackMode = 64,
}

export enum StackMode {
  Above = 0,
  Below = 1,
  TopIf = 2,
  BottomIf = 3,
  Opposite = 4,
}

export enum Circulate {
  RaiseLowest = 0,
  LowerHighest = 1,
}

export type GetGeometryCookie = Promise<GetGeometryReply>

export type GetGeometryReply = {
  depth: number
  root: WINDOW
  x: number
  y: number
  width: number
  height: number
  borderWidth: number
}

const unmarshallGetGeometryReply: Unmarshaller<GetGeometryReply> = (buffer, offset = 0) => {
  const [depth, root, x, y, width, height, borderWidth] = unpackFrom('xB2x4xIhhHHH2x', buffer, offset)
  offset += 24

  return {
    value: {
      depth,
      root,
      x,
      y,
      width,
      height,
      borderWidth
    },
    offset
  }
}

export type QueryTreeCookie = Promise<QueryTreeReply>

export type QueryTreeReply = {
  root: WINDOW
  parent: WINDOW
  childrenLen: number
  children: WINDOW[]
}

const unmarshallQueryTreeReply: Unmarshaller<QueryTreeReply> = (buffer, offset = 0) => {
  const [root, parent, childrenLen] = unpackFrom('xx2x4xIIH14x', buffer, offset)
  offset += 32
  const childrenWithOffset = xcbSimpleList(buffer, offset, childrenLen, 'I', 4)
  offset = childrenWithOffset.offset
  const children = childrenWithOffset.value

  return {
    value: {
      root,
      parent,
      childrenLen,
      children
    },
    offset
  }
}

export type InternAtomCookie = Promise<InternAtomReply>

export type InternAtomReply = {
  atom: ATOM
}

const unmarshallInternAtomReply: Unmarshaller<InternAtomReply> = (buffer, offset = 0) => {
  const [atom] = unpackFrom('xx2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      atom
    },
    offset
  }
}

export type GetAtomNameCookie = Promise<GetAtomNameReply>

export type GetAtomNameReply = {
  nameLen: number
  name: number[] | string
}

const unmarshallGetAtomNameReply: Unmarshaller<GetAtomNameReply> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, 'b', 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      nameLen,
      name
    },
    offset
  }
}

export enum PropMode {
  Replace = 0,
  Prepend = 1,
  Append = 2,
}

export enum GetPropertyType {
  Any = 0,
}

export type GetPropertyCookie = Promise<GetPropertyReply>

export type GetPropertyReply = {
  format: number
  _type: ATOM
  bytesAfter: number
  valueLen: number
  value: any[]
}

const unmarshallGetPropertyReply: Unmarshaller<GetPropertyReply> = (buffer, offset = 0) => {
  const [format, _type, bytesAfter, valueLen] = unpackFrom('xB2x4xIII12x', buffer, offset)
  offset += 32
  const valueWithOffset = xcbSimpleList(buffer, offset, (valueLen * (format / 8)), 'B', 1)
  offset = valueWithOffset.offset
  const value = valueWithOffset.value

  return {
    value: {
      format,
      _type,
      bytesAfter,
      valueLen,
      value
    },
    offset
  }
}

export type ListPropertiesCookie = Promise<ListPropertiesReply>

export type ListPropertiesReply = {
  atomsLen: number
  atoms: ATOM[]
}

const unmarshallListPropertiesReply: Unmarshaller<ListPropertiesReply> = (buffer, offset = 0) => {
  const [atomsLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const atomsWithOffset = xcbSimpleList(buffer, offset, atomsLen, 'I', 4)
  offset = atomsWithOffset.offset
  const atoms = atomsWithOffset.value

  return {
    value: {
      atomsLen,
      atoms
    },
    offset
  }
}

export type GetSelectionOwnerCookie = Promise<GetSelectionOwnerReply>

export type GetSelectionOwnerReply = {
  owner: WINDOW
}

const unmarshallGetSelectionOwnerReply: Unmarshaller<GetSelectionOwnerReply> = (buffer, offset = 0) => {
  const [owner] = unpackFrom('xx2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      owner
    },
    offset
  }
}

export enum SendEventDest {
  PointerWindow = 0,
  ItemFocus = 1,
}

export enum GrabMode {
  Sync = 0,
  Async = 1,
}

export enum GrabStatus {
  Success = 0,
  AlreadyGrabbed = 1,
  InvalidTime = 2,
  NotViewable = 3,
  Frozen = 4,
}

export enum Cursor {
  None = 0,
}

export type GrabPointerCookie = Promise<GrabPointerReply>

export type GrabPointerReply = {
  status: GrabStatus
}

const unmarshallGrabPointerReply: Unmarshaller<GrabPointerReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status
    },
    offset
  }
}

export enum ButtonIndex {
  Any = 0,
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
  _5 = 5,
}

export type GrabKeyboardCookie = Promise<GrabKeyboardReply>

export type GrabKeyboardReply = {
  status: GrabStatus
}

const unmarshallGrabKeyboardReply: Unmarshaller<GrabKeyboardReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status
    },
    offset
  }
}

export enum Grab {
  Any = 0,
}

export enum Allow {
  AsyncPointer = 0,
  SyncPointer = 1,
  ReplayPointer = 2,
  AsyncKeyboard = 3,
  SyncKeyboard = 4,
  ReplayKeyboard = 5,
  AsyncBoth = 6,
  SyncBoth = 7,
}

export type QueryPointerCookie = Promise<QueryPointerReply>

export type QueryPointerReply = {
  sameScreen: number
  root: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  winX: number
  winY: number
  mask: number
}

const unmarshallQueryPointerReply: Unmarshaller<QueryPointerReply> = (buffer, offset = 0) => {
  const [sameScreen, root, child, rootX, rootY, winX, winY, mask] = unpackFrom('xB2x4xIIhhhhH2x', buffer, offset)
  offset += 28

  return {
    value: {
      sameScreen,
      root,
      child,
      rootX,
      rootY,
      winX,
      winY,
      mask
    },
    offset
  }
}

export type TIMECOORD = {
  time: TIMESTAMP
  x: number
  y: number
}

const unmarshallTIMECOORD: Unmarshaller<TIMECOORD> = (buffer, offset = 0) => {
  const [time, x, y] = unpackFrom('Ihh', buffer, offset)
  offset += 8

  return {
    value: {
      time,
      x,
      y
    },
    offset
  }
}

export type GetMotionEventsCookie = Promise<GetMotionEventsReply>

export type GetMotionEventsReply = {
  eventsLen: number
  events: TIMECOORD[]
}

const unmarshallGetMotionEventsReply: Unmarshaller<GetMotionEventsReply> = (buffer, offset = 0) => {
  const [eventsLen] = unpackFrom('xx2x4xI20x', buffer, offset)
  offset += 32
  const eventsWithOffset = xcbComplexList(buffer, offset, eventsLen, unmarshallTIMECOORD)
  offset = eventsWithOffset.offset
  const events = eventsWithOffset.value

  return {
    value: {
      eventsLen,
      events
    },
    offset
  }
}

export type TranslateCoordinatesCookie = Promise<TranslateCoordinatesReply>

export type TranslateCoordinatesReply = {
  sameScreen: number
  child: WINDOW
  dstX: number
  dstY: number
}

const unmarshallTranslateCoordinatesReply: Unmarshaller<TranslateCoordinatesReply> = (buffer, offset = 0) => {
  const [sameScreen, child, dstX, dstY] = unpackFrom('xB2x4xIhh', buffer, offset)
  offset += 16

  return {
    value: {
      sameScreen,
      child,
      dstX,
      dstY
    },
    offset
  }
}

export enum InputFocus {
  None = 0,
  PointerRoot = 1,
  Parent = 2,
  FollowKeyboard = 3,
}

export type GetInputFocusCookie = Promise<GetInputFocusReply>

export type GetInputFocusReply = {
  revertTo: InputFocus
  focus: WINDOW
}

const unmarshallGetInputFocusReply: Unmarshaller<GetInputFocusReply> = (buffer, offset = 0) => {
  const [revertTo, focus] = unpackFrom('xB2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      revertTo,
      focus
    },
    offset
  }
}

export type QueryKeymapCookie = Promise<QueryKeymapReply>

export type QueryKeymapReply = {
  keys: number[]
}

const unmarshallQueryKeymapReply: Unmarshaller<QueryKeymapReply> = (buffer, offset = 0) => {
  offset += 8
  const keysWithOffset = xcbSimpleList(buffer, offset, 32, 'B', 1)
  offset = keysWithOffset.offset
  const keys = keysWithOffset.value

  return {
    value: {
      keys
    },
    offset
  }
}

export enum FontDraw {
  LeftToRight = 0,
  RightToLeft = 1,
}

export type FONTPROP = {
  name: ATOM
  value: number
}

const unmarshallFONTPROP: Unmarshaller<FONTPROP> = (buffer, offset = 0) => {
  const [name, value] = unpackFrom('II', buffer, offset)
  offset += 8

  return {
    value: {
      name,
      value
    },
    offset
  }
}

export type CHARINFO = {
  leftSideBearing: number
  rightSideBearing: number
  characterWidth: number
  ascent: number
  descent: number
  attributes: number
}

const unmarshallCHARINFO: Unmarshaller<CHARINFO> = (buffer, offset = 0) => {
  const [leftSideBearing, rightSideBearing, characterWidth, ascent, descent, attributes] = unpackFrom('hhhhhH', buffer, offset)
  offset += 12

  return {
    value: {
      leftSideBearing,
      rightSideBearing,
      characterWidth,
      ascent,
      descent,
      attributes
    },
    offset
  }
}

export type QueryFontCookie = Promise<QueryFontReply>

export type QueryFontReply = {
  minBounds: CHARINFO
  maxBounds: CHARINFO
  minCharOrByte2: number
  maxCharOrByte2: number
  defaultChar: number
  propertiesLen: number
  drawDirection: FontDraw
  minByte1: number
  maxByte1: number
  allCharsExist: number
  fontAscent: number
  fontDescent: number
  charInfosLen: number
  properties: FONTPROP[]
  charInfos: CHARINFO[]
}

const unmarshallQueryFontReply: Unmarshaller<QueryFontReply> = (buffer, offset = 0) => {
  offset += 8
  const minBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const minBounds = minBoundsWithOffset.value
  offset = minBoundsWithOffset.offset
  offset += 4
  offset += typePad(12, offset)
  const maxBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const maxBounds = maxBoundsWithOffset.value
  offset = maxBoundsWithOffset.offset
  const [minCharOrByte2, maxCharOrByte2, defaultChar, propertiesLen, drawDirection, minByte1, maxByte1, allCharsExist, fontAscent, fontDescent, charInfosLen] = unpackFrom('4xHHHHBBBBhhI', buffer, offset)
  offset += 24
  offset += typePad(8, offset)
  const propertiesWithOffset = xcbComplexList(buffer, offset, propertiesLen, unmarshallFONTPROP)
  offset = propertiesWithOffset.offset
  const properties = propertiesWithOffset.value
  offset += typePad(12, offset)
  const charInfosWithOffset = xcbComplexList(buffer, offset, charInfosLen, unmarshallCHARINFO)
  offset = charInfosWithOffset.offset
  const charInfos = charInfosWithOffset.value

  return {
    value: {
      minBounds,
      maxBounds,
      minCharOrByte2,
      maxCharOrByte2,
      defaultChar,
      propertiesLen,
      drawDirection,
      minByte1,
      maxByte1,
      allCharsExist,
      fontAscent,
      fontDescent,
      charInfosLen,
      properties,
      charInfos
    },
    offset
  }
}

export type QueryTextExtentsCookie = Promise<QueryTextExtentsReply>

export type QueryTextExtentsReply = {
  drawDirection: FontDraw
  fontAscent: number
  fontDescent: number
  overallAscent: number
  overallDescent: number
  overallWidth: number
  overallLeft: number
  overallRight: number
}

const unmarshallQueryTextExtentsReply: Unmarshaller<QueryTextExtentsReply> = (buffer, offset = 0) => {
  const [drawDirection, fontAscent, fontDescent, overallAscent, overallDescent, overallWidth, overallLeft, overallRight] = unpackFrom('xB2x4xhhhhiii', buffer, offset)
  offset += 28

  return {
    value: {
      drawDirection,
      fontAscent,
      fontDescent,
      overallAscent,
      overallDescent,
      overallWidth,
      overallLeft,
      overallRight
    },
    offset
  }
}

export type STR = {
  nameLen: number
  name: number[] | string
}

const unmarshallSTR: Unmarshaller<STR> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('B', buffer, offset)
  offset += 1
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, 'b', 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      nameLen,
      name
    },
    offset
  }
}

export type ListFontsCookie = Promise<ListFontsReply>

export type ListFontsReply = {
  namesLen: number
  names: STR[]
}

const unmarshallListFontsReply: Unmarshaller<ListFontsReply> = (buffer, offset = 0) => {
  const [namesLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const namesWithOffset = xcbComplexList(buffer, offset, namesLen, unmarshallSTR)
  offset = namesWithOffset.offset
  const names = namesWithOffset.value

  return {
    value: {
      namesLen,
      names
    },
    offset
  }
}

export type ListFontsWithInfoCookie = Promise<ListFontsWithInfoReply>

export type ListFontsWithInfoReply = {
  nameLen: number
  minBounds: CHARINFO
  maxBounds: CHARINFO
  minCharOrByte2: number
  maxCharOrByte2: number
  defaultChar: number
  propertiesLen: number
  drawDirection: FontDraw
  minByte1: number
  maxByte1: number
  allCharsExist: number
  fontAscent: number
  fontDescent: number
  repliesHint: number
  properties: FONTPROP[]
  name: number[] | string
}

const unmarshallListFontsWithInfoReply: Unmarshaller<ListFontsWithInfoReply> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('xB2x4x', buffer, offset)
  offset += 8
  const minBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const minBounds = minBoundsWithOffset.value
  offset = minBoundsWithOffset.offset
  offset += 4
  offset += typePad(12, offset)
  const maxBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const maxBounds = maxBoundsWithOffset.value
  offset = maxBoundsWithOffset.offset
  const [minCharOrByte2, maxCharOrByte2, defaultChar, propertiesLen, drawDirection, minByte1, maxByte1, allCharsExist, fontAscent, fontDescent, repliesHint] = unpackFrom('4xHHHHBBBBhhI', buffer, offset)
  offset += 24
  offset += typePad(8, offset)
  const propertiesWithOffset = xcbComplexList(buffer, offset, propertiesLen, unmarshallFONTPROP)
  offset = propertiesWithOffset.offset
  const properties = propertiesWithOffset.value
  offset += typePad(1, offset)
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, 'b', 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      nameLen,
      minBounds,
      maxBounds,
      minCharOrByte2,
      maxCharOrByte2,
      defaultChar,
      propertiesLen,
      drawDirection,
      minByte1,
      maxByte1,
      allCharsExist,
      fontAscent,
      fontDescent,
      repliesHint,
      properties,
      name
    },
    offset
  }
}

export type GetFontPathCookie = Promise<GetFontPathReply>

export type GetFontPathReply = {
  pathLen: number
  path: STR[]
}

const unmarshallGetFontPathReply: Unmarshaller<GetFontPathReply> = (buffer, offset = 0) => {
  const [pathLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const pathWithOffset = xcbComplexList(buffer, offset, pathLen, unmarshallSTR)
  offset = pathWithOffset.offset
  const path = pathWithOffset.value

  return {
    value: {
      pathLen,
      path
    },
    offset
  }
}

export enum GC {
  Function = 1,
  PlaneMask = 2,
  Foreground = 4,
  Background = 8,
  LineWidth = 16,
  LineStyle = 32,
  CapStyle = 64,
  JoinStyle = 128,
  FillStyle = 256,
  FillRule = 512,
  Tile = 1024,
  Stipple = 2048,
  TileStippleOriginX = 4096,
  TileStippleOriginY = 8192,
  Font = 16384,
  SubwindowMode = 32768,
  GraphicsExposures = 65536,
  ClipOriginX = 131072,
  ClipOriginY = 262144,
  ClipMask = 524288,
  DashOffset = 1048576,
  DashList = 2097152,
  ArcMode = 4194304,
}

export enum GX {
  clear = 0,
  and = 1,
  andReverse = 2,
  copy = 3,
  andInverted = 4,
  noop = 5,
  xor = 6,
  or = 7,
  nor = 8,
  equiv = 9,
  invert = 10,
  orReverse = 11,
  copyInverted = 12,
  orInverted = 13,
  nand = 14,
  set = 15,
}

export enum LineStyle {
  Solid = 0,
  OnOffDash = 1,
  DoubleDash = 2,
}

export enum CapStyle {
  NotLast = 0,
  Butt = 1,
  Round = 2,
  Projecting = 3,
}

export enum JoinStyle {
  Miter = 0,
  Round = 1,
  Bevel = 2,
}

export enum FillStyle {
  Solid = 0,
  Tiled = 1,
  Stippled = 2,
  OpaqueStippled = 3,
}

export enum FillRule {
  EvenOdd = 0,
  Winding = 1,
}

export enum SubwindowMode {
  ClipByChildren = 0,
  IncludeInferiors = 1,
}

export enum ArcMode {
  Chord = 0,
  PieSlice = 1,
}

export enum ClipOrdering {
  Unsorted = 0,
  YSorted = 1,
  YXSorted = 2,
  YXBanded = 3,
}

export enum CoordMode {
  Origin = 0,
  Previous = 1,
}

export type SEGMENT = {
  x1: number
  y1: number
  x2: number
  y2: number
}

const unmarshallSEGMENT: Unmarshaller<SEGMENT> = (buffer, offset = 0) => {
  const [x1, y1, x2, y2] = unpackFrom('hhhh', buffer, offset)
  offset += 8

  return {
    value: {
      x1,
      y1,
      x2,
      y2
    },
    offset
  }
}

export enum PolyShape {
  Complex = 0,
  Nonconvex = 1,
  Convex = 2,
}

export enum ImageFormat {
  XYBitmap = 0,
  XYPixmap = 1,
  ZPixmap = 2,
}

export type GetImageCookie = Promise<GetImageReply>

export type GetImageReply = {
  depth: number
  visual: VISUALID
  data: number[]
}

const unmarshallGetImageReply: Unmarshaller<GetImageReply> = (buffer, offset = 0) => {
  const [depth, visual] = unpackFrom('xB2x4xI20x', buffer, offset)
  offset += 32
  const dataWithOffset = xcbSimpleList(buffer, offset, (length * 4), 'B', 1)
  offset = dataWithOffset.offset
  const data = dataWithOffset.value

  return {
    value: {
      depth,
      visual,
      data
    },
    offset
  }
}

export enum ColormapAlloc {
  None = 0,
  All = 1,
}

export type ListInstalledColormapsCookie = Promise<ListInstalledColormapsReply>

export type ListInstalledColormapsReply = {
  cmapsLen: number
  cmaps: COLORMAP[]
}

const unmarshallListInstalledColormapsReply: Unmarshaller<ListInstalledColormapsReply> = (buffer, offset = 0) => {
  const [cmapsLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const cmapsWithOffset = xcbSimpleList(buffer, offset, cmapsLen, 'I', 4)
  offset = cmapsWithOffset.offset
  const cmaps = cmapsWithOffset.value

  return {
    value: {
      cmapsLen,
      cmaps
    },
    offset
  }
}

export type AllocColorCookie = Promise<AllocColorReply>

export type AllocColorReply = {
  red: number
  green: number
  blue: number
  pixel: number
}

const unmarshallAllocColorReply: Unmarshaller<AllocColorReply> = (buffer, offset = 0) => {
  const [red, green, blue, pixel] = unpackFrom('xx2x4xHHH2xI', buffer, offset)
  offset += 20

  return {
    value: {
      red,
      green,
      blue,
      pixel
    },
    offset
  }
}

export type AllocNamedColorCookie = Promise<AllocNamedColorReply>

export type AllocNamedColorReply = {
  pixel: number
  exactRed: number
  exactGreen: number
  exactBlue: number
  visualRed: number
  visualGreen: number
  visualBlue: number
}

const unmarshallAllocNamedColorReply: Unmarshaller<AllocNamedColorReply> = (buffer, offset = 0) => {
  const [pixel, exactRed, exactGreen, exactBlue, visualRed, visualGreen, visualBlue] = unpackFrom('xx2x4xIHHHHHH', buffer, offset)
  offset += 24

  return {
    value: {
      pixel,
      exactRed,
      exactGreen,
      exactBlue,
      visualRed,
      visualGreen,
      visualBlue
    },
    offset
  }
}

export type AllocColorCellsCookie = Promise<AllocColorCellsReply>

export type AllocColorCellsReply = {
  pixelsLen: number
  masksLen: number
  pixels: number[]
  masks: number[]
}

const unmarshallAllocColorCellsReply: Unmarshaller<AllocColorCellsReply> = (buffer, offset = 0) => {
  const [pixelsLen, masksLen] = unpackFrom('xx2x4xHH20x', buffer, offset)
  offset += 32
  const pixelsWithOffset = xcbSimpleList(buffer, offset, pixelsLen, 'I', 4)
  offset = pixelsWithOffset.offset
  const pixels = pixelsWithOffset.value
  offset += typePad(4, offset)
  const masksWithOffset = xcbSimpleList(buffer, offset, masksLen, 'I', 4)
  offset = masksWithOffset.offset
  const masks = masksWithOffset.value

  return {
    value: {
      pixelsLen,
      masksLen,
      pixels,
      masks
    },
    offset
  }
}

export type AllocColorPlanesCookie = Promise<AllocColorPlanesReply>

export type AllocColorPlanesReply = {
  pixelsLen: number
  redMask: number
  greenMask: number
  blueMask: number
  pixels: number[]
}

const unmarshallAllocColorPlanesReply: Unmarshaller<AllocColorPlanesReply> = (buffer, offset = 0) => {
  const [pixelsLen, redMask, greenMask, blueMask] = unpackFrom('xx2x4xH2xIII8x', buffer, offset)
  offset += 32
  const pixelsWithOffset = xcbSimpleList(buffer, offset, pixelsLen, 'I', 4)
  offset = pixelsWithOffset.offset
  const pixels = pixelsWithOffset.value

  return {
    value: {
      pixelsLen,
      redMask,
      greenMask,
      blueMask,
      pixels
    },
    offset
  }
}

export enum ColorFlag {
  Red = 1,
  Green = 2,
  Blue = 4,
}

export type COLORITEM = {
  pixel: number
  red: number
  green: number
  blue: number
  flags: number
}

const unmarshallCOLORITEM: Unmarshaller<COLORITEM> = (buffer, offset = 0) => {
  const [pixel, red, green, blue, flags] = unpackFrom('IHHHBx', buffer, offset)
  offset += 12

  return {
    value: {
      pixel,
      red,
      green,
      blue,
      flags
    },
    offset
  }
}

export type RGB = {
  red: number
  green: number
  blue: number
}

const unmarshallRGB: Unmarshaller<RGB> = (buffer, offset = 0) => {
  const [red, green, blue] = unpackFrom('HHH2x', buffer, offset)
  offset += 8

  return {
    value: {
      red,
      green,
      blue
    },
    offset
  }
}

export type QueryColorsCookie = Promise<QueryColorsReply>

export type QueryColorsReply = {
  colorsLen: number
  colors: RGB[]
}

const unmarshallQueryColorsReply: Unmarshaller<QueryColorsReply> = (buffer, offset = 0) => {
  const [colorsLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const colorsWithOffset = xcbComplexList(buffer, offset, colorsLen, unmarshallRGB)
  offset = colorsWithOffset.offset
  const colors = colorsWithOffset.value

  return {
    value: {
      colorsLen,
      colors
    },
    offset
  }
}

export type LookupColorCookie = Promise<LookupColorReply>

export type LookupColorReply = {
  exactRed: number
  exactGreen: number
  exactBlue: number
  visualRed: number
  visualGreen: number
  visualBlue: number
}

const unmarshallLookupColorReply: Unmarshaller<LookupColorReply> = (buffer, offset = 0) => {
  const [exactRed, exactGreen, exactBlue, visualRed, visualGreen, visualBlue] = unpackFrom('xx2x4xHHHHHH', buffer, offset)
  offset += 20

  return {
    value: {
      exactRed,
      exactGreen,
      exactBlue,
      visualRed,
      visualGreen,
      visualBlue
    },
    offset
  }
}

export enum Pixmap {
  None = 0,
}

export enum Font {
  None = 0,
}

export enum QueryShapeOf {
  LargestCursor = 0,
  FastestTile = 1,
  FastestStipple = 2,
}

export type QueryBestSizeCookie = Promise<QueryBestSizeReply>

export type QueryBestSizeReply = {
  width: number
  height: number
}

const unmarshallQueryBestSizeReply: Unmarshaller<QueryBestSizeReply> = (buffer, offset = 0) => {
  const [width, height] = unpackFrom('xx2x4xHH', buffer, offset)
  offset += 12

  return {
    value: {
      width,
      height
    },
    offset
  }
}

export type QueryExtensionCookie = Promise<QueryExtensionReply>

export type QueryExtensionReply = {
  present: number
  majorOpcode: number
  firstEvent: number
  firstError: number
}

const unmarshallQueryExtensionReply: Unmarshaller<QueryExtensionReply> = (buffer, offset = 0) => {
  const [present, majorOpcode, firstEvent, firstError] = unpackFrom('xx2x4xBBBB', buffer, offset)
  offset += 12

  return {
    value: {
      present,
      majorOpcode,
      firstEvent,
      firstError
    },
    offset
  }
}

export type ListExtensionsCookie = Promise<ListExtensionsReply>

export type ListExtensionsReply = {
  namesLen: number
  names: STR[]
}

const unmarshallListExtensionsReply: Unmarshaller<ListExtensionsReply> = (buffer, offset = 0) => {
  const [namesLen] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const namesWithOffset = xcbComplexList(buffer, offset, namesLen, unmarshallSTR)
  offset = namesWithOffset.offset
  const names = namesWithOffset.value

  return {
    value: {
      namesLen,
      names
    },
    offset
  }
}

export type GetKeyboardMappingCookie = Promise<GetKeyboardMappingReply>

export type GetKeyboardMappingReply = {
  keysymsPerKeycode: number
  keysyms: KEYSYM[]
}

const unmarshallGetKeyboardMappingReply: Unmarshaller<GetKeyboardMappingReply> = (buffer, offset = 0) => {
  const [keysymsPerKeycode] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const keysymsWithOffset = xcbSimpleList(buffer, offset, length, 'I', 4)
  offset = keysymsWithOffset.offset
  const keysyms = keysymsWithOffset.value

  return {
    value: {
      keysymsPerKeycode,
      keysyms
    },
    offset
  }
}

export enum KB {
  KeyClickPercent = 1,
  BellPercent = 2,
  BellPitch = 4,
  BellDuration = 8,
  Led = 16,
  LedMode = 32,
  Key = 64,
  AutoRepeatMode = 128,
}

export enum LedMode {
  Off = 0,
  On = 1,
}

export enum AutoRepeatMode {
  Off = 0,
  On = 1,
  Default = 2,
}

export type GetKeyboardControlCookie = Promise<GetKeyboardControlReply>

export type GetKeyboardControlReply = {
  globalAutoRepeat: AutoRepeatMode
  ledMask: number
  keyClickPercent: number
  bellPercent: number
  bellPitch: number
  bellDuration: number
  autoRepeats: number[]
}

const unmarshallGetKeyboardControlReply: Unmarshaller<GetKeyboardControlReply> = (buffer, offset = 0) => {
  const [globalAutoRepeat, ledMask, keyClickPercent, bellPercent, bellPitch, bellDuration] = unpackFrom('xB2x4xIBBHH2x', buffer, offset)
  offset += 20
  const autoRepeatsWithOffset = xcbSimpleList(buffer, offset, 32, 'B', 1)
  offset = autoRepeatsWithOffset.offset
  const autoRepeats = autoRepeatsWithOffset.value

  return {
    value: {
      globalAutoRepeat,
      ledMask,
      keyClickPercent,
      bellPercent,
      bellPitch,
      bellDuration,
      autoRepeats
    },
    offset
  }
}

export type GetPointerControlCookie = Promise<GetPointerControlReply>

export type GetPointerControlReply = {
  accelerationNumerator: number
  accelerationDenominator: number
  threshold: number
}

const unmarshallGetPointerControlReply: Unmarshaller<GetPointerControlReply> = (buffer, offset = 0) => {
  const [accelerationNumerator, accelerationDenominator, threshold] = unpackFrom('xx2x4xHHH18x', buffer, offset)
  offset += 32

  return {
    value: {
      accelerationNumerator,
      accelerationDenominator,
      threshold
    },
    offset
  }
}

export enum Blanking {
  NotPreferred = 0,
  Preferred = 1,
  Default = 2,
}

export enum Exposures {
  NotAllowed = 0,
  Allowed = 1,
  Default = 2,
}

export type GetScreenSaverCookie = Promise<GetScreenSaverReply>

export type GetScreenSaverReply = {
  timeout: number
  interval: number
  preferBlanking: Blanking
  allowExposures: Exposures
}

const unmarshallGetScreenSaverReply: Unmarshaller<GetScreenSaverReply> = (buffer, offset = 0) => {
  const [timeout, interval, preferBlanking, allowExposures] = unpackFrom('xx2x4xHHBB18x', buffer, offset)
  offset += 32

  return {
    value: {
      timeout,
      interval,
      preferBlanking,
      allowExposures
    },
    offset
  }
}

export enum HostMode {
  Insert = 0,
  Delete = 1,
}

export enum Family {
  Internet = 0,
  DECnet = 1,
  Chaos = 2,
  ServerInterpreted = 5,
  Internet6 = 6,
}

export type HOST = {
  family: Family
  addressLen: number
  address: number[]
}

const unmarshallHOST: Unmarshaller<HOST> = (buffer, offset = 0) => {
  const [family, addressLen] = unpackFrom('BxH', buffer, offset)
  offset += 4
  const addressWithOffset = xcbSimpleList(buffer, offset, addressLen, 'B', 1)
  offset = addressWithOffset.offset
  const address = addressWithOffset.value

  return {
    value: {
      family,
      addressLen,
      address
    },
    offset
  }
}

export type ListHostsCookie = Promise<ListHostsReply>

export type ListHostsReply = {
  mode: AccessControl
  hostsLen: number
  hosts: HOST[]
}

const unmarshallListHostsReply: Unmarshaller<ListHostsReply> = (buffer, offset = 0) => {
  const [mode, hostsLen] = unpackFrom('xB2x4xH22x', buffer, offset)
  offset += 32
  const hostsWithOffset = xcbComplexList(buffer, offset, hostsLen, unmarshallHOST)
  offset = hostsWithOffset.offset
  const hosts = hostsWithOffset.value

  return {
    value: {
      mode,
      hostsLen,
      hosts
    },
    offset
  }
}

export enum AccessControl {
  Disable = 0,
  Enable = 1,
}

export enum CloseDown {
  DestroyAll = 0,
  RetainPermanent = 1,
  RetainTemporary = 2,
}

export enum Kill {
  AllTemporary = 0,
}

export enum ScreenSaver {
  Reset = 0,
  Active = 1,
}

export enum MappingStatus {
  Success = 0,
  Busy = 1,
  Failure = 2,
}

export type SetPointerMappingCookie = Promise<SetPointerMappingReply>

export type SetPointerMappingReply = {
  status: MappingStatus
}

const unmarshallSetPointerMappingReply: Unmarshaller<SetPointerMappingReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status
    },
    offset
  }
}

export type GetPointerMappingCookie = Promise<GetPointerMappingReply>

export type GetPointerMappingReply = {
  mapLen: number
  map: number[]
}

const unmarshallGetPointerMappingReply: Unmarshaller<GetPointerMappingReply> = (buffer, offset = 0) => {
  const [mapLen] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const mapWithOffset = xcbSimpleList(buffer, offset, mapLen, 'B', 1)
  offset = mapWithOffset.offset
  const map = mapWithOffset.value

  return {
    value: {
      mapLen,
      map
    },
    offset
  }
}

export enum MapIndex {
  Shift = 0,
  Lock = 1,
  Control = 2,
  _1 = 3,
  _2 = 4,
  _3 = 5,
  _4 = 6,
  _5 = 7,
}

export type SetModifierMappingCookie = Promise<SetModifierMappingReply>

export type SetModifierMappingReply = {
  status: MappingStatus
}

const unmarshallSetModifierMappingReply: Unmarshaller<SetModifierMappingReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status
    },
    offset
  }
}

export type GetModifierMappingCookie = Promise<GetModifierMappingReply>

export type GetModifierMappingReply = {
  keycodesPerModifier: number
  keycodes: KEYCODE[]
}

const unmarshallGetModifierMappingReply: Unmarshaller<GetModifierMappingReply> = (buffer, offset = 0) => {
  const [keycodesPerModifier] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const keycodesWithOffset = xcbSimpleList(buffer, offset, (keycodesPerModifier * 8), 'B', 1)
  offset = keycodesWithOffset.offset
  const keycodes = keycodesWithOffset.value

  return {
    value: {
      keycodesPerModifier,
      keycodes
    },
    offset
  }
}


export function CreateWindowChecked(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: { backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    backgroundPixmap: CW.BackPixmap,
    backgroundPixel: CW.BackPixel,
    borderPixmap: CW.BorderPixmap,
    borderPixel: CW.BorderPixel,
    bitGravity: CW.BitGravity,
    winGravity: CW.WinGravity,
    backingStore: CW.BackingStore,
    backingPlanes: CW.BackingPlanes,
    backingPixel: CW.BackingPixel,
    overrideRedirect: CW.OverrideRedirect,
    saveUnder: CW.SaveUnder,
    eventMask: CW.EventMask,
    doNotPropogateMask: CW.DontPropagate,
    colormap: CW.Colormap,
    cursor: CW.Cursor
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xB2xIIhhHHHHII', depth, wid, parent, x, y, width, height, borderWidth, _class, visual, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 1, true, true)
}

export function CreateWindow(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: { backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    backgroundPixmap: CW.BackPixmap,
    backgroundPixel: CW.BackPixel,
    borderPixmap: CW.BorderPixmap,
    borderPixel: CW.BorderPixel,
    bitGravity: CW.BitGravity,
    winGravity: CW.WinGravity,
    backingStore: CW.BackingStore,
    backingPlanes: CW.BackingPlanes,
    backingPixel: CW.BackingPixel,
    overrideRedirect: CW.OverrideRedirect,
    saveUnder: CW.SaveUnder,
    eventMask: CW.EventMask,
    doNotPropogateMask: CW.DontPropagate,
    colormap: CW.Colormap,
    cursor: CW.Cursor
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xB2xIIhhHHHHII', depth, wid, parent, x, y, width, height, borderWidth, _class, visual, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 1, true, false)
}

export function ChangeWindowAttributesChecked(window: WINDOW, valueList: { backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    backgroundPixmap: CW.BackPixmap,
    backgroundPixel: CW.BackPixel,
    borderPixmap: CW.BorderPixmap,
    borderPixel: CW.BorderPixel,
    bitGravity: CW.BitGravity,
    winGravity: CW.WinGravity,
    backingStore: CW.BackingStore,
    backingPlanes: CW.BackingPlanes,
    backingPixel: CW.BackingPixel,
    overrideRedirect: CW.OverrideRedirect,
    saveUnder: CW.SaveUnder,
    eventMask: CW.EventMask,
    doNotPropogateMask: CW.DontPropagate,
    colormap: CW.Colormap,
    cursor: CW.Cursor
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xII', window, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 2, true, true)
}

export function ChangeWindowAttributes(window: WINDOW, valueList: { backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    backgroundPixmap: CW.BackPixmap,
    backgroundPixel: CW.BackPixel,
    borderPixmap: CW.BorderPixmap,
    borderPixel: CW.BorderPixel,
    bitGravity: CW.BitGravity,
    winGravity: CW.WinGravity,
    backingStore: CW.BackingStore,
    backingPlanes: CW.BackingPlanes,
    backingPixel: CW.BackingPixel,
    overrideRedirect: CW.OverrideRedirect,
    saveUnder: CW.SaveUnder,
    eventMask: CW.EventMask,
    doNotPropogateMask: CW.DontPropagate,
    colormap: CW.Colormap,
    cursor: CW.Cursor
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xII', window, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 2, true, false)
}

export function GetWindowAttributes(window: WINDOW): GetWindowAttributesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<GetWindowAttributesReply>(requestParts, 3, false, true, unmarshallGetWindowAttributesReply)
}

export function GetWindowAttributesUnchecked(window: WINDOW): GetWindowAttributesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<GetWindowAttributesReply>(requestParts, 3, false, false, unmarshallGetWindowAttributesReply)
}

export function DestroyWindowChecked(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 4, true, true)
}

export function DestroyWindow(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 4, true, false)
}

export function DestroySubwindowsChecked(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 5, true, true)
}

export function DestroySubwindows(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 5, true, false)
}

export function ChangeSaveSetChecked(mode: SetMode, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, window))

  return sendRequest<void>(requestParts, 6, true, true)
}

export function ChangeSaveSet(mode: SetMode, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, window))

  return sendRequest<void>(requestParts, 6, true, false)
}

export function ReparentWindowChecked(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', window, parent, x, y))

  return sendRequest<void>(requestParts, 7, true, true)
}

export function ReparentWindow(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', window, parent, x, y))

  return sendRequest<void>(requestParts, 7, true, false)
}

export function MapWindowChecked(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 8, true, true)
}

export function MapWindow(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 8, true, false)
}

export function MapSubwindowsChecked(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 9, true, true)
}

export function MapSubwindows(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 9, true, false)
}

export function UnmapWindowChecked(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 10, true, true)
}

export function UnmapWindow(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 10, true, false)
}

export function UnmapSubwindowsChecked(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 11, true, true)
}

export function UnmapSubwindows(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(requestParts, 11, true, false)
}

export function ConfigureWindowChecked(window: WINDOW, valueList: { x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    x: ConfigWindow.X,
    y: ConfigWindow.Y,
    width: ConfigWindow.Width,
    height: ConfigWindow.Height,
    borderWidth: ConfigWindow.BorderWidth,
    sibling: ConfigWindow.Sibling,
    stackMode: ConfigWindow.StackMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xIH2x', window, valueMask))
  requestParts.push(pack('=iiIIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 12, true, true)
}

export function ConfigureWindow(window: WINDOW, valueList: { x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    x: ConfigWindow.X,
    y: ConfigWindow.Y,
    width: ConfigWindow.Width,
    height: ConfigWindow.Height,
    borderWidth: ConfigWindow.BorderWidth,
    sibling: ConfigWindow.Sibling,
    stackMode: ConfigWindow.StackMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xIH2x', window, valueMask))
  requestParts.push(pack('=iiIIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 12, true, false)
}

export function CirculateWindowChecked(direction: Circulate, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', direction, window))

  return sendRequest<void>(requestParts, 13, true, true)
}

export function CirculateWindow(direction: Circulate, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', direction, window))

  return sendRequest<void>(requestParts, 13, true, false)
}

export function GetGeometry(drawable: DRAWABLE): GetGeometryCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', drawable))

  return sendRequest<GetGeometryReply>(requestParts, 14, false, true, unmarshallGetGeometryReply)
}

export function GetGeometryUnchecked(drawable: DRAWABLE): GetGeometryCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', drawable))

  return sendRequest<GetGeometryReply>(requestParts, 14, false, false, unmarshallGetGeometryReply)
}

export function QueryTree(window: WINDOW): QueryTreeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryTreeReply>(requestParts, 15, false, true, unmarshallQueryTreeReply)
}

export function QueryTreeUnchecked(window: WINDOW): QueryTreeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryTreeReply>(requestParts, 15, false, false, unmarshallQueryTreeReply)
}

export function InternAtom(onlyIfExists: number, nameLen: number, name: number[] | string): InternAtomCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xH2x', onlyIfExists, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<InternAtomReply>(requestParts, 16, false, true, unmarshallInternAtomReply)
}

export function InternAtomUnchecked(onlyIfExists: number, nameLen: number, name: number[] | string): InternAtomCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xH2x', onlyIfExists, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<InternAtomReply>(requestParts, 16, false, false, unmarshallInternAtomReply)
}

export function GetAtomName(atom: ATOM): GetAtomNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', atom))

  return sendRequest<GetAtomNameReply>(requestParts, 17, false, true, unmarshallGetAtomNameReply)
}

export function GetAtomNameUnchecked(atom: ATOM): GetAtomNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', atom))

  return sendRequest<GetAtomNameReply>(requestParts, 17, false, false, unmarshallGetAtomNameReply)
}

export function ChangePropertyChecked(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, data: TypedArray): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIB3xI', mode, window, property, _type, data.BYTES_PER_ELEMENT * 4, data.length))
  requestParts.push(data.buffer)

  return sendRequest<void>(requestParts, 18, true, true)
}

export function ChangeProperty(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, dataLen: number, data: any[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIB3xI', mode, window, property, _type, format, dataLen))
  requestParts.push(pack(`=${'B'.repeat(data.length)}`, ...(typeof data === 'string' ? (data as string).split('').map(char => char.charCodeAt(0)) : data)))

  return sendRequest<void>(requestParts, 18, true, false)
}

export function DeletePropertyChecked(window: WINDOW, property: ATOM): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', window, property))

  return sendRequest<void>(requestParts, 19, true, true)
}

export function DeleteProperty(window: WINDOW, property: ATOM): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', window, property))

  return sendRequest<void>(requestParts, 19, true, false)
}

export function GetProperty(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIII', _delete, window, property, _type, longOffset, longLength))

  return sendRequest<GetPropertyReply>(requestParts, 20, false, true, unmarshallGetPropertyReply)
}

export function GetPropertyUnchecked(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIII', _delete, window, property, _type, longOffset, longLength))

  return sendRequest<GetPropertyReply>(requestParts, 20, false, false, unmarshallGetPropertyReply)
}

export function ListProperties(window: WINDOW): ListPropertiesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListPropertiesReply>(requestParts, 21, false, true, unmarshallListPropertiesReply)
}

export function ListPropertiesUnchecked(window: WINDOW): ListPropertiesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListPropertiesReply>(requestParts, 21, false, false, unmarshallListPropertiesReply)
}

export function SetSelectionOwnerChecked(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', owner, selection, time))

  return sendRequest<void>(requestParts, 22, true, true)
}

export function SetSelectionOwner(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', owner, selection, time))

  return sendRequest<void>(requestParts, 22, true, false)
}

export function GetSelectionOwner(selection: ATOM): GetSelectionOwnerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', selection))

  return sendRequest<GetSelectionOwnerReply>(requestParts, 23, false, true, unmarshallGetSelectionOwnerReply)
}

export function GetSelectionOwnerUnchecked(selection: ATOM): GetSelectionOwnerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', selection))

  return sendRequest<GetSelectionOwnerReply>(requestParts, 23, false, false, unmarshallGetSelectionOwnerReply)
}

export function ConvertSelectionChecked(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIII', requestor, selection, target, property, time))

  return sendRequest<void>(requestParts, 24, true, true)
}

export function ConvertSelection(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIII', requestor, selection, target, property, time))

  return sendRequest<void>(requestParts, 24, true, false)
}

export function SendEventChecked(propagate: number, destination: WINDOW, eventMask: number, event: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', propagate, destination, eventMask))
  requestParts.push(pack(`=${'b'.repeat(event.length)}`, ...(typeof event === 'string' ? (event as string).split('').map(char => char.charCodeAt(0)) : event)))

  return sendRequest<void>(requestParts, 25, true, true)
}

export function SendEvent(propagate: number, destination: WINDOW, eventMask: number, event: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', propagate, destination, eventMask))
  requestParts.push(pack(`=${'b'.repeat(event.length)}`, ...(typeof event === 'string' ? (event as string).split('').map(char => char.charCodeAt(0)) : event)))

  return sendRequest<void>(requestParts, 25, true, false)
}

export function GrabPointer(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIII', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, time))

  return sendRequest<GrabPointerReply>(requestParts, 26, false, true, unmarshallGrabPointerReply)
}

export function GrabPointerUnchecked(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIII', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, time))

  return sendRequest<GrabPointerReply>(requestParts, 26, false, false, unmarshallGrabPointerReply)
}

export function UngrabPointerChecked(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(requestParts, 27, true, true)
}

export function UngrabPointer(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(requestParts, 27, true, false)
}

export function GrabButtonChecked(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIIBxH', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, button, modifiers))

  return sendRequest<void>(requestParts, 28, true, true)
}

export function GrabButton(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIIBxH', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, button, modifiers))

  return sendRequest<void>(requestParts, 28, true, false)
}

export function UngrabButtonChecked(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', button, grabWindow, modifiers))

  return sendRequest<void>(requestParts, 29, true, true)
}

export function UngrabButton(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', button, grabWindow, modifiers))

  return sendRequest<void>(requestParts, 29, true, false)
}

export function ChangeActivePointerGrabChecked(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIH2x', cursor, time, eventMask))

  return sendRequest<void>(requestParts, 30, true, true)
}

export function ChangeActivePointerGrab(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIH2x', cursor, time, eventMask))

  return sendRequest<void>(requestParts, 30, true, false)
}

export function GrabKeyboard(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIBB2x', ownerEvents, grabWindow, time, pointerMode, keyboardMode))

  return sendRequest<GrabKeyboardReply>(requestParts, 31, false, true, unmarshallGrabKeyboardReply)
}

export function GrabKeyboardUnchecked(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIBB2x', ownerEvents, grabWindow, time, pointerMode, keyboardMode))

  return sendRequest<GrabKeyboardReply>(requestParts, 31, false, false, unmarshallGrabKeyboardReply)
}

export function UngrabKeyboardChecked(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(requestParts, 32, true, true)
}

export function UngrabKeyboard(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(requestParts, 32, true, false)
}

export function GrabKeyChecked(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBB3x', ownerEvents, grabWindow, modifiers, key, pointerMode, keyboardMode))

  return sendRequest<void>(requestParts, 33, true, true)
}

export function GrabKey(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBB3x', ownerEvents, grabWindow, modifiers, key, pointerMode, keyboardMode))

  return sendRequest<void>(requestParts, 33, true, false)
}

export function UngrabKeyChecked(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', key, grabWindow, modifiers))

  return sendRequest<void>(requestParts, 34, true, true)
}

export function UngrabKey(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', key, grabWindow, modifiers))

  return sendRequest<void>(requestParts, 34, true, false)
}

export function AllowEventsChecked(mode: Allow, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, time))

  return sendRequest<void>(requestParts, 35, true, true)
}

export function AllowEvents(mode: Allow, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, time))

  return sendRequest<void>(requestParts, 35, true, false)
}

export function GrabServerChecked(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(requestParts, 36, true, true)
}

export function GrabServer(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(requestParts, 36, true, false)
}

export function UngrabServerChecked(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(requestParts, 37, true, true)
}

export function UngrabServer(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(requestParts, 37, true, false)
}

export function QueryPointer(window: WINDOW): QueryPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryPointerReply>(requestParts, 38, false, true, unmarshallQueryPointerReply)
}

export function QueryPointerUnchecked(window: WINDOW): QueryPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryPointerReply>(requestParts, 38, false, false, unmarshallQueryPointerReply)
}

export function GetMotionEvents(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', window, start, stop))

  return sendRequest<GetMotionEventsReply>(requestParts, 39, false, true, unmarshallGetMotionEventsReply)
}

export function GetMotionEventsUnchecked(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', window, start, stop))

  return sendRequest<GetMotionEventsReply>(requestParts, 39, false, false, unmarshallGetMotionEventsReply)
}

export function TranslateCoordinates(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', srcWindow, dstWindow, srcX, srcY))

  return sendRequest<TranslateCoordinatesReply>(requestParts, 40, false, true, unmarshallTranslateCoordinatesReply)
}

export function TranslateCoordinatesUnchecked(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', srcWindow, dstWindow, srcX, srcY))

  return sendRequest<TranslateCoordinatesReply>(requestParts, 40, false, false, unmarshallTranslateCoordinatesReply)
}

export function WarpPointerChecked(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhhHHhh', srcWindow, dstWindow, srcX, srcY, srcWidth, srcHeight, dstX, dstY))

  return sendRequest<void>(requestParts, 41, true, true)
}

export function WarpPointer(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhhHHhh', srcWindow, dstWindow, srcX, srcY, srcWidth, srcHeight, dstX, dstY))

  return sendRequest<void>(requestParts, 41, true, false)
}

export function SetInputFocusChecked(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', revertTo, focus, time))

  return sendRequest<void>(requestParts, 42, true, true)
}

export function SetInputFocus(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', revertTo, focus, time))

  return sendRequest<void>(requestParts, 42, true, false)
}

export function GetInputFocus(): GetInputFocusCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetInputFocusReply>(requestParts, 43, false, true, unmarshallGetInputFocusReply)
}

export function GetInputFocusUnchecked(): GetInputFocusCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetInputFocusReply>(requestParts, 43, false, false, unmarshallGetInputFocusReply)
}

export function QueryKeymap(): QueryKeymapCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<QueryKeymapReply>(requestParts, 44, false, true, unmarshallQueryKeymapReply)
}

export function QueryKeymapUnchecked(): QueryKeymapCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<QueryKeymapReply>(requestParts, 44, false, false, unmarshallQueryKeymapReply)
}

export function OpenFontChecked(fid: FONT, nameLen: number, name: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', fid, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<void>(requestParts, 45, true, true)
}

export function OpenFont(fid: FONT, nameLen: number, name: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', fid, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<void>(requestParts, 45, true, false)
}

export function CloseFontChecked(font: FONT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<void>(requestParts, 46, true, true)
}

export function CloseFont(font: FONT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<void>(requestParts, 46, true, false)
}

export function QueryFont(font: FONTABLE): QueryFontCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<QueryFontReply>(requestParts, 47, false, true, unmarshallQueryFontReply)
}

export function QueryFontUnchecked(font: FONTABLE): QueryFontCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<QueryFontReply>(requestParts, 47, false, false, unmarshallQueryFontReply)
}

export function QueryTextExtents(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=x'))
  requestParts.push(pack('=B', (stringLen & 1)))
  requestParts.push(pack('=2xI', font))
  _string.forEach(member => requestParts.push(pack('=BB', ...[member.byte1, member.byte2])))

  return sendRequest<QueryTextExtentsReply>(requestParts, 48, false, true, unmarshallQueryTextExtentsReply)
}

export function QueryTextExtentsUnchecked(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=x'))
  requestParts.push(pack('=B', (stringLen & 1)))
  requestParts.push(pack('=2xI', font))
  _string.forEach(member => requestParts.push(pack('=BB', ...[member.byte1, member.byte2])))

  return sendRequest<QueryTextExtentsReply>(requestParts, 48, false, false, unmarshallQueryTextExtentsReply)
}

export function ListFonts(maxNames: number, patternLen: number, pattern: number[] | string): ListFontsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pack(`=${'b'.repeat(pattern.length)}`, ...(typeof pattern === 'string' ? (pattern as string).split('').map(char => char.charCodeAt(0)) : pattern)))

  return sendRequest<ListFontsReply>(requestParts, 49, false, true, unmarshallListFontsReply)
}

export function ListFontsUnchecked(maxNames: number, patternLen: number, pattern: number[] | string): ListFontsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pack(`=${'b'.repeat(pattern.length)}`, ...(typeof pattern === 'string' ? (pattern as string).split('').map(char => char.charCodeAt(0)) : pattern)))

  return sendRequest<ListFontsReply>(requestParts, 49, false, false, unmarshallListFontsReply)
}

export function ListFontsWithInfo(maxNames: number, patternLen: number, pattern: number[] | string): ListFontsWithInfoCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pack(`=${'b'.repeat(pattern.length)}`, ...(typeof pattern === 'string' ? (pattern as string).split('').map(char => char.charCodeAt(0)) : pattern)))

  return sendRequest<ListFontsWithInfoReply>(requestParts, 50, false, true, unmarshallListFontsWithInfoReply)
}

export function ListFontsWithInfoUnchecked(maxNames: number, patternLen: number, pattern: number[] | string): ListFontsWithInfoCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pack(`=${'b'.repeat(pattern.length)}`, ...(typeof pattern === 'string' ? (pattern as string).split('').map(char => char.charCodeAt(0)) : pattern)))

  return sendRequest<ListFontsWithInfoReply>(requestParts, 50, false, false, unmarshallListFontsWithInfoReply)
}

export function SetFontPathChecked(fontQty: number, font: STR[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', fontQty))
  font.forEach(member => requestParts.push(pack('=None', ...[member.nameLen, member.name])))

  return sendRequest<void>(requestParts, 51, true, true)
}

export function SetFontPath(fontQty: number, font: STR[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', fontQty))
  font.forEach(member => requestParts.push(pack('=None', ...[member.nameLen, member.name])))

  return sendRequest<void>(requestParts, 51, true, false)
}

export function GetFontPath(): GetFontPathCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetFontPathReply>(requestParts, 52, false, true, unmarshallGetFontPathReply)
}

export function GetFontPathUnchecked(): GetFontPathCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetFontPathReply>(requestParts, 52, false, false, unmarshallGetFontPathReply)
}

export function CreatePixmapChecked(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHH', depth, pid, drawable, width, height))

  return sendRequest<void>(requestParts, 53, true, true)
}

export function CreatePixmap(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHH', depth, pid, drawable, width, height))

  return sendRequest<void>(requestParts, 53, true, false)
}

export function FreePixmapChecked(pixmap: PIXMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', pixmap))

  return sendRequest<void>(requestParts, 54, true, true)
}

export function FreePixmap(pixmap: PIXMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', pixmap))

  return sendRequest<void>(requestParts, 54, true, false)
}

export function CreateGCChecked(cid: GCONTEXT, drawable: DRAWABLE, valueList: { function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    function: GC.Function,
    planeMask: GC.PlaneMask,
    foreground: GC.Foreground,
    background: GC.Background,
    lineWidth: GC.LineWidth,
    lineStyle: GC.LineStyle,
    capStyle: GC.CapStyle,
    joinStyle: GC.JoinStyle,
    fillStyle: GC.FillStyle,
    fillRule: GC.FillRule,
    tile: GC.Tile,
    stipple: GC.Stipple,
    tileStippleXOrigin: GC.TileStippleOriginX,
    tileStippleYOrigin: GC.TileStippleOriginY,
    font: GC.Font,
    subwindowMode: GC.SubwindowMode,
    graphicsExposures: GC.GraphicsExposures,
    clipXOrigin: GC.ClipOriginX,
    clipYOrigin: GC.ClipOriginY,
    clipMask: GC.ClipMask,
    dashOffset: GC.DashOffset,
    dashes: GC.DashList,
    arcMode: GC.ArcMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xIII', cid, drawable, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIiiIIIiiIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 55, true, true)
}

export function CreateGC(cid: GCONTEXT, drawable: DRAWABLE, valueList: { function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    function: GC.Function,
    planeMask: GC.PlaneMask,
    foreground: GC.Foreground,
    background: GC.Background,
    lineWidth: GC.LineWidth,
    lineStyle: GC.LineStyle,
    capStyle: GC.CapStyle,
    joinStyle: GC.JoinStyle,
    fillStyle: GC.FillStyle,
    fillRule: GC.FillRule,
    tile: GC.Tile,
    stipple: GC.Stipple,
    tileStippleXOrigin: GC.TileStippleOriginX,
    tileStippleYOrigin: GC.TileStippleOriginY,
    font: GC.Font,
    subwindowMode: GC.SubwindowMode,
    graphicsExposures: GC.GraphicsExposures,
    clipXOrigin: GC.ClipOriginX,
    clipYOrigin: GC.ClipOriginY,
    clipMask: GC.ClipMask,
    dashOffset: GC.DashOffset,
    dashes: GC.DashList,
    arcMode: GC.ArcMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xIII', cid, drawable, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIiiIIIiiIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 55, true, false)
}

export function ChangeGCChecked(gc: GCONTEXT, valueList: { function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    function: GC.Function,
    planeMask: GC.PlaneMask,
    foreground: GC.Foreground,
    background: GC.Background,
    lineWidth: GC.LineWidth,
    lineStyle: GC.LineStyle,
    capStyle: GC.CapStyle,
    joinStyle: GC.JoinStyle,
    fillStyle: GC.FillStyle,
    fillRule: GC.FillRule,
    tile: GC.Tile,
    stipple: GC.Stipple,
    tileStippleXOrigin: GC.TileStippleOriginX,
    tileStippleYOrigin: GC.TileStippleOriginY,
    font: GC.Font,
    subwindowMode: GC.SubwindowMode,
    graphicsExposures: GC.GraphicsExposures,
    clipXOrigin: GC.ClipOriginX,
    clipYOrigin: GC.ClipOriginY,
    clipMask: GC.ClipMask,
    dashOffset: GC.DashOffset,
    dashes: GC.DashList,
    arcMode: GC.ArcMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xII', gc, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIiiIIIiiIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 56, true, true)
}

export function ChangeGC(gc: GCONTEXT, valueList: { function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    function: GC.Function,
    planeMask: GC.PlaneMask,
    foreground: GC.Foreground,
    background: GC.Background,
    lineWidth: GC.LineWidth,
    lineStyle: GC.LineStyle,
    capStyle: GC.CapStyle,
    joinStyle: GC.JoinStyle,
    fillStyle: GC.FillStyle,
    fillRule: GC.FillRule,
    tile: GC.Tile,
    stipple: GC.Stipple,
    tileStippleXOrigin: GC.TileStippleOriginX,
    tileStippleYOrigin: GC.TileStippleOriginY,
    font: GC.Font,
    subwindowMode: GC.SubwindowMode,
    graphicsExposures: GC.GraphicsExposures,
    clipXOrigin: GC.ClipOriginX,
    clipYOrigin: GC.ClipOriginY,
    clipMask: GC.ClipMask,
    dashOffset: GC.DashOffset,
    dashes: GC.DashList,
    arcMode: GC.ArcMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xII', gc, valueMask))
  requestParts.push(pack('=IIIIIIIIIIIIiiIIIiiIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 56, true, false)
}

export function CopyGCChecked(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', srcGc, dstGc, valueMask))

  return sendRequest<void>(requestParts, 57, true, true)
}

export function CopyGC(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', srcGc, dstGc, valueMask))

  return sendRequest<void>(requestParts, 57, true, false)
}

export function SetDashesChecked(gc: GCONTEXT, dashOffset: number, dashesLen: number, dashes: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHH', gc, dashOffset, dashesLen))
  requestParts.push(pack(`=${'B'.repeat(dashes.length)}`, ...(typeof dashes === 'string' ? (dashes as string).split('').map(char => char.charCodeAt(0)) : dashes)))

  return sendRequest<void>(requestParts, 58, true, true)
}

export function SetDashes(gc: GCONTEXT, dashOffset: number, dashesLen: number, dashes: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHH', gc, dashOffset, dashesLen))
  requestParts.push(pack(`=${'B'.repeat(dashes.length)}`, ...(typeof dashes === 'string' ? (dashes as string).split('').map(char => char.charCodeAt(0)) : dashes)))

  return sendRequest<void>(requestParts, 58, true, false)
}

export function SetClipRectanglesChecked(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhh', ordering, gc, clipXOrigin, clipYOrigin))
  rectangles.forEach(member => requestParts.push(pack('=hhHH', ...[member.x, member.y, member.width, member.height])))

  return sendRequest<void>(requestParts, 59, true, true)
}

export function SetClipRectangles(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhh', ordering, gc, clipXOrigin, clipYOrigin))
  rectangles.forEach(member => requestParts.push(pack('=hhHH', ...[member.x, member.y, member.width, member.height])))

  return sendRequest<void>(requestParts, 59, true, false)
}

export function FreeGCChecked(gc: GCONTEXT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', gc))

  return sendRequest<void>(requestParts, 60, true, true)
}

export function FreeGC(gc: GCONTEXT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', gc))

  return sendRequest<void>(requestParts, 60, true, false)
}

export function ClearAreaChecked(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHH', exposures, window, x, y, width, height))

  return sendRequest<void>(requestParts, 61, true, true)
}

export function ClearArea(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHH', exposures, window, x, y, width, height))

  return sendRequest<void>(requestParts, 61, true, false)
}

export function CopyAreaChecked(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHH', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height))

  return sendRequest<void>(requestParts, 62, true, true)
}

export function CopyArea(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHH', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height))

  return sendRequest<void>(requestParts, 62, true, false)
}

export function CopyPlaneChecked(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHHI', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height, bitPlane))

  return sendRequest<void>(requestParts, 63, true, true)
}

export function CopyPlane(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHHI', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height, bitPlane))

  return sendRequest<void>(requestParts, 63, true, false)
}

export function PolyPointChecked(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(member => requestParts.push(pack('=hh', ...[member.x, member.y])))

  return sendRequest<void>(requestParts, 64, true, true)
}

export function PolyPoint(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(member => requestParts.push(pack('=hh', ...[member.x, member.y])))

  return sendRequest<void>(requestParts, 64, true, false)
}

export function PolyLineChecked(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(member => requestParts.push(pack('=hh', ...[member.x, member.y])))

  return sendRequest<void>(requestParts, 65, true, true)
}

export function PolyLine(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(member => requestParts.push(pack('=hh', ...[member.x, member.y])))

  return sendRequest<void>(requestParts, 65, true, false)
}

export function PolySegmentChecked(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  segments.forEach(member => requestParts.push(pack('=hhhh', ...[member.x1, member.y1, member.x2, member.y2])))

  return sendRequest<void>(requestParts, 66, true, true)
}

export function PolySegment(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  segments.forEach(member => requestParts.push(pack('=hhhh', ...[member.x1, member.y1, member.x2, member.y2])))

  return sendRequest<void>(requestParts, 66, true, false)
}

export function PolyRectangleChecked(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(member => requestParts.push(pack('=hhHH', ...[member.x, member.y, member.width, member.height])))

  return sendRequest<void>(requestParts, 67, true, true)
}

export function PolyRectangle(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(member => requestParts.push(pack('=hhHH', ...[member.x, member.y, member.width, member.height])))

  return sendRequest<void>(requestParts, 67, true, false)
}

export function PolyArcChecked(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(member => requestParts.push(pack('=hhHHhh', ...[member.x, member.y, member.width, member.height, member.angle1, member.angle2])))

  return sendRequest<void>(requestParts, 68, true, true)
}

export function PolyArc(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(member => requestParts.push(pack('=hhHHhh', ...[member.x, member.y, member.width, member.height, member.angle1, member.angle2])))

  return sendRequest<void>(requestParts, 68, true, false)
}

export function FillPolyChecked(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIBB2x', drawable, gc, shape, coordinateMode))
  points.forEach(member => requestParts.push(pack('=hh', ...[member.x, member.y])))

  return sendRequest<void>(requestParts, 69, true, true)
}

export function FillPoly(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIBB2x', drawable, gc, shape, coordinateMode))
  points.forEach(member => requestParts.push(pack('=hh', ...[member.x, member.y])))

  return sendRequest<void>(requestParts, 69, true, false)
}

export function PolyFillRectangleChecked(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(member => requestParts.push(pack('=hhHH', ...[member.x, member.y, member.width, member.height])))

  return sendRequest<void>(requestParts, 70, true, true)
}

export function PolyFillRectangle(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(member => requestParts.push(pack('=hhHH', ...[member.x, member.y, member.width, member.height])))

  return sendRequest<void>(requestParts, 70, true, false)
}

export function PolyFillArcChecked(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(member => requestParts.push(pack('=hhHHhh', ...[member.x, member.y, member.width, member.height, member.angle1, member.angle2])))

  return sendRequest<void>(requestParts, 71, true, true)
}

export function PolyFillArc(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(member => requestParts.push(pack('=hhHHhh', ...[member.x, member.y, member.width, member.height, member.angle1, member.angle2])))

  return sendRequest<void>(requestParts, 71, true, false)
}

export function PutImageChecked(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHHhhBB2x', format, drawable, gc, width, height, dstX, dstY, leftPad, depth))
  requestParts.push(pack(`=${'B'.repeat(data.length)}`, ...(typeof data === 'string' ? (data as string).split('').map(char => char.charCodeAt(0)) : data)))

  return sendRequest<void>(requestParts, 72, true, true)
}

export function PutImage(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHHhhBB2x', format, drawable, gc, width, height, dstX, dstY, leftPad, depth))
  requestParts.push(pack(`=${'B'.repeat(data.length)}`, ...(typeof data === 'string' ? (data as string).split('').map(char => char.charCodeAt(0)) : data)))

  return sendRequest<void>(requestParts, 72, true, false)
}

export function GetImage(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHHI', format, drawable, x, y, width, height, planeMask))

  return sendRequest<GetImageReply>(requestParts, 73, false, true, unmarshallGetImageReply)
}

export function GetImageUnchecked(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHHI', format, drawable, x, y, width, height, planeMask))

  return sendRequest<GetImageReply>(requestParts, 73, false, false, unmarshallGetImageReply)
}

export function PolyText8Checked(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(pack(`=${'B'.repeat(items.length)}`, ...(typeof items === 'string' ? (items as string).split('').map(char => char.charCodeAt(0)) : items)))

  return sendRequest<void>(requestParts, 74, true, true)
}

export function PolyText8(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(pack(`=${'B'.repeat(items.length)}`, ...(typeof items === 'string' ? (items as string).split('').map(char => char.charCodeAt(0)) : items)))

  return sendRequest<void>(requestParts, 74, true, false)
}

export function PolyText16Checked(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(pack(`=${'B'.repeat(items.length)}`, ...(typeof items === 'string' ? (items as string).split('').map(char => char.charCodeAt(0)) : items)))

  return sendRequest<void>(requestParts, 75, true, true)
}

export function PolyText16(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(pack(`=${'B'.repeat(items.length)}`, ...(typeof items === 'string' ? (items as string).split('').map(char => char.charCodeAt(0)) : items)))

  return sendRequest<void>(requestParts, 75, true, false)
}

export function ImageText8Checked(stringLen: number, drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  requestParts.push(pack(`=${'b'.repeat(_string.length)}`, ...(typeof _string === 'string' ? (_string as string).split('').map(char => char.charCodeAt(0)) : _string)))

  return sendRequest<void>(requestParts, 76, true, true)
}

export function ImageText8(stringLen: number, drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  requestParts.push(pack(`=${'b'.repeat(_string.length)}`, ...(typeof _string === 'string' ? (_string as string).split('').map(char => char.charCodeAt(0)) : _string)))

  return sendRequest<void>(requestParts, 76, true, false)
}

export function ImageText16Checked(stringLen: number, drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  _string.forEach(member => requestParts.push(pack('=BB', ...[member.byte1, member.byte2])))

  return sendRequest<void>(requestParts, 77, true, true)
}

export function ImageText16(stringLen: number, drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  _string.forEach(member => requestParts.push(pack('=BB', ...[member.byte1, member.byte2])))

  return sendRequest<void>(requestParts, 77, true, false)
}

export function CreateColormapChecked(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIII', alloc, mid, window, visual))

  return sendRequest<void>(requestParts, 78, true, true)
}

export function CreateColormap(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIII', alloc, mid, window, visual))

  return sendRequest<void>(requestParts, 78, true, false)
}

export function FreeColormapChecked(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(requestParts, 79, true, true)
}

export function FreeColormap(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(requestParts, 79, true, false)
}

export function CopyColormapAndFreeChecked(mid: COLORMAP, srcCmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', mid, srcCmap))

  return sendRequest<void>(requestParts, 80, true, true)
}

export function CopyColormapAndFree(mid: COLORMAP, srcCmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', mid, srcCmap))

  return sendRequest<void>(requestParts, 80, true, false)
}

export function InstallColormapChecked(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(requestParts, 81, true, true)
}

export function InstallColormap(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(requestParts, 81, true, false)
}

export function UninstallColormapChecked(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(requestParts, 82, true, true)
}

export function UninstallColormap(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(requestParts, 82, true, false)
}

export function ListInstalledColormaps(window: WINDOW): ListInstalledColormapsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListInstalledColormapsReply>(requestParts, 83, false, true, unmarshallListInstalledColormapsReply)
}

export function ListInstalledColormapsUnchecked(window: WINDOW): ListInstalledColormapsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListInstalledColormapsReply>(requestParts, 83, false, false, unmarshallListInstalledColormapsReply)
}

export function AllocColor(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHH2x', cmap, red, green, blue))

  return sendRequest<AllocColorReply>(requestParts, 84, false, true, unmarshallAllocColorReply)
}

export function AllocColorUnchecked(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHH2x', cmap, red, green, blue))

  return sendRequest<AllocColorReply>(requestParts, 84, false, false, unmarshallAllocColorReply)
}

export function AllocNamedColor(cmap: COLORMAP, nameLen: number, name: number[] | string): AllocNamedColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<AllocNamedColorReply>(requestParts, 85, false, true, unmarshallAllocNamedColorReply)
}

export function AllocNamedColorUnchecked(cmap: COLORMAP, nameLen: number, name: number[] | string): AllocNamedColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<AllocNamedColorReply>(requestParts, 85, false, false, unmarshallAllocNamedColorReply)
}

export function AllocColorCells(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', contiguous, cmap, colors, planes))

  return sendRequest<AllocColorCellsReply>(requestParts, 86, false, true, unmarshallAllocColorCellsReply)
}

export function AllocColorCellsUnchecked(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', contiguous, cmap, colors, planes))

  return sendRequest<AllocColorCellsReply>(requestParts, 86, false, false, unmarshallAllocColorCellsReply)
}

export function AllocColorPlanes(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHHHH', contiguous, cmap, colors, reds, greens, blues))

  return sendRequest<AllocColorPlanesReply>(requestParts, 87, false, true, unmarshallAllocColorPlanesReply)
}

export function AllocColorPlanesUnchecked(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHHHH', contiguous, cmap, colors, reds, greens, blues))

  return sendRequest<AllocColorPlanesReply>(requestParts, 87, false, false, unmarshallAllocColorPlanesReply)
}

export function FreeColorsChecked(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', cmap, planeMask))
  requestParts.push(pack(`=${'I'.repeat(pixels.length)}`, ...(typeof pixels === 'string' ? (pixels as string).split('').map(char => char.charCodeAt(0)) : pixels)))

  return sendRequest<void>(requestParts, 88, true, true)
}

export function FreeColors(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', cmap, planeMask))
  requestParts.push(pack(`=${'I'.repeat(pixels.length)}`, ...(typeof pixels === 'string' ? (pixels as string).split('').map(char => char.charCodeAt(0)) : pixels)))

  return sendRequest<void>(requestParts, 88, true, false)
}

export function StoreColorsChecked(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  items.forEach(member => requestParts.push(pack('=IHHHBx', ...[member.pixel, member.red, member.green, member.blue, member.flags, member.pad0])))

  return sendRequest<void>(requestParts, 89, true, true)
}

export function StoreColors(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  items.forEach(member => requestParts.push(pack('=IHHHBx', ...[member.pixel, member.red, member.green, member.blue, member.flags, member.pad0])))

  return sendRequest<void>(requestParts, 89, true, false)
}

export function StoreNamedColorChecked(flags: number, cmap: COLORMAP, pixel: number, nameLen: number, name: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIH2x', flags, cmap, pixel, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<void>(requestParts, 90, true, true)
}

export function StoreNamedColor(flags: number, cmap: COLORMAP, pixel: number, nameLen: number, name: number[] | string): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIH2x', flags, cmap, pixel, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<void>(requestParts, 90, true, false)
}

export function QueryColors(cmap: COLORMAP, pixelsLen: number, pixels: number[]): QueryColorsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  requestParts.push(pack(`=${'I'.repeat(pixels.length)}`, ...(typeof pixels === 'string' ? (pixels as string).split('').map(char => char.charCodeAt(0)) : pixels)))

  return sendRequest<QueryColorsReply>(requestParts, 91, false, true, unmarshallQueryColorsReply)
}

export function QueryColorsUnchecked(cmap: COLORMAP, pixelsLen: number, pixels: number[]): QueryColorsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  requestParts.push(pack(`=${'I'.repeat(pixels.length)}`, ...(typeof pixels === 'string' ? (pixels as string).split('').map(char => char.charCodeAt(0)) : pixels)))

  return sendRequest<QueryColorsReply>(requestParts, 91, false, false, unmarshallQueryColorsReply)
}

export function LookupColor(cmap: COLORMAP, nameLen: number, name: number[] | string): LookupColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<LookupColorReply>(requestParts, 92, false, true, unmarshallLookupColorReply)
}

export function LookupColorUnchecked(cmap: COLORMAP, nameLen: number, name: number[] | string): LookupColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<LookupColorReply>(requestParts, 92, false, false, unmarshallLookupColorReply)
}

export function CreateCursorChecked(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, source, mask, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue, x, y))

  return sendRequest<void>(requestParts, 93, true, true)
}

export function CreateCursor(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, source, mask, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue, x, y))

  return sendRequest<void>(requestParts, 93, true, false)
}

export function CreateGlyphCursorChecked(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, sourceFont, maskFont, sourceChar, maskChar, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(requestParts, 94, true, true)
}

export function CreateGlyphCursor(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, sourceFont, maskFont, sourceChar, maskChar, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(requestParts, 94, true, false)
}

export function FreeCursorChecked(cursor: CURSOR): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cursor))

  return sendRequest<void>(requestParts, 95, true, true)
}

export function FreeCursor(cursor: CURSOR): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cursor))

  return sendRequest<void>(requestParts, 95, true, false)
}

export function RecolorCursorChecked(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHHHHH', cursor, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(requestParts, 96, true, true)
}

export function RecolorCursor(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHHHHH', cursor, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(requestParts, 96, true, false)
}

export function QueryBestSize(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', _class, drawable, width, height))

  return sendRequest<QueryBestSizeReply>(requestParts, 97, false, true, unmarshallQueryBestSizeReply)
}

export function QueryBestSizeUnchecked(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', _class, drawable, width, height))

  return sendRequest<QueryBestSizeReply>(requestParts, 97, false, false, unmarshallQueryBestSizeReply)
}

export function QueryExtension(nameLen: number, name: number[] | string): QueryExtensionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<QueryExtensionReply>(requestParts, 98, false, true, unmarshallQueryExtensionReply)
}

export function QueryExtensionUnchecked(nameLen: number, name: number[] | string): QueryExtensionCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', nameLen))
  requestParts.push(pack(`=${'b'.repeat(name.length)}`, ...(typeof name === 'string' ? (name as string).split('').map(char => char.charCodeAt(0)) : name)))

  return sendRequest<QueryExtensionReply>(requestParts, 98, false, false, unmarshallQueryExtensionReply)
}

export function ListExtensions(): ListExtensionsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListExtensionsReply>(requestParts, 99, false, true, unmarshallListExtensionsReply)
}

export function ListExtensionsUnchecked(): ListExtensionsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListExtensionsReply>(requestParts, 99, false, false, unmarshallListExtensionsReply)
}

export function ChangeKeyboardMappingChecked(keycodeCount: number, firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: KEYSYM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBB2x', keycodeCount, firstKeycode, keysymsPerKeycode))
  requestParts.push(pack(`=${'I'.repeat(keysyms.length)}`, ...(typeof keysyms === 'string' ? (keysyms as string).split('').map(char => char.charCodeAt(0)) : keysyms)))

  return sendRequest<void>(requestParts, 100, true, true)
}

export function ChangeKeyboardMapping(keycodeCount: number, firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: KEYSYM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBB2x', keycodeCount, firstKeycode, keysymsPerKeycode))
  requestParts.push(pack(`=${'I'.repeat(keysyms.length)}`, ...(typeof keysyms === 'string' ? (keysyms as string).split('').map(char => char.charCodeAt(0)) : keysyms)))

  return sendRequest<void>(requestParts, 100, true, false)
}

export function GetKeyboardMapping(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xBB', firstKeycode, count))

  return sendRequest<GetKeyboardMappingReply>(requestParts, 101, false, true, unmarshallGetKeyboardMappingReply)
}

export function GetKeyboardMappingUnchecked(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xBB', firstKeycode, count))

  return sendRequest<GetKeyboardMappingReply>(requestParts, 101, false, false, unmarshallGetKeyboardMappingReply)
}

export function ChangeKeyboardControlChecked(valueList: { keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    keyClickPercent: KB.KeyClickPercent,
    bellPercent: KB.BellPercent,
    bellPitch: KB.BellPitch,
    bellDuration: KB.BellDuration,
    led: KB.Led,
    ledMode: KB.LedMode,
    key: KB.Key,
    autoRepeatMode: KB.AutoRepeatMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xI', valueMask))
  requestParts.push(pack('=iiiiIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 102, true, true)
}

export function ChangeKeyboardControl(valueList: { keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListBitmasks: { [key: string]: number } = {
    keyClickPercent: KB.KeyClickPercent,
    bellPercent: KB.BellPercent,
    bellPitch: KB.BellPitch,
    bellDuration: KB.BellDuration,
    led: KB.Led,
    ledMode: KB.LedMode,
    key: KB.Key,
    autoRepeatMode: KB.AutoRepeatMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
  requestParts.push(pack('=xx2xI', valueMask))
  requestParts.push(pack('=iiiiIIII', ...valueListValues))

  return sendRequest<void>(requestParts, 102, true, false)
}

export function GetKeyboardControl(): GetKeyboardControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetKeyboardControlReply>(requestParts, 103, false, true, unmarshallGetKeyboardControlReply)
}

export function GetKeyboardControlUnchecked(): GetKeyboardControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetKeyboardControlReply>(requestParts, 103, false, false, unmarshallGetKeyboardControlReply)
}

export function BellChecked(percent: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xb2x', percent))

  return sendRequest<void>(requestParts, 104, true, true)
}

export function Bell(percent: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xb2x', percent))

  return sendRequest<void>(requestParts, 104, true, false)
}

export function ChangePointerControlChecked(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhhBB', accelerationNumerator, accelerationDenominator, threshold, doAcceleration, doThreshold))

  return sendRequest<void>(requestParts, 105, true, true)
}

export function ChangePointerControl(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhhBB', accelerationNumerator, accelerationDenominator, threshold, doAcceleration, doThreshold))

  return sendRequest<void>(requestParts, 105, true, false)
}

export function GetPointerControl(): GetPointerControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerControlReply>(requestParts, 106, false, true, unmarshallGetPointerControlReply)
}

export function GetPointerControlUnchecked(): GetPointerControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerControlReply>(requestParts, 106, false, false, unmarshallGetPointerControlReply)
}

export function SetScreenSaverChecked(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhBB', timeout, interval, preferBlanking, allowExposures))

  return sendRequest<void>(requestParts, 107, true, true)
}

export function SetScreenSaver(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhBB', timeout, interval, preferBlanking, allowExposures))

  return sendRequest<void>(requestParts, 107, true, false)
}

export function GetScreenSaver(): GetScreenSaverCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetScreenSaverReply>(requestParts, 108, false, true, unmarshallGetScreenSaverReply)
}

export function GetScreenSaverUnchecked(): GetScreenSaverCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetScreenSaverReply>(requestParts, 108, false, false, unmarshallGetScreenSaverReply)
}

export function ChangeHostsChecked(mode: HostMode, family: Family, addressLen: number, address: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBxH', mode, family, addressLen))
  requestParts.push(pack(`=${'B'.repeat(address.length)}`, ...(typeof address === 'string' ? (address as string).split('').map(char => char.charCodeAt(0)) : address)))

  return sendRequest<void>(requestParts, 109, true, true)
}

export function ChangeHosts(mode: HostMode, family: Family, addressLen: number, address: number[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBxH', mode, family, addressLen))
  requestParts.push(pack(`=${'B'.repeat(address.length)}`, ...(typeof address === 'string' ? (address as string).split('').map(char => char.charCodeAt(0)) : address)))

  return sendRequest<void>(requestParts, 109, true, false)
}

export function ListHosts(): ListHostsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListHostsReply>(requestParts, 110, false, true, unmarshallListHostsReply)
}

export function ListHostsUnchecked(): ListHostsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListHostsReply>(requestParts, 110, false, false, unmarshallListHostsReply)
}

export function SetAccessControlChecked(mode: AccessControl): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(requestParts, 111, true, true)
}

export function SetAccessControl(mode: AccessControl): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(requestParts, 111, true, false)
}

export function SetCloseDownModeChecked(mode: CloseDown): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(requestParts, 112, true, true)
}

export function SetCloseDownMode(mode: CloseDown): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(requestParts, 112, true, false)
}

export function KillClientChecked(resource: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', resource))

  return sendRequest<void>(requestParts, 113, true, true)
}

export function KillClient(resource: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', resource))

  return sendRequest<void>(requestParts, 113, true, false)
}

export function RotatePropertiesChecked(window: WINDOW, atomsLen: number, delta: number, atoms: ATOM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHh', window, atomsLen, delta))
  requestParts.push(pack(`=${'I'.repeat(atoms.length)}`, ...(typeof atoms === 'string' ? (atoms as string).split('').map(char => char.charCodeAt(0)) : atoms)))

  return sendRequest<void>(requestParts, 114, true, true)
}

export function RotateProperties(window: WINDOW, atomsLen: number, delta: number, atoms: ATOM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHh', window, atomsLen, delta))
  requestParts.push(pack(`=${'I'.repeat(atoms.length)}`, ...(typeof atoms === 'string' ? (atoms as string).split('').map(char => char.charCodeAt(0)) : atoms)))

  return sendRequest<void>(requestParts, 114, true, false)
}

export function ForceScreenSaverChecked(mode: ScreenSaver): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(requestParts, 115, true, true)
}

export function ForceScreenSaver(mode: ScreenSaver): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(requestParts, 115, true, false)
}

export function SetPointerMapping(mapLen: number, map: number[]): SetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mapLen))
  requestParts.push(pack(`=${'B'.repeat(map.length)}`, ...(typeof map === 'string' ? (map as string).split('').map(char => char.charCodeAt(0)) : map)))

  return sendRequest<SetPointerMappingReply>(requestParts, 116, false, true, unmarshallSetPointerMappingReply)
}

export function SetPointerMappingUnchecked(mapLen: number, map: number[]): SetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mapLen))
  requestParts.push(pack(`=${'B'.repeat(map.length)}`, ...(typeof map === 'string' ? (map as string).split('').map(char => char.charCodeAt(0)) : map)))

  return sendRequest<SetPointerMappingReply>(requestParts, 116, false, false, unmarshallSetPointerMappingReply)
}

export function GetPointerMapping(): GetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerMappingReply>(requestParts, 117, false, true, unmarshallGetPointerMappingReply)
}

export function GetPointerMappingUnchecked(): GetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerMappingReply>(requestParts, 117, false, false, unmarshallGetPointerMappingReply)
}

export function SetModifierMapping(keycodesPerModifier: number, keycodes: KEYCODE[]): SetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', keycodesPerModifier))
  requestParts.push(pack(`=${'B'.repeat(keycodes.length)}`, ...(typeof keycodes === 'string' ? (keycodes as string).split('').map(char => char.charCodeAt(0)) : keycodes)))

  return sendRequest<SetModifierMappingReply>(requestParts, 118, false, true, unmarshallSetModifierMappingReply)
}

export function SetModifierMappingUnchecked(keycodesPerModifier: number, keycodes: KEYCODE[]): SetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', keycodesPerModifier))
  requestParts.push(pack(`=${'B'.repeat(keycodes.length)}`, ...(typeof keycodes === 'string' ? (keycodes as string).split('').map(char => char.charCodeAt(0)) : keycodes)))

  return sendRequest<SetModifierMappingReply>(requestParts, 118, false, false, unmarshallSetModifierMappingReply)
}

export function GetModifierMapping(): GetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetModifierMappingReply>(requestParts, 119, false, true, unmarshallGetModifierMappingReply)
}

export function GetModifierMappingUnchecked(): GetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetModifierMappingReply>(requestParts, 119, false, false, unmarshallGetModifierMappingReply)
}

export function NoOperationChecked(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(requestParts, 127, true, true)
}

export function NoOperation(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(requestParts, 127, true, false)
}

export const events = {}

export const errors = {}

