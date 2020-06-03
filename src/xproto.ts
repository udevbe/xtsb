//
// This file generated automatically from xproto.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection } from './connection'
import { xcbSimpleList, xcbComplexList, Unmarshaller, typePad, notUndefined, events, errors, EventHandler } from './xjsbInternals'
import { unpackFrom, pack } from './struct'


export type CHAR2B  = {
  byte1: number
  byte2: number
}

const unmarshallCHAR2B: Unmarshaller<CHAR2B> = (buffer, offset=0) => {
  const [ byte1, byte2 ] = unpackFrom('<BB', buffer, offset)
  offset += 2

  return {
    value: {
      byte1,
      byte2,
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


export type POINT  = {
  x: number
  y: number
}

const unmarshallPOINT: Unmarshaller<POINT> = (buffer, offset=0) => {
  const [ x, y ] = unpackFrom('<hh', buffer, offset)
  offset += 4

  return {
    value: {
      x,
      y,
    },
    offset
  }
}

export type RECTANGLE  = {
  x: number
  y: number
  width: number
  height: number
}

const unmarshallRECTANGLE: Unmarshaller<RECTANGLE> = (buffer, offset=0) => {
  const [ x, y, width, height ] = unpackFrom('<hhHH', buffer, offset)
  offset += 8

  return {
    value: {
      x,
      y,
      width,
      height,
    },
    offset
  }
}

export type ARC  = {
  x: number
  y: number
  width: number
  height: number
  angle1: number
  angle2: number
}

const unmarshallARC: Unmarshaller<ARC> = (buffer, offset=0) => {
  const [ x, y, width, height, angle1, angle2 ] = unpackFrom('<hhHHhh', buffer, offset)
  offset += 12

  return {
    value: {
      x,
      y,
      width,
      height,
      angle1,
      angle2,
    },
    offset
  }
}

export type FORMAT  = {
  depth: number
  bitsPerPixel: number
  scanlinePad: number
}

const unmarshallFORMAT: Unmarshaller<FORMAT> = (buffer, offset=0) => {
  const [ depth, bitsPerPixel, scanlinePad ] = unpackFrom('<BBB5x', buffer, offset)
  offset += 8

  return {
    value: {
      depth,
      bitsPerPixel,
      scanlinePad,
    },
    offset
  }
}

export enum VisualClass {
  StaticGray= 0,
  GrayScale= 1,
  StaticColor= 2,
  PseudoColor= 3,
  TrueColor= 4,
  DirectColor= 5,
}

export type VISUALTYPE  = {
  visualId: VISUALID
  _class: VisualClass
  bitsPerRgbValue: number
  colormapEntries: number
  redMask: number
  greenMask: number
  blueMask: number
}

const unmarshallVISUALTYPE: Unmarshaller<VISUALTYPE> = (buffer, offset=0) => {
  const [ visualId, _class, bitsPerRgbValue, colormapEntries, redMask, greenMask, blueMask ] = unpackFrom('<IBBHIII4x', buffer, offset)
  offset += 24

  return {
    value: {
      visualId,
      _class,
      bitsPerRgbValue,
      colormapEntries,
      redMask,
      greenMask,
      blueMask,
    },
    offset
  }
}

export type DEPTH  = {
  depth: number
  visualsLen: number
  visuals: VISUALTYPE[]
}

const unmarshallDEPTH: Unmarshaller<DEPTH> = (buffer, offset=0) => {
  const [ depth, visualsLen ] = unpackFrom('<BxH4x', buffer, offset)
  offset += 8
  const visualsWithOffset = xcbComplexList(buffer, offset, visualsLen, unmarshallVISUALTYPE)
  offset = visualsWithOffset.offset
  const visuals = visualsWithOffset.value

  return {
    value: {
      depth,
      visualsLen,
      visuals,
    },
    offset
  }
}

export enum EventMask {
  NoEvent= 0,
  KeyPress= 1,
  KeyRelease= 2,
  ButtonPress= 4,
  ButtonRelease= 8,
  EnterWindow= 16,
  LeaveWindow= 32,
  PointerMotion= 64,
  PointerMotionHint= 128,
  Button1Motion= 256,
  Button2Motion= 512,
  Button3Motion= 1024,
  Button4Motion= 2048,
  Button5Motion= 4096,
  ButtonMotion= 8192,
  KeymapState= 16384,
  Exposure= 32768,
  VisibilityChange= 65536,
  StructureNotify= 131072,
  ResizeRedirect= 262144,
  SubstructureNotify= 524288,
  SubstructureRedirect= 1048576,
  FocusChange= 2097152,
  PropertyChange= 4194304,
  ColorMapChange= 8388608,
  OwnerGrabButton= 16777216,
}

export enum BackingStore {
  NotUseful= 0,
  WhenMapped= 1,
  Always= 2,
}

export type SCREEN  = {
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

const unmarshallSCREEN: Unmarshaller<SCREEN> = (buffer, offset=0) => {
  const [ root, defaultColormap, whitePixel, blackPixel, currentInputMasks, widthInPixels, heightInPixels, widthInMillimeters, heightInMillimeters, minInstalledMaps, maxInstalledMaps, rootVisual, backingStores, saveUnders, rootDepth, allowedDepthsLen ] = unpackFrom('<IIIIIHHHHHHIBBBB', buffer, offset)
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
      allowedDepths,
    },
    offset
  }
}

export type SetupRequest  = {
  byteOrder: number
  protocolMajorVersion: number
  protocolMinorVersion: number
  authorizationProtocolNameLen: number
  authorizationProtocolDataLen: number
  authorizationProtocolName: Int8Array
  authorizationProtocolData: Int8Array
}

const unmarshallSetupRequest: Unmarshaller<SetupRequest> = (buffer, offset=0) => {
  const [ byteOrder, protocolMajorVersion, protocolMinorVersion, authorizationProtocolNameLen, authorizationProtocolDataLen ] = unpackFrom('<BxHHHH2x', buffer, offset)
  offset += 12
  const authorizationProtocolNameWithOffset = xcbSimpleList(buffer, offset, authorizationProtocolNameLen, Int8Array, 1)
  offset = authorizationProtocolNameWithOffset.offset
  const authorizationProtocolName = authorizationProtocolNameWithOffset.value
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
      authorizationProtocolData,
    },
    offset
  }
}

export type SetupFailed  = {
  status: number
  reasonLen: number
  protocolMajorVersion: number
  protocolMinorVersion: number
  length: number
  reason: Int8Array
}

const unmarshallSetupFailed: Unmarshaller<SetupFailed> = (buffer, offset=0) => {
  const [ status, reasonLen, protocolMajorVersion, protocolMinorVersion, length ] = unpackFrom('<BBHHH', buffer, offset)
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
      reason,
    },
    offset
  }
}

export type SetupAuthenticate  = {
  status: number
  length: number
  reason: Int8Array
}

const unmarshallSetupAuthenticate: Unmarshaller<SetupAuthenticate> = (buffer, offset=0) => {
  const [ status, length ] = unpackFrom('<B5xH', buffer, offset)
  offset += 8
  const reasonWithOffset = xcbSimpleList(buffer, offset, (length * 4), Int8Array, 1)
  offset = reasonWithOffset.offset
  const reason = reasonWithOffset.value

  return {
    value: {
      status,
      length,
      reason,
    },
    offset
  }
}

export enum ImageOrder {
  LSBFirst= 0,
  MSBFirst= 1,
}

export type Setup  = {
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

const unmarshallSetup: Unmarshaller<Setup> = (buffer, offset=0) => {
  const [ status, protocolMajorVersion, protocolMinorVersion, length, releaseNumber, resourceIdBase, resourceIdMask, motionBufferSize, vendorLen, maximumRequestLength, rootsLen, pixmapFormatsLen, imageByteOrder, bitmapFormatBitOrder, bitmapFormatScanlineUnit, bitmapFormatScanlinePad, minKeycode, maxKeycode ] = unpackFrom('<BxHHHIIIIHHBBBBBBBB4x', buffer, offset)
  offset += 40
  const vendorWithOffset = xcbSimpleList(buffer, offset, vendorLen, Int8Array, 1)
  offset = vendorWithOffset.offset
  const vendor = vendorWithOffset.value
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
      roots,
    },
    offset
  }
}

export enum ModMask {
  Shift= 1,
  Lock= 2,
  Control= 4,
  _1= 8,
  _2= 16,
  _3= 32,
  _4= 64,
  _5= 128,
  Any= 32768,
}

export enum KeyButMask {
  Shift= 1,
  Lock= 2,
  Control= 4,
  Mod1= 8,
  Mod2= 16,
  Mod3= 32,
  Mod4= 64,
  Mod5= 128,
  Button1= 256,
  Button2= 512,
  Button3= 1024,
  Button4= 2048,
  Button5= 4096,
}

export enum Window {
  None= 0,
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

const unmarshallKeyPressEvent: Unmarshaller<KeyPressEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen ] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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
      sameScreen,
    },
    offset
  }
}
export interface KeyPressEventHandler extends EventHandler<KeyPressEvent> {}

declare module './connection' {
  interface XConnection {
    onKeyPressEvent?: KeyPressEventHandler
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

const unmarshallKeyReleaseEvent: Unmarshaller<KeyReleaseEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen ] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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
      sameScreen,
    },
    offset
  }
}
export interface KeyReleaseEventHandler extends EventHandler<KeyReleaseEvent> {}

declare module './connection' {
  interface XConnection {
    onKeyReleaseEvent?: KeyReleaseEventHandler
  }
}


export enum ButtonMask {
  _1= 256,
  _2= 512,
  _3= 1024,
  _4= 2048,
  _5= 4096,
  Any= 32768,
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

const unmarshallButtonPressEvent: Unmarshaller<ButtonPressEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen ] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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
      sameScreen,
    },
    offset
  }
}
export interface ButtonPressEventHandler extends EventHandler<ButtonPressEvent> {}

declare module './connection' {
  interface XConnection {
    onButtonPressEvent?: ButtonPressEventHandler
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

const unmarshallButtonReleaseEvent: Unmarshaller<ButtonReleaseEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen ] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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
      sameScreen,
    },
    offset
  }
}
export interface ButtonReleaseEventHandler extends EventHandler<ButtonReleaseEvent> {}

declare module './connection' {
  interface XConnection {
    onButtonReleaseEvent?: ButtonReleaseEventHandler
  }
}


export enum Motion {
  Normal= 0,
  Hint= 1,
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

const unmarshallMotionNotifyEvent: Unmarshaller<MotionNotifyEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen ] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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
      sameScreen,
    },
    offset
  }
}
export interface MotionNotifyEventHandler extends EventHandler<MotionNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onMotionNotifyEvent?: MotionNotifyEventHandler
  }
}


export enum NotifyDetail {
  Ancestor= 0,
  Virtual= 1,
  Inferior= 2,
  Nonlinear= 3,
  NonlinearVirtual= 4,
  Pointer= 5,
  PointerRoot= 6,
  None= 7,
}

export enum NotifyMode {
  Normal= 0,
  Grab= 1,
  Ungrab= 2,
  WhileGrabbed= 3,
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

const unmarshallEnterNotifyEvent: Unmarshaller<EnterNotifyEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, mode, sameScreenFocus ] = unpackFrom('<xB2xIIIIhhhhHBB', buffer, offset)
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
      sameScreenFocus,
    },
    offset
  }
}
export interface EnterNotifyEventHandler extends EventHandler<EnterNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onEnterNotifyEvent?: EnterNotifyEventHandler
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

const unmarshallLeaveNotifyEvent: Unmarshaller<LeaveNotifyEvent> = (buffer, offset=0) => {
  const [ detail, time, root, event, child, rootX, rootY, eventX, eventY, state, mode, sameScreenFocus ] = unpackFrom('<xB2xIIIIhhhhHBB', buffer, offset)
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
      sameScreenFocus,
    },
    offset
  }
}
export interface LeaveNotifyEventHandler extends EventHandler<LeaveNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onLeaveNotifyEvent?: LeaveNotifyEventHandler
  }
}


export type FocusInEvent = {
  detail: NotifyDetail
  event: WINDOW
  mode: NotifyMode
}

const unmarshallFocusInEvent: Unmarshaller<FocusInEvent> = (buffer, offset=0) => {
  const [ detail, event, mode ] = unpackFrom('<xB2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      detail,
      event,
      mode,
    },
    offset
  }
}
export interface FocusInEventHandler extends EventHandler<FocusInEvent> {}

declare module './connection' {
  interface XConnection {
    onFocusInEvent?: FocusInEventHandler
  }
}


export type FocusOutEvent = {
  detail: NotifyDetail
  event: WINDOW
  mode: NotifyMode
}

const unmarshallFocusOutEvent: Unmarshaller<FocusOutEvent> = (buffer, offset=0) => {
  const [ detail, event, mode ] = unpackFrom('<xB2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      detail,
      event,
      mode,
    },
    offset
  }
}
export interface FocusOutEventHandler extends EventHandler<FocusOutEvent> {}

declare module './connection' {
  interface XConnection {
    onFocusOutEvent?: FocusOutEventHandler
  }
}


export type KeymapNotifyEvent = {
  keys: Uint8Array
}

const unmarshallKeymapNotifyEvent: Unmarshaller<KeymapNotifyEvent> = (buffer, offset=0) => {
  const keysWithOffset = xcbSimpleList(buffer, offset, 31, Uint8Array, 1)
  offset = keysWithOffset.offset
  const keys = keysWithOffset.value

  return {
    value: {
      keys,
    },
    offset
  }
}
export interface KeymapNotifyEventHandler extends EventHandler<KeymapNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onKeymapNotifyEvent?: KeymapNotifyEventHandler
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

const unmarshallExposeEvent: Unmarshaller<ExposeEvent> = (buffer, offset=0) => {
  const [ window, x, y, width, height, count ] = unpackFrom('<xx2xIHHHHH2x', buffer, offset)
  offset += 20

  return {
    value: {
      window,
      x,
      y,
      width,
      height,
      count,
    },
    offset
  }
}
export interface ExposeEventHandler extends EventHandler<ExposeEvent> {}

declare module './connection' {
  interface XConnection {
    onExposeEvent?: ExposeEventHandler
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

const unmarshallGraphicsExposureEvent: Unmarshaller<GraphicsExposureEvent> = (buffer, offset=0) => {
  const [ drawable, x, y, width, height, minorOpcode, count, majorOpcode ] = unpackFrom('<xx2xIHHHHHHB3x', buffer, offset)
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
      majorOpcode,
    },
    offset
  }
}
export interface GraphicsExposureEventHandler extends EventHandler<GraphicsExposureEvent> {}

declare module './connection' {
  interface XConnection {
    onGraphicsExposureEvent?: GraphicsExposureEventHandler
  }
}


export type NoExposureEvent = {
  drawable: DRAWABLE
  minorOpcode: number
  majorOpcode: number
}

const unmarshallNoExposureEvent: Unmarshaller<NoExposureEvent> = (buffer, offset=0) => {
  const [ drawable, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      drawable,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}
export interface NoExposureEventHandler extends EventHandler<NoExposureEvent> {}

declare module './connection' {
  interface XConnection {
    onNoExposureEvent?: NoExposureEventHandler
  }
}


export enum Visibility {
  Unobscured= 0,
  PartiallyObscured= 1,
  FullyObscured= 2,
}

export type VisibilityNotifyEvent = {
  window: WINDOW
  state: Visibility
}

const unmarshallVisibilityNotifyEvent: Unmarshaller<VisibilityNotifyEvent> = (buffer, offset=0) => {
  const [ window, state ] = unpackFrom('<xx2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      window,
      state,
    },
    offset
  }
}
export interface VisibilityNotifyEventHandler extends EventHandler<VisibilityNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onVisibilityNotifyEvent?: VisibilityNotifyEventHandler
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

const unmarshallCreateNotifyEvent: Unmarshaller<CreateNotifyEvent> = (buffer, offset=0) => {
  const [ parent, window, x, y, width, height, borderWidth, overrideRedirect ] = unpackFrom('<xx2xIIhhHHHBx', buffer, offset)
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
      overrideRedirect,
    },
    offset
  }
}
export interface CreateNotifyEventHandler extends EventHandler<CreateNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onCreateNotifyEvent?: CreateNotifyEventHandler
  }
}


export type DestroyNotifyEvent = {
  event: WINDOW
  window: WINDOW
}

const unmarshallDestroyNotifyEvent: Unmarshaller<DestroyNotifyEvent> = (buffer, offset=0) => {
  const [ event, window ] = unpackFrom('<xx2xII', buffer, offset)
  offset += 12

  return {
    value: {
      event,
      window,
    },
    offset
  }
}
export interface DestroyNotifyEventHandler extends EventHandler<DestroyNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onDestroyNotifyEvent?: DestroyNotifyEventHandler
  }
}


export type UnmapNotifyEvent = {
  event: WINDOW
  window: WINDOW
  fromConfigure: number
}

const unmarshallUnmapNotifyEvent: Unmarshaller<UnmapNotifyEvent> = (buffer, offset=0) => {
  const [ event, window, fromConfigure ] = unpackFrom('<xx2xIIB3x', buffer, offset)
  offset += 16

  return {
    value: {
      event,
      window,
      fromConfigure,
    },
    offset
  }
}
export interface UnmapNotifyEventHandler extends EventHandler<UnmapNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onUnmapNotifyEvent?: UnmapNotifyEventHandler
  }
}


export type MapNotifyEvent = {
  event: WINDOW
  window: WINDOW
  overrideRedirect: number
}

const unmarshallMapNotifyEvent: Unmarshaller<MapNotifyEvent> = (buffer, offset=0) => {
  const [ event, window, overrideRedirect ] = unpackFrom('<xx2xIIB3x', buffer, offset)
  offset += 16

  return {
    value: {
      event,
      window,
      overrideRedirect,
    },
    offset
  }
}
export interface MapNotifyEventHandler extends EventHandler<MapNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onMapNotifyEvent?: MapNotifyEventHandler
  }
}


export type MapRequestEvent = {
  parent: WINDOW
  window: WINDOW
}

const unmarshallMapRequestEvent: Unmarshaller<MapRequestEvent> = (buffer, offset=0) => {
  const [ parent, window ] = unpackFrom('<xx2xII', buffer, offset)
  offset += 12

  return {
    value: {
      parent,
      window,
    },
    offset
  }
}
export interface MapRequestEventHandler extends EventHandler<MapRequestEvent> {}

declare module './connection' {
  interface XConnection {
    onMapRequestEvent?: MapRequestEventHandler
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

const unmarshallReparentNotifyEvent: Unmarshaller<ReparentNotifyEvent> = (buffer, offset=0) => {
  const [ event, window, parent, x, y, overrideRedirect ] = unpackFrom('<xx2xIIIhhB3x', buffer, offset)
  offset += 24

  return {
    value: {
      event,
      window,
      parent,
      x,
      y,
      overrideRedirect,
    },
    offset
  }
}
export interface ReparentNotifyEventHandler extends EventHandler<ReparentNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onReparentNotifyEvent?: ReparentNotifyEventHandler
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

const unmarshallConfigureNotifyEvent: Unmarshaller<ConfigureNotifyEvent> = (buffer, offset=0) => {
  const [ event, window, aboveSibling, x, y, width, height, borderWidth, overrideRedirect ] = unpackFrom('<xx2xIIIhhHHHBx', buffer, offset)
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
      overrideRedirect,
    },
    offset
  }
}
export interface ConfigureNotifyEventHandler extends EventHandler<ConfigureNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onConfigureNotifyEvent?: ConfigureNotifyEventHandler
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

const unmarshallConfigureRequestEvent: Unmarshaller<ConfigureRequestEvent> = (buffer, offset=0) => {
  const [ stackMode, parent, window, sibling, x, y, width, height, borderWidth, valueMask ] = unpackFrom('<xB2xIIIhhHHHH', buffer, offset)
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
      valueMask,
    },
    offset
  }
}
export interface ConfigureRequestEventHandler extends EventHandler<ConfigureRequestEvent> {}

declare module './connection' {
  interface XConnection {
    onConfigureRequestEvent?: ConfigureRequestEventHandler
  }
}


export type GravityNotifyEvent = {
  event: WINDOW
  window: WINDOW
  x: number
  y: number
}

const unmarshallGravityNotifyEvent: Unmarshaller<GravityNotifyEvent> = (buffer, offset=0) => {
  const [ event, window, x, y ] = unpackFrom('<xx2xIIhh', buffer, offset)
  offset += 16

  return {
    value: {
      event,
      window,
      x,
      y,
    },
    offset
  }
}
export interface GravityNotifyEventHandler extends EventHandler<GravityNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onGravityNotifyEvent?: GravityNotifyEventHandler
  }
}


export type ResizeRequestEvent = {
  window: WINDOW
  width: number
  height: number
}

const unmarshallResizeRequestEvent: Unmarshaller<ResizeRequestEvent> = (buffer, offset=0) => {
  const [ window, width, height ] = unpackFrom('<xx2xIHH', buffer, offset)
  offset += 12

  return {
    value: {
      window,
      width,
      height,
    },
    offset
  }
}
export interface ResizeRequestEventHandler extends EventHandler<ResizeRequestEvent> {}

declare module './connection' {
  interface XConnection {
    onResizeRequestEvent?: ResizeRequestEventHandler
  }
}


export enum Place {
  OnTop= 0,
  OnBottom= 1,
}

export type CirculateNotifyEvent = {
  event: WINDOW
  window: WINDOW
  place: Place
}

const unmarshallCirculateNotifyEvent: Unmarshaller<CirculateNotifyEvent> = (buffer, offset=0) => {
  const [ event, window, place ] = unpackFrom('<xx2xII4xB3x', buffer, offset)
  offset += 20

  return {
    value: {
      event,
      window,
      place,
    },
    offset
  }
}
export interface CirculateNotifyEventHandler extends EventHandler<CirculateNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onCirculateNotifyEvent?: CirculateNotifyEventHandler
  }
}


export type CirculateRequestEvent = {
  event: WINDOW
  window: WINDOW
  place: Place
}

const unmarshallCirculateRequestEvent: Unmarshaller<CirculateRequestEvent> = (buffer, offset=0) => {
  const [ event, window, place ] = unpackFrom('<xx2xII4xB3x', buffer, offset)
  offset += 20

  return {
    value: {
      event,
      window,
      place,
    },
    offset
  }
}
export interface CirculateRequestEventHandler extends EventHandler<CirculateRequestEvent> {}

declare module './connection' {
  interface XConnection {
    onCirculateRequestEvent?: CirculateRequestEventHandler
  }
}


export enum Property {
  NewValue= 0,
  Delete= 1,
}

export type PropertyNotifyEvent = {
  window: WINDOW
  atom: ATOM
  time: TIMESTAMP
  state: Property
}

const unmarshallPropertyNotifyEvent: Unmarshaller<PropertyNotifyEvent> = (buffer, offset=0) => {
  const [ window, atom, time, state ] = unpackFrom('<xx2xIIIB3x', buffer, offset)
  offset += 20

  return {
    value: {
      window,
      atom,
      time,
      state,
    },
    offset
  }
}
export interface PropertyNotifyEventHandler extends EventHandler<PropertyNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onPropertyNotifyEvent?: PropertyNotifyEventHandler
  }
}


export type SelectionClearEvent = {
  time: TIMESTAMP
  owner: WINDOW
  selection: ATOM
}

const unmarshallSelectionClearEvent: Unmarshaller<SelectionClearEvent> = (buffer, offset=0) => {
  const [ time, owner, selection ] = unpackFrom('<xx2xIII', buffer, offset)
  offset += 16

  return {
    value: {
      time,
      owner,
      selection,
    },
    offset
  }
}
export interface SelectionClearEventHandler extends EventHandler<SelectionClearEvent> {}

declare module './connection' {
  interface XConnection {
    onSelectionClearEvent?: SelectionClearEventHandler
  }
}


export enum Time {
  CurrentTime= 0,
}

export enum Atom {
  None= 0,
  Any= 0,
  PRIMARY= 1,
  SECONDARY= 2,
  ARC= 3,
  ATOM= 4,
  BITMAP= 5,
  CARDINAL= 6,
  COLORMAP= 7,
  CURSOR= 8,
  cutBuffer0= 9,
  cutBuffer1= 10,
  cutBuffer2= 11,
  cutBuffer3= 12,
  cutBuffer4= 13,
  cutBuffer5= 14,
  cutBuffer6= 15,
  cutBuffer7= 16,
  DRAWABLE= 17,
  FONT= 18,
  INTEGER= 19,
  PIXMAP= 20,
  POINT= 21,
  RECTANGLE= 22,
  resourceManager= 23,
  rgbColorMap= 24,
  rgbBestMap= 25,
  rgbBlueMap= 26,
  rgbDefaultMap= 27,
  rgbGrayMap= 28,
  rgbGreenMap= 29,
  rgbRedMap= 30,
  STRING= 31,
  VISUALID= 32,
  WINDOW= 33,
  wmCommand= 34,
  wmHints= 35,
  wmClientMachine= 36,
  wmIconName= 37,
  wmIconSize= 38,
  wmName= 39,
  wmNormalHints= 40,
  wmSizeHints= 41,
  wmZoomHints= 42,
  minSpace= 43,
  normSpace= 44,
  maxSpace= 45,
  endSpace= 46,
  superscriptX= 47,
  superscriptY= 48,
  subscriptX= 49,
  subscriptY= 50,
  underlinePosition= 51,
  underlineThickness= 52,
  strikeoutAscent= 53,
  strikeoutDescent= 54,
  italicAngle= 55,
  xHeight= 56,
  quadWidth= 57,
  WEIGHT= 58,
  pointSize= 59,
  RESOLUTION= 60,
  COPYRIGHT= 61,
  NOTICE= 62,
  fontName= 63,
  familyName= 64,
  fullName= 65,
  capHeight= 66,
  wmClass= 67,
  wmTransientFor= 68,
}

export type SelectionRequestEvent = {
  time: TIMESTAMP
  owner: WINDOW
  requestor: WINDOW
  selection: ATOM
  target: ATOM
  property: ATOM
}

const unmarshallSelectionRequestEvent: Unmarshaller<SelectionRequestEvent> = (buffer, offset=0) => {
  const [ time, owner, requestor, selection, target, property ] = unpackFrom('<xx2xIIIIII', buffer, offset)
  offset += 28

  return {
    value: {
      time,
      owner,
      requestor,
      selection,
      target,
      property,
    },
    offset
  }
}
export interface SelectionRequestEventHandler extends EventHandler<SelectionRequestEvent> {}

declare module './connection' {
  interface XConnection {
    onSelectionRequestEvent?: SelectionRequestEventHandler
  }
}


export type SelectionNotifyEvent = {
  time: TIMESTAMP
  requestor: WINDOW
  selection: ATOM
  target: ATOM
  property: ATOM
}

const unmarshallSelectionNotifyEvent: Unmarshaller<SelectionNotifyEvent> = (buffer, offset=0) => {
  const [ time, requestor, selection, target, property ] = unpackFrom('<xx2xIIIII', buffer, offset)
  offset += 24

  return {
    value: {
      time,
      requestor,
      selection,
      target,
      property,
    },
    offset
  }
}
export interface SelectionNotifyEventHandler extends EventHandler<SelectionNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onSelectionNotifyEvent?: SelectionNotifyEventHandler
  }
}


export enum ColormapState {
  Uninstalled= 0,
  Installed= 1,
}

export enum Colormap {
  None= 0,
}

export type ColormapNotifyEvent = {
  window: WINDOW
  colormap: COLORMAP
  _new: number
  state: ColormapState
}

const unmarshallColormapNotifyEvent: Unmarshaller<ColormapNotifyEvent> = (buffer, offset=0) => {
  const [ window, colormap, _new, state ] = unpackFrom('<xx2xIIBB2x', buffer, offset)
  offset += 16

  return {
    value: {
      window,
      colormap,
      _new,
      state,
    },
    offset
  }
}
export interface ColormapNotifyEventHandler extends EventHandler<ColormapNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onColormapNotifyEvent?: ColormapNotifyEventHandler
  }
}


export type ClientMessageData  = {
  data8: Uint8Array
  data16: Uint16Array
  data32: Uint32Array
}

const unmarshallClientMessageData: Unmarshaller<ClientMessageData> = (buffer, offset=0) => {
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
      data32,
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

const unmarshallClientMessageEvent: Unmarshaller<ClientMessageEvent> = (buffer, offset=0) => {
  const [ format, window, _type ] = unpackFrom('<xB2xII', buffer, offset)
  offset += 12
  const dataWithOffset = unmarshallClientMessageData(buffer, offset)
  const data = dataWithOffset.value
  offset = dataWithOffset.offset

  return {
    value: {
      format,
      window,
      _type,
      data,
    },
    offset
  }
}
export interface ClientMessageEventHandler extends EventHandler<ClientMessageEvent> {}

declare module './connection' {
  interface XConnection {
    onClientMessageEvent?: ClientMessageEventHandler
  }
}


export enum Mapping {
  Modifier= 0,
  Keyboard= 1,
  Pointer= 2,
}

export type MappingNotifyEvent = {
  request: Mapping
  firstKeycode: KEYCODE
  count: number
}

const unmarshallMappingNotifyEvent: Unmarshaller<MappingNotifyEvent> = (buffer, offset=0) => {
  const [ request, firstKeycode, count ] = unpackFrom('<xx2xBBBx', buffer, offset)
  offset += 8

  return {
    value: {
      request,
      firstKeycode,
      count,
    },
    offset
  }
}
export interface MappingNotifyEventHandler extends EventHandler<MappingNotifyEvent> {}

declare module './connection' {
  interface XConnection {
    onMappingNotifyEvent?: MappingNotifyEventHandler
  }
}


export type GeGenericEvent = {
}

const unmarshallGeGenericEvent: Unmarshaller<GeGenericEvent> = (buffer, offset=0) => {

  return {
    value: {
    },
    offset
  }
}
export interface GeGenericEventHandler extends EventHandler<GeGenericEvent> {}

declare module './connection' {
  interface XConnection {
    onGeGenericEvent?: GeGenericEventHandler
  }
}


export type RequestError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallRequestError: Unmarshaller<RequestError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadRequest extends Error {
  readonly xError: RequestError
  constructor (error: RequestError) {
    super()
    Object.setPrototypeOf(this, BadRequest.prototype)
    this.name = 'RequestError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type ValueError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallValueError: Unmarshaller<ValueError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadValue extends Error {
  readonly xError: ValueError
  constructor (error: ValueError) {
    super()
    Object.setPrototypeOf(this, BadValue.prototype)
    this.name = 'ValueError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type WindowError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallWindowError: Unmarshaller<WindowError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadWindow extends Error {
  readonly xError: WindowError
  constructor (error: WindowError) {
    super()
    Object.setPrototypeOf(this, BadWindow.prototype)
    this.name = 'WindowError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type PixmapError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallPixmapError: Unmarshaller<PixmapError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadPixmap extends Error {
  readonly xError: PixmapError
  constructor (error: PixmapError) {
    super()
    Object.setPrototypeOf(this, BadPixmap.prototype)
    this.name = 'PixmapError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type AtomError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallAtomError: Unmarshaller<AtomError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadAtom extends Error {
  readonly xError: AtomError
  constructor (error: AtomError) {
    super()
    Object.setPrototypeOf(this, BadAtom.prototype)
    this.name = 'AtomError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type CursorError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallCursorError: Unmarshaller<CursorError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadCursor extends Error {
  readonly xError: CursorError
  constructor (error: CursorError) {
    super()
    Object.setPrototypeOf(this, BadCursor.prototype)
    this.name = 'CursorError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type FontError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallFontError: Unmarshaller<FontError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadFont extends Error {
  readonly xError: FontError
  constructor (error: FontError) {
    super()
    Object.setPrototypeOf(this, BadFont.prototype)
    this.name = 'FontError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type MatchError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallMatchError: Unmarshaller<MatchError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadMatch extends Error {
  readonly xError: MatchError
  constructor (error: MatchError) {
    super()
    Object.setPrototypeOf(this, BadMatch.prototype)
    this.name = 'MatchError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type DrawableError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallDrawableError: Unmarshaller<DrawableError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadDrawable extends Error {
  readonly xError: DrawableError
  constructor (error: DrawableError) {
    super()
    Object.setPrototypeOf(this, BadDrawable.prototype)
    this.name = 'DrawableError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type AccessError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallAccessError: Unmarshaller<AccessError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadAccess extends Error {
  readonly xError: AccessError
  constructor (error: AccessError) {
    super()
    Object.setPrototypeOf(this, BadAccess.prototype)
    this.name = 'AccessError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type AllocError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallAllocError: Unmarshaller<AllocError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadAlloc extends Error {
  readonly xError: AllocError
  constructor (error: AllocError) {
    super()
    Object.setPrototypeOf(this, BadAlloc.prototype)
    this.name = 'AllocError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type ColormapError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallColormapError: Unmarshaller<ColormapError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadColormap extends Error {
  readonly xError: ColormapError
  constructor (error: ColormapError) {
    super()
    Object.setPrototypeOf(this, BadColormap.prototype)
    this.name = 'ColormapError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type GContextError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallGContextError: Unmarshaller<GContextError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadGContext extends Error {
  readonly xError: GContextError
  constructor (error: GContextError) {
    super()
    Object.setPrototypeOf(this, BadGContext.prototype)
    this.name = 'GContextError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type IDChoiceError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallIDChoiceError: Unmarshaller<IDChoiceError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadIDChoice extends Error {
  readonly xError: IDChoiceError
  constructor (error: IDChoiceError) {
    super()
    Object.setPrototypeOf(this, BadIDChoice.prototype)
    this.name = 'IDChoiceError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type NameError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallNameError: Unmarshaller<NameError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadName extends Error {
  readonly xError: NameError
  constructor (error: NameError) {
    super()
    Object.setPrototypeOf(this, BadName.prototype)
    this.name = 'NameError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type LengthError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallLengthError: Unmarshaller<LengthError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadLength extends Error {
  readonly xError: LengthError
  constructor (error: LengthError) {
    super()
    Object.setPrototypeOf(this, BadLength.prototype)
    this.name = 'LengthError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export type ImplementationError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

const unmarshallImplementationError: Unmarshaller<ImplementationError> = (buffer, offset=0) => {
  const [ badValue, minorOpcode, majorOpcode ] = unpackFrom('<xx2xIHBx', buffer, offset)
  offset += 12

  return {
    value: {
      badValue,
      minorOpcode,
      majorOpcode,
    },
    offset
  }
}

export class BadImplementation extends Error {
  readonly xError: ImplementationError
  constructor (error: ImplementationError) {
    super()
    Object.setPrototypeOf(this, BadImplementation.prototype)
    this.name = 'ImplementationError'
    this.xError = error
  }
  toString () {
    return JSON.stringify(this.xError)
  }
}

export enum WindowClass {
  CopyFromParent= 0,
  InputOutput= 1,
  InputOnly= 2,
}

export enum CW {
  BackPixmap= 1,
  BackPixel= 2,
  BorderPixmap= 4,
  BorderPixel= 8,
  BitGravity= 16,
  WinGravity= 32,
  BackingStore= 64,
  BackingPlanes= 128,
  BackingPixel= 256,
  OverrideRedirect= 512,
  SaveUnder= 1024,
  EventMask= 2048,
  DontPropagate= 4096,
  Colormap= 8192,
  Cursor= 16384,
}

export enum BackPixmap {
  None= 0,
  ParentRelative= 1,
}

export enum Gravity {
  BitForget= 0,
  WinUnmap= 0,
  NorthWest= 1,
  North= 2,
  NorthEast= 3,
  West= 4,
  Center= 5,
  East= 6,
  SouthWest= 7,
  South= 8,
  SouthEast= 9,
  Static= 10,
}

export enum MapState {
  Unmapped= 0,
  Unviewable= 1,
  Viewable= 2,
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

const unmarshallGetWindowAttributesReply: Unmarshaller<GetWindowAttributesReply> = (buffer, offset=0) => {
  const [ backingStore, visual, _class, bitGravity, winGravity, backingPlanes, backingPixel, saveUnder, mapIsInstalled, mapState, overrideRedirect, colormap, allEventMasks, yourEventMask, doNotPropagateMask ] = unpackFrom('<xB2x4xIHBBIIBBBBIIIH2x', buffer, offset)
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
      doNotPropagateMask,
    },
    offset
  }
}

export enum SetMode {
  Insert= 0,
  Delete= 1,
}

export enum ConfigWindow {
  X= 1,
  Y= 2,
  Width= 4,
  Height= 8,
  BorderWidth= 16,
  Sibling= 32,
  StackMode= 64,
}

export enum StackMode {
  Above= 0,
  Below= 1,
  TopIf= 2,
  BottomIf= 3,
  Opposite= 4,
}

export enum Circulate {
  RaiseLowest= 0,
  LowerHighest= 1,
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

const unmarshallGetGeometryReply: Unmarshaller<GetGeometryReply> = (buffer, offset=0) => {
  const [ depth, root, x, y, width, height, borderWidth ] = unpackFrom('<xB2x4xIhhHHH2x', buffer, offset)
  offset += 24

  return {
    value: {
      depth,
      root,
      x,
      y,
      width,
      height,
      borderWidth,
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

const unmarshallQueryTreeReply: Unmarshaller<QueryTreeReply> = (buffer, offset=0) => {
  const [ root, parent, childrenLen ] = unpackFrom('<xx2x4xIIH14x', buffer, offset)
  offset += 32
  const childrenWithOffset = xcbSimpleList(buffer, offset, childrenLen, Uint32Array, 4)
  offset = childrenWithOffset.offset
  const children = childrenWithOffset.value

  return {
    value: {
      root,
      parent,
      childrenLen,
      children,
    },
    offset
  }
}

export type InternAtomCookie = Promise<InternAtomReply>

export type InternAtomReply = {
  atom: ATOM
}

const unmarshallInternAtomReply: Unmarshaller<InternAtomReply> = (buffer, offset=0) => {
  const [ atom ] = unpackFrom('<xx2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      atom,
    },
    offset
  }
}

export type GetAtomNameCookie = Promise<GetAtomNameReply>

export type GetAtomNameReply = {
  nameLen: number
  name: Int8Array
}

const unmarshallGetAtomNameReply: Unmarshaller<GetAtomNameReply> = (buffer, offset=0) => {
  const [ nameLen ] = unpackFrom('<xx2x4xH22x', buffer, offset)
  offset += 32
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, Int8Array, 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      nameLen,
      name,
    },
    offset
  }
}

export enum PropMode {
  Replace= 0,
  Prepend= 1,
  Append= 2,
}

export enum GetPropertyType {
  Any= 0,
}

export type GetPropertyCookie = Promise<GetPropertyReply>

export type GetPropertyReply = {
  format: number
  _type: ATOM
  bytesAfter: number
  valueLen: number
  value: Uint8Array
}

const unmarshallGetPropertyReply: Unmarshaller<GetPropertyReply> = (buffer, offset=0) => {
  const [ format, _type, bytesAfter, valueLen ] = unpackFrom('<xB2x4xIII12x', buffer, offset)
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
      value,
    },
    offset
  }
}

export type ListPropertiesCookie = Promise<ListPropertiesReply>

export type ListPropertiesReply = {
  atomsLen: number
  atoms: Uint32Array
}

const unmarshallListPropertiesReply: Unmarshaller<ListPropertiesReply> = (buffer, offset=0) => {
  const [ atomsLen ] = unpackFrom('<xx2x4xH22x', buffer, offset)
  offset += 32
  const atomsWithOffset = xcbSimpleList(buffer, offset, atomsLen, Uint32Array, 4)
  offset = atomsWithOffset.offset
  const atoms = atomsWithOffset.value

  return {
    value: {
      atomsLen,
      atoms,
    },
    offset
  }
}

export type GetSelectionOwnerCookie = Promise<GetSelectionOwnerReply>

export type GetSelectionOwnerReply = {
  owner: WINDOW
}

const unmarshallGetSelectionOwnerReply: Unmarshaller<GetSelectionOwnerReply> = (buffer, offset=0) => {
  const [ owner ] = unpackFrom('<xx2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      owner,
    },
    offset
  }
}

export enum SendEventDest {
  PointerWindow= 0,
  ItemFocus= 1,
}

export enum GrabMode {
  Sync= 0,
  Async= 1,
}

export enum GrabStatus {
  Success= 0,
  AlreadyGrabbed= 1,
  InvalidTime= 2,
  NotViewable= 3,
  Frozen= 4,
}

export enum Cursor {
  None= 0,
}

export type GrabPointerCookie = Promise<GrabPointerReply>

export type GrabPointerReply = {
  status: GrabStatus
}

const unmarshallGrabPointerReply: Unmarshaller<GrabPointerReply> = (buffer, offset=0) => {
  const [ status ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status,
    },
    offset
  }
}

export enum ButtonIndex {
  Any= 0,
  _1= 1,
  _2= 2,
  _3= 3,
  _4= 4,
  _5= 5,
}

export type GrabKeyboardCookie = Promise<GrabKeyboardReply>

export type GrabKeyboardReply = {
  status: GrabStatus
}

const unmarshallGrabKeyboardReply: Unmarshaller<GrabKeyboardReply> = (buffer, offset=0) => {
  const [ status ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status,
    },
    offset
  }
}

export enum Grab {
  Any= 0,
}

export enum Allow {
  AsyncPointer= 0,
  SyncPointer= 1,
  ReplayPointer= 2,
  AsyncKeyboard= 3,
  SyncKeyboard= 4,
  ReplayKeyboard= 5,
  AsyncBoth= 6,
  SyncBoth= 7,
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

const unmarshallQueryPointerReply: Unmarshaller<QueryPointerReply> = (buffer, offset=0) => {
  const [ sameScreen, root, child, rootX, rootY, winX, winY, mask ] = unpackFrom('<xB2x4xIIhhhhH2x', buffer, offset)
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
      mask,
    },
    offset
  }
}

export type TIMECOORD  = {
  time: TIMESTAMP
  x: number
  y: number
}

const unmarshallTIMECOORD: Unmarshaller<TIMECOORD> = (buffer, offset=0) => {
  const [ time, x, y ] = unpackFrom('<Ihh', buffer, offset)
  offset += 8

  return {
    value: {
      time,
      x,
      y,
    },
    offset
  }
}

export type GetMotionEventsCookie = Promise<GetMotionEventsReply>

export type GetMotionEventsReply = {
  eventsLen: number
  events: TIMECOORD[]
}

const unmarshallGetMotionEventsReply: Unmarshaller<GetMotionEventsReply> = (buffer, offset=0) => {
  const [ eventsLen ] = unpackFrom('<xx2x4xI20x', buffer, offset)
  offset += 32
  const eventsWithOffset = xcbComplexList(buffer, offset, eventsLen, unmarshallTIMECOORD)
  offset = eventsWithOffset.offset
  const events = eventsWithOffset.value

  return {
    value: {
      eventsLen,
      events,
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

const unmarshallTranslateCoordinatesReply: Unmarshaller<TranslateCoordinatesReply> = (buffer, offset=0) => {
  const [ sameScreen, child, dstX, dstY ] = unpackFrom('<xB2x4xIhh', buffer, offset)
  offset += 16

  return {
    value: {
      sameScreen,
      child,
      dstX,
      dstY,
    },
    offset
  }
}

export enum InputFocus {
  None= 0,
  PointerRoot= 1,
  Parent= 2,
  FollowKeyboard= 3,
}

export type GetInputFocusCookie = Promise<GetInputFocusReply>

export type GetInputFocusReply = {
  revertTo: InputFocus
  focus: WINDOW
}

const unmarshallGetInputFocusReply: Unmarshaller<GetInputFocusReply> = (buffer, offset=0) => {
  const [ revertTo, focus ] = unpackFrom('<xB2x4xI', buffer, offset)
  offset += 12

  return {
    value: {
      revertTo,
      focus,
    },
    offset
  }
}

export type QueryKeymapCookie = Promise<QueryKeymapReply>

export type QueryKeymapReply = {
  keys: Uint8Array
}

const unmarshallQueryKeymapReply: Unmarshaller<QueryKeymapReply> = (buffer, offset=0) => {
  const keysWithOffset = xcbSimpleList(buffer, offset, 32, Uint8Array, 1)
  offset = keysWithOffset.offset
  const keys = keysWithOffset.value

  return {
    value: {
      keys,
    },
    offset
  }
}

export enum FontDraw {
  LeftToRight= 0,
  RightToLeft= 1,
}

export type FONTPROP  = {
  name: ATOM
  value: number
}

const unmarshallFONTPROP: Unmarshaller<FONTPROP> = (buffer, offset=0) => {
  const [ name, value ] = unpackFrom('<II', buffer, offset)
  offset += 8

  return {
    value: {
      name,
      value,
    },
    offset
  }
}

export type CHARINFO  = {
  leftSideBearing: number
  rightSideBearing: number
  characterWidth: number
  ascent: number
  descent: number
  attributes: number
}

const unmarshallCHARINFO: Unmarshaller<CHARINFO> = (buffer, offset=0) => {
  const [ leftSideBearing, rightSideBearing, characterWidth, ascent, descent, attributes ] = unpackFrom('<hhhhhH', buffer, offset)
  offset += 12

  return {
    value: {
      leftSideBearing,
      rightSideBearing,
      characterWidth,
      ascent,
      descent,
      attributes,
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

const unmarshallQueryFontReply: Unmarshaller<QueryFontReply> = (buffer, offset=0) => {
  const minBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const minBounds = minBoundsWithOffset.value
  offset = minBoundsWithOffset.offset
  offset += typePad(12, offset)
  const maxBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const maxBounds = maxBoundsWithOffset.value
  offset = maxBoundsWithOffset.offset
  const [ minCharOrByte2, maxCharOrByte2, defaultChar, propertiesLen, drawDirection, minByte1, maxByte1, allCharsExist, fontAscent, fontDescent, charInfosLen ] = unpackFrom('<4xHHHHBBBBhhI', buffer, offset)
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
      charInfos,
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

const unmarshallQueryTextExtentsReply: Unmarshaller<QueryTextExtentsReply> = (buffer, offset=0) => {
  const [ drawDirection, fontAscent, fontDescent, overallAscent, overallDescent, overallWidth, overallLeft, overallRight ] = unpackFrom('<xB2x4xhhhhiii', buffer, offset)
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
      overallRight,
    },
    offset
  }
}

export type STR  = {
  nameLen: number
  name: Int8Array
}

const unmarshallSTR: Unmarshaller<STR> = (buffer, offset=0) => {
  const [ nameLen ] = unpackFrom('<B', buffer, offset)
  offset += 1
  const nameWithOffset = xcbSimpleList(buffer, offset, nameLen, Int8Array, 1)
  offset = nameWithOffset.offset
  const name = nameWithOffset.value

  return {
    value: {
      nameLen,
      name,
    },
    offset
  }
}

export type ListFontsCookie = Promise<ListFontsReply>

export type ListFontsReply = {
  namesLen: number
  names: STR[]
}

const unmarshallListFontsReply: Unmarshaller<ListFontsReply> = (buffer, offset=0) => {
  const [ namesLen ] = unpackFrom('<xx2x4xH22x', buffer, offset)
  offset += 32
  const namesWithOffset = xcbComplexList(buffer, offset, namesLen, unmarshallSTR)
  offset = namesWithOffset.offset
  const names = namesWithOffset.value

  return {
    value: {
      namesLen,
      names,
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

const unmarshallListFontsWithInfoReply: Unmarshaller<ListFontsWithInfoReply> = (buffer, offset=0) => {
  const [ nameLen ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8
  const minBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const minBounds = minBoundsWithOffset.value
  offset = minBoundsWithOffset.offset
  offset += typePad(12, offset)
  const maxBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const maxBounds = maxBoundsWithOffset.value
  offset = maxBoundsWithOffset.offset
  const [ minCharOrByte2, maxCharOrByte2, defaultChar, propertiesLen, drawDirection, minByte1, maxByte1, allCharsExist, fontAscent, fontDescent, repliesHint ] = unpackFrom('<4xHHHHBBBBhhI', buffer, offset)
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
      name,
    },
    offset
  }
}

export type GetFontPathCookie = Promise<GetFontPathReply>

export type GetFontPathReply = {
  pathLen: number
  path: STR[]
}

const unmarshallGetFontPathReply: Unmarshaller<GetFontPathReply> = (buffer, offset=0) => {
  const [ pathLen ] = unpackFrom('<xx2x4xH22x', buffer, offset)
  offset += 32
  const pathWithOffset = xcbComplexList(buffer, offset, pathLen, unmarshallSTR)
  offset = pathWithOffset.offset
  const path = pathWithOffset.value

  return {
    value: {
      pathLen,
      path,
    },
    offset
  }
}

export enum GC {
  Function= 1,
  PlaneMask= 2,
  Foreground= 4,
  Background= 8,
  LineWidth= 16,
  LineStyle= 32,
  CapStyle= 64,
  JoinStyle= 128,
  FillStyle= 256,
  FillRule= 512,
  Tile= 1024,
  Stipple= 2048,
  TileStippleOriginX= 4096,
  TileStippleOriginY= 8192,
  Font= 16384,
  SubwindowMode= 32768,
  GraphicsExposures= 65536,
  ClipOriginX= 131072,
  ClipOriginY= 262144,
  ClipMask= 524288,
  DashOffset= 1048576,
  DashList= 2097152,
  ArcMode= 4194304,
}

export enum GX {
  clear= 0,
  and= 1,
  andReverse= 2,
  copy= 3,
  andInverted= 4,
  noop= 5,
  xor= 6,
  or= 7,
  nor= 8,
  equiv= 9,
  invert= 10,
  orReverse= 11,
  copyInverted= 12,
  orInverted= 13,
  nand= 14,
  set= 15,
}

export enum LineStyle {
  Solid= 0,
  OnOffDash= 1,
  DoubleDash= 2,
}

export enum CapStyle {
  NotLast= 0,
  Butt= 1,
  Round= 2,
  Projecting= 3,
}

export enum JoinStyle {
  Miter= 0,
  Round= 1,
  Bevel= 2,
}

export enum FillStyle {
  Solid= 0,
  Tiled= 1,
  Stippled= 2,
  OpaqueStippled= 3,
}

export enum FillRule {
  EvenOdd= 0,
  Winding= 1,
}

export enum SubwindowMode {
  ClipByChildren= 0,
  IncludeInferiors= 1,
}

export enum ArcMode {
  Chord= 0,
  PieSlice= 1,
}

export enum ClipOrdering {
  Unsorted= 0,
  YSorted= 1,
  YXSorted= 2,
  YXBanded= 3,
}

export enum CoordMode {
  Origin= 0,
  Previous= 1,
}

export type SEGMENT  = {
  x1: number
  y1: number
  x2: number
  y2: number
}

const unmarshallSEGMENT: Unmarshaller<SEGMENT> = (buffer, offset=0) => {
  const [ x1, y1, x2, y2 ] = unpackFrom('<hhhh', buffer, offset)
  offset += 8

  return {
    value: {
      x1,
      y1,
      x2,
      y2,
    },
    offset
  }
}

export enum PolyShape {
  Complex= 0,
  Nonconvex= 1,
  Convex= 2,
}

export enum ImageFormat {
  XYBitmap= 0,
  XYPixmap= 1,
  ZPixmap= 2,
}

export type GetImageCookie = Promise<GetImageReply>

export type GetImageReply = {
  depth: number
  visual: VISUALID
  data: Uint8Array
}

const unmarshallGetImageReply: Unmarshaller<GetImageReply> = (buffer, offset=0) => {
  const [ depth, visual ] = unpackFrom('<xB2x4xI20x', buffer, offset)
  offset += 32
  const dataWithOffset = xcbSimpleList(buffer, offset, (length * 4), Uint8Array, 1)
  offset = dataWithOffset.offset
  const data = dataWithOffset.value

  return {
    value: {
      depth,
      visual,
      data,
    },
    offset
  }
}

export enum ColormapAlloc {
  None= 0,
  All= 1,
}

export type ListInstalledColormapsCookie = Promise<ListInstalledColormapsReply>

export type ListInstalledColormapsReply = {
  cmapsLen: number
  cmaps: Uint32Array
}

const unmarshallListInstalledColormapsReply: Unmarshaller<ListInstalledColormapsReply> = (buffer, offset=0) => {
  const [ cmapsLen ] = unpackFrom('<xx2x4xH22x', buffer, offset)
  offset += 32
  const cmapsWithOffset = xcbSimpleList(buffer, offset, cmapsLen, Uint32Array, 4)
  offset = cmapsWithOffset.offset
  const cmaps = cmapsWithOffset.value

  return {
    value: {
      cmapsLen,
      cmaps,
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

const unmarshallAllocColorReply: Unmarshaller<AllocColorReply> = (buffer, offset=0) => {
  const [ red, green, blue, pixel ] = unpackFrom('<xx2x4xHHH2xI', buffer, offset)
  offset += 20

  return {
    value: {
      red,
      green,
      blue,
      pixel,
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

const unmarshallAllocNamedColorReply: Unmarshaller<AllocNamedColorReply> = (buffer, offset=0) => {
  const [ pixel, exactRed, exactGreen, exactBlue, visualRed, visualGreen, visualBlue ] = unpackFrom('<xx2x4xIHHHHHH', buffer, offset)
  offset += 24

  return {
    value: {
      pixel,
      exactRed,
      exactGreen,
      exactBlue,
      visualRed,
      visualGreen,
      visualBlue,
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

const unmarshallAllocColorCellsReply: Unmarshaller<AllocColorCellsReply> = (buffer, offset=0) => {
  const [ pixelsLen, masksLen ] = unpackFrom('<xx2x4xHH20x', buffer, offset)
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
      masks,
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

const unmarshallAllocColorPlanesReply: Unmarshaller<AllocColorPlanesReply> = (buffer, offset=0) => {
  const [ pixelsLen, redMask, greenMask, blueMask ] = unpackFrom('<xx2x4xH2xIII8x', buffer, offset)
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
      pixels,
    },
    offset
  }
}

export enum ColorFlag {
  Red= 1,
  Green= 2,
  Blue= 4,
}

export type COLORITEM  = {
  pixel: number
  red: number
  green: number
  blue: number
  flags: number
}

const unmarshallCOLORITEM: Unmarshaller<COLORITEM> = (buffer, offset=0) => {
  const [ pixel, red, green, blue, flags ] = unpackFrom('<IHHHBx', buffer, offset)
  offset += 12

  return {
    value: {
      pixel,
      red,
      green,
      blue,
      flags,
    },
    offset
  }
}

export type RGB  = {
  red: number
  green: number
  blue: number
}

const unmarshallRGB: Unmarshaller<RGB> = (buffer, offset=0) => {
  const [ red, green, blue ] = unpackFrom('<HHH2x', buffer, offset)
  offset += 8

  return {
    value: {
      red,
      green,
      blue,
    },
    offset
  }
}

export type QueryColorsCookie = Promise<QueryColorsReply>

export type QueryColorsReply = {
  colorsLen: number
  colors: RGB[]
}

const unmarshallQueryColorsReply: Unmarshaller<QueryColorsReply> = (buffer, offset=0) => {
  const [ colorsLen ] = unpackFrom('<xx2x4xH22x', buffer, offset)
  offset += 32
  const colorsWithOffset = xcbComplexList(buffer, offset, colorsLen, unmarshallRGB)
  offset = colorsWithOffset.offset
  const colors = colorsWithOffset.value

  return {
    value: {
      colorsLen,
      colors,
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

const unmarshallLookupColorReply: Unmarshaller<LookupColorReply> = (buffer, offset=0) => {
  const [ exactRed, exactGreen, exactBlue, visualRed, visualGreen, visualBlue ] = unpackFrom('<xx2x4xHHHHHH', buffer, offset)
  offset += 20

  return {
    value: {
      exactRed,
      exactGreen,
      exactBlue,
      visualRed,
      visualGreen,
      visualBlue,
    },
    offset
  }
}

export enum Pixmap {
  None= 0,
}

export enum Font {
  None= 0,
}

export enum QueryShapeOf {
  LargestCursor= 0,
  FastestTile= 1,
  FastestStipple= 2,
}

export type QueryBestSizeCookie = Promise<QueryBestSizeReply>

export type QueryBestSizeReply = {
  width: number
  height: number
}

const unmarshallQueryBestSizeReply: Unmarshaller<QueryBestSizeReply> = (buffer, offset=0) => {
  const [ width, height ] = unpackFrom('<xx2x4xHH', buffer, offset)
  offset += 12

  return {
    value: {
      width,
      height,
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

const unmarshallQueryExtensionReply: Unmarshaller<QueryExtensionReply> = (buffer, offset=0) => {
  const [ present, majorOpcode, firstEvent, firstError ] = unpackFrom('<xx2x4xBBBB', buffer, offset)
  offset += 12

  return {
    value: {
      present,
      majorOpcode,
      firstEvent,
      firstError,
    },
    offset
  }
}

export type ListExtensionsCookie = Promise<ListExtensionsReply>

export type ListExtensionsReply = {
  namesLen: number
  names: STR[]
}

const unmarshallListExtensionsReply: Unmarshaller<ListExtensionsReply> = (buffer, offset=0) => {
  const [ namesLen ] = unpackFrom('<xB2x4x24x', buffer, offset)
  offset += 32
  const namesWithOffset = xcbComplexList(buffer, offset, namesLen, unmarshallSTR)
  offset = namesWithOffset.offset
  const names = namesWithOffset.value

  return {
    value: {
      namesLen,
      names,
    },
    offset
  }
}

export type GetKeyboardMappingCookie = Promise<GetKeyboardMappingReply>

export type GetKeyboardMappingReply = {
  keysymsPerKeycode: number
  keysyms: Uint32Array
}

const unmarshallGetKeyboardMappingReply: Unmarshaller<GetKeyboardMappingReply> = (buffer, offset=0) => {
  const [ keysymsPerKeycode ] = unpackFrom('<xB2x4x24x', buffer, offset)
  offset += 32
  const keysymsWithOffset = xcbSimpleList(buffer, offset, length, Uint32Array, 4)
  offset = keysymsWithOffset.offset
  const keysyms = keysymsWithOffset.value

  return {
    value: {
      keysymsPerKeycode,
      keysyms,
    },
    offset
  }
}

export enum KB {
  KeyClickPercent= 1,
  BellPercent= 2,
  BellPitch= 4,
  BellDuration= 8,
  Led= 16,
  LedMode= 32,
  Key= 64,
  AutoRepeatMode= 128,
}

export enum LedMode {
  Off= 0,
  On= 1,
}

export enum AutoRepeatMode {
  Off= 0,
  On= 1,
  Default= 2,
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

const unmarshallGetKeyboardControlReply: Unmarshaller<GetKeyboardControlReply> = (buffer, offset=0) => {
  const [ globalAutoRepeat, ledMask, keyClickPercent, bellPercent, bellPitch, bellDuration ] = unpackFrom('<xB2x4xIBBHH2x', buffer, offset)
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
      autoRepeats,
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

const unmarshallGetPointerControlReply: Unmarshaller<GetPointerControlReply> = (buffer, offset=0) => {
  const [ accelerationNumerator, accelerationDenominator, threshold ] = unpackFrom('<xx2x4xHHH18x', buffer, offset)
  offset += 32

  return {
    value: {
      accelerationNumerator,
      accelerationDenominator,
      threshold,
    },
    offset
  }
}

export enum Blanking {
  NotPreferred= 0,
  Preferred= 1,
  Default= 2,
}

export enum Exposures {
  NotAllowed= 0,
  Allowed= 1,
  Default= 2,
}

export type GetScreenSaverCookie = Promise<GetScreenSaverReply>

export type GetScreenSaverReply = {
  timeout: number
  interval: number
  preferBlanking: Blanking
  allowExposures: Exposures
}

const unmarshallGetScreenSaverReply: Unmarshaller<GetScreenSaverReply> = (buffer, offset=0) => {
  const [ timeout, interval, preferBlanking, allowExposures ] = unpackFrom('<xx2x4xHHBB18x', buffer, offset)
  offset += 32

  return {
    value: {
      timeout,
      interval,
      preferBlanking,
      allowExposures,
    },
    offset
  }
}

export enum HostMode {
  Insert= 0,
  Delete= 1,
}

export enum Family {
  Internet= 0,
  DECnet= 1,
  Chaos= 2,
  ServerInterpreted= 5,
  Internet6= 6,
}

export type HOST  = {
  family: Family
  addressLen: number
  address: Uint8Array
}

const unmarshallHOST: Unmarshaller<HOST> = (buffer, offset=0) => {
  const [ family, addressLen ] = unpackFrom('<BxH', buffer, offset)
  offset += 4
  const addressWithOffset = xcbSimpleList(buffer, offset, addressLen, Uint8Array, 1)
  offset = addressWithOffset.offset
  const address = addressWithOffset.value

  return {
    value: {
      family,
      addressLen,
      address,
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

const unmarshallListHostsReply: Unmarshaller<ListHostsReply> = (buffer, offset=0) => {
  const [ mode, hostsLen ] = unpackFrom('<xB2x4xH22x', buffer, offset)
  offset += 32
  const hostsWithOffset = xcbComplexList(buffer, offset, hostsLen, unmarshallHOST)
  offset = hostsWithOffset.offset
  const hosts = hostsWithOffset.value

  return {
    value: {
      mode,
      hostsLen,
      hosts,
    },
    offset
  }
}

export enum AccessControl {
  Disable= 0,
  Enable= 1,
}

export enum CloseDown {
  DestroyAll= 0,
  RetainPermanent= 1,
  RetainTemporary= 2,
}

export enum Kill {
  AllTemporary= 0,
}

export enum ScreenSaver {
  Reset= 0,
  Active= 1,
}

export enum MappingStatus {
  Success= 0,
  Busy= 1,
  Failure= 2,
}

export type SetPointerMappingCookie = Promise<SetPointerMappingReply>

export type SetPointerMappingReply = {
  status: MappingStatus
}

const unmarshallSetPointerMappingReply: Unmarshaller<SetPointerMappingReply> = (buffer, offset=0) => {
  const [ status ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status,
    },
    offset
  }
}

export type GetPointerMappingCookie = Promise<GetPointerMappingReply>

export type GetPointerMappingReply = {
  mapLen: number
  map: Uint8Array
}

const unmarshallGetPointerMappingReply: Unmarshaller<GetPointerMappingReply> = (buffer, offset=0) => {
  const [ mapLen ] = unpackFrom('<xB2x4x24x', buffer, offset)
  offset += 32
  const mapWithOffset = xcbSimpleList(buffer, offset, mapLen, Uint8Array, 1)
  offset = mapWithOffset.offset
  const map = mapWithOffset.value

  return {
    value: {
      mapLen,
      map,
    },
    offset
  }
}

export enum MapIndex {
  Shift= 0,
  Lock= 1,
  Control= 2,
  _1= 3,
  _2= 4,
  _3= 5,
  _4= 6,
  _5= 7,
}

export type SetModifierMappingCookie = Promise<SetModifierMappingReply>

export type SetModifierMappingReply = {
  status: MappingStatus
}

const unmarshallSetModifierMappingReply: Unmarshaller<SetModifierMappingReply> = (buffer, offset=0) => {
  const [ status ] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8

  return {
    value: {
      status,
    },
    offset
  }
}

export type GetModifierMappingCookie = Promise<GetModifierMappingReply>

export type GetModifierMappingReply = {
  keycodesPerModifier: number
  keycodes: Uint8Array
}

const unmarshallGetModifierMappingReply: Unmarshaller<GetModifierMappingReply> = (buffer, offset=0) => {
  const [ keycodesPerModifier ] = unpackFrom('<xB2x4x24x', buffer, offset)
  offset += 32
  const keycodesWithOffset = xcbSimpleList(buffer, offset, (keycodesPerModifier * 8), Uint8Array, 1)
  offset = keycodesWithOffset.offset
  const keycodes = keycodesWithOffset.value

  return {
    value: {
      keycodesPerModifier,
      keycodes,
    },
    offset
  }
}


declare module './connection' {
  interface XConnection {
    createWindow (depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void>
  }
}

XConnection.prototype.createWindow = function(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
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

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xB2xIIhhHHHHII', depth, wid, parent, x, y, width, height, borderWidth, _class, visual, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendRequest<void>(requestParts, 1)
}


declare module './connection' {
  interface XConnection {
    changeWindowAttributes (window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void>
  }
}

XConnection.prototype.changeWindowAttributes = function(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
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

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xII', window, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendRequest<void>(requestParts, 2)
}


declare module './connection' {
  interface XConnection {
    getWindowAttributes (window: WINDOW): GetWindowAttributesCookie
  }
}

XConnection.prototype.getWindowAttributes = function(window: WINDOW): GetWindowAttributesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<GetWindowAttributesReply>(requestParts, 3, unmarshallGetWindowAttributesReply)
}


declare module './connection' {
  interface XConnection {
    destroyWindow (window: WINDOW): Promise<void>
  }
}

XConnection.prototype.destroyWindow = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<void>(requestParts, 4)
}


declare module './connection' {
  interface XConnection {
    destroySubwindows (window: WINDOW): Promise<void>
  }
}

XConnection.prototype.destroySubwindows = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<void>(requestParts, 5)
}


declare module './connection' {
  interface XConnection {
    changeSaveSet (mode: SetMode, window: WINDOW): Promise<void>
  }
}

XConnection.prototype.changeSaveSet = function(mode: SetMode, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xI', mode, window))

  return this.sendRequest<void>(requestParts, 6)
}


declare module './connection' {
  interface XConnection {
    reparentWindow (window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void>
  }
}

XConnection.prototype.reparentWindow = function(window: WINDOW, parent: WINDOW, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', window, parent, x, y))

  return this.sendRequest<void>(requestParts, 7)
}


declare module './connection' {
  interface XConnection {
    mapWindow (window: WINDOW): Promise<void>
  }
}

XConnection.prototype.mapWindow = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<void>(requestParts, 8)
}


declare module './connection' {
  interface XConnection {
    mapSubwindows (window: WINDOW): Promise<void>
  }
}

XConnection.prototype.mapSubwindows = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<void>(requestParts, 9)
}


declare module './connection' {
  interface XConnection {
    unmapWindow (window: WINDOW): Promise<void>
  }
}

XConnection.prototype.unmapWindow = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<void>(requestParts, 10)
}


declare module './connection' {
  interface XConnection {
    unmapSubwindows (window: WINDOW): Promise<void>
  }
}

XConnection.prototype.unmapSubwindows = function(window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<void>(requestParts, 11)
}


declare module './connection' {
  interface XConnection {
    configureWindow (window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): Promise<void>
  }
}

XConnection.prototype.configureWindow = function(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
    x: 'i',
    y: 'i',
    width: 'I',
    height: 'I',
    borderWidth: 'I',
    sibling: 'I',
    stackMode: 'I'
  }

  const valueListBitmasks: {[key: string]: number} = {
    x: ConfigWindow.X,
    y: ConfigWindow.Y,
    width: ConfigWindow.Width,
    height: ConfigWindow.Height,
    borderWidth: ConfigWindow.BorderWidth,
    sibling: ConfigWindow.Sibling,
    stackMode: ConfigWindow.StackMode
  }
  const valueMaskSortedList = Object.keys(valueList).sort((a, b) => valueListBitmasks[a] - valueListBitmasks[b])
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xIH2x', window, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendRequest<void>(requestParts, 12)
}


declare module './connection' {
  interface XConnection {
    circulateWindow (direction: Circulate, window: WINDOW): Promise<void>
  }
}

XConnection.prototype.circulateWindow = function(direction: Circulate, window: WINDOW): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xI', direction, window))

  return this.sendRequest<void>(requestParts, 13)
}


declare module './connection' {
  interface XConnection {
    getGeometry (drawable: DRAWABLE): GetGeometryCookie
  }
}

XConnection.prototype.getGeometry = function(drawable: DRAWABLE): GetGeometryCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', drawable))

  return this.sendRequest<GetGeometryReply>(requestParts, 14, unmarshallGetGeometryReply)
}


declare module './connection' {
  interface XConnection {
    queryTree (window: WINDOW): QueryTreeCookie
  }
}

XConnection.prototype.queryTree = function(window: WINDOW): QueryTreeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<QueryTreeReply>(requestParts, 15, unmarshallQueryTreeReply)
}


declare module './connection' {
  interface XConnection {
    internAtom (onlyIfExists: number, name: Int8Array): InternAtomCookie
  }
}

XConnection.prototype.internAtom = function(onlyIfExists: number, name: Int8Array): InternAtomCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xH2x', onlyIfExists, nameLen))
  requestParts.push(name.buffer)

  return this.sendRequest<InternAtomReply>(requestParts, 16, unmarshallInternAtomReply)
}


declare module './connection' {
  interface XConnection {
    getAtomName (atom: ATOM): GetAtomNameCookie
  }
}

XConnection.prototype.getAtomName = function(atom: ATOM): GetAtomNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', atom))

  return this.sendRequest<GetAtomNameReply>(requestParts, 17, unmarshallGetAtomNameReply)
}


declare module './connection' {
  interface XConnection {
    changeProperty (mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: Uint8Array): Promise<void>
  }
}

XConnection.prototype.changeProperty = function(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: Uint8Array): Promise<void> {
  const dataLen = data.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIIB3xI', mode, window, property, _type, format, dataLen))
  requestParts.push(data.buffer)

  return this.sendRequest<void>(requestParts, 18)
}


declare module './connection' {
  interface XConnection {
    deleteProperty (window: WINDOW, property: ATOM): Promise<void>
  }
}

XConnection.prototype.deleteProperty = function(window: WINDOW, property: ATOM): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', window, property))

  return this.sendRequest<void>(requestParts, 19)
}


declare module './connection' {
  interface XConnection {
    getProperty (_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie
  }
}

XConnection.prototype.getProperty = function(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIIII', _delete, window, property, _type, longOffset, longLength))

  return this.sendRequest<GetPropertyReply>(requestParts, 20, unmarshallGetPropertyReply)
}


declare module './connection' {
  interface XConnection {
    listProperties (window: WINDOW): ListPropertiesCookie
  }
}

XConnection.prototype.listProperties = function(window: WINDOW): ListPropertiesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<ListPropertiesReply>(requestParts, 21, unmarshallListPropertiesReply)
}


declare module './connection' {
  interface XConnection {
    setSelectionOwner (owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.setSelectionOwner = function(owner: WINDOW, selection: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', owner, selection, time))

  return this.sendRequest<void>(requestParts, 22)
}


declare module './connection' {
  interface XConnection {
    getSelectionOwner (selection: ATOM): GetSelectionOwnerCookie
  }
}

XConnection.prototype.getSelectionOwner = function(selection: ATOM): GetSelectionOwnerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', selection))

  return this.sendRequest<GetSelectionOwnerReply>(requestParts, 23, unmarshallGetSelectionOwnerReply)
}


declare module './connection' {
  interface XConnection {
    convertSelection (requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.convertSelection = function(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIII', requestor, selection, target, property, time))

  return this.sendRequest<void>(requestParts, 24)
}


declare module './connection' {
  interface XConnection {
    sendEvent (propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): Promise<void>
  }
}

XConnection.prototype.sendEvent = function(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', propagate, destination, eventMask))
  requestParts.push(event.buffer)

  return this.sendRequest<void>(requestParts, 25)
}


declare module './connection' {
  interface XConnection {
    grabPointer (ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie
  }
}

XConnection.prototype.grabPointer = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHBBIII', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, time))

  return this.sendRequest<GrabPointerReply>(requestParts, 26, unmarshallGrabPointerReply)
}


declare module './connection' {
  interface XConnection {
    ungrabPointer (time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.ungrabPointer = function(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', time))

  return this.sendRequest<void>(requestParts, 27)
}


declare module './connection' {
  interface XConnection {
    grabButton (ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void>
  }
}

XConnection.prototype.grabButton = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHBBIIBxH', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, button, modifiers))

  return this.sendRequest<void>(requestParts, 28)
}


declare module './connection' {
  interface XConnection {
    ungrabButton (button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void>
  }
}

XConnection.prototype.ungrabButton = function(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIH2x', button, grabWindow, modifiers))

  return this.sendRequest<void>(requestParts, 29)
}


declare module './connection' {
  interface XConnection {
    changeActivePointerGrab (cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void>
  }
}

XConnection.prototype.changeActivePointerGrab = function(cursor: CURSOR, time: TIMESTAMP, eventMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIH2x', cursor, time, eventMask))

  return this.sendRequest<void>(requestParts, 30)
}


declare module './connection' {
  interface XConnection {
    grabKeyboard (ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie
  }
}

XConnection.prototype.grabKeyboard = function(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIBB2x', ownerEvents, grabWindow, time, pointerMode, keyboardMode))

  return this.sendRequest<GrabKeyboardReply>(requestParts, 31, unmarshallGrabKeyboardReply)
}


declare module './connection' {
  interface XConnection {
    ungrabKeyboard (time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.ungrabKeyboard = function(time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', time))

  return this.sendRequest<void>(requestParts, 32)
}


declare module './connection' {
  interface XConnection {
    grabKey (ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void>
  }
}

XConnection.prototype.grabKey = function(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHBBB3x', ownerEvents, grabWindow, modifiers, key, pointerMode, keyboardMode))

  return this.sendRequest<void>(requestParts, 33)
}


declare module './connection' {
  interface XConnection {
    ungrabKey (key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void>
  }
}

XConnection.prototype.ungrabKey = function(key: KEYCODE, grabWindow: WINDOW, modifiers: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIH2x', key, grabWindow, modifiers))

  return this.sendRequest<void>(requestParts, 34)
}


declare module './connection' {
  interface XConnection {
    allowEvents (mode: Allow, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.allowEvents = function(mode: Allow, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xI', mode, time))

  return this.sendRequest<void>(requestParts, 35)
}


declare module './connection' {
  interface XConnection {
    grabServer (): Promise<void>
  }
}

XConnection.prototype.grabServer = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<void>(requestParts, 36)
}


declare module './connection' {
  interface XConnection {
    ungrabServer (): Promise<void>
  }
}

XConnection.prototype.ungrabServer = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<void>(requestParts, 37)
}


declare module './connection' {
  interface XConnection {
    queryPointer (window: WINDOW): QueryPointerCookie
  }
}

XConnection.prototype.queryPointer = function(window: WINDOW): QueryPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<QueryPointerReply>(requestParts, 38, unmarshallQueryPointerReply)
}


declare module './connection' {
  interface XConnection {
    getMotionEvents (window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie
  }
}

XConnection.prototype.getMotionEvents = function(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', window, start, stop))

  return this.sendRequest<GetMotionEventsReply>(requestParts, 39, unmarshallGetMotionEventsReply)
}


declare module './connection' {
  interface XConnection {
    translateCoordinates (srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie
  }
}

XConnection.prototype.translateCoordinates = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', srcWindow, dstWindow, srcX, srcY))

  return this.sendRequest<TranslateCoordinatesReply>(requestParts, 40, unmarshallTranslateCoordinatesReply)
}


declare module './connection' {
  interface XConnection {
    warpPointer (srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void>
  }
}

XConnection.prototype.warpPointer = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhhHHhh', srcWindow, dstWindow, srcX, srcY, srcWidth, srcHeight, dstX, dstY))

  return this.sendRequest<void>(requestParts, 41)
}


declare module './connection' {
  interface XConnection {
    setInputFocus (revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void>
  }
}

XConnection.prototype.setInputFocus = function(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', revertTo, focus, time))

  return this.sendRequest<void>(requestParts, 42)
}


declare module './connection' {
  interface XConnection {
    getInputFocus (): GetInputFocusCookie
  }
}

XConnection.prototype.getInputFocus = function(): GetInputFocusCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetInputFocusReply>(requestParts, 43, unmarshallGetInputFocusReply)
}


declare module './connection' {
  interface XConnection {
    queryKeymap (): QueryKeymapCookie
  }
}

XConnection.prototype.queryKeymap = function(): QueryKeymapCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<QueryKeymapReply>(requestParts, 44, unmarshallQueryKeymapReply)
}


declare module './connection' {
  interface XConnection {
    openFont (fid: FONT, name: Int8Array): Promise<void>
  }
}

XConnection.prototype.openFont = function(fid: FONT, name: Int8Array): Promise<void> {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', fid, nameLen))
  requestParts.push(name.buffer)

  return this.sendRequest<void>(requestParts, 45)
}


declare module './connection' {
  interface XConnection {
    closeFont (font: FONT): Promise<void>
  }
}

XConnection.prototype.closeFont = function(font: FONT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', font))

  return this.sendRequest<void>(requestParts, 46)
}


declare module './connection' {
  interface XConnection {
    queryFont (font: FONTABLE): QueryFontCookie
  }
}

XConnection.prototype.queryFont = function(font: FONTABLE): QueryFontCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', font))

  return this.sendRequest<QueryFontReply>(requestParts, 47, unmarshallQueryFontReply)
}


declare module './connection' {
  interface XConnection {
    queryTextExtents (font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie
  }
}

XConnection.prototype.queryTextExtents = function(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<x', ))
  requestParts.push(pack('<B', (stringLen & 1)))
  requestParts.push(pack('<2xI', font))
  _string.forEach(({byte1, byte2}) => {
  requestParts.push(pack('<BB', byte1, byte2))

  })

  return this.sendRequest<QueryTextExtentsReply>(requestParts, 48, unmarshallQueryTextExtentsReply)
}


declare module './connection' {
  interface XConnection {
    listFonts (maxNames: number, pattern: Int8Array): ListFontsCookie
  }
}

XConnection.prototype.listFonts = function(maxNames: number, pattern: Int8Array): ListFontsCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xHH', maxNames, patternLen))
  requestParts.push(pattern.buffer)

  return this.sendRequest<ListFontsReply>(requestParts, 49, unmarshallListFontsReply)
}


declare module './connection' {
  interface XConnection {
    listFontsWithInfo (maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie
  }
}

XConnection.prototype.listFontsWithInfo = function(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xHH', maxNames, patternLen))
  requestParts.push(pattern.buffer)

  return this.sendRequest<ListFontsWithInfoReply>(requestParts, 50, unmarshallListFontsWithInfoReply)
}


declare module './connection' {
  interface XConnection {
    setFontPath (font: STR[]): Promise<void>
  }
}

XConnection.prototype.setFontPath = function(font: STR[]): Promise<void> {
  const fontQty = font.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xH2x', fontQty))
  font.forEach(({nameLen, name}) => {
  requestParts.push(pack('<B', nameLen))
  requestParts.push(name.buffer)

  })

  return this.sendRequest<void>(requestParts, 51)
}


declare module './connection' {
  interface XConnection {
    getFontPath (): GetFontPathCookie
  }
}

XConnection.prototype.getFontPath = function(): GetFontPathCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetFontPathReply>(requestParts, 52, unmarshallGetFontPathReply)
}


declare module './connection' {
  interface XConnection {
    createPixmap (depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.createPixmap = function(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIHH', depth, pid, drawable, width, height))

  return this.sendRequest<void>(requestParts, 53)
}


declare module './connection' {
  interface XConnection {
    freePixmap (pixmap: PIXMAP): Promise<void>
  }
}

XConnection.prototype.freePixmap = function(pixmap: PIXMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', pixmap))

  return this.sendRequest<void>(requestParts, 54)
}


declare module './connection' {
  interface XConnection {
    createGC (cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void>
  }
}

XConnection.prototype.createGC = function(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
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

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xIII', cid, drawable, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendRequest<void>(requestParts, 55)
}


declare module './connection' {
  interface XConnection {
    changeGC (gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void>
  }
}

XConnection.prototype.changeGC = function(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
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

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xII', gc, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendRequest<void>(requestParts, 56)
}


declare module './connection' {
  interface XConnection {
    copyGC (srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void>
  }
}

XConnection.prototype.copyGC = function(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', srcGc, dstGc, valueMask))

  return this.sendRequest<void>(requestParts, 57)
}


declare module './connection' {
  interface XConnection {
    setDashes (gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): Promise<void>
  }
}

XConnection.prototype.setDashes = function(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): Promise<void> {
  const dashesLen = dashes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHH', gc, dashOffset, dashesLen))
  requestParts.push(dashes.buffer)

  return this.sendRequest<void>(requestParts, 58)
}


declare module './connection' {
  interface XConnection {
    setClipRectangles (ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.setClipRectangles = function(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIhh', ordering, gc, clipXOrigin, clipYOrigin))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendRequest<void>(requestParts, 59)
}


declare module './connection' {
  interface XConnection {
    freeGC (gc: GCONTEXT): Promise<void>
  }
}

XConnection.prototype.freeGC = function(gc: GCONTEXT): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', gc))

  return this.sendRequest<void>(requestParts, 60)
}


declare module './connection' {
  interface XConnection {
    clearArea (exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.clearArea = function(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIhhHH', exposures, window, x, y, width, height))

  return this.sendRequest<void>(requestParts, 61)
}


declare module './connection' {
  interface XConnection {
    copyArea (srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void>
  }
}

XConnection.prototype.copyArea = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIhhhhHH', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height))

  return this.sendRequest<void>(requestParts, 62)
}


declare module './connection' {
  interface XConnection {
    copyPlane (srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void>
  }
}

XConnection.prototype.copyPlane = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIhhhhHHI', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height, bitPlane))

  return this.sendRequest<void>(requestParts, 63)
}


declare module './connection' {
  interface XConnection {
    polyPoint (coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.polyPoint = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', coordinateMode, drawable, gc))
  points.forEach(({x, y}) => {
  requestParts.push(pack('<hh', x, y))

  })

  return this.sendRequest<void>(requestParts, 64)
}


declare module './connection' {
  interface XConnection {
    polyLine (coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.polyLine = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', coordinateMode, drawable, gc))
  points.forEach(({x, y}) => {
  requestParts.push(pack('<hh', x, y))

  })

  return this.sendRequest<void>(requestParts, 65)
}


declare module './connection' {
  interface XConnection {
    polySegment (drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void>
  }
}

XConnection.prototype.polySegment = function(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  segments.forEach(({x1, y1, x2, y2}) => {
  requestParts.push(pack('<hhhh', x1, y1, x2, y2))

  })

  return this.sendRequest<void>(requestParts, 66)
}


declare module './connection' {
  interface XConnection {
    polyRectangle (drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.polyRectangle = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendRequest<void>(requestParts, 67)
}


declare module './connection' {
  interface XConnection {
    polyArc (drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void>
  }
}

XConnection.prototype.polyArc = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  arcs.forEach(({x, y, width, height, angle1, angle2}) => {
  requestParts.push(pack('<hhHHhh', x, y, width, height, angle1, angle2))

  })

  return this.sendRequest<void>(requestParts, 68)
}


declare module './connection' {
  interface XConnection {
    fillPoly (drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void>
  }
}

XConnection.prototype.fillPoly = function(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIBB2x', drawable, gc, shape, coordinateMode))
  points.forEach(({x, y}) => {
  requestParts.push(pack('<hh', x, y))

  })

  return this.sendRequest<void>(requestParts, 69)
}


declare module './connection' {
  interface XConnection {
    polyFillRectangle (drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void>
  }
}

XConnection.prototype.polyFillRectangle = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  rectangles.forEach(({x, y, width, height}) => {
  requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendRequest<void>(requestParts, 70)
}


declare module './connection' {
  interface XConnection {
    polyFillArc (drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void>
  }
}

XConnection.prototype.polyFillArc = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  arcs.forEach(({x, y, width, height, angle1, angle2}) => {
  requestParts.push(pack('<hhHHhh', x, y, width, height, angle1, angle2))

  })

  return this.sendRequest<void>(requestParts, 71)
}


declare module './connection' {
  interface XConnection {
    putImage (format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): Promise<void>
  }
}

XConnection.prototype.putImage = function(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIHHhhBB2x', format, drawable, gc, width, height, dstX, dstY, leftPad, depth))
  requestParts.push(data.buffer)

  return this.sendRequest<void>(requestParts, 72)
}


declare module './connection' {
  interface XConnection {
    getImage (format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie
  }
}

XConnection.prototype.getImage = function(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIhhHHI', format, drawable, x, y, width, height, planeMask))

  return this.sendRequest<GetImageReply>(requestParts, 73, unmarshallGetImageReply)
}


declare module './connection' {
  interface XConnection {
    polyText8 (drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void>
  }
}

XConnection.prototype.polyText8 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', drawable, gc, x, y))
  requestParts.push(items.buffer)

  return this.sendRequest<void>(requestParts, 74)
}


declare module './connection' {
  interface XConnection {
    polyText16 (drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void>
  }
}

XConnection.prototype.polyText16 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', drawable, gc, x, y))
  requestParts.push(items.buffer)

  return this.sendRequest<void>(requestParts, 75)
}


declare module './connection' {
  interface XConnection {
    imageText8 (drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): Promise<void>
  }
}

XConnection.prototype.imageText8 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): Promise<void> {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIhh', stringLen, drawable, gc, x, y))
  requestParts.push(_string.buffer)

  return this.sendRequest<void>(requestParts, 76)
}


declare module './connection' {
  interface XConnection {
    imageText16 (drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void>
  }
}

XConnection.prototype.imageText16 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): Promise<void> {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIhh', stringLen, drawable, gc, x, y))
  _string.forEach(({byte1, byte2}) => {
  requestParts.push(pack('<BB', byte1, byte2))

  })

  return this.sendRequest<void>(requestParts, 77)
}


declare module './connection' {
  interface XConnection {
    createColormap (alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void>
  }
}

XConnection.prototype.createColormap = function(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIII', alloc, mid, window, visual))

  return this.sendRequest<void>(requestParts, 78)
}


declare module './connection' {
  interface XConnection {
    freeColormap (cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.freeColormap = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))

  return this.sendRequest<void>(requestParts, 79)
}


declare module './connection' {
  interface XConnection {
    copyColormapAndFree (mid: COLORMAP, srcCmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.copyColormapAndFree = function(mid: COLORMAP, srcCmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', mid, srcCmap))

  return this.sendRequest<void>(requestParts, 80)
}


declare module './connection' {
  interface XConnection {
    installColormap (cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.installColormap = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))

  return this.sendRequest<void>(requestParts, 81)
}


declare module './connection' {
  interface XConnection {
    uninstallColormap (cmap: COLORMAP): Promise<void>
  }
}

XConnection.prototype.uninstallColormap = function(cmap: COLORMAP): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))

  return this.sendRequest<void>(requestParts, 82)
}


declare module './connection' {
  interface XConnection {
    listInstalledColormaps (window: WINDOW): ListInstalledColormapsCookie
  }
}

XConnection.prototype.listInstalledColormaps = function(window: WINDOW): ListInstalledColormapsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<ListInstalledColormapsReply>(requestParts, 83, unmarshallListInstalledColormapsReply)
}


declare module './connection' {
  interface XConnection {
    allocColor (cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie
  }
}

XConnection.prototype.allocColor = function(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHHH2x', cmap, red, green, blue))

  return this.sendRequest<AllocColorReply>(requestParts, 84, unmarshallAllocColorReply)
}


declare module './connection' {
  interface XConnection {
    allocNamedColor (cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie
  }
}

XConnection.prototype.allocNamedColor = function(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', cmap, nameLen))
  requestParts.push(name.buffer)

  return this.sendRequest<AllocNamedColorReply>(requestParts, 85, unmarshallAllocNamedColorReply)
}


declare module './connection' {
  interface XConnection {
    allocColorCells (contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie
  }
}

XConnection.prototype.allocColorCells = function(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHH', contiguous, cmap, colors, planes))

  return this.sendRequest<AllocColorCellsReply>(requestParts, 86, unmarshallAllocColorCellsReply)
}


declare module './connection' {
  interface XConnection {
    allocColorPlanes (contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie
  }
}

XConnection.prototype.allocColorPlanes = function(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHHHH', contiguous, cmap, colors, reds, greens, blues))

  return this.sendRequest<AllocColorPlanesReply>(requestParts, 87, unmarshallAllocColorPlanesReply)
}


declare module './connection' {
  interface XConnection {
    freeColors (cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): Promise<void>
  }
}

XConnection.prototype.freeColors = function(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', cmap, planeMask))
  requestParts.push(pixels.buffer)

  return this.sendRequest<void>(requestParts, 88)
}


declare module './connection' {
  interface XConnection {
    storeColors (cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void>
  }
}

XConnection.prototype.storeColors = function(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))
  items.forEach(({pixel, red, green, blue, flags}) => {
  requestParts.push(pack('<IHHHBx', pixel, red, green, blue, flags))

  })

  return this.sendRequest<void>(requestParts, 89)
}


declare module './connection' {
  interface XConnection {
    storeNamedColor (flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): Promise<void>
  }
}

XConnection.prototype.storeNamedColor = function(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): Promise<void> {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIH2x', flags, cmap, pixel, nameLen))
  requestParts.push(name.buffer)

  return this.sendRequest<void>(requestParts, 90)
}


declare module './connection' {
  interface XConnection {
    queryColors (cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie
  }
}

XConnection.prototype.queryColors = function(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))
  requestParts.push(pixels.buffer)

  return this.sendRequest<QueryColorsReply>(requestParts, 91, unmarshallQueryColorsReply)
}


declare module './connection' {
  interface XConnection {
    lookupColor (cmap: COLORMAP, name: Int8Array): LookupColorCookie
  }
}

XConnection.prototype.lookupColor = function(cmap: COLORMAP, name: Int8Array): LookupColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', cmap, nameLen))
  requestParts.push(name.buffer)

  return this.sendRequest<LookupColorReply>(requestParts, 92, unmarshallLookupColorReply)
}


declare module './connection' {
  interface XConnection {
    createCursor (cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void>
  }
}

XConnection.prototype.createCursor = function(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIHHHHHHHH', cid, source, mask, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue, x, y))

  return this.sendRequest<void>(requestParts, 93)
}


declare module './connection' {
  interface XConnection {
    createGlyphCursor (cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void>
  }
}

XConnection.prototype.createGlyphCursor = function(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIHHHHHHHH', cid, sourceFont, maskFont, sourceChar, maskChar, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return this.sendRequest<void>(requestParts, 94)
}


declare module './connection' {
  interface XConnection {
    freeCursor (cursor: CURSOR): Promise<void>
  }
}

XConnection.prototype.freeCursor = function(cursor: CURSOR): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cursor))

  return this.sendRequest<void>(requestParts, 95)
}


declare module './connection' {
  interface XConnection {
    recolorCursor (cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void>
  }
}

XConnection.prototype.recolorCursor = function(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHHHHHH', cursor, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return this.sendRequest<void>(requestParts, 96)
}


declare module './connection' {
  interface XConnection {
    queryBestSize (_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie
  }
}

XConnection.prototype.queryBestSize = function(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHH', _class, drawable, width, height))

  return this.sendRequest<QueryBestSizeReply>(requestParts, 97, unmarshallQueryBestSizeReply)
}


declare module './connection' {
  interface XConnection {
    queryExtension (name: Int8Array): QueryExtensionCookie
  }
}

XConnection.prototype.queryExtension = function(name: Int8Array): QueryExtensionCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xH2x', nameLen))
  requestParts.push(name.buffer)

  return this.sendRequest<QueryExtensionReply>(requestParts, 98, unmarshallQueryExtensionReply)
}


declare module './connection' {
  interface XConnection {
    listExtensions (): ListExtensionsCookie
  }
}

XConnection.prototype.listExtensions = function(): ListExtensionsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<ListExtensionsReply>(requestParts, 99, unmarshallListExtensionsReply)
}


declare module './connection' {
  interface XConnection {
    changeKeyboardMapping (firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): Promise<void>
  }
}

XConnection.prototype.changeKeyboardMapping = function(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): Promise<void> {
  const keycodeCount = keysyms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xBB2x', keycodeCount, firstKeycode, keysymsPerKeycode))
  requestParts.push(keysyms.buffer)

  return this.sendRequest<void>(requestParts, 100)
}


declare module './connection' {
  interface XConnection {
    getKeyboardMapping (firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie
  }
}

XConnection.prototype.getKeyboardMapping = function(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBB', firstKeycode, count))

  return this.sendRequest<GetKeyboardMappingReply>(requestParts, 101, unmarshallGetKeyboardMappingReply)
}


declare module './connection' {
  interface XConnection {
    changeKeyboardControl (valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): Promise<void>
  }
}

XConnection.prototype.changeKeyboardControl = function(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  const valueListFormats: {[key: string]: string} = {
    keyClickPercent: 'i',
    bellPercent: 'i',
    bellPitch: 'i',
    bellDuration: 'i',
    led: 'I',
    ledMode: 'I',
    key: 'I',
    autoRepeatMode: 'I'
  }

  const valueListBitmasks: {[key: string]: number} = {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit)=> mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xI', valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key=>valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendRequest<void>(requestParts, 102)
}


declare module './connection' {
  interface XConnection {
    getKeyboardControl (): GetKeyboardControlCookie
  }
}

XConnection.prototype.getKeyboardControl = function(): GetKeyboardControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetKeyboardControlReply>(requestParts, 103, unmarshallGetKeyboardControlReply)
}


declare module './connection' {
  interface XConnection {
    bell (percent: number): Promise<void>
  }
}

XConnection.prototype.bell = function(percent: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xb2x', percent))

  return this.sendRequest<void>(requestParts, 104)
}


declare module './connection' {
  interface XConnection {
    changePointerControl (accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void>
  }
}

XConnection.prototype.changePointerControl = function(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xhhhBB', accelerationNumerator, accelerationDenominator, threshold, doAcceleration, doThreshold))

  return this.sendRequest<void>(requestParts, 105)
}


declare module './connection' {
  interface XConnection {
    getPointerControl (): GetPointerControlCookie
  }
}

XConnection.prototype.getPointerControl = function(): GetPointerControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetPointerControlReply>(requestParts, 106, unmarshallGetPointerControlReply)
}


declare module './connection' {
  interface XConnection {
    setScreenSaver (timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void>
  }
}

XConnection.prototype.setScreenSaver = function(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xhhBB', timeout, interval, preferBlanking, allowExposures))

  return this.sendRequest<void>(requestParts, 107)
}


declare module './connection' {
  interface XConnection {
    getScreenSaver (): GetScreenSaverCookie
  }
}

XConnection.prototype.getScreenSaver = function(): GetScreenSaverCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetScreenSaverReply>(requestParts, 108, unmarshallGetScreenSaverReply)
}


declare module './connection' {
  interface XConnection {
    changeHosts (mode: HostMode, family: Family, address: Uint8Array): Promise<void>
  }
}

XConnection.prototype.changeHosts = function(mode: HostMode, family: Family, address: Uint8Array): Promise<void> {
  const addressLen = address.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xBxH', mode, family, addressLen))
  requestParts.push(address.buffer)

  return this.sendRequest<void>(requestParts, 109)
}


declare module './connection' {
  interface XConnection {
    listHosts (): ListHostsCookie
  }
}

XConnection.prototype.listHosts = function(): ListHostsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<ListHostsReply>(requestParts, 110, unmarshallListHostsReply)
}


declare module './connection' {
  interface XConnection {
    setAccessControl (mode: AccessControl): Promise<void>
  }
}

XConnection.prototype.setAccessControl = function(mode: AccessControl): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mode))

  return this.sendRequest<void>(requestParts, 111)
}


declare module './connection' {
  interface XConnection {
    setCloseDownMode (mode: CloseDown): Promise<void>
  }
}

XConnection.prototype.setCloseDownMode = function(mode: CloseDown): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mode))

  return this.sendRequest<void>(requestParts, 112)
}


declare module './connection' {
  interface XConnection {
    killClient (resource: number): Promise<void>
  }
}

XConnection.prototype.killClient = function(resource: number): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', resource))

  return this.sendRequest<void>(requestParts, 113)
}


declare module './connection' {
  interface XConnection {
    rotateProperties (window: WINDOW, delta: number, atoms: Uint32Array): Promise<void>
  }
}

XConnection.prototype.rotateProperties = function(window: WINDOW, delta: number, atoms: Uint32Array): Promise<void> {
  const atomsLen = atoms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHh', window, atomsLen, delta))
  requestParts.push(atoms.buffer)

  return this.sendRequest<void>(requestParts, 114)
}


declare module './connection' {
  interface XConnection {
    forceScreenSaver (mode: ScreenSaver): Promise<void>
  }
}

XConnection.prototype.forceScreenSaver = function(mode: ScreenSaver): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mode))

  return this.sendRequest<void>(requestParts, 115)
}


declare module './connection' {
  interface XConnection {
    setPointerMapping (map: Uint8Array): SetPointerMappingCookie
  }
}

XConnection.prototype.setPointerMapping = function(map: Uint8Array): SetPointerMappingCookie {
  const mapLen = map.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mapLen))
  requestParts.push(map.buffer)

  return this.sendRequest<SetPointerMappingReply>(requestParts, 116, unmarshallSetPointerMappingReply)
}


declare module './connection' {
  interface XConnection {
    getPointerMapping (): GetPointerMappingCookie
  }
}

XConnection.prototype.getPointerMapping = function(): GetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetPointerMappingReply>(requestParts, 117, unmarshallGetPointerMappingReply)
}


declare module './connection' {
  interface XConnection {
    setModifierMapping (keycodes: Uint8Array): SetModifierMappingCookie
  }
}

XConnection.prototype.setModifierMapping = function(keycodes: Uint8Array): SetModifierMappingCookie {
  const keycodesPerModifier = keycodes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', keycodesPerModifier))
  requestParts.push(keycodes.buffer)

  return this.sendRequest<SetModifierMappingReply>(requestParts, 118, unmarshallSetModifierMappingReply)
}


declare module './connection' {
  interface XConnection {
    getModifierMapping (): GetModifierMappingCookie
  }
}

XConnection.prototype.getModifierMapping = function(): GetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<GetModifierMappingReply>(requestParts, 119, unmarshallGetModifierMappingReply)
}


declare module './connection' {
  interface XConnection {
    noOperation (): Promise<void>
  }
}

XConnection.prototype.noOperation = function(): Promise<void> {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x', ))

  return this.sendRequest<void>(requestParts, 127)
}

events[2] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallKeyPressEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onKeyPressEvent?.(event)
}
events[3] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallKeyReleaseEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onKeyReleaseEvent?.(event)
}
events[4] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallButtonPressEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onButtonPressEvent?.(event)
}
events[5] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallButtonReleaseEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onButtonReleaseEvent?.(event)
}
events[6] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallMotionNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onMotionNotifyEvent?.(event)
}
events[7] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallEnterNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onEnterNotifyEvent?.(event)
}
events[8] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallLeaveNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onLeaveNotifyEvent?.(event)
}
events[9] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallFocusInEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onFocusInEvent?.(event)
}
events[10] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallFocusOutEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onFocusOutEvent?.(event)
}
events[11] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallKeymapNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onKeymapNotifyEvent?.(event)
}
events[12] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallExposeEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onExposeEvent?.(event)
}
events[13] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallGraphicsExposureEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onGraphicsExposureEvent?.(event)
}
events[14] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallNoExposureEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onNoExposureEvent?.(event)
}
events[15] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallVisibilityNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onVisibilityNotifyEvent?.(event)
}
events[16] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallCreateNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onCreateNotifyEvent?.(event)
}
events[17] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallDestroyNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onDestroyNotifyEvent?.(event)
}
events[18] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallUnmapNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onUnmapNotifyEvent?.(event)
}
events[19] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallMapNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onMapNotifyEvent?.(event)
}
events[20] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallMapRequestEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onMapRequestEvent?.(event)
}
events[21] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallReparentNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onReparentNotifyEvent?.(event)
}
events[22] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallConfigureNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onConfigureNotifyEvent?.(event)
}
events[23] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallConfigureRequestEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onConfigureRequestEvent?.(event)
}
events[24] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallGravityNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onGravityNotifyEvent?.(event)
}
events[25] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallResizeRequestEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onResizeRequestEvent?.(event)
}
events[26] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallCirculateNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onCirculateNotifyEvent?.(event)
}
events[27] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallCirculateRequestEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onCirculateRequestEvent?.(event)
}
events[28] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallPropertyNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onPropertyNotifyEvent?.(event)
}
events[29] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallSelectionClearEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onSelectionClearEvent?.(event)
}
events[30] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallSelectionRequestEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onSelectionRequestEvent?.(event)
}
events[31] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallSelectionNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onSelectionNotifyEvent?.(event)
}
events[32] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallColormapNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onColormapNotifyEvent?.(event)
}
events[33] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallClientMessageEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onClientMessageEvent?.(event)
}
events[34] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallMappingNotifyEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onMappingNotifyEvent?.(event)
}
events[35] = (xConnection: XConnection, rawEvent: Uint8Array) => {
  const event = unmarshallGeGenericEvent(rawEvent.buffer, rawEvent.byteOffset).value
  xConnection.onGeGenericEvent?.(event)
}
errors[1] = [unmarshallRequestError, BadRequest]
errors[2] = [unmarshallValueError, BadValue]
errors[3] = [unmarshallWindowError, BadWindow]
errors[4] = [unmarshallPixmapError, BadPixmap]
errors[5] = [unmarshallAtomError, BadAtom]
errors[6] = [unmarshallCursorError, BadCursor]
errors[7] = [unmarshallFontError, BadFont]
errors[8] = [unmarshallMatchError, BadMatch]
errors[9] = [unmarshallDrawableError, BadDrawable]
errors[10] = [unmarshallAccessError, BadAccess]
errors[11] = [unmarshallAllocError, BadAlloc]
errors[12] = [unmarshallColormapError, BadColormap]
errors[13] = [unmarshallGContextError, BadGContext]
errors[14] = [unmarshallIDChoiceError, BadIDChoice]
errors[15] = [unmarshallNameError, BadName]
errors[16] = [unmarshallLengthError, BadLength]
errors[17] = [unmarshallImplementationError, BadImplementation]
