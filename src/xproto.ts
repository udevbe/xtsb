//
// This file generated automatically from xproto.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection } from './connection'
import {
  xcbSimpleList,
  xcbComplexList,
  Unmarshaller,
  typePad,
  sendRequest,
  notUndefined
} from './xjsbInternals'
import { unpackFrom, pack } from './struct'


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
  authorizationProtocolName: Int8Array
  authorizationProtocolData: Int8Array
}

const unmarshallSetupRequest: Unmarshaller<SetupRequest> = (buffer, offset = 0) => {
  const [byteOrder, protocolMajorVersion, protocolMinorVersion, authorizationProtocolNameLen, authorizationProtocolDataLen] = unpackFrom('=BxHHHH2x', buffer, offset)
  offset += 12
  const authorizationProtocolNameWithOffset = xcbSimpleList(buffer, offset, authorizationProtocolNameLen, Int8Array, 1)
  offset = authorizationProtocolNameWithOffset.offset
  const authorizationProtocolName = authorizationProtocolNameWithOffset.value
  offset += 1
  offset += typePad(1, offset)
  const authorizationProtocolDataWithOffset = xcbSimpleList(buffer, offset, authorizationProtocolDataLen, Int8Array, 1)
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
  reason: Int8Array
}

const unmarshallSetupFailed: Unmarshaller<SetupFailed> = (buffer, offset = 0) => {
  const [status, reasonLen, protocolMajorVersion, protocolMinorVersion, length] = unpackFrom('BBHHH', buffer, offset)
  offset += 8
  const reasonWithOffset = xcbSimpleList(buffer, offset, reasonLen, Int8Array, 1)
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
  reason: Int8Array
}

const unmarshallSetupAuthenticate: Unmarshaller<SetupAuthenticate> = (buffer, offset = 0) => {
  const [status, length] = unpackFrom('B5xH', buffer, offset)
  offset += 8
  const reasonWithOffset = xcbSimpleList(buffer, offset, (length * 4), Int8Array, 1)
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
  vendor: Int8Array
  pixmapFormats: FORMAT[]
  roots: SCREEN[]
}

const unmarshallSetup: Unmarshaller<Setup> = (buffer, offset = 0) => {
  const [status, protocolMajorVersion, protocolMinorVersion, length, releaseNumber, resourceIdBase, resourceIdMask, motionBufferSize, vendorLen, maximumRequestLength, rootsLen, pixmapFormatsLen, imageByteOrder, bitmapFormatBitOrder, bitmapFormatScanlineUnit, bitmapFormatScanlinePad, minKeycode, maxKeycode] = unpackFrom('BxHHHIIIIHHBBBBBBBB4x', buffer, offset)
  offset += 40
  const vendorWithOffset = xcbSimpleList(buffer, offset, vendorLen, Int8Array, 1)
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

export type KeyPressEvent = {
  detail: KEYCODE
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  sameScreen: number
}

const unmarshallKeyPressEvent: Unmarshaller<KeyPressEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('xB2xIIIIhhhhHBx', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      sameScreen
    },
    offset
  }
}

export type KeyReleaseEvent = {
  detail: KEYCODE
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  sameScreen: number
}

const unmarshallKeyReleaseEvent: Unmarshaller<KeyReleaseEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('xB2xIIIIhhhhHBx', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      sameScreen
    },
    offset
  }
}

export enum ButtonMask {
  _1 = 256,
  _2 = 512,
  _3 = 1024,
  _4 = 2048,
  _5 = 4096,
  Any = 32768,
}

export type ButtonPressEvent = {
  detail: BUTTON
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  sameScreen: number
}

const unmarshallButtonPressEvent: Unmarshaller<ButtonPressEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('xB2xIIIIhhhhHBx', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      sameScreen
    },
    offset
  }
}

export type ButtonReleaseEvent = {
  detail: BUTTON
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  sameScreen: number
}

const unmarshallButtonReleaseEvent: Unmarshaller<ButtonReleaseEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('xB2xIIIIhhhhHBx', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      sameScreen
    },
    offset
  }
}

export enum Motion {
  Normal = 0,
  Hint = 1,
}

export type MotionNotifyEvent = {
  detail: Motion
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  sameScreen: number
}

const unmarshallMotionNotifyEvent: Unmarshaller<MotionNotifyEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('xB2xIIIIhhhhHBx', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      sameScreen
    },
    offset
  }
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

export type EnterNotifyEvent = {
  detail: NotifyDetail
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  mode: NotifyMode
  sameScreenFocus: number
}

const unmarshallEnterNotifyEvent: Unmarshaller<EnterNotifyEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, mode, sameScreenFocus] = unpackFrom('xB2xIIIIhhhhHBB', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      mode,
      sameScreenFocus
    },
    offset
  }
}

export type LeaveNotifyEvent = {
  detail: NotifyDetail
  time: TIMESTAMP
  root: WINDOW
  event: WINDOW
  child: WINDOW
  rootX: number
  rootY: number
  eventX: number
  eventY: number
  state: number
  mode: NotifyMode
  sameScreenFocus: number
}

const unmarshallLeaveNotifyEvent: Unmarshaller<LeaveNotifyEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, mode, sameScreenFocus] = unpackFrom('xB2xIIIIhhhhHBB', buffer, offset)
  offset += 32

  return {
    value: {
      detail,
      time,
      root,
      event,
      child,
      rootX,
      rootY,
      eventX,
      eventY,
      state,
      mode,
      sameScreenFocus
    },
    offset
  }
}

export type FocusInEvent = {
  detail: NotifyDetail
  event: WINDOW
  mode: NotifyMode
}

const unmarshallFocusInEvent: Unmarshaller<FocusInEvent> = (buffer, offset = 0) => {
  const [detail, event, mode] = unpackFrom('xB2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      detail,
      event,
      mode
    },
    offset
  }
}

export type FocusOutEvent = {
  detail: NotifyDetail
  event: WINDOW
  mode: NotifyMode
}

const unmarshallFocusOutEvent: Unmarshaller<FocusOutEvent> = (buffer, offset = 0) => {
  const [detail, event, mode] = unpackFrom('xB2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      detail,
      event,
      mode
    },
    offset
  }
}

export type KeymapNotifyEvent = {
  keys: Uint8Array
}

const unmarshallKeymapNotifyEvent: Unmarshaller<KeymapNotifyEvent> = (buffer, offset = 0) => {
  offset += 1
  const keysWithOffset = xcbSimpleList(buffer, offset, 31, Uint8Array, 1)
  offset = keysWithOffset.offset
  const keys = keysWithOffset.value

  return {
    value: {
      keys
    },
    offset
  }
}

export type ExposeEvent = {
  window: WINDOW
  x: number
  y: number
  width: number
  height: number
  count: number
}

const unmarshallExposeEvent: Unmarshaller<ExposeEvent> = (buffer, offset = 0) => {
  const [window, x, y, width, height, count] = unpackFrom('xx2xIHHHHH2x', buffer, offset)
  offset += 20

  return {
    value: {
      window,
      x,
      y,
      width,
      height,
      count
    },
    offset
  }
}

export type GraphicsExposureEvent = {
  drawable: DRAWABLE
  x: number
  y: number
  width: number
  height: number
  minorOpcode: number
  count: number
  majorOpcode: number
}

const unmarshallGraphicsExposureEvent: Unmarshaller<GraphicsExposureEvent> = (buffer, offset = 0) => {
  const [drawable, x, y, width, height, minorOpcode, count, majorOpcode] = unpackFrom('xx2xIHHHHHHB3x', buffer, offset)
  offset += 24

  return {
    value: {
      drawable,
      x,
      y,
      width,
      height,
      minorOpcode,
      count,
      majorOpcode
    },
    offset
  }
}

export type NoExposureEvent = {
  drawable: DRAWABLE
  minorOpcode: number
  majorOpcode: number
}

const unmarshallNoExposureEvent: Unmarshaller<NoExposureEvent> = (buffer, offset = 0) => {
  const [drawable, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      drawable,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export enum Visibility {
  Unobscured = 0,
  PartiallyObscured = 1,
  FullyObscured = 2,
}

export type VisibilityNotifyEvent = {
  window: WINDOW
  state: Visibility
}

const unmarshallVisibilityNotifyEvent: Unmarshaller<VisibilityNotifyEvent> = (buffer, offset = 0) => {
  const [window, state] = unpackFrom('xx2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      window,
      state
    },
    offset
  }
}

export type CreateNotifyEvent = {
  parent: WINDOW
  window: WINDOW
  x: number
  y: number
  width: number
  height: number
  borderWidth: number
  overrideRedirect: number
}

const unmarshallCreateNotifyEvent: Unmarshaller<CreateNotifyEvent> = (buffer, offset = 0) => {
  const [parent, window, x, y, width, height, borderWidth, overrideRedirect] = unpackFrom('xx2xIIhhHHHBx', buffer, offset)
  offset += 24

  return {
    value: {
      parent,
      window,
      x,
      y,
      width,
      height,
      borderWidth,
      overrideRedirect
    },
    offset
  }
}

export type DestroyNotifyEvent = {
  event: WINDOW
  window: WINDOW
}

const unmarshallDestroyNotifyEvent: Unmarshaller<DestroyNotifyEvent> = (buffer, offset = 0) => {
  const [event, window] = unpackFrom('xx2xII', buffer, offset)
  offset += 12

  return {
    value: {
      event,
      window
    },
    offset
  }
}

export type UnmapNotifyEvent = {
  event: WINDOW
  window: WINDOW
  fromConfigure: number
}

const unmarshallUnmapNotifyEvent: Unmarshaller<UnmapNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, fromConfigure] = unpackFrom('xx2xIIB3x', buffer, offset)
  offset += 16

  return {
    value: {
      event,
      window,
      fromConfigure
    },
    offset
  }
}

export type MapNotifyEvent = {
  event: WINDOW
  window: WINDOW
  overrideRedirect: number
}

const unmarshallMapNotifyEvent: Unmarshaller<MapNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, overrideRedirect] = unpackFrom('xx2xIIB3x', buffer, offset)
  offset += 16

  return {
    value: {
      event,
      window,
      overrideRedirect
    },
    offset
  }
}

export type MapRequestEvent = {
  parent: WINDOW
  window: WINDOW
}

const unmarshallMapRequestEvent: Unmarshaller<MapRequestEvent> = (buffer, offset = 0) => {
  const [parent, window] = unpackFrom('xx2xII', buffer, offset)
  offset += 12

  return {
    value: {
      parent,
      window
    },
    offset
  }
}

export type ReparentNotifyEvent = {
  event: WINDOW
  window: WINDOW
  parent: WINDOW
  x: number
  y: number
  overrideRedirect: number
}

const unmarshallReparentNotifyEvent: Unmarshaller<ReparentNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, parent, x, y, overrideRedirect] = unpackFrom('xx2xIIIhhB3x', buffer, offset)
  offset += 24

  return {
    value: {
      event,
      window,
      parent,
      x,
      y,
      overrideRedirect
    },
    offset
  }
}

export type ConfigureNotifyEvent = {
  event: WINDOW
  window: WINDOW
  aboveSibling: WINDOW
  x: number
  y: number
  width: number
  height: number
  borderWidth: number
  overrideRedirect: number
}

const unmarshallConfigureNotifyEvent: Unmarshaller<ConfigureNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, aboveSibling, x, y, width, height, borderWidth, overrideRedirect] = unpackFrom('xx2xIIIhhHHHBx', buffer, offset)
  offset += 28

  return {
    value: {
      event,
      window,
      aboveSibling,
      x,
      y,
      width,
      height,
      borderWidth,
      overrideRedirect
    },
    offset
  }
}

export type ConfigureRequestEvent = {
  stackMode: StackMode
  parent: WINDOW
  window: WINDOW
  sibling: WINDOW
  x: number
  y: number
  width: number
  height: number
  borderWidth: number
  valueMask: number
}

const unmarshallConfigureRequestEvent: Unmarshaller<ConfigureRequestEvent> = (buffer, offset = 0) => {
  const [stackMode, parent, window, sibling, x, y, width, height, borderWidth, valueMask] = unpackFrom('xB2xIIIhhHHHH', buffer, offset)
  offset += 28

  return {
    value: {
      stackMode,
      parent,
      window,
      sibling,
      x,
      y,
      width,
      height,
      borderWidth,
      valueMask
    },
    offset
  }
}

export type GravityNotifyEvent = {
  event: WINDOW
  window: WINDOW
  x: number
  y: number
}

const unmarshallGravityNotifyEvent: Unmarshaller<GravityNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, x, y] = unpackFrom('xx2xIIhh', buffer, offset)
  offset += 16

  return {
    value: {
      event,
      window,
      x,
      y
    },
    offset
  }
}

export type ResizeRequestEvent = {
  window: WINDOW
  width: number
  height: number
}

const unmarshallResizeRequestEvent: Unmarshaller<ResizeRequestEvent> = (buffer, offset = 0) => {
  const [window, width, height] = unpackFrom('xx2xIHH', buffer, offset)
  offset += 12

  return {
    value: {
      window,
      width,
      height
    },
    offset
  }
}

export enum Place {
  OnTop = 0,
  OnBottom = 1,
}

export type CirculateNotifyEvent = {
  event: WINDOW
  window: WINDOW
  place: Place
}

const unmarshallCirculateNotifyEvent: Unmarshaller<CirculateNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, place] = unpackFrom('xx2xII4xB3x', buffer, offset)
  offset += 20

  return {
    value: {
      event,
      window,
      place
    },
    offset
  }
}

export type CirculateRequestEvent = {
  event: WINDOW
  window: WINDOW
  place: Place
}

const unmarshallCirculateRequestEvent: Unmarshaller<CirculateRequestEvent> = (buffer, offset = 0) => {
  const [event, window, place] = unpackFrom('xx2xII4xB3x', buffer, offset)
  offset += 20

  return {
    value: {
      event,
      window,
      place
    },
    offset
  }
}

export enum Property {
  NewValue = 0,
  Delete = 1,
}

export type PropertyNotifyEvent = {
  window: WINDOW
  atom: ATOM
  time: TIMESTAMP
  state: Property
}

const unmarshallPropertyNotifyEvent: Unmarshaller<PropertyNotifyEvent> = (buffer, offset = 0) => {
  const [window, atom, time, state] = unpackFrom('xx2xIIIB3x', buffer, offset)
  offset += 20

  return {
    value: {
      window,
      atom,
      time,
      state
    },
    offset
  }
}

export type SelectionClearEvent = {
  time: TIMESTAMP
  owner: WINDOW
  selection: ATOM
}

const unmarshallSelectionClearEvent: Unmarshaller<SelectionClearEvent> = (buffer, offset = 0) => {
  const [time, owner, selection] = unpackFrom('xx2xIII', buffer, offset)
  offset += 16

  return {
    value: {
      time,
      owner,
      selection
    },
    offset
  }
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

export type SelectionRequestEvent = {
  time: TIMESTAMP
  owner: WINDOW
  requestor: WINDOW
  selection: ATOM
  target: ATOM
  property: ATOM
}

const unmarshallSelectionRequestEvent: Unmarshaller<SelectionRequestEvent> = (buffer, offset = 0) => {
  const [time, owner, requestor, selection, target, property] = unpackFrom('xx2xIIIIII', buffer, offset)
  offset += 28

  return {
    value: {
      time,
      owner,
      requestor,
      selection,
      target,
      property
    },
    offset
  }
}

export type SelectionNotifyEvent = {
  time: TIMESTAMP
  requestor: WINDOW
  selection: ATOM
  target: ATOM
  property: ATOM
}

const unmarshallSelectionNotifyEvent: Unmarshaller<SelectionNotifyEvent> = (buffer, offset = 0) => {
  const [time, requestor, selection, target, property] = unpackFrom('xx2xIIIII', buffer, offset)
  offset += 24

  return {
    value: {
      time,
      requestor,
      selection,
      target,
      property
    },
    offset
  }
}

export enum ColormapState {
  Uninstalled = 0,
  Installed = 1,
}

export enum Colormap {
  None = 0,
}

export type ColormapNotifyEvent = {
  window: WINDOW
  colormap: COLORMAP
  _new: number
  state: ColormapState
}

const unmarshallColormapNotifyEvent: Unmarshaller<ColormapNotifyEvent> = (buffer, offset = 0) => {
  const [window, colormap, _new, state] = unpackFrom('xx2xIIBB2x', buffer, offset)
  offset += 16

  return {
    value: {
      window,
      colormap,
      _new,
      state
    },
    offset
  }
}

export type ClientMessageData = {
  data8: Uint8Array
  data16: Uint16Array
  data32: Uint32Array
}

const unmarshallClientMessageData: Unmarshaller<ClientMessageData> = (buffer, offset = 0) => {
  let size = 0

  const data8WithOffset = xcbSimpleList(buffer, offset, 20, Uint8Array, 1)
  const data8 = data8WithOffset.value
  size = Math.max(size, data8WithOffset.offset - offset)
  const data16WithOffset = xcbSimpleList(buffer, offset, 10, Uint16Array, 2)
  const data16 = data16WithOffset.value
  size = Math.max(size, data16WithOffset.offset - offset)
  const data32WithOffset = xcbSimpleList(buffer, offset, 5, Uint32Array, 4)
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

export type ClientMessageEvent = {
  format: number
  window: WINDOW
  _type: ATOM
  data: ClientMessageData
}

const unmarshallClientMessageEvent: Unmarshaller<ClientMessageEvent> = (buffer, offset = 0) => {
  const [format, window, _type] = unpackFrom('xB2xII', buffer, offset)
  offset += 12
  const dataWithOffset = unmarshallClientMessageData(buffer, offset)
  const data = dataWithOffset.value
  offset = dataWithOffset.offset

  return {
    value: {
      format,
      window,
      _type,
      data
    },
    offset
  }
}

export enum Mapping {
  Modifier = 0,
  Keyboard = 1,
  Pointer = 2,
}

export type MappingNotifyEvent = {
  request: Mapping
  firstKeycode: KEYCODE
  count: number
}

const unmarshallMappingNotifyEvent: Unmarshaller<MappingNotifyEvent> = (buffer, offset = 0) => {
  const [request, firstKeycode, count] = unpackFrom('xx2xBBBx', buffer, offset)
  offset += 8

  return {
    value: {
      request,
      firstKeycode,
      count
    },
    offset
  }
}

export type GeGenericEvent = {}

const unmarshallGeGenericEvent: Unmarshaller<GeGenericEvent> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export type RequestError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallRequestError: Unmarshaller<RequestError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadRequest extends Error {
  readonly error: RequestError

  constructor(error: RequestError) {
    super()
    this.error = error
  }
}

export type ValueError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallValueError: Unmarshaller<ValueError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadValue extends Error {
  readonly error: ValueError

  constructor(error: ValueError) {
    super()
    this.error = error
  }
}

export type WindowError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallWindowError: Unmarshaller<WindowError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadWindow extends Error {
  readonly error: WindowError

  constructor(error: WindowError) {
    super()
    this.error = error
  }
}

export type PixmapError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallPixmapError: Unmarshaller<PixmapError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadPixmap extends Error {
  readonly error: PixmapError

  constructor(error: PixmapError) {
    super()
    this.error = error
  }
}

export type AtomError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallAtomError: Unmarshaller<AtomError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadAtom extends Error {
  readonly error: AtomError

  constructor(error: AtomError) {
    super()
    this.error = error
  }
}

export type CursorError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallCursorError: Unmarshaller<CursorError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadCursor extends Error {
  readonly error: CursorError

  constructor(error: CursorError) {
    super()
    this.error = error
  }
}

export type FontError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallFontError: Unmarshaller<FontError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadFont extends Error {
  readonly error: FontError

  constructor(error: FontError) {
    super()
    this.error = error
  }
}

export type MatchError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallMatchError: Unmarshaller<MatchError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadMatch extends Error {
  readonly error: MatchError

  constructor(error: MatchError) {
    super()
    this.error = error
  }
}

export type DrawableError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallDrawableError: Unmarshaller<DrawableError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadDrawable extends Error {
  readonly error: DrawableError

  constructor(error: DrawableError) {
    super()
    this.error = error
  }
}

export type AccessError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallAccessError: Unmarshaller<AccessError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadAccess extends Error {
  readonly error: AccessError

  constructor(error: AccessError) {
    super()
    this.error = error
  }
}

export type AllocError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallAllocError: Unmarshaller<AllocError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadAlloc extends Error {
  readonly error: AllocError

  constructor(error: AllocError) {
    super()
    this.error = error
  }
}

export type ColormapError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallColormapError: Unmarshaller<ColormapError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadColormap extends Error {
  readonly error: ColormapError

  constructor(error: ColormapError) {
    super()
    this.error = error
  }
}

export type GContextError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallGContextError: Unmarshaller<GContextError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadGContext extends Error {
  readonly error: GContextError

  constructor(error: GContextError) {
    super()
    this.error = error
  }
}

export type IDChoiceError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallIDChoiceError: Unmarshaller<IDChoiceError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadIDChoice extends Error {
  readonly error: IDChoiceError

  constructor(error: IDChoiceError) {
    super()
    this.error = error
  }
}

export type NameError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallNameError: Unmarshaller<NameError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadName extends Error {
  readonly error: NameError

  constructor(error: NameError) {
    super()
    this.error = error
  }
}

export type LengthError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallLengthError: Unmarshaller<LengthError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadLength extends Error {
  readonly error: LengthError

  constructor(error: LengthError) {
    super()
    this.error = error
  }
}

export type ImplementationError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallImplementationError: Unmarshaller<ImplementationError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode
    },
    offset
  }
}

export class BadImplementation extends Error {
  readonly error: ImplementationError

  constructor(error: ImplementationError) {
    super()
    this.error = error
  }
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
  children: Uint32Array
}

const unmarshallQueryTreeReply: Unmarshaller<QueryTreeReply> = (buffer, offset = 0) => {
  const [root, parent, childrenLen] = unpackFrom('xx2x4xIIH14x', buffer, offset)
  offset += 32
  const childrenWithOffset = xcbSimpleList(buffer, offset, childrenLen, Uint32Array, 4)
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
  name: Int8Array
}

const unmarshallGetAtomNameReply: Unmarshaller<GetAtomNameReply> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, Int8Array, 1)
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
  value: Uint8Array
}

const unmarshallGetPropertyReply: Unmarshaller<GetPropertyReply> = (buffer, offset = 0) => {
  const [format, _type, bytesAfter, valueLen] = unpackFrom('xB2x4xIII12x', buffer, offset)
  offset += 32
  const valueWithOffset = xcbSimpleList(buffer, offset, (valueLen * (format / 8)), Uint8Array, 1)
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
  atoms: Uint32Array
}

const unmarshallListPropertiesReply: Unmarshaller<ListPropertiesReply> = (buffer, offset = 0) => {
  const [atomsLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const atomsWithOffset = xcbSimpleList(buffer, offset, atomsLen, Uint32Array, 4)
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
  keys: Uint8Array
}

const unmarshallQueryKeymapReply: Unmarshaller<QueryKeymapReply> = (buffer, offset = 0) => {
  offset += 8
  const keysWithOffset = xcbSimpleList(buffer, offset, 32, Uint8Array, 1)
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
  name: Int8Array
}

const unmarshallSTR: Unmarshaller<STR> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('B', buffer, offset)
  offset += 1
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, Int8Array, 1)
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
  name: Int8Array
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
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, Int8Array, 1)
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
  data: Uint8Array
}

const unmarshallGetImageReply: Unmarshaller<GetImageReply> = (buffer, offset = 0) => {
  const [depth, visual] = unpackFrom('xB2x4xI20x', buffer, offset)
  offset += 32
  const dataWithOffset = xcbSimpleList(buffer, offset, (length * 4), Uint8Array, 1)
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
  cmaps: Uint32Array
}

const unmarshallListInstalledColormapsReply: Unmarshaller<ListInstalledColormapsReply> = (buffer, offset = 0) => {
  const [cmapsLen] = unpackFrom('xx2x4xH22x', buffer, offset)
  offset += 32
  const cmapsWithOffset = xcbSimpleList(buffer, offset, cmapsLen, Uint32Array, 4)
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
  pixels: Uint32Array
  masks: Uint32Array
}

const unmarshallAllocColorCellsReply: Unmarshaller<AllocColorCellsReply> = (buffer, offset = 0) => {
  const [pixelsLen, masksLen] = unpackFrom('xx2x4xHH20x', buffer, offset)
  offset += 32
  const pixelsWithOffset = xcbSimpleList(buffer, offset, pixelsLen, Uint32Array, 4)
  offset = pixelsWithOffset.offset
  const pixels = pixelsWithOffset.value
  offset += typePad(4, offset)
  const masksWithOffset = xcbSimpleList(buffer, offset, masksLen, Uint32Array, 4)
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
  pixels: Uint32Array
}

const unmarshallAllocColorPlanesReply: Unmarshaller<AllocColorPlanesReply> = (buffer, offset = 0) => {
  const [pixelsLen, redMask, greenMask, blueMask] = unpackFrom('xx2x4xH2xIII8x', buffer, offset)
  offset += 32
  const pixelsWithOffset = xcbSimpleList(buffer, offset, pixelsLen, Uint32Array, 4)
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
  keysyms: Uint32Array
}

const unmarshallGetKeyboardMappingReply: Unmarshaller<GetKeyboardMappingReply> = (buffer, offset = 0) => {
  const [keysymsPerKeycode] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const keysymsWithOffset = xcbSimpleList(buffer, offset, length, Uint32Array, 4)
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
  autoRepeats: Uint8Array
}

const unmarshallGetKeyboardControlReply: Unmarshaller<GetKeyboardControlReply> = (buffer, offset = 0) => {
  const [globalAutoRepeat, ledMask, keyClickPercent, bellPercent, bellPitch, bellDuration] = unpackFrom('xB2x4xIBBHH2x', buffer, offset)
  offset += 20
  const autoRepeatsWithOffset = xcbSimpleList(buffer, offset, 32, Uint8Array, 1)
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
  address: Uint8Array
}

const unmarshallHOST: Unmarshaller<HOST> = (buffer, offset = 0) => {
  const [family, addressLen] = unpackFrom('BxH', buffer, offset)
  offset += 4
  const addressWithOffset = xcbSimpleList(buffer, offset, addressLen, Uint8Array, 1)
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
  map: Uint8Array
}

const unmarshallGetPointerMappingReply: Unmarshaller<GetPointerMappingReply> = (buffer, offset = 0) => {
  const [mapLen] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const mapWithOffset = xcbSimpleList(buffer, offset, mapLen, Uint8Array, 1)
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
  keycodes: Uint8Array
}

const unmarshallGetModifierMappingReply: Unmarshaller<GetModifierMappingReply> = (buffer, offset = 0) => {
  const [keycodesPerModifier] = unpackFrom('xB2x4x24x', buffer, offset)
  offset += 32
  const keycodesWithOffset = xcbSimpleList(buffer, offset, (keycodesPerModifier * 8), Uint8Array, 1)
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


declare module './connection' {
  interface XConnection {
    CreateWindowChecked(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void>
  }
}

XConnection.prototype.CreateWindowChecked = function(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    backgroundPixmap: 'I',
    backgroundPixel: 'I',
    borderPixmap: 'I',
    borderPixel: 'I',
    bitGravity: 'I',
    winGravity: 'I',
    backingStore: 'I',
    backingPlanes: 'I',
    backingPixel: 'I',
    overrideRedirect: 'I',
    saveUnder: 'I',
    eventMask: 'I',
    doNotPropogateMask: 'I',
    colormap: 'I',
    cursor: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xB2xIIhhHHHHII', depth, wid, parent, x, y, width, height, borderWidth, _class, visual, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 1, true, true)
}

declare module './connection' {
  interface XConnection {
    CreateWindow(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void>
  }
}

XConnection.prototype.CreateWindow = function(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    backgroundPixmap: 'I',
    backgroundPixel: 'I',
    borderPixmap: 'I',
    borderPixel: 'I',
    bitGravity: 'I',
    winGravity: 'I',
    backingStore: 'I',
    backingPlanes: 'I',
    backingPixel: 'I',
    overrideRedirect: 'I',
    saveUnder: 'I',
    eventMask: 'I',
    doNotPropogateMask: 'I',
    colormap: 'I',
    cursor: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xB2xIIhhHHHHII', depth, wid, parent, x, y, width, height, borderWidth, _class, visual, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 1, true, false)
}

declare module './connection' {
  interface XConnection {
    ChangeWindowAttributesChecked(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void>
  }
}

XConnection.prototype.ChangeWindowAttributesChecked = function(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    backgroundPixmap: 'I',
    backgroundPixel: 'I',
    borderPixmap: 'I',
    borderPixel: 'I',
    bitGravity: 'I',
    winGravity: 'I',
    backingStore: 'I',
    backingPlanes: 'I',
    backingPixel: 'I',
    overrideRedirect: 'I',
    saveUnder: 'I',
    eventMask: 'I',
    doNotPropogateMask: 'I',
    colormap: 'I',
    cursor: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xII', window, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 2, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeWindowAttributes(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void>
  }
}

XConnection.prototype.ChangeWindowAttributes = function(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    backgroundPixmap: 'I',
    backgroundPixel: 'I',
    borderPixmap: 'I',
    borderPixel: 'I',
    bitGravity: 'I',
    winGravity: 'I',
    backingStore: 'I',
    backingPlanes: 'I',
    backingPixel: 'I',
    overrideRedirect: 'I',
    saveUnder: 'I',
    eventMask: 'I',
    doNotPropogateMask: 'I',
    colormap: 'I',
    cursor: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xII', window, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 2, true, false)
}

declare module './connection' {
  interface XConnection {
    GetWindowAttributes(window: WINDOW): GetWindowAttributesCookie
  }
}

XConnection.prototype.GetWindowAttributes = function(window: WINDOW): GetWindowAttributesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<GetWindowAttributesReply>(this.socket, requestParts, 3, false, true, unmarshallGetWindowAttributesReply)
}

declare module './connection' {
  interface XConnection {
    GetWindowAttributesUnchecked(window: WINDOW): GetWindowAttributesCookie
  }
}

XConnection.prototype.GetWindowAttributesUnchecked = function(window: WINDOW): GetWindowAttributesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<GetWindowAttributesReply>(this.socket, requestParts, 3, false, false, unmarshallGetWindowAttributesReply)
}

declare module './connection' {
  interface XConnection {
    DestroyWindowChecked(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.DestroyWindowChecked = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 4, true, true)
}

declare module './connection' {
  interface XConnection {
    DestroyWindow(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.DestroyWindow = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 4, true, false)
}

declare module './connection' {
  interface XConnection {
    DestroySubwindowsChecked(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.DestroySubwindowsChecked = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 5, true, true)
}

declare module './connection' {
  interface XConnection {
    DestroySubwindows(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.DestroySubwindows = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 5, true, false)
}

declare module './connection' {
  interface XConnection {
    ChangeSaveSetChecked(mode: SetMode, window: WINDOW): Promise<void>
  }
}

XConnection.prototype.ChangeSaveSetChecked = function(mode: SetMode, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, window))

  return sendRequest<void>(this.socket, requestParts, 6, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeSaveSet(mode: SetMode, window: WINDOW): Promise<void>
  }
}

XConnection.prototype.ChangeSaveSet = function(mode: SetMode, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, window))

  return sendRequest<void>(this.socket, requestParts, 6, true, false)
}

declare module './connection' {
  interface XConnection {
    ReparentWindowChecked(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void>
  }
}

XConnection.prototype.ReparentWindowChecked = function(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', window, parent, x, y))

  return sendRequest<void>(this.socket, requestParts, 7, true, true)
}

declare module './connection' {
  interface XConnection {
    ReparentWindow(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void>
  }
}

XConnection.prototype.ReparentWindow = function(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', window, parent, x, y))

  return sendRequest<void>(this.socket, requestParts, 7, true, false)
}

declare module './connection' {
  interface XConnection {
    MapWindowChecked(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.MapWindowChecked = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 8, true, true)
}

declare module './connection' {
  interface XConnection {
    MapWindow(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.MapWindow = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 8, true, false)
}

declare module './connection' {
  interface XConnection {
    MapSubwindowsChecked(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.MapSubwindowsChecked = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 9, true, true)
}

declare module './connection' {
  interface XConnection {
    MapSubwindows(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.MapSubwindows = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 9, true, false)
}

declare module './connection' {
  interface XConnection {
    UnmapWindowChecked(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.UnmapWindowChecked = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 10, true, true)
}

declare module './connection' {
  interface XConnection {
    UnmapWindow(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.UnmapWindow = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 10, true, false)
}

declare module './connection' {
  interface XConnection {
    UnmapSubwindowsChecked(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.UnmapSubwindowsChecked = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 11, true, true)
}

declare module './connection' {
  interface XConnection {
    UnmapSubwindows(window: WINDOW): Promise<void>
  }
}

XConnection.prototype.UnmapSubwindows = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<void>(this.socket, requestParts, 11, true, false)
}

declare module './connection' {
  interface XConnection {
    ConfigureWindowChecked(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): Promise<void>
  }
}

XConnection.prototype.ConfigureWindowChecked = function(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    x: 'i',
    y: 'i',
    width: 'I',
    height: 'I',
    borderWidth: 'I',
    sibling: 'I',
    stackMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xIH2x', window, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 12, true, true)
}

declare module './connection' {
  interface XConnection {
    ConfigureWindow(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): Promise<void>
  }
}

XConnection.prototype.ConfigureWindow = function(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    x: 'i',
    y: 'i',
    width: 'I',
    height: 'I',
    borderWidth: 'I',
    sibling: 'I',
    stackMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xIH2x', window, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 12, true, false)
}

declare module './connection' {
  interface XConnection {
    CirculateWindowChecked(direction: Circulate, window: WINDOW): Promise<void>
  }
}

XConnection.prototype.CirculateWindowChecked = function(direction: Circulate, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', direction, window))

  return sendRequest<void>(this.socket, requestParts, 13, true, true)
}

declare module './connection' {
  interface XConnection {
    CirculateWindow(direction: Circulate, window: WINDOW): Promise<void>
  }
}

XConnection.prototype.CirculateWindow = function(direction: Circulate, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', direction, window))

  return sendRequest<void>(this.socket, requestParts, 13, true, false)
}

declare module './connection' {
  interface XConnection {
    GetGeometry(drawable: DRAWABLE): GetGeometryCookie
  }
}

XConnection.prototype.GetGeometry = function(drawable: DRAWABLE): GetGeometryCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', drawable))

  return sendRequest<GetGeometryReply>(this.socket, requestParts, 14, false, true, unmarshallGetGeometryReply)
}

declare module './connection' {
  interface XConnection {
    GetGeometryUnchecked(drawable: DRAWABLE): GetGeometryCookie
  }
}

XConnection.prototype.GetGeometryUnchecked = function(drawable: DRAWABLE): GetGeometryCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', drawable))

  return sendRequest<GetGeometryReply>(this.socket, requestParts, 14, false, false, unmarshallGetGeometryReply)
}

declare module './connection' {
  interface XConnection {
    QueryTree(window: WINDOW): QueryTreeCookie
  }
}

XConnection.prototype.QueryTree = function(window: WINDOW): QueryTreeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryTreeReply>(this.socket, requestParts, 15, false, true, unmarshallQueryTreeReply)
}

declare module './connection' {
  interface XConnection {
    QueryTreeUnchecked(window: WINDOW): QueryTreeCookie
  }
}

XConnection.prototype.QueryTreeUnchecked = function(window: WINDOW): QueryTreeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryTreeReply>(this.socket, requestParts, 15, false, false, unmarshallQueryTreeReply)
}

declare module './connection' {
  interface XConnection {
    InternAtom(onlyIfExists: number, name: Int8Array): InternAtomCookie
  }
}

XConnection.prototype.InternAtom = function(onlyIfExists: number, name: Int8Array): InternAtomCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xH2x', onlyIfExists, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<InternAtomReply>(this.socket, requestParts, 16, false, true, unmarshallInternAtomReply)
}

declare module './connection' {
  interface XConnection {
    InternAtomUnchecked(onlyIfExists: number, name: Int8Array): InternAtomCookie
  }
}

XConnection.prototype.InternAtomUnchecked = function(onlyIfExists: number, name: Int8Array): InternAtomCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xH2x', onlyIfExists, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<InternAtomReply>(this.socket, requestParts, 16, false, false, unmarshallInternAtomReply)
}

declare module './connection' {
  interface XConnection {
    GetAtomName(atom: ATOM): GetAtomNameCookie
  }
}

XConnection.prototype.GetAtomName = function(atom: ATOM): GetAtomNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', atom))

  return sendRequest<GetAtomNameReply>(this.socket, requestParts, 17, false, true, unmarshallGetAtomNameReply)
}

declare module './connection' {
  interface XConnection {
    GetAtomNameUnchecked(atom: ATOM): GetAtomNameCookie
  }
}

XConnection.prototype.GetAtomNameUnchecked = function(atom: ATOM): GetAtomNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', atom))

  return sendRequest<GetAtomNameReply>(this.socket, requestParts, 17, false, false, unmarshallGetAtomNameReply)
}

declare module './connection' {
  interface XConnection {
    ChangePropertyChecked(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: Uint8Array): Promise<void>
  }
}

XConnection.prototype.ChangePropertyChecked = function(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: Uint8Array): Promise<void> {
  const dataLen = data.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIB3xI', mode, window, property, _type, format, dataLen))
  requestParts.push(data.buffer)

  return sendRequest<void>(this.socket, requestParts, 18, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeProperty(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: Uint8Array): Promise<void>
  }
}

XConnection.prototype.ChangeProperty = function(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: Uint8Array): Promise<void> {
  const dataLen = data.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIB3xI', mode, window, property, _type, format, dataLen))
  requestParts.push(data.buffer)

  return sendRequest<void>(this.socket, requestParts, 18, true, false)
}

declare module './connection' {
  interface XConnection {
    DeletePropertyChecked(window: WINDOW, property: ATOM): Promise<void>
  }
}

XConnection.prototype.DeletePropertyChecked = function(window: WINDOW, property: ATOM): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', window, property))

  return sendRequest<void>(this.socket, requestParts, 19, true, true)
}

declare module './connection' {
  interface XConnection {
    DeleteProperty(window: WINDOW, property: ATOM): Promise<void>
  }
}

XConnection.prototype.DeleteProperty = function(window: WINDOW, property: ATOM): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', window, property))

  return sendRequest<void>(this.socket, requestParts, 19, true, false)
}

declare module './connection' {
  interface XConnection {
    GetProperty(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie
  }
}

XConnection.prototype.GetProperty = function(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIII', _delete, window, property, _type, longOffset, longLength))

  return sendRequest<GetPropertyReply>(this.socket, requestParts, 20, false, true, unmarshallGetPropertyReply)
}

declare module './connection' {
  interface XConnection {
    GetPropertyUnchecked(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie
  }
}

XConnection.prototype.GetPropertyUnchecked = function(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIIII', _delete, window, property, _type, longOffset, longLength))

  return sendRequest<GetPropertyReply>(this.socket, requestParts, 20, false, false, unmarshallGetPropertyReply)
}

declare module './connection' {
  interface XConnection {
    ListProperties(window: WINDOW): ListPropertiesCookie
  }
}

XConnection.prototype.ListProperties = function(window: WINDOW): ListPropertiesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListPropertiesReply>(this.socket, requestParts, 21, false, true, unmarshallListPropertiesReply)
}

declare module './connection' {
  interface XConnection {
    ListPropertiesUnchecked(window: WINDOW): ListPropertiesCookie
  }
}

XConnection.prototype.ListPropertiesUnchecked = function(window: WINDOW): ListPropertiesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListPropertiesReply>(this.socket, requestParts, 21, false, false, unmarshallListPropertiesReply)
}

declare module './connection' {
  interface XConnection {
    SetSelectionOwnerChecked(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.SetSelectionOwnerChecked = function(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', owner, selection, time))

  return sendRequest<void>(this.socket, requestParts, 22, true, true)
}

declare module './connection' {
  interface XConnection {
    SetSelectionOwner(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.SetSelectionOwner = function(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', owner, selection, time))

  return sendRequest<void>(this.socket, requestParts, 22, true, false)
}

declare module './connection' {
  interface XConnection {
    GetSelectionOwner(selection: ATOM): GetSelectionOwnerCookie
  }
}

XConnection.prototype.GetSelectionOwner = function(selection: ATOM): GetSelectionOwnerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', selection))

  return sendRequest<GetSelectionOwnerReply>(this.socket, requestParts, 23, false, true, unmarshallGetSelectionOwnerReply)
}

declare module './connection' {
  interface XConnection {
    GetSelectionOwnerUnchecked(selection: ATOM): GetSelectionOwnerCookie
  }
}

XConnection.prototype.GetSelectionOwnerUnchecked = function(selection: ATOM): GetSelectionOwnerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', selection))

  return sendRequest<GetSelectionOwnerReply>(this.socket, requestParts, 23, false, false, unmarshallGetSelectionOwnerReply)
}

declare module './connection' {
  interface XConnection {
    ConvertSelectionChecked(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.ConvertSelectionChecked = function(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIII', requestor, selection, target, property, time))

  return sendRequest<void>(this.socket, requestParts, 24, true, true)
}

declare module './connection' {
  interface XConnection {
    ConvertSelection(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.ConvertSelection = function(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIII', requestor, selection, target, property, time))

  return sendRequest<void>(this.socket, requestParts, 24, true, false)
}

declare module './connection' {
  interface XConnection {
    SendEventChecked(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): Promise<void>
  }
}

XConnection.prototype.SendEventChecked = function(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', propagate, destination, eventMask))
  requestParts.push(event.buffer)

  return sendRequest<void>(this.socket, requestParts, 25, true, true)
}

declare module './connection' {
  interface XConnection {
    SendEvent(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): Promise<void>
  }
}

XConnection.prototype.SendEvent = function(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', propagate, destination, eventMask))
  requestParts.push(event.buffer)

  return sendRequest<void>(this.socket, requestParts, 25, true, false)
}

declare module './connection' {
  interface XConnection {
    GrabPointer(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie
  }
}

XConnection.prototype.GrabPointer = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIII', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, time))

  return sendRequest<GrabPointerReply>(this.socket, requestParts, 26, false, true, unmarshallGrabPointerReply)
}

declare module './connection' {
  interface XConnection {
    GrabPointerUnchecked(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie
  }
}

XConnection.prototype.GrabPointerUnchecked = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIII', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, time))

  return sendRequest<GrabPointerReply>(this.socket, requestParts, 26, false, false, unmarshallGrabPointerReply)
}

declare module './connection' {
  interface XConnection {
    UngrabPointerChecked(time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.UngrabPointerChecked = function(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(this.socket, requestParts, 27, true, true)
}

declare module './connection' {
  interface XConnection {
    UngrabPointer(time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.UngrabPointer = function(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(this.socket, requestParts, 27, true, false)
}

declare module './connection' {
  interface XConnection {
    GrabButtonChecked(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void>
  }
}

XConnection.prototype.GrabButtonChecked = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIIBxH', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, button, modifiers))

  return sendRequest<void>(this.socket, requestParts, 28, true, true)
}

declare module './connection' {
  interface XConnection {
    GrabButton(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void>
  }
}

XConnection.prototype.GrabButton = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBIIBxH', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, button, modifiers))

  return sendRequest<void>(this.socket, requestParts, 28, true, false)
}

declare module './connection' {
  interface XConnection {
    UngrabButtonChecked(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void>
  }
}

XConnection.prototype.UngrabButtonChecked = function(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', button, grabWindow, modifiers))

  return sendRequest<void>(this.socket, requestParts, 29, true, true)
}

declare module './connection' {
  interface XConnection {
    UngrabButton(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void>
  }
}

XConnection.prototype.UngrabButton = function(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', button, grabWindow, modifiers))

  return sendRequest<void>(this.socket, requestParts, 29, true, false)
}

declare module './connection' {
  interface XConnection {
    ChangeActivePointerGrabChecked(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void>
  }
}

XConnection.prototype.ChangeActivePointerGrabChecked = function(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIH2x', cursor, time, eventMask))

  return sendRequest<void>(this.socket, requestParts, 30, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeActivePointerGrab(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void>
  }
}

XConnection.prototype.ChangeActivePointerGrab = function(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIH2x', cursor, time, eventMask))

  return sendRequest<void>(this.socket, requestParts, 30, true, false)
}

declare module './connection' {
  interface XConnection {
    GrabKeyboard(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie
  }
}

XConnection.prototype.GrabKeyboard = function(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIBB2x', ownerEvents, grabWindow, time, pointerMode, keyboardMode))

  return sendRequest<GrabKeyboardReply>(this.socket, requestParts, 31, false, true, unmarshallGrabKeyboardReply)
}

declare module './connection' {
  interface XConnection {
    GrabKeyboardUnchecked(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie
  }
}

XConnection.prototype.GrabKeyboardUnchecked = function(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIBB2x', ownerEvents, grabWindow, time, pointerMode, keyboardMode))

  return sendRequest<GrabKeyboardReply>(this.socket, requestParts, 31, false, false, unmarshallGrabKeyboardReply)
}

declare module './connection' {
  interface XConnection {
    UngrabKeyboardChecked(time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.UngrabKeyboardChecked = function(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(this.socket, requestParts, 32, true, true)
}

declare module './connection' {
  interface XConnection {
    UngrabKeyboard(time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.UngrabKeyboard = function(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', time))

  return sendRequest<void>(this.socket, requestParts, 32, true, false)
}

declare module './connection' {
  interface XConnection {
    GrabKeyChecked(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void>
  }
}

XConnection.prototype.GrabKeyChecked = function(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBB3x', ownerEvents, grabWindow, modifiers, key, pointerMode, keyboardMode))

  return sendRequest<void>(this.socket, requestParts, 33, true, true)
}

declare module './connection' {
  interface XConnection {
    GrabKey(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void>
  }
}

XConnection.prototype.GrabKey = function(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHBBB3x', ownerEvents, grabWindow, modifiers, key, pointerMode, keyboardMode))

  return sendRequest<void>(this.socket, requestParts, 33, true, false)
}

declare module './connection' {
  interface XConnection {
    UngrabKeyChecked(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void>
  }
}

XConnection.prototype.UngrabKeyChecked = function(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', key, grabWindow, modifiers))

  return sendRequest<void>(this.socket, requestParts, 34, true, true)
}

declare module './connection' {
  interface XConnection {
    UngrabKey(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void>
  }
}

XConnection.prototype.UngrabKey = function(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIH2x', key, grabWindow, modifiers))

  return sendRequest<void>(this.socket, requestParts, 34, true, false)
}

declare module './connection' {
  interface XConnection {
    AllowEventsChecked(mode: Allow, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.AllowEventsChecked = function(mode: Allow, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, time))

  return sendRequest<void>(this.socket, requestParts, 35, true, true)
}

declare module './connection' {
  interface XConnection {
    AllowEvents(mode: Allow, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.AllowEvents = function(mode: Allow, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xI', mode, time))

  return sendRequest<void>(this.socket, requestParts, 35, true, false)
}

declare module './connection' {
  interface XConnection {
    GrabServerChecked(): Promise<void>
  }
}

XConnection.prototype.GrabServerChecked = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(this.socket, requestParts, 36, true, true)
}

declare module './connection' {
  interface XConnection {
    GrabServer(): Promise<void>
  }
}

XConnection.prototype.GrabServer = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(this.socket, requestParts, 36, true, false)
}

declare module './connection' {
  interface XConnection {
    UngrabServerChecked(): Promise<void>
  }
}

XConnection.prototype.UngrabServerChecked = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(this.socket, requestParts, 37, true, true)
}

declare module './connection' {
  interface XConnection {
    UngrabServer(): Promise<void>
  }
}

XConnection.prototype.UngrabServer = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(this.socket, requestParts, 37, true, false)
}

declare module './connection' {
  interface XConnection {
    QueryPointer(window: WINDOW): QueryPointerCookie
  }
}

XConnection.prototype.QueryPointer = function(window: WINDOW): QueryPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryPointerReply>(this.socket, requestParts, 38, false, true, unmarshallQueryPointerReply)
}

declare module './connection' {
  interface XConnection {
    QueryPointerUnchecked(window: WINDOW): QueryPointerCookie
  }
}

XConnection.prototype.QueryPointerUnchecked = function(window: WINDOW): QueryPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<QueryPointerReply>(this.socket, requestParts, 38, false, false, unmarshallQueryPointerReply)
}

declare module './connection' {
  interface XConnection {
    GetMotionEvents(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie
  }
}

XConnection.prototype.GetMotionEvents = function(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', window, start, stop))

  return sendRequest<GetMotionEventsReply>(this.socket, requestParts, 39, false, true, unmarshallGetMotionEventsReply)
}

declare module './connection' {
  interface XConnection {
    GetMotionEventsUnchecked(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie
  }
}

XConnection.prototype.GetMotionEventsUnchecked = function(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', window, start, stop))

  return sendRequest<GetMotionEventsReply>(this.socket, requestParts, 39, false, false, unmarshallGetMotionEventsReply)
}

declare module './connection' {
  interface XConnection {
    TranslateCoordinates(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie
  }
}

XConnection.prototype.TranslateCoordinates = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', srcWindow, dstWindow, srcX, srcY))

  return sendRequest<TranslateCoordinatesReply>(this.socket, requestParts, 40, false, true, unmarshallTranslateCoordinatesReply)
}

declare module './connection' {
  interface XConnection {
    TranslateCoordinatesUnchecked(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie
  }
}

XConnection.prototype.TranslateCoordinatesUnchecked = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', srcWindow, dstWindow, srcX, srcY))

  return sendRequest<TranslateCoordinatesReply>(this.socket, requestParts, 40, false, false, unmarshallTranslateCoordinatesReply)
}

declare module './connection' {
  interface XConnection {
    WarpPointerChecked(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void>
  }
}

XConnection.prototype.WarpPointerChecked = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhhHHhh', srcWindow, dstWindow, srcX, srcY, srcWidth, srcHeight, dstX, dstY))

  return sendRequest<void>(this.socket, requestParts, 41, true, true)
}

declare module './connection' {
  interface XConnection {
    WarpPointer(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void>
  }
}

XConnection.prototype.WarpPointer = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhhHHhh', srcWindow, dstWindow, srcX, srcY, srcWidth, srcHeight, dstX, dstY))

  return sendRequest<void>(this.socket, requestParts, 41, true, false)
}

declare module './connection' {
  interface XConnection {
    SetInputFocusChecked(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.SetInputFocusChecked = function(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', revertTo, focus, time))

  return sendRequest<void>(this.socket, requestParts, 42, true, true)
}

declare module './connection' {
  interface XConnection {
    SetInputFocus(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.SetInputFocus = function(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', revertTo, focus, time))

  return sendRequest<void>(this.socket, requestParts, 42, true, false)
}

declare module './connection' {
  interface XConnection {
    GetInputFocus(): GetInputFocusCookie
  }
}

XConnection.prototype.GetInputFocus = function(): GetInputFocusCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetInputFocusReply>(this.socket, requestParts, 43, false, true, unmarshallGetInputFocusReply)
}

declare module './connection' {
  interface XConnection {
    GetInputFocusUnchecked(): GetInputFocusCookie
  }
}

XConnection.prototype.GetInputFocusUnchecked = function(): GetInputFocusCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetInputFocusReply>(this.socket, requestParts, 43, false, false, unmarshallGetInputFocusReply)
}

declare module './connection' {
  interface XConnection {
    QueryKeymap(): QueryKeymapCookie
  }
}

XConnection.prototype.QueryKeymap = function(): QueryKeymapCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<QueryKeymapReply>(this.socket, requestParts, 44, false, true, unmarshallQueryKeymapReply)
}

declare module './connection' {
  interface XConnection {
    QueryKeymapUnchecked(): QueryKeymapCookie
  }
}

XConnection.prototype.QueryKeymapUnchecked = function(): QueryKeymapCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<QueryKeymapReply>(this.socket, requestParts, 44, false, false, unmarshallQueryKeymapReply)
}

declare module './connection' {
  interface XConnection {
    OpenFontChecked(fid: FONT, name: Int8Array): Promise<void>
  }
}

XConnection.prototype.OpenFontChecked = function(fid: FONT, name: Int8Array): Promise<void> {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', fid, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<void>(this.socket, requestParts, 45, true, true)
}

declare module './connection' {
  interface XConnection {
    OpenFont(fid: FONT, name: Int8Array): Promise<void>
  }
}

XConnection.prototype.OpenFont = function(fid: FONT, name: Int8Array): Promise<void> {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', fid, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<void>(this.socket, requestParts, 45, true, false)
}

declare module './connection' {
  interface XConnection {
    CloseFontChecked(font: FONT): Promise<void>
  }
}

XConnection.prototype.CloseFontChecked = function(font: FONT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<void>(this.socket, requestParts, 46, true, true)
}

declare module './connection' {
  interface XConnection {
    CloseFont(font: FONT): Promise<void>
  }
}

XConnection.prototype.CloseFont = function(font: FONT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<void>(this.socket, requestParts, 46, true, false)
}

declare module './connection' {
  interface XConnection {
    QueryFont(font: FONTABLE): QueryFontCookie
  }
}

XConnection.prototype.QueryFont = function(font: FONTABLE): QueryFontCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<QueryFontReply>(this.socket, requestParts, 47, false, true, unmarshallQueryFontReply)
}

declare module './connection' {
  interface XConnection {
    QueryFontUnchecked(font: FONTABLE): QueryFontCookie
  }
}

XConnection.prototype.QueryFontUnchecked = function(font: FONTABLE): QueryFontCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', font))

  return sendRequest<QueryFontReply>(this.socket, requestParts, 47, false, false, unmarshallQueryFontReply)
}

declare module './connection' {
  interface XConnection {
    QueryTextExtents(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie
  }
}

XConnection.prototype.QueryTextExtents = function(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=x'))
  requestParts.push(pack('=B', (stringLen & 1)))
  requestParts.push(pack('=2xI', font))
  _string.forEach(({ byte1, byte2 }) => {
    requestParts.push(pack('=BB', byte1, byte2))

  })

  return sendRequest<QueryTextExtentsReply>(this.socket, requestParts, 48, false, true, unmarshallQueryTextExtentsReply)
}

declare module './connection' {
  interface XConnection {
    QueryTextExtentsUnchecked(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie
  }
}

XConnection.prototype.QueryTextExtentsUnchecked = function(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=x'))
  requestParts.push(pack('=B', (stringLen & 1)))
  requestParts.push(pack('=2xI', font))
  _string.forEach(({ byte1, byte2 }) => {
    requestParts.push(pack('=BB', byte1, byte2))

  })

  return sendRequest<QueryTextExtentsReply>(this.socket, requestParts, 48, false, false, unmarshallQueryTextExtentsReply)
}

declare module './connection' {
  interface XConnection {
    ListFonts(maxNames: number, pattern: Int8Array): ListFontsCookie
  }
}

XConnection.prototype.ListFonts = function(maxNames: number, pattern: Int8Array): ListFontsCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pattern.buffer)

  return sendRequest<ListFontsReply>(this.socket, requestParts, 49, false, true, unmarshallListFontsReply)
}

declare module './connection' {
  interface XConnection {
    ListFontsUnchecked(maxNames: number, pattern: Int8Array): ListFontsCookie
  }
}

XConnection.prototype.ListFontsUnchecked = function(maxNames: number, pattern: Int8Array): ListFontsCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pattern.buffer)

  return sendRequest<ListFontsReply>(this.socket, requestParts, 49, false, false, unmarshallListFontsReply)
}

declare module './connection' {
  interface XConnection {
    ListFontsWithInfo(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie
  }
}

XConnection.prototype.ListFontsWithInfo = function(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pattern.buffer)

  return sendRequest<ListFontsWithInfoReply>(this.socket, requestParts, 50, false, true, unmarshallListFontsWithInfoReply)
}

declare module './connection' {
  interface XConnection {
    ListFontsWithInfoUnchecked(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie
  }
}

XConnection.prototype.ListFontsWithInfoUnchecked = function(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xHH', maxNames, patternLen))
  requestParts.push(pattern.buffer)

  return sendRequest<ListFontsWithInfoReply>(this.socket, requestParts, 50, false, false, unmarshallListFontsWithInfoReply)
}

declare module './connection' {
  interface XConnection {
    SetFontPathChecked(font: STR[]): Promise<void>
  }
}

XConnection.prototype.SetFontPathChecked = function(font: STR[]): Promise<void> {
  const fontQty = font.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', fontQty))
  font.forEach(({ nameLen, name }) => {
    requestParts.push(pack('=B', nameLen))
    requestParts.push(name.buffer)

  })

  return sendRequest<void>(this.socket, requestParts, 51, true, true)
}

declare module './connection' {
  interface XConnection {
    SetFontPath(font: STR[]): Promise<void>
  }
}

XConnection.prototype.SetFontPath = function(font: STR[]): Promise<void> {
  const fontQty = font.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', fontQty))
  font.forEach(({ nameLen, name }) => {
    requestParts.push(pack('=B', nameLen))
    requestParts.push(name.buffer)

  })

  return sendRequest<void>(this.socket, requestParts, 51, true, false)
}

declare module './connection' {
  interface XConnection {
    GetFontPath(): GetFontPathCookie
  }
}

XConnection.prototype.GetFontPath = function(): GetFontPathCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetFontPathReply>(this.socket, requestParts, 52, false, true, unmarshallGetFontPathReply)
}

declare module './connection' {
  interface XConnection {
    GetFontPathUnchecked(): GetFontPathCookie
  }
}

XConnection.prototype.GetFontPathUnchecked = function(): GetFontPathCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetFontPathReply>(this.socket, requestParts, 52, false, false, unmarshallGetFontPathReply)
}

declare module './connection' {
  interface XConnection {
    CreatePixmapChecked(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.CreatePixmapChecked = function(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHH', depth, pid, drawable, width, height))

  return sendRequest<void>(this.socket, requestParts, 53, true, true)
}

declare module './connection' {
  interface XConnection {
    CreatePixmap(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.CreatePixmap = function(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHH', depth, pid, drawable, width, height))

  return sendRequest<void>(this.socket, requestParts, 53, true, false)
}

declare module './connection' {
  interface XConnection {
    FreePixmapChecked(pixmap: PIXMAP): Promise<void>
  }
}

XConnection.prototype.FreePixmapChecked = function(pixmap: PIXMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', pixmap))

  return sendRequest<void>(this.socket, requestParts, 54, true, true)
}

declare module './connection' {
  interface XConnection {
    FreePixmap(pixmap: PIXMAP): Promise<void>
  }
}

XConnection.prototype.FreePixmap = function(pixmap: PIXMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', pixmap))

  return sendRequest<void>(this.socket, requestParts, 54, true, false)
}

declare module './connection' {
  interface XConnection {
    CreateGCChecked(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void>
  }
}

XConnection.prototype.CreateGCChecked = function(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    function: 'I',
    planeMask: 'I',
    foreground: 'I',
    background: 'I',
    lineWidth: 'I',
    lineStyle: 'I',
    capStyle: 'I',
    joinStyle: 'I',
    fillStyle: 'I',
    fillRule: 'I',
    tile: 'I',
    stipple: 'I',
    tileStippleXOrigin: 'i',
    tileStippleYOrigin: 'i',
    font: 'I',
    subwindowMode: 'I',
    graphicsExposures: 'I',
    clipXOrigin: 'i',
    clipYOrigin: 'i',
    clipMask: 'I',
    dashOffset: 'I',
    dashes: 'I',
    arcMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xIII', cid, drawable, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 55, true, true)
}

declare module './connection' {
  interface XConnection {
    CreateGC(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void>
  }
}

XConnection.prototype.CreateGC = function(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    function: 'I',
    planeMask: 'I',
    foreground: 'I',
    background: 'I',
    lineWidth: 'I',
    lineStyle: 'I',
    capStyle: 'I',
    joinStyle: 'I',
    fillStyle: 'I',
    fillRule: 'I',
    tile: 'I',
    stipple: 'I',
    tileStippleXOrigin: 'i',
    tileStippleYOrigin: 'i',
    font: 'I',
    subwindowMode: 'I',
    graphicsExposures: 'I',
    clipXOrigin: 'i',
    clipYOrigin: 'i',
    clipMask: 'I',
    dashOffset: 'I',
    dashes: 'I',
    arcMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xIII', cid, drawable, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 55, true, false)
}

declare module './connection' {
  interface XConnection {
    ChangeGCChecked(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void>
  }
}

XConnection.prototype.ChangeGCChecked = function(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    function: 'I',
    planeMask: 'I',
    foreground: 'I',
    background: 'I',
    lineWidth: 'I',
    lineStyle: 'I',
    capStyle: 'I',
    joinStyle: 'I',
    fillStyle: 'I',
    fillRule: 'I',
    tile: 'I',
    stipple: 'I',
    tileStippleXOrigin: 'i',
    tileStippleYOrigin: 'i',
    font: 'I',
    subwindowMode: 'I',
    graphicsExposures: 'I',
    clipXOrigin: 'i',
    clipYOrigin: 'i',
    clipMask: 'I',
    dashOffset: 'I',
    dashes: 'I',
    arcMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xII', gc, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 56, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeGC(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void>
  }
}

XConnection.prototype.ChangeGC = function(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    function: 'I',
    planeMask: 'I',
    foreground: 'I',
    background: 'I',
    lineWidth: 'I',
    lineStyle: 'I',
    capStyle: 'I',
    joinStyle: 'I',
    fillStyle: 'I',
    fillRule: 'I',
    tile: 'I',
    stipple: 'I',
    tileStippleXOrigin: 'i',
    tileStippleYOrigin: 'i',
    font: 'I',
    subwindowMode: 'I',
    graphicsExposures: 'I',
    clipXOrigin: 'i',
    clipYOrigin: 'i',
    clipMask: 'I',
    dashOffset: 'I',
    dashes: 'I',
    arcMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xII', gc, valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 56, true, false)
}

declare module './connection' {
  interface XConnection {
    CopyGCChecked(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void>
  }
}

XConnection.prototype.CopyGCChecked = function(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', srcGc, dstGc, valueMask))

  return sendRequest<void>(this.socket, requestParts, 57, true, true)
}

declare module './connection' {
  interface XConnection {
    CopyGC(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void>
  }
}

XConnection.prototype.CopyGC = function(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIII', srcGc, dstGc, valueMask))

  return sendRequest<void>(this.socket, requestParts, 57, true, false)
}

declare module './connection' {
  interface XConnection {
    SetDashesChecked(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): Promise<void>
  }
}

XConnection.prototype.SetDashesChecked = function(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): Promise<void> {
  const dashesLen = dashes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHH', gc, dashOffset, dashesLen))
  requestParts.push(dashes.buffer)

  return sendRequest<void>(this.socket, requestParts, 58, true, true)
}

declare module './connection' {
  interface XConnection {
    SetDashes(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): Promise<void>
  }
}

XConnection.prototype.SetDashes = function(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): Promise<void> {
  const dashesLen = dashes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHH', gc, dashOffset, dashesLen))
  requestParts.push(dashes.buffer)

  return sendRequest<void>(this.socket, requestParts, 58, true, false)
}

declare module './connection' {
  interface XConnection {
    SetClipRectanglesChecked(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.SetClipRectanglesChecked = function(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhh', ordering, gc, clipXOrigin, clipYOrigin))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('=hhHH', x, y, width, height))

  })

  return sendRequest<void>(this.socket, requestParts, 59, true, true)
}

declare module './connection' {
  interface XConnection {
    SetClipRectangles(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.SetClipRectangles = function(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhh', ordering, gc, clipXOrigin, clipYOrigin))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('=hhHH', x, y, width, height))

  })

  return sendRequest<void>(this.socket, requestParts, 59, true, false)
}

declare module './connection' {
  interface XConnection {
    FreeGCChecked(gc: GCONTEXT): Promise<void>
  }
}

XConnection.prototype.FreeGCChecked = function(gc: GCONTEXT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', gc))

  return sendRequest<void>(this.socket, requestParts, 60, true, true)
}

declare module './connection' {
  interface XConnection {
    FreeGC(gc: GCONTEXT): Promise<void>
  }
}

XConnection.prototype.FreeGC = function(gc: GCONTEXT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', gc))

  return sendRequest<void>(this.socket, requestParts, 60, true, false)
}

declare module './connection' {
  interface XConnection {
    ClearAreaChecked(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.ClearAreaChecked = function(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHH', exposures, window, x, y, width, height))

  return sendRequest<void>(this.socket, requestParts, 61, true, true)
}

declare module './connection' {
  interface XConnection {
    ClearArea(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.ClearArea = function(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHH', exposures, window, x, y, width, height))

  return sendRequest<void>(this.socket, requestParts, 61, true, false)
}

declare module './connection' {
  interface XConnection {
    CopyAreaChecked(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.CopyAreaChecked = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHH', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height))

  return sendRequest<void>(this.socket, requestParts, 62, true, true)
}

declare module './connection' {
  interface XConnection {
    CopyArea(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.CopyArea = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHH', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height))

  return sendRequest<void>(this.socket, requestParts, 62, true, false)
}

declare module './connection' {
  interface XConnection {
    CopyPlaneChecked(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void>
  }
}

XConnection.prototype.CopyPlaneChecked = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHHI', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height, bitPlane))

  return sendRequest<void>(this.socket, requestParts, 63, true, true)
}

declare module './connection' {
  interface XConnection {
    CopyPlane(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void>
  }
}

XConnection.prototype.CopyPlane = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIhhhhHHI', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height, bitPlane))

  return sendRequest<void>(this.socket, requestParts, 63, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyPointChecked(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.PolyPointChecked = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('=hh', x, y))

  })

  return sendRequest<void>(this.socket, requestParts, 64, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyPoint(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.PolyPoint = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('=hh', x, y))

  })

  return sendRequest<void>(this.socket, requestParts, 64, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyLineChecked(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.PolyLineChecked = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('=hh', x, y))

  })

  return sendRequest<void>(this.socket, requestParts, 65, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyLine(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.PolyLine = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xII', coordinateMode, drawable, gc))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('=hh', x, y))

  })

  return sendRequest<void>(this.socket, requestParts, 65, true, false)
}

declare module './connection' {
  interface XConnection {
    PolySegmentChecked(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void>
  }
}

XConnection.prototype.PolySegmentChecked = function(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  segments.forEach(({ x1, y1, x2, y2 }) => {
    requestParts.push(pack('=hhhh', x1, y1, x2, y2))

  })

  return sendRequest<void>(this.socket, requestParts, 66, true, true)
}

declare module './connection' {
  interface XConnection {
    PolySegment(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void>
  }
}

XConnection.prototype.PolySegment = function(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  segments.forEach(({ x1, y1, x2, y2 }) => {
    requestParts.push(pack('=hhhh', x1, y1, x2, y2))

  })

  return sendRequest<void>(this.socket, requestParts, 66, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyRectangleChecked(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.PolyRectangleChecked = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('=hhHH', x, y, width, height))

  })

  return sendRequest<void>(this.socket, requestParts, 67, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyRectangle(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.PolyRectangle = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('=hhHH', x, y, width, height))

  })

  return sendRequest<void>(this.socket, requestParts, 67, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyArcChecked(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void>
  }
}

XConnection.prototype.PolyArcChecked = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(({ x, y, width, height, angle1, angle2 }) => {
    requestParts.push(pack('=hhHHhh', x, y, width, height, angle1, angle2))

  })

  return sendRequest<void>(this.socket, requestParts, 68, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyArc(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void>
  }
}

XConnection.prototype.PolyArc = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(({ x, y, width, height, angle1, angle2 }) => {
    requestParts.push(pack('=hhHHhh', x, y, width, height, angle1, angle2))

  })

  return sendRequest<void>(this.socket, requestParts, 68, true, false)
}

declare module './connection' {
  interface XConnection {
    FillPolyChecked(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.FillPolyChecked = function(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIBB2x', drawable, gc, shape, coordinateMode))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('=hh', x, y))

  })

  return sendRequest<void>(this.socket, requestParts, 69, true, true)
}

declare module './connection' {
  interface XConnection {
    FillPoly(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.FillPoly = function(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIBB2x', drawable, gc, shape, coordinateMode))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('=hh', x, y))

  })

  return sendRequest<void>(this.socket, requestParts, 69, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyFillRectangleChecked(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.PolyFillRectangleChecked = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('=hhHH', x, y, width, height))

  })

  return sendRequest<void>(this.socket, requestParts, 70, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyFillRectangle(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.PolyFillRectangle = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('=hhHH', x, y, width, height))

  })

  return sendRequest<void>(this.socket, requestParts, 70, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyFillArcChecked(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void>
  }
}

XConnection.prototype.PolyFillArcChecked = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(({ x, y, width, height, angle1, angle2 }) => {
    requestParts.push(pack('=hhHHhh', x, y, width, height, angle1, angle2))

  })

  return sendRequest<void>(this.socket, requestParts, 71, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyFillArc(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void>
  }
}

XConnection.prototype.PolyFillArc = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', drawable, gc))
  arcs.forEach(({ x, y, width, height, angle1, angle2 }) => {
    requestParts.push(pack('=hhHHhh', x, y, width, height, angle1, angle2))

  })

  return sendRequest<void>(this.socket, requestParts, 71, true, false)
}

declare module './connection' {
  interface XConnection {
    PutImageChecked(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): Promise<void>
  }
}

XConnection.prototype.PutImageChecked = function(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHHhhBB2x', format, drawable, gc, width, height, dstX, dstY, leftPad, depth))
  requestParts.push(data.buffer)

  return sendRequest<void>(this.socket, requestParts, 72, true, true)
}

declare module './connection' {
  interface XConnection {
    PutImage(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): Promise<void>
  }
}

XConnection.prototype.PutImage = function(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIHHhhBB2x', format, drawable, gc, width, height, dstX, dstY, leftPad, depth))
  requestParts.push(data.buffer)

  return sendRequest<void>(this.socket, requestParts, 72, true, false)
}

declare module './connection' {
  interface XConnection {
    GetImage(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie
  }
}

XConnection.prototype.GetImage = function(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHHI', format, drawable, x, y, width, height, planeMask))

  return sendRequest<GetImageReply>(this.socket, requestParts, 73, false, true, unmarshallGetImageReply)
}

declare module './connection' {
  interface XConnection {
    GetImageUnchecked(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie
  }
}

XConnection.prototype.GetImageUnchecked = function(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIhhHHI', format, drawable, x, y, width, height, planeMask))

  return sendRequest<GetImageReply>(this.socket, requestParts, 73, false, false, unmarshallGetImageReply)
}

declare module './connection' {
  interface XConnection {
    PolyText8Checked(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void>
  }
}

XConnection.prototype.PolyText8Checked = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(items.buffer)

  return sendRequest<void>(this.socket, requestParts, 74, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyText8(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void>
  }
}

XConnection.prototype.PolyText8 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(items.buffer)

  return sendRequest<void>(this.socket, requestParts, 74, true, false)
}

declare module './connection' {
  interface XConnection {
    PolyText16Checked(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void>
  }
}

XConnection.prototype.PolyText16Checked = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(items.buffer)

  return sendRequest<void>(this.socket, requestParts, 75, true, true)
}

declare module './connection' {
  interface XConnection {
    PolyText16(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void>
  }
}

XConnection.prototype.PolyText16 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIhh', drawable, gc, x, y))
  requestParts.push(items.buffer)

  return sendRequest<void>(this.socket, requestParts, 75, true, false)
}

declare module './connection' {
  interface XConnection {
    ImageText8Checked(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): Promise<void>
  }
}

XConnection.prototype.ImageText8Checked = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): Promise<void> {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  requestParts.push(_string.buffer)

  return sendRequest<void>(this.socket, requestParts, 76, true, true)
}

declare module './connection' {
  interface XConnection {
    ImageText8(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): Promise<void>
  }
}

XConnection.prototype.ImageText8 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): Promise<void> {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  requestParts.push(_string.buffer)

  return sendRequest<void>(this.socket, requestParts, 76, true, false)
}

declare module './connection' {
  interface XConnection {
    ImageText16Checked(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void>
  }
}

XConnection.prototype.ImageText16Checked = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void> {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  _string.forEach(({ byte1, byte2 }) => {
    requestParts.push(pack('=BB', byte1, byte2))

  })

  return sendRequest<void>(this.socket, requestParts, 77, true, true)
}

declare module './connection' {
  interface XConnection {
    ImageText16(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void>
  }
}

XConnection.prototype.ImageText16 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void> {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIhh', stringLen, drawable, gc, x, y))
  _string.forEach(({ byte1, byte2 }) => {
    requestParts.push(pack('=BB', byte1, byte2))

  })

  return sendRequest<void>(this.socket, requestParts, 77, true, false)
}

declare module './connection' {
  interface XConnection {
    CreateColormapChecked(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void>
  }
}

XConnection.prototype.CreateColormapChecked = function(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIII', alloc, mid, window, visual))

  return sendRequest<void>(this.socket, requestParts, 78, true, true)
}

declare module './connection' {
  interface XConnection {
    CreateColormap(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void>
  }
}

XConnection.prototype.CreateColormap = function(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIII', alloc, mid, window, visual))

  return sendRequest<void>(this.socket, requestParts, 78, true, false)
}

declare module './connection' {
  interface XConnection {
    FreeColormapChecked(cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.FreeColormapChecked = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(this.socket, requestParts, 79, true, true)
}

declare module './connection' {
  interface XConnection {
    FreeColormap(cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.FreeColormap = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(this.socket, requestParts, 79, true, false)
}

declare module './connection' {
  interface XConnection {
    CopyColormapAndFreeChecked(mid: COLORMAP, srcCmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.CopyColormapAndFreeChecked = function(mid: COLORMAP, srcCmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', mid, srcCmap))

  return sendRequest<void>(this.socket, requestParts, 80, true, true)
}

declare module './connection' {
  interface XConnection {
    CopyColormapAndFree(mid: COLORMAP, srcCmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.CopyColormapAndFree = function(mid: COLORMAP, srcCmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', mid, srcCmap))

  return sendRequest<void>(this.socket, requestParts, 80, true, false)
}

declare module './connection' {
  interface XConnection {
    InstallColormapChecked(cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.InstallColormapChecked = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(this.socket, requestParts, 81, true, true)
}

declare module './connection' {
  interface XConnection {
    InstallColormap(cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.InstallColormap = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(this.socket, requestParts, 81, true, false)
}

declare module './connection' {
  interface XConnection {
    UninstallColormapChecked(cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.UninstallColormapChecked = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(this.socket, requestParts, 82, true, true)
}

declare module './connection' {
  interface XConnection {
    UninstallColormap(cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.UninstallColormap = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))

  return sendRequest<void>(this.socket, requestParts, 82, true, false)
}

declare module './connection' {
  interface XConnection {
    ListInstalledColormaps(window: WINDOW): ListInstalledColormapsCookie
  }
}

XConnection.prototype.ListInstalledColormaps = function(window: WINDOW): ListInstalledColormapsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListInstalledColormapsReply>(this.socket, requestParts, 83, false, true, unmarshallListInstalledColormapsReply)
}

declare module './connection' {
  interface XConnection {
    ListInstalledColormapsUnchecked(window: WINDOW): ListInstalledColormapsCookie
  }
}

XConnection.prototype.ListInstalledColormapsUnchecked = function(window: WINDOW): ListInstalledColormapsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', window))

  return sendRequest<ListInstalledColormapsReply>(this.socket, requestParts, 83, false, false, unmarshallListInstalledColormapsReply)
}

declare module './connection' {
  interface XConnection {
    AllocColor(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie
  }
}

XConnection.prototype.AllocColor = function(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHH2x', cmap, red, green, blue))

  return sendRequest<AllocColorReply>(this.socket, requestParts, 84, false, true, unmarshallAllocColorReply)
}

declare module './connection' {
  interface XConnection {
    AllocColorUnchecked(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie
  }
}

XConnection.prototype.AllocColorUnchecked = function(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHH2x', cmap, red, green, blue))

  return sendRequest<AllocColorReply>(this.socket, requestParts, 84, false, false, unmarshallAllocColorReply)
}

declare module './connection' {
  interface XConnection {
    AllocNamedColor(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie
  }
}

XConnection.prototype.AllocNamedColor = function(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<AllocNamedColorReply>(this.socket, requestParts, 85, false, true, unmarshallAllocNamedColorReply)
}

declare module './connection' {
  interface XConnection {
    AllocNamedColorUnchecked(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie
  }
}

XConnection.prototype.AllocNamedColorUnchecked = function(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<AllocNamedColorReply>(this.socket, requestParts, 85, false, false, unmarshallAllocNamedColorReply)
}

declare module './connection' {
  interface XConnection {
    AllocColorCells(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie
  }
}

XConnection.prototype.AllocColorCells = function(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', contiguous, cmap, colors, planes))

  return sendRequest<AllocColorCellsReply>(this.socket, requestParts, 86, false, true, unmarshallAllocColorCellsReply)
}

declare module './connection' {
  interface XConnection {
    AllocColorCellsUnchecked(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie
  }
}

XConnection.prototype.AllocColorCellsUnchecked = function(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', contiguous, cmap, colors, planes))

  return sendRequest<AllocColorCellsReply>(this.socket, requestParts, 86, false, false, unmarshallAllocColorCellsReply)
}

declare module './connection' {
  interface XConnection {
    AllocColorPlanes(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie
  }
}

XConnection.prototype.AllocColorPlanes = function(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHHHH', contiguous, cmap, colors, reds, greens, blues))

  return sendRequest<AllocColorPlanesReply>(this.socket, requestParts, 87, false, true, unmarshallAllocColorPlanesReply)
}

declare module './connection' {
  interface XConnection {
    AllocColorPlanesUnchecked(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie
  }
}

XConnection.prototype.AllocColorPlanesUnchecked = function(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHHHH', contiguous, cmap, colors, reds, greens, blues))

  return sendRequest<AllocColorPlanesReply>(this.socket, requestParts, 87, false, false, unmarshallAllocColorPlanesReply)
}

declare module './connection' {
  interface XConnection {
    FreeColorsChecked(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): Promise<void>
  }
}

XConnection.prototype.FreeColorsChecked = function(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', cmap, planeMask))
  requestParts.push(pixels.buffer)

  return sendRequest<void>(this.socket, requestParts, 88, true, true)
}

declare module './connection' {
  interface XConnection {
    FreeColors(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): Promise<void>
  }
}

XConnection.prototype.FreeColors = function(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xII', cmap, planeMask))
  requestParts.push(pixels.buffer)

  return sendRequest<void>(this.socket, requestParts, 88, true, false)
}

declare module './connection' {
  interface XConnection {
    StoreColorsChecked(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void>
  }
}

XConnection.prototype.StoreColorsChecked = function(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  items.forEach(({ pixel, red, green, blue, flags }) => {
    requestParts.push(pack('=IHHHBx', pixel, red, green, blue, flags))

  })

  return sendRequest<void>(this.socket, requestParts, 89, true, true)
}

declare module './connection' {
  interface XConnection {
    StoreColors(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void>
  }
}

XConnection.prototype.StoreColors = function(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  items.forEach(({ pixel, red, green, blue, flags }) => {
    requestParts.push(pack('=IHHHBx', pixel, red, green, blue, flags))

  })

  return sendRequest<void>(this.socket, requestParts, 89, true, false)
}

declare module './connection' {
  interface XConnection {
    StoreNamedColorChecked(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): Promise<void>
  }
}

XConnection.prototype.StoreNamedColorChecked = function(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): Promise<void> {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIH2x', flags, cmap, pixel, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<void>(this.socket, requestParts, 90, true, true)
}

declare module './connection' {
  interface XConnection {
    StoreNamedColor(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): Promise<void>
  }
}

XConnection.prototype.StoreNamedColor = function(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): Promise<void> {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIIH2x', flags, cmap, pixel, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<void>(this.socket, requestParts, 90, true, false)
}

declare module './connection' {
  interface XConnection {
    QueryColors(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie
  }
}

XConnection.prototype.QueryColors = function(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  requestParts.push(pixels.buffer)

  return sendRequest<QueryColorsReply>(this.socket, requestParts, 91, false, true, unmarshallQueryColorsReply)
}

declare module './connection' {
  interface XConnection {
    QueryColorsUnchecked(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie
  }
}

XConnection.prototype.QueryColorsUnchecked = function(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cmap))
  requestParts.push(pixels.buffer)

  return sendRequest<QueryColorsReply>(this.socket, requestParts, 91, false, false, unmarshallQueryColorsReply)
}

declare module './connection' {
  interface XConnection {
    LookupColor(cmap: COLORMAP, name: Int8Array): LookupColorCookie
  }
}

XConnection.prototype.LookupColor = function(cmap: COLORMAP, name: Int8Array): LookupColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<LookupColorReply>(this.socket, requestParts, 92, false, true, unmarshallLookupColorReply)
}

declare module './connection' {
  interface XConnection {
    LookupColorUnchecked(cmap: COLORMAP, name: Int8Array): LookupColorCookie
  }
}

XConnection.prototype.LookupColorUnchecked = function(cmap: COLORMAP, name: Int8Array): LookupColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIH2x', cmap, nameLen))
  requestParts.push(name.buffer)

  return sendRequest<LookupColorReply>(this.socket, requestParts, 92, false, false, unmarshallLookupColorReply)
}

declare module './connection' {
  interface XConnection {
    CreateCursorChecked(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void>
  }
}

XConnection.prototype.CreateCursorChecked = function(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, source, mask, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue, x, y))

  return sendRequest<void>(this.socket, requestParts, 93, true, true)
}

declare module './connection' {
  interface XConnection {
    CreateCursor(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void>
  }
}

XConnection.prototype.CreateCursor = function(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, source, mask, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue, x, y))

  return sendRequest<void>(this.socket, requestParts, 93, true, false)
}

declare module './connection' {
  interface XConnection {
    CreateGlyphCursorChecked(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void>
  }
}

XConnection.prototype.CreateGlyphCursorChecked = function(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, sourceFont, maskFont, sourceChar, maskChar, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(this.socket, requestParts, 94, true, true)
}

declare module './connection' {
  interface XConnection {
    CreateGlyphCursor(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void>
  }
}

XConnection.prototype.CreateGlyphCursor = function(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIIIHHHHHHHH', cid, sourceFont, maskFont, sourceChar, maskChar, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(this.socket, requestParts, 94, true, false)
}

declare module './connection' {
  interface XConnection {
    FreeCursorChecked(cursor: CURSOR): Promise<void>
  }
}

XConnection.prototype.FreeCursorChecked = function(cursor: CURSOR): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cursor))

  return sendRequest<void>(this.socket, requestParts, 95, true, true)
}

declare module './connection' {
  interface XConnection {
    FreeCursor(cursor: CURSOR): Promise<void>
  }
}

XConnection.prototype.FreeCursor = function(cursor: CURSOR): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', cursor))

  return sendRequest<void>(this.socket, requestParts, 95, true, false)
}

declare module './connection' {
  interface XConnection {
    RecolorCursorChecked(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void>
  }
}

XConnection.prototype.RecolorCursorChecked = function(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHHHHH', cursor, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(this.socket, requestParts, 96, true, true)
}

declare module './connection' {
  interface XConnection {
    RecolorCursor(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void>
  }
}

XConnection.prototype.RecolorCursor = function(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHHHHHH', cursor, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return sendRequest<void>(this.socket, requestParts, 96, true, false)
}

declare module './connection' {
  interface XConnection {
    QueryBestSize(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie
  }
}

XConnection.prototype.QueryBestSize = function(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', _class, drawable, width, height))

  return sendRequest<QueryBestSizeReply>(this.socket, requestParts, 97, false, true, unmarshallQueryBestSizeReply)
}

declare module './connection' {
  interface XConnection {
    QueryBestSizeUnchecked(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie
  }
}

XConnection.prototype.QueryBestSizeUnchecked = function(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xIHH', _class, drawable, width, height))

  return sendRequest<QueryBestSizeReply>(this.socket, requestParts, 97, false, false, unmarshallQueryBestSizeReply)
}

declare module './connection' {
  interface XConnection {
    QueryExtension(name: Int8Array): QueryExtensionCookie
  }
}

XConnection.prototype.QueryExtension = function(name: Int8Array): QueryExtensionCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', nameLen))
  requestParts.push(name.buffer)

  return sendRequest<QueryExtensionReply>(this.socket, requestParts, 98, false, true, unmarshallQueryExtensionReply)
}

declare module './connection' {
  interface XConnection {
    QueryExtensionUnchecked(name: Int8Array): QueryExtensionCookie
  }
}

XConnection.prototype.QueryExtensionUnchecked = function(name: Int8Array): QueryExtensionCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xH2x', nameLen))
  requestParts.push(name.buffer)

  return sendRequest<QueryExtensionReply>(this.socket, requestParts, 98, false, false, unmarshallQueryExtensionReply)
}

declare module './connection' {
  interface XConnection {
    ListExtensions(): ListExtensionsCookie
  }
}

XConnection.prototype.ListExtensions = function(): ListExtensionsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListExtensionsReply>(this.socket, requestParts, 99, false, true, unmarshallListExtensionsReply)
}

declare module './connection' {
  interface XConnection {
    ListExtensionsUnchecked(): ListExtensionsCookie
  }
}

XConnection.prototype.ListExtensionsUnchecked = function(): ListExtensionsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListExtensionsReply>(this.socket, requestParts, 99, false, false, unmarshallListExtensionsReply)
}

declare module './connection' {
  interface XConnection {
    ChangeKeyboardMappingChecked(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): Promise<void>
  }
}

XConnection.prototype.ChangeKeyboardMappingChecked = function(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): Promise<void> {
  const keycodeCount = keysyms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBB2x', keycodeCount, firstKeycode, keysymsPerKeycode))
  requestParts.push(keysyms.buffer)

  return sendRequest<void>(this.socket, requestParts, 100, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeKeyboardMapping(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): Promise<void>
  }
}

XConnection.prototype.ChangeKeyboardMapping = function(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): Promise<void> {
  const keycodeCount = keysyms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBB2x', keycodeCount, firstKeycode, keysymsPerKeycode))
  requestParts.push(keysyms.buffer)

  return sendRequest<void>(this.socket, requestParts, 100, true, false)
}

declare module './connection' {
  interface XConnection {
    GetKeyboardMapping(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie
  }
}

XConnection.prototype.GetKeyboardMapping = function(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xBB', firstKeycode, count))

  return sendRequest<GetKeyboardMappingReply>(this.socket, requestParts, 101, false, true, unmarshallGetKeyboardMappingReply)
}

declare module './connection' {
  interface XConnection {
    GetKeyboardMappingUnchecked(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie
  }
}

XConnection.prototype.GetKeyboardMappingUnchecked = function(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xBB', firstKeycode, count))

  return sendRequest<GetKeyboardMappingReply>(this.socket, requestParts, 101, false, false, unmarshallGetKeyboardMappingReply)
}

declare module './connection' {
  interface XConnection {
    ChangeKeyboardControlChecked(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): Promise<void>
  }
}

XConnection.prototype.ChangeKeyboardControlChecked = function(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    keyClickPercent: 'i',
    bellPercent: 'i',
    bellPitch: 'i',
    bellDuration: 'i',
    led: 'I',
    ledMode: 'I',
    key: 'I',
    autoRepeatMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xI', valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 102, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeKeyboardControl(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): Promise<void>
  }
}

XConnection.prototype.ChangeKeyboardControl = function(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: { [key: string]: string } = {
    keyClickPercent: 'i',
    bellPercent: 'i',
    bellPitch: 'i',
    bellDuration: 'i',
    led: 'I',
    ledMode: 'I',
    key: 'I',
    autoRepeatMode: 'I'
  }

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
      .filter(notUndefined)
  requestParts.push(pack('=xx2xI', valueMask))
  requestParts.push(pack('=' + valueMaskSortedList.map(key => valueListFormats[key]).join(''), ...valueListValues))

  return sendRequest<void>(this.socket, requestParts, 102, true, false)
}

declare module './connection' {
  interface XConnection {
    GetKeyboardControl(): GetKeyboardControlCookie
  }
}

XConnection.prototype.GetKeyboardControl = function(): GetKeyboardControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetKeyboardControlReply>(this.socket, requestParts, 103, false, true, unmarshallGetKeyboardControlReply)
}

declare module './connection' {
  interface XConnection {
    GetKeyboardControlUnchecked(): GetKeyboardControlCookie
  }
}

XConnection.prototype.GetKeyboardControlUnchecked = function(): GetKeyboardControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetKeyboardControlReply>(this.socket, requestParts, 103, false, false, unmarshallGetKeyboardControlReply)
}

declare module './connection' {
  interface XConnection {
    BellChecked(percent: number): Promise<void>
  }
}

XConnection.prototype.BellChecked = function(percent: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xb2x', percent))

  return sendRequest<void>(this.socket, requestParts, 104, true, true)
}

declare module './connection' {
  interface XConnection {
    Bell(percent: number): Promise<void>
  }
}

XConnection.prototype.Bell = function(percent: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xb2x', percent))

  return sendRequest<void>(this.socket, requestParts, 104, true, false)
}

declare module './connection' {
  interface XConnection {
    ChangePointerControlChecked(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void>
  }
}

XConnection.prototype.ChangePointerControlChecked = function(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhhBB', accelerationNumerator, accelerationDenominator, threshold, doAcceleration, doThreshold))

  return sendRequest<void>(this.socket, requestParts, 105, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangePointerControl(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void>
  }
}

XConnection.prototype.ChangePointerControl = function(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhhBB', accelerationNumerator, accelerationDenominator, threshold, doAcceleration, doThreshold))

  return sendRequest<void>(this.socket, requestParts, 105, true, false)
}

declare module './connection' {
  interface XConnection {
    GetPointerControl(): GetPointerControlCookie
  }
}

XConnection.prototype.GetPointerControl = function(): GetPointerControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerControlReply>(this.socket, requestParts, 106, false, true, unmarshallGetPointerControlReply)
}

declare module './connection' {
  interface XConnection {
    GetPointerControlUnchecked(): GetPointerControlCookie
  }
}

XConnection.prototype.GetPointerControlUnchecked = function(): GetPointerControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerControlReply>(this.socket, requestParts, 106, false, false, unmarshallGetPointerControlReply)
}

declare module './connection' {
  interface XConnection {
    SetScreenSaverChecked(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void>
  }
}

XConnection.prototype.SetScreenSaverChecked = function(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhBB', timeout, interval, preferBlanking, allowExposures))

  return sendRequest<void>(this.socket, requestParts, 107, true, true)
}

declare module './connection' {
  interface XConnection {
    SetScreenSaver(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void>
  }
}

XConnection.prototype.SetScreenSaver = function(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xhhBB', timeout, interval, preferBlanking, allowExposures))

  return sendRequest<void>(this.socket, requestParts, 107, true, false)
}

declare module './connection' {
  interface XConnection {
    GetScreenSaver(): GetScreenSaverCookie
  }
}

XConnection.prototype.GetScreenSaver = function(): GetScreenSaverCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetScreenSaverReply>(this.socket, requestParts, 108, false, true, unmarshallGetScreenSaverReply)
}

declare module './connection' {
  interface XConnection {
    GetScreenSaverUnchecked(): GetScreenSaverCookie
  }
}

XConnection.prototype.GetScreenSaverUnchecked = function(): GetScreenSaverCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetScreenSaverReply>(this.socket, requestParts, 108, false, false, unmarshallGetScreenSaverReply)
}

declare module './connection' {
  interface XConnection {
    ChangeHostsChecked(mode: HostMode, family: Family, address: Uint8Array): Promise<void>
  }
}

XConnection.prototype.ChangeHostsChecked = function(mode: HostMode, family: Family, address: Uint8Array): Promise<void> {
  const addressLen = address.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBxH', mode, family, addressLen))
  requestParts.push(address.buffer)

  return sendRequest<void>(this.socket, requestParts, 109, true, true)
}

declare module './connection' {
  interface XConnection {
    ChangeHosts(mode: HostMode, family: Family, address: Uint8Array): Promise<void>
  }
}

XConnection.prototype.ChangeHosts = function(mode: HostMode, family: Family, address: Uint8Array): Promise<void> {
  const addressLen = address.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2xBxH', mode, family, addressLen))
  requestParts.push(address.buffer)

  return sendRequest<void>(this.socket, requestParts, 109, true, false)
}

declare module './connection' {
  interface XConnection {
    ListHosts(): ListHostsCookie
  }
}

XConnection.prototype.ListHosts = function(): ListHostsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListHostsReply>(this.socket, requestParts, 110, false, true, unmarshallListHostsReply)
}

declare module './connection' {
  interface XConnection {
    ListHostsUnchecked(): ListHostsCookie
  }
}

XConnection.prototype.ListHostsUnchecked = function(): ListHostsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<ListHostsReply>(this.socket, requestParts, 110, false, false, unmarshallListHostsReply)
}

declare module './connection' {
  interface XConnection {
    SetAccessControlChecked(mode: AccessControl): Promise<void>
  }
}

XConnection.prototype.SetAccessControlChecked = function(mode: AccessControl): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(this.socket, requestParts, 111, true, true)
}

declare module './connection' {
  interface XConnection {
    SetAccessControl(mode: AccessControl): Promise<void>
  }
}

XConnection.prototype.SetAccessControl = function(mode: AccessControl): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(this.socket, requestParts, 111, true, false)
}

declare module './connection' {
  interface XConnection {
    SetCloseDownModeChecked(mode: CloseDown): Promise<void>
  }
}

XConnection.prototype.SetCloseDownModeChecked = function(mode: CloseDown): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(this.socket, requestParts, 112, true, true)
}

declare module './connection' {
  interface XConnection {
    SetCloseDownMode(mode: CloseDown): Promise<void>
  }
}

XConnection.prototype.SetCloseDownMode = function(mode: CloseDown): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(this.socket, requestParts, 112, true, false)
}

declare module './connection' {
  interface XConnection {
    KillClientChecked(resource: number): Promise<void>
  }
}

XConnection.prototype.KillClientChecked = function(resource: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', resource))

  return sendRequest<void>(this.socket, requestParts, 113, true, true)
}

declare module './connection' {
  interface XConnection {
    KillClient(resource: number): Promise<void>
  }
}

XConnection.prototype.KillClient = function(resource: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xI', resource))

  return sendRequest<void>(this.socket, requestParts, 113, true, false)
}

declare module './connection' {
  interface XConnection {
    RotatePropertiesChecked(window: WINDOW, delta: number, atoms: Uint32Array): Promise<void>
  }
}

XConnection.prototype.RotatePropertiesChecked = function(window: WINDOW, delta: number, atoms: Uint32Array): Promise<void> {
  const atomsLen = atoms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHh', window, atomsLen, delta))
  requestParts.push(atoms.buffer)

  return sendRequest<void>(this.socket, requestParts, 114, true, true)
}

declare module './connection' {
  interface XConnection {
    RotateProperties(window: WINDOW, delta: number, atoms: Uint32Array): Promise<void>
  }
}

XConnection.prototype.RotateProperties = function(window: WINDOW, delta: number, atoms: Uint32Array): Promise<void> {
  const atomsLen = atoms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2xIHh', window, atomsLen, delta))
  requestParts.push(atoms.buffer)

  return sendRequest<void>(this.socket, requestParts, 114, true, false)
}

declare module './connection' {
  interface XConnection {
    ForceScreenSaverChecked(mode: ScreenSaver): Promise<void>
  }
}

XConnection.prototype.ForceScreenSaverChecked = function(mode: ScreenSaver): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(this.socket, requestParts, 115, true, true)
}

declare module './connection' {
  interface XConnection {
    ForceScreenSaver(mode: ScreenSaver): Promise<void>
  }
}

XConnection.prototype.ForceScreenSaver = function(mode: ScreenSaver): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mode))

  return sendRequest<void>(this.socket, requestParts, 115, true, false)
}

declare module './connection' {
  interface XConnection {
    SetPointerMapping(map: Uint8Array): SetPointerMappingCookie
  }
}

XConnection.prototype.SetPointerMapping = function(map: Uint8Array): SetPointerMappingCookie {
  const mapLen = map.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mapLen))
  requestParts.push(map.buffer)

  return sendRequest<SetPointerMappingReply>(this.socket, requestParts, 116, false, true, unmarshallSetPointerMappingReply)
}

declare module './connection' {
  interface XConnection {
    SetPointerMappingUnchecked(map: Uint8Array): SetPointerMappingCookie
  }
}

XConnection.prototype.SetPointerMappingUnchecked = function(map: Uint8Array): SetPointerMappingCookie {
  const mapLen = map.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', mapLen))
  requestParts.push(map.buffer)

  return sendRequest<SetPointerMappingReply>(this.socket, requestParts, 116, false, false, unmarshallSetPointerMappingReply)
}

declare module './connection' {
  interface XConnection {
    GetPointerMapping(): GetPointerMappingCookie
  }
}

XConnection.prototype.GetPointerMapping = function(): GetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerMappingReply>(this.socket, requestParts, 117, false, true, unmarshallGetPointerMappingReply)
}

declare module './connection' {
  interface XConnection {
    GetPointerMappingUnchecked(): GetPointerMappingCookie
  }
}

XConnection.prototype.GetPointerMappingUnchecked = function(): GetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetPointerMappingReply>(this.socket, requestParts, 117, false, false, unmarshallGetPointerMappingReply)
}

declare module './connection' {
  interface XConnection {
    SetModifierMapping(keycodes: Uint8Array): SetModifierMappingCookie
  }
}

XConnection.prototype.SetModifierMapping = function(keycodes: Uint8Array): SetModifierMappingCookie {
  const keycodesPerModifier = keycodes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', keycodesPerModifier))
  requestParts.push(keycodes.buffer)

  return sendRequest<SetModifierMappingReply>(this.socket, requestParts, 118, false, true, unmarshallSetModifierMappingReply)
}

declare module './connection' {
  interface XConnection {
    SetModifierMappingUnchecked(keycodes: Uint8Array): SetModifierMappingCookie
  }
}

XConnection.prototype.SetModifierMappingUnchecked = function(keycodes: Uint8Array): SetModifierMappingCookie {
  const keycodesPerModifier = keycodes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xB2x', keycodesPerModifier))
  requestParts.push(keycodes.buffer)

  return sendRequest<SetModifierMappingReply>(this.socket, requestParts, 118, false, false, unmarshallSetModifierMappingReply)
}

declare module './connection' {
  interface XConnection {
    GetModifierMapping(): GetModifierMappingCookie
  }
}

XConnection.prototype.GetModifierMapping = function(): GetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetModifierMappingReply>(this.socket, requestParts, 119, false, true, unmarshallGetModifierMappingReply)
}

declare module './connection' {
  interface XConnection {
    GetModifierMappingUnchecked(): GetModifierMappingCookie
  }
}

XConnection.prototype.GetModifierMappingUnchecked = function(): GetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<GetModifierMappingReply>(this.socket, requestParts, 119, false, false, unmarshallGetModifierMappingReply)
}

declare module './connection' {
  interface XConnection {
    NoOperationChecked(): Promise<void>
  }
}

XConnection.prototype.NoOperationChecked = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(this.socket, requestParts, 127, true, true)
}

declare module './connection' {
  interface XConnection {
    NoOperation(): Promise<void>
  }
}

XConnection.prototype.NoOperation = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('=xx2x'))

  return sendRequest<void>(this.socket, requestParts, 127, true, false)
}
export const events = {
  2: unmarshallKeyPressEvent,
  3: unmarshallKeyReleaseEvent,
  4: unmarshallButtonPressEvent,
  5: unmarshallButtonReleaseEvent,
  6: unmarshallMotionNotifyEvent,
  7: unmarshallEnterNotifyEvent,
  8: unmarshallLeaveNotifyEvent,
  9: unmarshallFocusInEvent,
  10: unmarshallFocusOutEvent,
  11: unmarshallKeymapNotifyEvent,
  12: unmarshallExposeEvent,
  13: unmarshallGraphicsExposureEvent,
  14: unmarshallNoExposureEvent,
  15: unmarshallVisibilityNotifyEvent,
  16: unmarshallCreateNotifyEvent,
  17: unmarshallDestroyNotifyEvent,
  18: unmarshallUnmapNotifyEvent,
  19: unmarshallMapNotifyEvent,
  20: unmarshallMapRequestEvent,
  21: unmarshallReparentNotifyEvent,
  22: unmarshallConfigureNotifyEvent,
  23: unmarshallConfigureRequestEvent,
  24: unmarshallGravityNotifyEvent,
  25: unmarshallResizeRequestEvent,
  26: unmarshallCirculateNotifyEvent,
  27: unmarshallCirculateRequestEvent,
  28: unmarshallPropertyNotifyEvent,
  29: unmarshallSelectionClearEvent,
  30: unmarshallSelectionRequestEvent,
  31: unmarshallSelectionNotifyEvent,
  32: unmarshallColormapNotifyEvent,
  33: unmarshallClientMessageEvent,
  34: unmarshallMappingNotifyEvent,
  35: unmarshallGeGenericEvent
}

export const errors = {
  1: [unmarshallRequestError, BadRequest],
  2: [unmarshallValueError, BadValue],
  3: [unmarshallWindowError, BadWindow],
  4: [unmarshallPixmapError, BadPixmap],
  5: [unmarshallAtomError, BadAtom],
  6: [unmarshallCursorError, BadCursor],
  7: [unmarshallFontError, BadFont],
  8: [unmarshallMatchError, BadMatch],
  9: [unmarshallDrawableError, BadDrawable],
  10: [unmarshallAccessError, BadAccess],
  11: [unmarshallAllocError, BadAlloc],
  12: [unmarshallColormapError, BadColormap],
  13: [unmarshallGContextError, BadGContext],
  14: [unmarshallIDChoiceError, BadIDChoice],
  15: [unmarshallNameError, BadName],
  16: [unmarshallLengthError, BadLength],
  17: [unmarshallImplementationError, BadImplementation]
}

