//
// This file generated automatically from xproto.xml by ts_client.py.
// Edit at your peril.
//

import { XConnection, pad, TypedArray } from './connection'
import type { Unmarshaller, EventHandler, RequestChecker } from './xjsbInternals'
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


export type CHAR2B = {
  byte1: number
  byte2: number
}

export const unmarshallCHAR2B: Unmarshaller<CHAR2B> = (buffer, offset = 0) => {
  const [byte1, byte2] = unpackFrom('<BB', buffer, offset)
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

export const unmarshallPOINT: Unmarshaller<POINT> = (buffer, offset = 0) => {
  const [x, y] = unpackFrom('<hh', buffer, offset)
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

export const unmarshallRECTANGLE: Unmarshaller<RECTANGLE> = (buffer, offset = 0) => {
  const [x, y, width, height] = unpackFrom('<hhHH', buffer, offset)
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

export const unmarshallARC: Unmarshaller<ARC> = (buffer, offset = 0) => {
  const [x, y, width, height, angle1, angle2] = unpackFrom('<hhHHhh', buffer, offset)
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

export const unmarshallFORMAT: Unmarshaller<FORMAT> = (buffer, offset = 0) => {
  const [depth, bitsPerPixel, scanlinePad] = unpackFrom('<BBB5x', buffer, offset)
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

export const unmarshallVISUALTYPE: Unmarshaller<VISUALTYPE> = (buffer, offset = 0) => {
  const [visualId, _class, bitsPerRgbValue, colormapEntries, redMask, greenMask, blueMask] = unpackFrom('<IBBHIII4x', buffer, offset)
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

export const unmarshallDEPTH: Unmarshaller<DEPTH> = (buffer, offset = 0) => {
  const [depth, visualsLen] = unpackFrom('<BxH4x', buffer, offset)
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

export const unmarshallSCREEN: Unmarshaller<SCREEN> = (buffer, offset = 0) => {
  const [root, defaultColormap, whitePixel, blackPixel, currentInputMasks, widthInPixels, heightInPixels, widthInMillimeters, heightInMillimeters, minInstalledMaps, maxInstalledMaps, rootVisual, backingStores, saveUnders, rootDepth, allowedDepthsLen] = unpackFrom('<IIIIIHHHHHHIBBBB', buffer, offset)
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

export const unmarshallSetupRequest: Unmarshaller<SetupRequest> = (buffer, offset = 0) => {
  const [byteOrder, protocolMajorVersion, protocolMinorVersion, authorizationProtocolNameLen, authorizationProtocolDataLen] = unpackFrom('<BxHHHH2x', buffer, offset)
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

export const unmarshallSetupFailed: Unmarshaller<SetupFailed> = (buffer, offset = 0) => {
  const [status, reasonLen, protocolMajorVersion, protocolMinorVersion, length] = unpackFrom('<BBHHH', buffer, offset)
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

export const unmarshallSetupAuthenticate: Unmarshaller<SetupAuthenticate> = (buffer, offset = 0) => {
  const [status, length] = unpackFrom('<B5xH', buffer, offset)
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

export const unmarshallSetup: Unmarshaller<Setup> = (buffer, offset = 0) => {
  const [status, protocolMajorVersion, protocolMinorVersion, length, releaseNumber, resourceIdBase, resourceIdMask, motionBufferSize, vendorLen, maximumRequestLength, rootsLen, pixmapFormatsLen, imageByteOrder, bitmapFormatBitOrder, bitmapFormatScanlineUnit, bitmapFormatScanlinePad, minKeycode, maxKeycode] = unpackFrom('<BxHHHIIIIHHBBBBBBBB4x', buffer, offset)
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

/**
 *
 * a key was pressed/released
 *
 * See:
 *
 * {@link XConnection.grabKey}
 *
 * {@link XConnection.grabKeyboard}
 */
export type KeyPressEvent = {
  /**
   * The keycode (a number representing a physical key on the keyboard) of the key
   * which was pressed.
   */
  detail: KEYCODE
  /**
   * Time when the event was generated (in milliseconds).
   */
  time: TIMESTAMP
  /**
   * The root window of `child`.
   */
  root: WINDOW
  event: WINDOW
  child: WINDOW
  /**
   * The X coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootX: number
  /**
   * The Y coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootY: number
  /**
   * If `same_screen` is true, this is the X coordinate relative to the `event`
   * window's origin. Otherwise, `event_x` will be set to zero.
   */
  eventX: number
  /**
   * If `same_screen` is true, this is the Y coordinate relative to the `event`
   * window's origin. Otherwise, `event_y` will be set to zero.
   */
  eventY: number
  /**
   * The logical state of the pointer buttons and modifier keys just prior to the
   * event.
   */
  state: number
  /**
   * Whether the `event` window is on the same screen as the `root` window.
   */
  sameScreen: number
}

export const unmarshallKeyPressEvent: Unmarshaller<KeyPressEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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

export interface KeyPressEventHandler extends EventHandler<KeyPressEvent> {
}

declare module './connection' {
  interface XConnection {
    onKeyPressEvent?: KeyPressEventHandler
  }
}


/**
 *
 * a key was pressed/released
 *
 * See:
 *
 * {@link XConnection.grabKey}
 *
 * {@link XConnection.grabKeyboard}
 */
export type KeyReleaseEvent = {
  /**
   * The keycode (a number representing a physical key on the keyboard) of the key
   * which was pressed.
   */
  detail: KEYCODE
  /**
   * Time when the event was generated (in milliseconds).
   */
  time: TIMESTAMP
  /**
   * The root window of `child`.
   */
  root: WINDOW
  event: WINDOW
  child: WINDOW
  /**
   * The X coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootX: number
  /**
   * The Y coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootY: number
  /**
   * If `same_screen` is true, this is the X coordinate relative to the `event`
   * window's origin. Otherwise, `event_x` will be set to zero.
   */
  eventX: number
  /**
   * If `same_screen` is true, this is the Y coordinate relative to the `event`
   * window's origin. Otherwise, `event_y` will be set to zero.
   */
  eventY: number
  /**
   * The logical state of the pointer buttons and modifier keys just prior to the
   * event.
   */
  state: number
  /**
   * Whether the `event` window is on the same screen as the `root` window.
   */
  sameScreen: number
}

export const unmarshallKeyReleaseEvent: Unmarshaller<KeyReleaseEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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

export interface KeyReleaseEventHandler extends EventHandler<KeyReleaseEvent> {
}

declare module './connection' {
  interface XConnection {
    onKeyReleaseEvent?: KeyReleaseEventHandler
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

/**
 *
 * a mouse button was pressed/released
 *
 * See:
 *
 * {@link XConnection.grabButton}
 *
 * {@link XConnection.grabPointer}
 */
export type ButtonPressEvent = {
  /**
   * The keycode (a number representing a physical key on the keyboard) of the key
   * which was pressed.
   */
  detail: BUTTON
  /**
   * Time when the event was generated (in milliseconds).
   */
  time: TIMESTAMP
  /**
   * The root window of `child`.
   */
  root: WINDOW
  event: WINDOW
  child: WINDOW
  /**
   * The X coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootX: number
  /**
   * The Y coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootY: number
  /**
   * If `same_screen` is true, this is the X coordinate relative to the `event`
   * window's origin. Otherwise, `event_x` will be set to zero.
   */
  eventX: number
  /**
   * If `same_screen` is true, this is the Y coordinate relative to the `event`
   * window's origin. Otherwise, `event_y` will be set to zero.
   */
  eventY: number
  /**
   * The logical state of the pointer buttons and modifier keys just prior to the
   * event.
   */
  state: number
  /**
   * Whether the `event` window is on the same screen as the `root` window.
   */
  sameScreen: number
}

export const unmarshallButtonPressEvent: Unmarshaller<ButtonPressEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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

export interface ButtonPressEventHandler extends EventHandler<ButtonPressEvent> {
}

declare module './connection' {
  interface XConnection {
    onButtonPressEvent?: ButtonPressEventHandler
  }
}


/**
 *
 * a mouse button was pressed/released
 *
 * See:
 *
 * {@link XConnection.grabButton}
 *
 * {@link XConnection.grabPointer}
 */
export type ButtonReleaseEvent = {
  /**
   * The keycode (a number representing a physical key on the keyboard) of the key
   * which was pressed.
   */
  detail: BUTTON
  /**
   * Time when the event was generated (in milliseconds).
   */
  time: TIMESTAMP
  /**
   * The root window of `child`.
   */
  root: WINDOW
  event: WINDOW
  child: WINDOW
  /**
   * The X coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootX: number
  /**
   * The Y coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootY: number
  /**
   * If `same_screen` is true, this is the X coordinate relative to the `event`
   * window's origin. Otherwise, `event_x` will be set to zero.
   */
  eventX: number
  /**
   * If `same_screen` is true, this is the Y coordinate relative to the `event`
   * window's origin. Otherwise, `event_y` will be set to zero.
   */
  eventY: number
  /**
   * The logical state of the pointer buttons and modifier keys just prior to the
   * event.
   */
  state: number
  /**
   * Whether the `event` window is on the same screen as the `root` window.
   */
  sameScreen: number
}

export const unmarshallButtonReleaseEvent: Unmarshaller<ButtonReleaseEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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

export interface ButtonReleaseEventHandler extends EventHandler<ButtonReleaseEvent> {
}

declare module './connection' {
  interface XConnection {
    onButtonReleaseEvent?: ButtonReleaseEventHandler
  }
}


export enum Motion {
  Normal = 0,
  Hint = 1,
}

/**
 *
 * a key was pressed
 *
 * See:
 *
 * {@link XConnection.grabKey}
 *
 * {@link XConnection.grabKeyboard}
 */
export type MotionNotifyEvent = {
  /**
   * The keycode (a number representing a physical key on the keyboard) of the key
   * which was pressed.
   */
  detail: Motion
  /**
   * Time when the event was generated (in milliseconds).
   */
  time: TIMESTAMP
  /**
   * The root window of `child`.
   */
  root: WINDOW
  event: WINDOW
  child: WINDOW
  /**
   * The X coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootX: number
  /**
   * The Y coordinate of the pointer relative to the `root` window at the time of
   * the event.
   */
  rootY: number
  /**
   * If `same_screen` is true, this is the X coordinate relative to the `event`
   * window's origin. Otherwise, `event_x` will be set to zero.
   */
  eventX: number
  /**
   * If `same_screen` is true, this is the Y coordinate relative to the `event`
   * window's origin. Otherwise, `event_y` will be set to zero.
   */
  eventY: number
  /**
   * The logical state of the pointer buttons and modifier keys just prior to the
   * event.
   */
  state: number
  /**
   * Whether the `event` window is on the same screen as the `root` window.
   */
  sameScreen: number
}

export const unmarshallMotionNotifyEvent: Unmarshaller<MotionNotifyEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, sameScreen] = unpackFrom('<xB2xIIIIhhhhHBx', buffer, offset)
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

export interface MotionNotifyEventHandler extends EventHandler<MotionNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onMotionNotifyEvent?: MotionNotifyEventHandler
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

/**
 *
 * the pointer is in a different window
 */
export type EnterNotifyEvent = {
  detail: NotifyDetail
  time: TIMESTAMP
  /**
   * The root window for the final cursor position.
   */
  root: WINDOW
  /**
   * The window on which the event was generated.
   */
  event: WINDOW
  /**
   * If the `event` window has subwindows and the final pointer position is in one
   * of them, then `child` is set to that subwindow, `XCB_WINDOW_NONE` otherwise.
   */
  child: WINDOW
  /**
   * The pointer X coordinate relative to `root`'s origin at the time of the event.
   */
  rootX: number
  /**
   * The pointer Y coordinate relative to `root`'s origin at the time of the event.
   */
  rootY: number
  /**
   * If `event` is on the same screen as `root`, this is the pointer X coordinate
   * relative to the event window's origin.
   */
  eventX: number
  /**
   * If `event` is on the same screen as `root`, this is the pointer Y coordinate
   * relative to the event window's origin.
   */
  eventY: number
  state: number
  /**
   *
   */
  mode: NotifyMode
  sameScreenFocus: number
}

export const unmarshallEnterNotifyEvent: Unmarshaller<EnterNotifyEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, mode, sameScreenFocus] = unpackFrom('<xB2xIIIIhhhhHBB', buffer, offset)
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

export interface EnterNotifyEventHandler extends EventHandler<EnterNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onEnterNotifyEvent?: EnterNotifyEventHandler
  }
}


/**
 *
 * the pointer is in a different window
 */
export type LeaveNotifyEvent = {
  detail: NotifyDetail
  time: TIMESTAMP
  /**
   * The root window for the final cursor position.
   */
  root: WINDOW
  /**
   * The window on which the event was generated.
   */
  event: WINDOW
  /**
   * If the `event` window has subwindows and the final pointer position is in one
   * of them, then `child` is set to that subwindow, `XCB_WINDOW_NONE` otherwise.
   */
  child: WINDOW
  /**
   * The pointer X coordinate relative to `root`'s origin at the time of the event.
   */
  rootX: number
  /**
   * The pointer Y coordinate relative to `root`'s origin at the time of the event.
   */
  rootY: number
  /**
   * If `event` is on the same screen as `root`, this is the pointer X coordinate
   * relative to the event window's origin.
   */
  eventX: number
  /**
   * If `event` is on the same screen as `root`, this is the pointer Y coordinate
   * relative to the event window's origin.
   */
  eventY: number
  state: number
  /**
   *
   */
  mode: NotifyMode
  sameScreenFocus: number
}

export const unmarshallLeaveNotifyEvent: Unmarshaller<LeaveNotifyEvent> = (buffer, offset = 0) => {
  const [detail, time, root, event, child, rootX, rootY, eventX, eventY, state, mode, sameScreenFocus] = unpackFrom('<xB2xIIIIhhhhHBB', buffer, offset)
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

export interface LeaveNotifyEventHandler extends EventHandler<LeaveNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onLeaveNotifyEvent?: LeaveNotifyEventHandler
  }
}


/**
 *
 * NOT YET DOCUMENTED
 */
export type FocusInEvent = {
  /**
   *
   */
  detail: NotifyDetail
  /**
   * The window on which the focus event was generated. This is the window used by
   * the X server to report the event.
   */
  event: WINDOW
  /**
   *
   */
  mode: NotifyMode
}

export const unmarshallFocusInEvent: Unmarshaller<FocusInEvent> = (buffer, offset = 0) => {
  const [detail, event, mode] = unpackFrom('<xB2xIB3x', buffer, offset)
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

export interface FocusInEventHandler extends EventHandler<FocusInEvent> {
}

declare module './connection' {
  interface XConnection {
    onFocusInEvent?: FocusInEventHandler
  }
}


/**
 *
 * NOT YET DOCUMENTED
 */
export type FocusOutEvent = {
  /**
   *
   */
  detail: NotifyDetail
  /**
   * The window on which the focus event was generated. This is the window used by
   * the X server to report the event.
   */
  event: WINDOW
  /**
   *
   */
  mode: NotifyMode
}

export const unmarshallFocusOutEvent: Unmarshaller<FocusOutEvent> = (buffer, offset = 0) => {
  const [detail, event, mode] = unpackFrom('<xB2xIB3x', buffer, offset)
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

export interface FocusOutEventHandler extends EventHandler<FocusOutEvent> {
}

declare module './connection' {
  interface XConnection {
    onFocusOutEvent?: FocusOutEventHandler
  }
}


export type KeymapNotifyEvent = {
  keys: Uint8Array
}

export const unmarshallKeymapNotifyEvent: Unmarshaller<KeymapNotifyEvent> = (buffer, offset = 0) => {
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

export interface KeymapNotifyEventHandler extends EventHandler<KeymapNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onKeymapNotifyEvent?: KeymapNotifyEventHandler
  }
}


/**
 *
 * NOT YET DOCUMENTED
 */
export type ExposeEvent = {
  /**
   * The exposed (damaged) window.
   */
  window: WINDOW
  /**
   * The X coordinate of the left-upper corner of the exposed rectangle, relative to
   * the `window`'s origin.
   */
  x: number
  /**
   * The Y coordinate of the left-upper corner of the exposed rectangle, relative to
   * the `window`'s origin.
   */
  y: number
  /**
   * The width of the exposed rectangle.
   */
  width: number
  /**
   * The height of the exposed rectangle.
   */
  height: number
  /**
   * The amount of `Expose` events following this one. Simple applications that do
   * not want to optimize redisplay by distinguishing between subareas of its window
   * can just ignore all Expose events with nonzero counts and perform full
   * redisplays on events with zero counts.
   */
  count: number
}

export const unmarshallExposeEvent: Unmarshaller<ExposeEvent> = (buffer, offset = 0) => {
  const [window, x, y, width, height, count] = unpackFrom('<xx2xIHHHHH2x', buffer, offset)
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

export interface ExposeEventHandler extends EventHandler<ExposeEvent> {
}

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

export const unmarshallGraphicsExposureEvent: Unmarshaller<GraphicsExposureEvent> = (buffer, offset = 0) => {
  const [drawable, x, y, width, height, minorOpcode, count, majorOpcode] = unpackFrom('<xx2xIHHHHHHB3x', buffer, offset)
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

export interface GraphicsExposureEventHandler extends EventHandler<GraphicsExposureEvent> {
}

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

export const unmarshallNoExposureEvent: Unmarshaller<NoExposureEvent> = (buffer, offset = 0) => {
  const [drawable, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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

export interface NoExposureEventHandler extends EventHandler<NoExposureEvent> {
}

declare module './connection' {
  interface XConnection {
    onNoExposureEvent?: NoExposureEventHandler
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

export const unmarshallVisibilityNotifyEvent: Unmarshaller<VisibilityNotifyEvent> = (buffer, offset = 0) => {
  const [window, state] = unpackFrom('<xx2xIB3x', buffer, offset)
  offset += 12

  return {
    value: {
      window,
      state
    },
    offset
  }
}

export interface VisibilityNotifyEventHandler extends EventHandler<VisibilityNotifyEvent> {
}

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

export const unmarshallCreateNotifyEvent: Unmarshaller<CreateNotifyEvent> = (buffer, offset = 0) => {
  const [parent, window, x, y, width, height, borderWidth, overrideRedirect] = unpackFrom('<xx2xIIhhHHHBx', buffer, offset)
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

export interface CreateNotifyEventHandler extends EventHandler<CreateNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onCreateNotifyEvent?: CreateNotifyEventHandler
  }
}


/**
 *
 * a window is destroyed
 *
 * See:
 *
 * {@link XConnection.destroyWindow}
 */
export type DestroyNotifyEvent = {
  /**
   * The reconfigured window or its parent, depending on whether `StructureNotify`
   * or `SubstructureNotify` was selected.
   */
  event: WINDOW
  /**
   * The window that is destroyed.
   */
  window: WINDOW
}

export const unmarshallDestroyNotifyEvent: Unmarshaller<DestroyNotifyEvent> = (buffer, offset = 0) => {
  const [event, window] = unpackFrom('<xx2xII', buffer, offset)
  offset += 12

  return {
    value: {
      event,
      window
    },
    offset
  }
}

export interface DestroyNotifyEventHandler extends EventHandler<DestroyNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onDestroyNotifyEvent?: DestroyNotifyEventHandler
  }
}


/**
 *
 * a window is unmapped
 *
 * See:
 *
 * {@link XConnection.unmapWindow}
 */
export type UnmapNotifyEvent = {
  /**
   * The reconfigured window or its parent, depending on whether `StructureNotify`
   * or `SubstructureNotify` was selected.
   */
  event: WINDOW
  /**
   * The window that was unmapped.
   */
  window: WINDOW
  /**
   * Set to 1 if the event was generated as a result of a resizing of the window's
   * parent when `window` had a win_gravity of `UnmapGravity`.
   */
  fromConfigure: number
}

export const unmarshallUnmapNotifyEvent: Unmarshaller<UnmapNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, fromConfigure] = unpackFrom('<xx2xIIB3x', buffer, offset)
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

export interface UnmapNotifyEventHandler extends EventHandler<UnmapNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onUnmapNotifyEvent?: UnmapNotifyEventHandler
  }
}


/**
 *
 * a window was mapped
 *
 * See:
 *
 * {@link XConnection.mapWindow}
 */
export type MapNotifyEvent = {
  /**
   * The window which was mapped or its parent, depending on whether
   * `StructureNotify` or `SubstructureNotify` was selected.
   */
  event: WINDOW
  /**
   * The window that was mapped.
   */
  window: WINDOW
  /**
   * Window managers should ignore this window if `override_redirect` is 1.
   */
  overrideRedirect: number
}

export const unmarshallMapNotifyEvent: Unmarshaller<MapNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, overrideRedirect] = unpackFrom('<xx2xIIB3x', buffer, offset)
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

export interface MapNotifyEventHandler extends EventHandler<MapNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onMapNotifyEvent?: MapNotifyEventHandler
  }
}


/**
 *
 * window wants to be mapped
 *
 * See:
 *
 * {@link XConnection.mapWindow}
 */
export type MapRequestEvent = {
  /**
   * The parent of `window`.
   */
  parent: WINDOW
  /**
   * The window to be mapped.
   */
  window: WINDOW
}

export const unmarshallMapRequestEvent: Unmarshaller<MapRequestEvent> = (buffer, offset = 0) => {
  const [parent, window] = unpackFrom('<xx2xII', buffer, offset)
  offset += 12

  return {
    value: {
      parent,
      window
    },
    offset
  }
}

export interface MapRequestEventHandler extends EventHandler<MapRequestEvent> {
}

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

export const unmarshallReparentNotifyEvent: Unmarshaller<ReparentNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, parent, x, y, overrideRedirect] = unpackFrom('<xx2xIIIhhB3x', buffer, offset)
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

export interface ReparentNotifyEventHandler extends EventHandler<ReparentNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onReparentNotifyEvent?: ReparentNotifyEventHandler
  }
}


/**
 *
 * NOT YET DOCUMENTED
 *
 * See:
 *
 * {@link XConnection.freeColormap}
 */
export type ConfigureNotifyEvent = {
  /**
   * The reconfigured window or its parent, depending on whether `StructureNotify`
   * or `SubstructureNotify` was selected.
   */
  event: WINDOW
  /**
   * The window whose size, position, border, and/or stacking order was changed.
   */
  window: WINDOW
  /**
   * If `XCB_NONE`, the `window` is on the bottom of the stack with respect to
   * sibling windows. However, if set to a sibling window, the `window` is placed on
   * top of this sibling window.
   */
  aboveSibling: WINDOW
  /**
   * The X coordinate of the upper-left outside corner of `window`, relative to the
   * parent window's origin.
   */
  x: number
  /**
   * The Y coordinate of the upper-left outside corner of `window`, relative to the
   * parent window's origin.
   */
  y: number
  /**
   * The inside width of `window`, not including the border.
   */
  width: number
  /**
   * The inside height of `window`, not including the border.
   */
  height: number
  /**
   * The border width of `window`.
   */
  borderWidth: number
  /**
   * Window managers should ignore this window if `override_redirect` is 1.
   */
  overrideRedirect: number
}

export const unmarshallConfigureNotifyEvent: Unmarshaller<ConfigureNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, aboveSibling, x, y, width, height, borderWidth, overrideRedirect] = unpackFrom('<xx2xIIIhhHHHBx', buffer, offset)
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

export interface ConfigureNotifyEventHandler extends EventHandler<ConfigureNotifyEvent> {
}

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

export const unmarshallConfigureRequestEvent: Unmarshaller<ConfigureRequestEvent> = (buffer, offset = 0) => {
  const [stackMode, parent, window, sibling, x, y, width, height, borderWidth, valueMask] = unpackFrom('<xB2xIIIhhHHHH', buffer, offset)
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

export interface ConfigureRequestEventHandler extends EventHandler<ConfigureRequestEvent> {
}

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

export const unmarshallGravityNotifyEvent: Unmarshaller<GravityNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, x, y] = unpackFrom('<xx2xIIhh', buffer, offset)
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

export interface GravityNotifyEventHandler extends EventHandler<GravityNotifyEvent> {
}

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

export const unmarshallResizeRequestEvent: Unmarshaller<ResizeRequestEvent> = (buffer, offset = 0) => {
  const [window, width, height] = unpackFrom('<xx2xIHH', buffer, offset)
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

export interface ResizeRequestEventHandler extends EventHandler<ResizeRequestEvent> {
}

declare module './connection' {
  interface XConnection {
    onResizeRequestEvent?: ResizeRequestEventHandler
  }
}


export enum Place {
  OnTop = 0,
  OnBottom = 1,
}

/**
 *
 * NOT YET DOCUMENTED
 *
 * See:
 *
 * {@link XConnection.circulateWindow}
 */
export type CirculateNotifyEvent = {
  /**
   * Either the restacked window or its parent, depending on whether
   * `StructureNotify` or `SubstructureNotify` was selected.
   */
  event: WINDOW
  /**
   * The restacked window.
   */
  window: WINDOW
  /**
   *
   */
  place: Place
}

export const unmarshallCirculateNotifyEvent: Unmarshaller<CirculateNotifyEvent> = (buffer, offset = 0) => {
  const [event, window, place] = unpackFrom('<xx2xII4xB3x', buffer, offset)
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

export interface CirculateNotifyEventHandler extends EventHandler<CirculateNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onCirculateNotifyEvent?: CirculateNotifyEventHandler
  }
}


/**
 *
 * NOT YET DOCUMENTED
 *
 * See:
 *
 * {@link XConnection.circulateWindow}
 */
export type CirculateRequestEvent = {
  /**
   * Either the restacked window or its parent, depending on whether
   * `StructureNotify` or `SubstructureNotify` was selected.
   */
  event: WINDOW
  /**
   * The restacked window.
   */
  window: WINDOW
  /**
   *
   */
  place: Place
}

export const unmarshallCirculateRequestEvent: Unmarshaller<CirculateRequestEvent> = (buffer, offset = 0) => {
  const [event, window, place] = unpackFrom('<xx2xII4xB3x', buffer, offset)
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

export interface CirculateRequestEventHandler extends EventHandler<CirculateRequestEvent> {
}

declare module './connection' {
  interface XConnection {
    onCirculateRequestEvent?: CirculateRequestEventHandler
  }
}


export enum Property {
  NewValue = 0,
  Delete = 1,
}

/**
 *
 * a window property changed
 *
 * See:
 *
 * {@link XConnection.changeProperty}
 */
export type PropertyNotifyEvent = {
  /**
   * The window whose associated property was changed.
   */
  window: WINDOW
  /**
   * The property's atom, to indicate which property was changed.
   */
  atom: ATOM
  /**
   * A timestamp of the server time when the property was changed.
   */
  time: TIMESTAMP
  /**
   *
   */
  state: Property
}

export const unmarshallPropertyNotifyEvent: Unmarshaller<PropertyNotifyEvent> = (buffer, offset = 0) => {
  const [window, atom, time, state] = unpackFrom('<xx2xIIIB3x', buffer, offset)
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

export interface PropertyNotifyEventHandler extends EventHandler<PropertyNotifyEvent> {
}

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

export const unmarshallSelectionClearEvent: Unmarshaller<SelectionClearEvent> = (buffer, offset = 0) => {
  const [time, owner, selection] = unpackFrom('<xx2xIII', buffer, offset)
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

export interface SelectionClearEventHandler extends EventHandler<SelectionClearEvent> {
}

declare module './connection' {
  interface XConnection {
    onSelectionClearEvent?: SelectionClearEventHandler
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

export const unmarshallSelectionRequestEvent: Unmarshaller<SelectionRequestEvent> = (buffer, offset = 0) => {
  const [time, owner, requestor, selection, target, property] = unpackFrom('<xx2xIIIIII', buffer, offset)
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

export interface SelectionRequestEventHandler extends EventHandler<SelectionRequestEvent> {
}

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

export const unmarshallSelectionNotifyEvent: Unmarshaller<SelectionNotifyEvent> = (buffer, offset = 0) => {
  const [time, requestor, selection, target, property] = unpackFrom('<xx2xIIIII', buffer, offset)
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

export interface SelectionNotifyEventHandler extends EventHandler<SelectionNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onSelectionNotifyEvent?: SelectionNotifyEventHandler
  }
}


export enum ColormapState {
  Uninstalled = 0,
  Installed = 1,
}

export enum Colormap {
  None = 0,
}

/**
 *
 * the colormap for some window changed
 *
 * See:
 *
 * {@link XConnection.freeColormap}
 */
export type ColormapNotifyEvent = {
  /**
   * The window whose associated colormap is changed, installed or uninstalled.
   */
  window: WINDOW
  /**
   * The colormap which is changed, installed or uninstalled. This is `XCB_NONE`
   * when the colormap is changed by a call to `FreeColormap`.
   */
  colormap: COLORMAP
  _new: number
  /**
   *
   */
  state: ColormapState
}

export const unmarshallColormapNotifyEvent: Unmarshaller<ColormapNotifyEvent> = (buffer, offset = 0) => {
  const [window, colormap, _new, state] = unpackFrom('<xx2xIIBB2x', buffer, offset)
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

export interface ColormapNotifyEventHandler extends EventHandler<ColormapNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onColormapNotifyEvent?: ColormapNotifyEventHandler
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

/**
 *
 * NOT YET DOCUMENTED
 *
 * This event represents a ClientMessage, sent by another X11 client. An example
 * is a client sending the `_NET_WM_STATE` ClientMessage to the root window
 * to indicate the fullscreen window state, effectively requesting that the window
 * manager puts it into fullscreen mode.
 *
 * See:
 *
 * {@link XConnection.sendEvent}
 */
export type ClientMessageEvent = {
  /**
   * Specifies how to interpret `data`. Can be either 8, 16 or 32.
   */
  format: number
  window: WINDOW
  /**
   * An atom which indicates how the data should be interpreted by the receiving
   * client.
   */
  _type: ATOM
  /**
   * The data itself (20 bytes max).
   */
  data: ClientMessageData
}

export const unmarshallClientMessageEvent: Unmarshaller<ClientMessageEvent> = (buffer, offset = 0) => {
  const [format, window, _type] = unpackFrom('<xB2xII', buffer, offset)
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

export interface ClientMessageEventHandler extends EventHandler<ClientMessageEvent> {
}

declare module './connection' {
  interface XConnection {
    onClientMessageEvent?: ClientMessageEventHandler
  }
}


export enum Mapping {
  Modifier = 0,
  Keyboard = 1,
  Pointer = 2,
}

/**
 *
 * keyboard mapping changed
 */
export type MappingNotifyEvent = {
  /**
   *
   */
  request: Mapping
  /**
   * The first number in the range of the altered mapping.
   */
  firstKeycode: KEYCODE
  /**
   * The number of keycodes altered.
   */
  count: number
}

export const unmarshallMappingNotifyEvent: Unmarshaller<MappingNotifyEvent> = (buffer, offset = 0) => {
  const [request, firstKeycode, count] = unpackFrom('<xx2xBBBx', buffer, offset)
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

export interface MappingNotifyEventHandler extends EventHandler<MappingNotifyEvent> {
}

declare module './connection' {
  interface XConnection {
    onMappingNotifyEvent?: MappingNotifyEventHandler
  }
}


/**
 *
 * generic event (with length)
 */
export type GeGenericEvent = {}

export const unmarshallGeGenericEvent: Unmarshaller<GeGenericEvent> = (buffer, offset = 0) => {

  return {
    value: {},
    offset
  }
}

export interface GeGenericEventHandler extends EventHandler<GeGenericEvent> {
}

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

export const unmarshallRequestError: Unmarshaller<RequestError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: RequestError

  constructor(error: RequestError) {
    super()
    Object.setPrototypeOf(this, BadRequest.prototype)
    this.name = 'RequestError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type ValueError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallValueError: Unmarshaller<ValueError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: ValueError

  constructor(error: ValueError) {
    super()
    Object.setPrototypeOf(this, BadValue.prototype)
    this.name = 'ValueError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type WindowError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallWindowError: Unmarshaller<WindowError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: WindowError

  constructor(error: WindowError) {
    super()
    Object.setPrototypeOf(this, BadWindow.prototype)
    this.name = 'WindowError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type PixmapError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallPixmapError: Unmarshaller<PixmapError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: PixmapError

  constructor(error: PixmapError) {
    super()
    Object.setPrototypeOf(this, BadPixmap.prototype)
    this.name = 'PixmapError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type AtomError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallAtomError: Unmarshaller<AtomError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: AtomError

  constructor(error: AtomError) {
    super()
    Object.setPrototypeOf(this, BadAtom.prototype)
    this.name = 'AtomError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type CursorError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallCursorError: Unmarshaller<CursorError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: CursorError

  constructor(error: CursorError) {
    super()
    Object.setPrototypeOf(this, BadCursor.prototype)
    this.name = 'CursorError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type FontError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallFontError: Unmarshaller<FontError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: FontError

  constructor(error: FontError) {
    super()
    Object.setPrototypeOf(this, BadFont.prototype)
    this.name = 'FontError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type MatchError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallMatchError: Unmarshaller<MatchError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: MatchError

  constructor(error: MatchError) {
    super()
    Object.setPrototypeOf(this, BadMatch.prototype)
    this.name = 'MatchError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type DrawableError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallDrawableError: Unmarshaller<DrawableError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: DrawableError

  constructor(error: DrawableError) {
    super()
    Object.setPrototypeOf(this, BadDrawable.prototype)
    this.name = 'DrawableError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type AccessError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallAccessError: Unmarshaller<AccessError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: AccessError

  constructor(error: AccessError) {
    super()
    Object.setPrototypeOf(this, BadAccess.prototype)
    this.name = 'AccessError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type AllocError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallAllocError: Unmarshaller<AllocError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: AllocError

  constructor(error: AllocError) {
    super()
    Object.setPrototypeOf(this, BadAlloc.prototype)
    this.name = 'AllocError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type ColormapError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallColormapError: Unmarshaller<ColormapError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: ColormapError

  constructor(error: ColormapError) {
    super()
    Object.setPrototypeOf(this, BadColormap.prototype)
    this.name = 'ColormapError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type GContextError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallGContextError: Unmarshaller<GContextError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: GContextError

  constructor(error: GContextError) {
    super()
    Object.setPrototypeOf(this, BadGContext.prototype)
    this.name = 'GContextError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type IDChoiceError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallIDChoiceError: Unmarshaller<IDChoiceError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: IDChoiceError

  constructor(error: IDChoiceError) {
    super()
    Object.setPrototypeOf(this, BadIDChoice.prototype)
    this.name = 'IDChoiceError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type NameError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallNameError: Unmarshaller<NameError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: NameError

  constructor(error: NameError) {
    super()
    Object.setPrototypeOf(this, BadName.prototype)
    this.name = 'NameError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type LengthError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallLengthError: Unmarshaller<LengthError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: LengthError

  constructor(error: LengthError) {
    super()
    Object.setPrototypeOf(this, BadLength.prototype)
    this.name = 'LengthError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
  }
}

export type ImplementationError = {
  badValue: number
  minorOpcode: number
  majorOpcode: number
}

export const unmarshallImplementationError: Unmarshaller<ImplementationError> = (buffer, offset = 0) => {
  const [badValue, minorOpcode, majorOpcode] = unpackFrom('<xx2xIHBx', buffer, offset)
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
  readonly xError: ImplementationError

  constructor(error: ImplementationError) {
    super()
    Object.setPrototypeOf(this, BadImplementation.prototype)
    this.name = 'ImplementationError'
    this.xError = error
  }

  toString() {
    return JSON.stringify(this.xError)
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
  /**
   *
   */
  backingStore: BackingStore
  /**
   * The associated visual structure of `window`.
   */
  visual: VISUALID
  /**
   *
   */
  _class: WindowClass
  /**
   *
   */
  bitGravity: Gravity
  /**
   *
   */
  winGravity: Gravity
  /**
   * Planes to be preserved if possible.
   */
  backingPlanes: number
  /**
   * Value to be used when restoring planes.
   */
  backingPixel: number
  /**
   * Boolean, should bits under be saved?
   */
  saveUnder: number
  mapIsInstalled: number
  /**
   *
   */
  mapState: MapState
  /**
   * Window managers should ignore this window if `override_redirect` is 1.
   */
  overrideRedirect: number
  /**
   * Color map to be associated with window.
   */
  colormap: COLORMAP
  /**
   * Set of events all people have interest in.
   */
  allEventMasks: number
  /**
   * My event mask.
   */
  yourEventMask: number
  /**
   * Set of events that should not propagate.
   */
  doNotPropagateMask: number
}

export const unmarshallGetWindowAttributesReply: Unmarshaller<GetWindowAttributesReply> = (buffer, offset = 0) => {
  const [backingStore, visual, _class, bitGravity, winGravity, backingPlanes, backingPixel, saveUnder, mapIsInstalled, mapState, overrideRedirect, colormap, allEventMasks, yourEventMask, doNotPropagateMask] = unpackFrom('<xB2x4xIHBBIIBBBBIIIH2x', buffer, offset)
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
  /**
   * The depth of the drawable (bits per pixel for the object).
   */
  depth: number
  /**
   * Root window of the screen containing `drawable`.
   */
  root: WINDOW
  /**
   * The X coordinate of `drawable`. If `drawable` is a window, the coordinate
   * specifies the upper-left outer corner relative to its parent's origin. If
   * `drawable` is a pixmap, the X coordinate is always 0.
   */
  x: number
  /**
   * The Y coordinate of `drawable`. If `drawable` is a window, the coordinate
   * specifies the upper-left outer corner relative to its parent's origin. If
   * `drawable` is a pixmap, the Y coordinate is always 0.
   */
  y: number
  /**
   * The width of `drawable`.
   */
  width: number
  /**
   * The height of `drawable`.
   */
  height: number
  /**
   * The border width (in pixels).
   */
  borderWidth: number
}

export const unmarshallGetGeometryReply: Unmarshaller<GetGeometryReply> = (buffer, offset = 0) => {
  const [depth, root, x, y, width, height, borderWidth] = unpackFrom('<xB2x4xIhhHHH2x', buffer, offset)
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
  /**
   * The root window of `window`.
   */
  root: WINDOW
  /**
   * The parent window of `window`.
   */
  parent: WINDOW
  /**
   * The number of child windows.
   */
  childrenLen: number
  children: Uint32Array
}

export const unmarshallQueryTreeReply: Unmarshaller<QueryTreeReply> = (buffer, offset = 0) => {
  const [root, parent, childrenLen] = unpackFrom('<xx2x4xIIH14x', buffer, offset)
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

export const unmarshallInternAtomReply: Unmarshaller<InternAtomReply> = (buffer, offset = 0) => {
  const [atom] = unpackFrom('<xx2x4xI', buffer, offset)
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

export const unmarshallGetAtomNameReply: Unmarshaller<GetAtomNameReply> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('<xx2x4xH22x', buffer, offset)
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
  /**
   * Specifies whether the data should be viewed as a list of 8-bit, 16-bit, or
   * 32-bit quantities. Possible values are 8, 16, and 32. This information allows
   * the X server to correctly perform byte-swap operations as necessary.
   */
  format: number
  /**
   * The actual type of the property (an atom).
   */
  _type: ATOM
  /**
   * The number of bytes remaining to be read in the property if a partial read was
   * performed.
   */
  bytesAfter: number
  /**
   * The length of value. You should use the corresponding accessor instead of this
   * field.
   */
  valueLen: number
  value: Uint8Array
}

export const unmarshallGetPropertyReply: Unmarshaller<GetPropertyReply> = (buffer, offset = 0) => {
  const [format, _type, bytesAfter, valueLen] = unpackFrom('<xB2x4xIII12x', buffer, offset)
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

export const unmarshallListPropertiesReply: Unmarshaller<ListPropertiesReply> = (buffer, offset = 0) => {
  const [atomsLen] = unpackFrom('<xx2x4xH22x', buffer, offset)
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
  /**
   * The current selection owner window.
   */
  owner: WINDOW
}

export const unmarshallGetSelectionOwnerReply: Unmarshaller<GetSelectionOwnerReply> = (buffer, offset = 0) => {
  const [owner] = unpackFrom('<xx2x4xI', buffer, offset)
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

export const unmarshallGrabPointerReply: Unmarshaller<GrabPointerReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('<xB2x4x', buffer, offset)
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

export const unmarshallGrabKeyboardReply: Unmarshaller<GrabKeyboardReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('<xB2x4x', buffer, offset)
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
  /**
   * If `same_screen` is False, then the pointer is not on the same screen as the
   * argument window, `child` is None, and `win_x` and `win_y` are zero. If
   * `same_screen` is True, then `win_x` and `win_y` are the pointer coordinates
   * relative to the argument window's origin, and child is the child containing the
   * pointer, if any.
   */
  sameScreen: number
  /**
   * The root window the pointer is logically on.
   */
  root: WINDOW
  /**
   * The child window containing the pointer, if any, if `same_screen` is true. If
   * `same_screen` is false, `XCB_NONE` is returned.
   */
  child: WINDOW
  /**
   * The pointer X position, relative to `root`.
   */
  rootX: number
  /**
   * The pointer Y position, relative to `root`.
   */
  rootY: number
  /**
   * The pointer X coordinate, relative to `child`, if `same_screen` is true. Zero
   * otherwise.
   */
  winX: number
  /**
   * The pointer Y coordinate, relative to `child`, if `same_screen` is true. Zero
   * otherwise.
   */
  winY: number
  /**
   * The current logical state of the modifier keys and the buttons. Note that the
   * logical state of a device (as seen by means of the protocol) may lag the
   * physical state if device event processing is frozen.
   */
  mask: number
}

export const unmarshallQueryPointerReply: Unmarshaller<QueryPointerReply> = (buffer, offset = 0) => {
  const [sameScreen, root, child, rootX, rootY, winX, winY, mask] = unpackFrom('<xB2x4xIIhhhhH2x', buffer, offset)
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

export const unmarshallTIMECOORD: Unmarshaller<TIMECOORD> = (buffer, offset = 0) => {
  const [time, x, y] = unpackFrom('<Ihh', buffer, offset)
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

export const unmarshallGetMotionEventsReply: Unmarshaller<GetMotionEventsReply> = (buffer, offset = 0) => {
  const [eventsLen] = unpackFrom('<xx2x4xI20x', buffer, offset)
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

export const unmarshallTranslateCoordinatesReply: Unmarshaller<TranslateCoordinatesReply> = (buffer, offset = 0) => {
  const [sameScreen, child, dstX, dstY] = unpackFrom('<xB2x4xIhh', buffer, offset)
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

export const unmarshallGetInputFocusReply: Unmarshaller<GetInputFocusReply> = (buffer, offset = 0) => {
  const [revertTo, focus] = unpackFrom('<xB2x4xI', buffer, offset)
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

export const unmarshallQueryKeymapReply: Unmarshaller<QueryKeymapReply> = (buffer, offset = 0) => {
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

export const unmarshallFONTPROP: Unmarshaller<FONTPROP> = (buffer, offset = 0) => {
  const [name, value] = unpackFrom('<II', buffer, offset)
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

export const unmarshallCHARINFO: Unmarshaller<CHARINFO> = (buffer, offset = 0) => {
  const [leftSideBearing, rightSideBearing, characterWidth, ascent, descent, attributes] = unpackFrom('<hhhhhH', buffer, offset)
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
  /**
   * minimum bounds over all existing char
   */
  minBounds: CHARINFO
  /**
   * maximum bounds over all existing char
   */
  maxBounds: CHARINFO
  /**
   * first character
   */
  minCharOrByte2: number
  /**
   * last character
   */
  maxCharOrByte2: number
  /**
   * char to print for undefined character
   */
  defaultChar: number
  /**
   * how many properties there are
   */
  propertiesLen: number
  /**
   *
   */
  drawDirection: FontDraw
  minByte1: number
  maxByte1: number
  /**
   * flag if all characters have nonzero size
   */
  allCharsExist: number
  /**
   * baseline to top edge of raster
   */
  fontAscent: number
  /**
   * baseline to bottom edge of raster
   */
  fontDescent: number
  charInfosLen: number
  properties: FONTPROP[]
  charInfos: CHARINFO[]
}

export const unmarshallQueryFontReply: Unmarshaller<QueryFontReply> = (buffer, offset = 0) => {
  const minBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const minBounds = minBoundsWithOffset.value
  offset = minBoundsWithOffset.offset
  offset += typePad(12, offset)
  const maxBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const maxBounds = maxBoundsWithOffset.value
  offset = maxBoundsWithOffset.offset
  const [minCharOrByte2, maxCharOrByte2, defaultChar, propertiesLen, drawDirection, minByte1, maxByte1, allCharsExist, fontAscent, fontDescent, charInfosLen] = unpackFrom('<4xHHHHBBBBhhI', buffer, offset)
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

export const unmarshallQueryTextExtentsReply: Unmarshaller<QueryTextExtentsReply> = (buffer, offset = 0) => {
  const [drawDirection, fontAscent, fontDescent, overallAscent, overallDescent, overallWidth, overallLeft, overallRight] = unpackFrom('<xB2x4xhhhhiii', buffer, offset)
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

export const unmarshallSTR: Unmarshaller<STR> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('<B', buffer, offset)
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
  /**
   * The number of font names.
   */
  namesLen: number
  names: STR[]
}

export const unmarshallListFontsReply: Unmarshaller<ListFontsReply> = (buffer, offset = 0) => {
  const [namesLen] = unpackFrom('<xx2x4xH22x', buffer, offset)
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
  /**
   * The number of matched font names.
   */
  nameLen: number
  /**
   * minimum bounds over all existing char
   */
  minBounds: CHARINFO
  /**
   * maximum bounds over all existing char
   */
  maxBounds: CHARINFO
  /**
   * first character
   */
  minCharOrByte2: number
  /**
   * last character
   */
  maxCharOrByte2: number
  /**
   * char to print for undefined character
   */
  defaultChar: number
  /**
   * how many properties there are
   */
  propertiesLen: number
  /**
   *
   */
  drawDirection: FontDraw
  minByte1: number
  maxByte1: number
  /**
   * flag if all characters have nonzero size
   */
  allCharsExist: number
  /**
   * baseline to top edge of raster
   */
  fontAscent: number
  /**
   * baseline to bottom edge of raster
   */
  fontDescent: number
  /**
   * An indication of how many more fonts will be returned. This is only a hint and
   * may be larger or smaller than the number of fonts actually returned. A zero
   * value does not guarantee that no more fonts will be returned.
   */
  repliesHint: number
  properties: FONTPROP[]
  name: Int8Array
}

export const unmarshallListFontsWithInfoReply: Unmarshaller<ListFontsWithInfoReply> = (buffer, offset = 0) => {
  const [nameLen] = unpackFrom('<xB2x4x', buffer, offset)
  offset += 8
  const minBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const minBounds = minBoundsWithOffset.value
  offset = minBoundsWithOffset.offset
  offset += typePad(12, offset)
  const maxBoundsWithOffset = unmarshallCHARINFO(buffer, offset)
  const maxBounds = maxBoundsWithOffset.value
  offset = maxBoundsWithOffset.offset
  const [minCharOrByte2, maxCharOrByte2, defaultChar, propertiesLen, drawDirection, minByte1, maxByte1, allCharsExist, fontAscent, fontDescent, repliesHint] = unpackFrom('<4xHHHHBBBBhhI', buffer, offset)
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

export const unmarshallGetFontPathReply: Unmarshaller<GetFontPathReply> = (buffer, offset = 0) => {
  const [pathLen] = unpackFrom('<xx2x4xH22x', buffer, offset)
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

export const unmarshallSEGMENT: Unmarshaller<SEGMENT> = (buffer, offset = 0) => {
  const [x1, y1, x2, y2] = unpackFrom('<hhhh', buffer, offset)
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

export const unmarshallGetImageReply: Unmarshaller<GetImageReply> = (buffer, offset = 0) => {
  const [depth, visual] = unpackFrom('<xB2x4xI20x', buffer, offset)
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

export const unmarshallListInstalledColormapsReply: Unmarshaller<ListInstalledColormapsReply> = (buffer, offset = 0) => {
  const [cmapsLen] = unpackFrom('<xx2x4xH22x', buffer, offset)
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

export const unmarshallAllocColorReply: Unmarshaller<AllocColorReply> = (buffer, offset = 0) => {
  const [red, green, blue, pixel] = unpackFrom('<xx2x4xHHH2xI', buffer, offset)
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

export const unmarshallAllocNamedColorReply: Unmarshaller<AllocNamedColorReply> = (buffer, offset = 0) => {
  const [pixel, exactRed, exactGreen, exactBlue, visualRed, visualGreen, visualBlue] = unpackFrom('<xx2x4xIHHHHHH', buffer, offset)
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

export const unmarshallAllocColorCellsReply: Unmarshaller<AllocColorCellsReply> = (buffer, offset = 0) => {
  const [pixelsLen, masksLen] = unpackFrom('<xx2x4xHH20x', buffer, offset)
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

export const unmarshallAllocColorPlanesReply: Unmarshaller<AllocColorPlanesReply> = (buffer, offset = 0) => {
  const [pixelsLen, redMask, greenMask, blueMask] = unpackFrom('<xx2x4xH2xIII8x', buffer, offset)
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

export const unmarshallCOLORITEM: Unmarshaller<COLORITEM> = (buffer, offset = 0) => {
  const [pixel, red, green, blue, flags] = unpackFrom('<IHHHBx', buffer, offset)
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

export const unmarshallRGB: Unmarshaller<RGB> = (buffer, offset = 0) => {
  const [red, green, blue] = unpackFrom('<HHH2x', buffer, offset)
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

export const unmarshallQueryColorsReply: Unmarshaller<QueryColorsReply> = (buffer, offset = 0) => {
  const [colorsLen] = unpackFrom('<xx2x4xH22x', buffer, offset)
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

export const unmarshallLookupColorReply: Unmarshaller<LookupColorReply> = (buffer, offset = 0) => {
  const [exactRed, exactGreen, exactBlue, visualRed, visualGreen, visualBlue] = unpackFrom('<xx2x4xHHHHHH', buffer, offset)
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

export const unmarshallQueryBestSizeReply: Unmarshaller<QueryBestSizeReply> = (buffer, offset = 0) => {
  const [width, height] = unpackFrom('<xx2x4xHH', buffer, offset)
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
  /**
   * Whether the extension is present on this X11 server.
   */
  present: number
  /**
   * The major opcode for requests.
   */
  majorOpcode: number
  /**
   * The first event code, if any.
   */
  firstEvent: number
  /**
   * The first error code, if any.
   */
  firstError: number
}

export const unmarshallQueryExtensionReply: Unmarshaller<QueryExtensionReply> = (buffer, offset = 0) => {
  const [present, majorOpcode, firstEvent, firstError] = unpackFrom('<xx2x4xBBBB', buffer, offset)
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

export const unmarshallListExtensionsReply: Unmarshaller<ListExtensionsReply> = (buffer, offset = 0) => {
  const [namesLen] = unpackFrom('<xB2x4x24x', buffer, offset)
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

export const unmarshallGetKeyboardMappingReply: Unmarshaller<GetKeyboardMappingReply> = (buffer, offset = 0) => {
  const [keysymsPerKeycode] = unpackFrom('<xB2x4x24x', buffer, offset)
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

export const unmarshallGetKeyboardControlReply: Unmarshaller<GetKeyboardControlReply> = (buffer, offset = 0) => {
  const [globalAutoRepeat, ledMask, keyClickPercent, bellPercent, bellPitch, bellDuration] = unpackFrom('<xB2x4xIBBHH2x', buffer, offset)
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

export const unmarshallGetPointerControlReply: Unmarshaller<GetPointerControlReply> = (buffer, offset = 0) => {
  const [accelerationNumerator, accelerationDenominator, threshold] = unpackFrom('<xx2x4xHHH18x', buffer, offset)
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

export const unmarshallGetScreenSaverReply: Unmarshaller<GetScreenSaverReply> = (buffer, offset = 0) => {
  const [timeout, interval, preferBlanking, allowExposures] = unpackFrom('<xx2x4xHHBB18x', buffer, offset)
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

export const unmarshallHOST: Unmarshaller<HOST> = (buffer, offset = 0) => {
  const [family, addressLen] = unpackFrom('<BxH', buffer, offset)
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

export const unmarshallListHostsReply: Unmarshaller<ListHostsReply> = (buffer, offset = 0) => {
  const [mode, hostsLen] = unpackFrom('<xB2x4xH22x', buffer, offset)
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

export const unmarshallSetPointerMappingReply: Unmarshaller<SetPointerMappingReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('<xB2x4x', buffer, offset)
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

export const unmarshallGetPointerMappingReply: Unmarshaller<GetPointerMappingReply> = (buffer, offset = 0) => {
  const [mapLen] = unpackFrom('<xB2x4x24x', buffer, offset)
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

export const unmarshallSetModifierMappingReply: Unmarshaller<SetModifierMappingReply> = (buffer, offset = 0) => {
  const [status] = unpackFrom('<xB2x4x', buffer, offset)
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

export const unmarshallGetModifierMappingReply: Unmarshaller<GetModifierMappingReply> = (buffer, offset = 0) => {
  const [keycodesPerModifier] = unpackFrom('<xB2x4x24x', buffer, offset)
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
    /**
     * Creates a window
     *
     * Creates an unmapped window as child of the specified `parent` window. A
     * CreateNotify event will be generated. The new window is placed on top in the
     * stacking order with respect to siblings.
     *
     * The coordinate system has the X axis horizontal and the Y axis vertical with
     * the origin [0, 0] at the upper-left corner. Coordinates are integral, in terms
     * of pixels, and coincide with pixel centers. Each window and pixmap has its own
     * coordinate system. For a window, the origin is inside the border at the inside,
     * upper-left corner.
     *
     * The created window is not yet displayed (mapped), call `xcb_map_window` to
     * display it.
     *
     * The created window will initially use the same cursor as its parent.
     * @param wid The ID with which you will refer to the new window, created by
     * `xcb_generate_id`.
     * @param depth Specifies the new window's depth (TODO: what unit?).
     *      * The special value `XCB_COPY_FROM_PARENT` means the depth is taken from the
     * `parent` window.
     * @param visual Specifies the id for the new window's visual.
     *      * The special value `XCB_COPY_FROM_PARENT` means the visual is taken from the
     * `parent` window.
     * @param class
     * @param parent The parent window of the new window.
     * @param border_width TODO:
     *      * Must be zero if the `class` is `InputOnly` or a `xcb_match_error_t` occurs.
     * @param x The X coordinate of the new window.
     * @param y The Y coordinate of the new window.
     * @param width The width of the new window.
     * @param height The height of the new window.
     *
     * See also:
     *
     * {@link XConnection.mapWindow}
     *
     * {@link CreateNotifyEvent}
     */
    createWindow(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): RequestChecker
  }
}

XConnection.prototype.createWindow = function(depth: number, wid: WINDOW, parent: WINDOW, x: number, y: number, width: number, height: number, borderWidth: number, _class: WindowClass, visual: VISUALID, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): RequestChecker {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xB2xIIhhHHHHII', depth, wid, parent, x, y, width, height, borderWidth, _class, visual, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 1)
}


declare module './connection' {
  interface XConnection {
    /**
     * change window attributes
     *
     * Changes the attributes specified by `value_mask` for the specified `window`.
     * @param window The window to change.
     * @param value_mask
     * @param value_list Values for each of the attributes specified in the bitmask `value_mask`. The
     * order has to correspond to the order of possible `value_mask` bits. See the
     * example.
     */
    changeWindowAttributes(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): RequestChecker
  }
}

XConnection.prototype.changeWindowAttributes = function(window: WINDOW, valueList: Partial<{ backgroundPixmap: PIXMAP, backgroundPixel: number, borderPixmap: PIXMAP, borderPixel: number, bitGravity: Gravity, winGravity: Gravity, backingStore: BackingStore, backingPlanes: number, backingPixel: number, overrideRedirect: BOOL32, saveUnder: BOOL32, eventMask: number, doNotPropogateMask: number, colormap: COLORMAP, cursor: CURSOR }>): RequestChecker {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xII', window, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 2)
}


declare module './connection' {
  interface XConnection {
    /**
     * Gets window attributes
     *
     * Gets the current attributes for the specified `window`.
     * @param window The window to get the attributes from.
     */
    getWindowAttributes(window: WINDOW): GetWindowAttributesCookie
  }
}

XConnection.prototype.getWindowAttributes = function(window: WINDOW): GetWindowAttributesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<GetWindowAttributesReply>(requestParts, 3, unmarshallGetWindowAttributesReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * Destroys a window
     *
     * Destroys the specified window and all of its subwindows. A DestroyNotify event
     * is generated for each destroyed window (a DestroyNotify event is first generated
     * for any given window's inferiors). If the window was mapped, it will be
     * automatically unmapped before destroying.
     *
     * Calling DestroyWindow on the root window will do nothing.
     * @param window The window to destroy.
     *
     * See also:
     *
     * {@link DestroyNotifyEvent}
     *
     * {@link XConnection.mapWindow}
     *
     * {@link XConnection.unmapWindow}
     */
    destroyWindow(window: WINDOW): RequestChecker
  }
}

XConnection.prototype.destroyWindow = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 4)
}


declare module './connection' {
  interface XConnection {
    destroySubwindows(window: WINDOW): RequestChecker
  }
}

XConnection.prototype.destroySubwindows = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 5)
}


declare module './connection' {
  interface XConnection {
    /**
     * Changes a client's save set
     *
     * TODO: explain what the save set is for.
     *
     * This function either adds or removes the specified window to the client's (your
     * application's) save set.
     * @param mode Insert to add the specified window to the save set or Delete to delete it from the save set.
     * @param window The window to add or delete to/from your save set.
     *
     * See also:
     *
     * {@link XConnection.reparentWindow}
     */
    changeSaveSet(mode: SetMode, window: WINDOW): RequestChecker
  }
}

XConnection.prototype.changeSaveSet = function(mode: SetMode, window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xI', mode, window))

  return this.sendVoidRequest(requestParts, 6)
}


declare module './connection' {
  interface XConnection {
    /**
     * Reparents a window
     *
     * Makes the specified window a child of the specified parent window. If the
     * window is mapped, it will automatically be unmapped before reparenting and
     * re-mapped after reparenting. The window is placed in the stacking order on top
     * with respect to sibling windows.
     *
     * After reparenting, a ReparentNotify event is generated.
     * @param window The window to reparent.
     * @param parent The new parent of the window.
     * @param x The X position of the window within its new parent.
     * @param y The Y position of the window within its new parent.
     *
     * See also:
     *
     * {@link ReparentNotifyEvent}
     *
     * {@link XConnection.mapWindow}
     *
     * {@link XConnection.unmapWindow}
     */
    reparentWindow(window: WINDOW, parent: WINDOW, x: number, y: number): RequestChecker
  }
}

XConnection.prototype.reparentWindow = function(window: WINDOW, parent: WINDOW, x: number, y: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', window, parent, x, y))

  return this.sendVoidRequest(requestParts, 7)
}


declare module './connection' {
  interface XConnection {
    /**
     * Makes a window visible
     *
     * Maps the specified window. This means making the window visible (as long as its
     * parent is visible).
     *
     * This MapWindow request will be translated to a MapRequest request if a window
     * manager is running. The window manager then decides to either map the window or
     * not. Set the override-redirect window attribute to true if you want to bypass
     * this mechanism.
     *
     * If the window manager decides to map the window (or if no window manager is
     * running), a MapNotify event is generated.
     *
     * If the window becomes viewable and no earlier contents for it are remembered,
     * the X server tiles the window with its background. If the window's background
     * is undefined, the existing screen contents are not altered, and the X server
     * generates zero or more Expose events.
     *
     * If the window type is InputOutput, an Expose event will be generated when the
     * window becomes visible. The normal response to an Expose event should be to
     * repaint the window.
     * @param window The window to make visible.
     *
     * See also:
     *
     * {@link MapNotifyEvent}
     *
     * {@link ExposeEvent}
     *
     * {@link XConnection.unmapWindow}
     */
    mapWindow(window: WINDOW): RequestChecker
  }
}

XConnection.prototype.mapWindow = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 8)
}


declare module './connection' {
  interface XConnection {
    mapSubwindows(window: WINDOW): RequestChecker
  }
}

XConnection.prototype.mapSubwindows = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 9)
}


declare module './connection' {
  interface XConnection {
    /**
     * Makes a window invisible
     *
     * Unmaps the specified window. This means making the window invisible (and all
     * its child windows).
     *
     * Unmapping a window leads to the `UnmapNotify` event being generated. Also,
     * `Expose` events are generated for formerly obscured windows.
     * @param window The window to make invisible.
     *
     * See also:
     *
     * {@link UnmapNotifyEvent}
     *
     * {@link ExposeEvent}
     *
     * {@link XConnection.mapWindow}
     */
    unmapWindow(window: WINDOW): RequestChecker
  }
}

XConnection.prototype.unmapWindow = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 10)
}


declare module './connection' {
  interface XConnection {
    unmapSubwindows(window: WINDOW): RequestChecker
  }
}

XConnection.prototype.unmapSubwindows = function(window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendVoidRequest(requestParts, 11)
}


declare module './connection' {
  interface XConnection {
    /**
     * Configures window attributes
     *
     * Configures a window's size, position, border width and stacking order.
     * @param window The window to configure.
     * @param value_mask Bitmask of attributes to change.
     * @param value_list New values, corresponding to the attributes in value_mask. The order has to
     * correspond to the order of possible `value_mask` bits. See the example.
     *
     * See also:
     *
     * {@link MapNotifyEvent}
     *
     * {@link ExposeEvent}
     */
    configureWindow(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): RequestChecker
  }
}

XConnection.prototype.configureWindow = function(window: WINDOW, valueList: Partial<{ x: number, y: number, width: number, height: number, borderWidth: number, sibling: WINDOW, stackMode: StackMode }>): RequestChecker {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xIH2x', window, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 12)
}


declare module './connection' {
  interface XConnection {
    /**
     * Change window stacking order
     *
     * If `direction` is `XCB_CIRCULATE_RAISE_LOWEST`, the lowest mapped child (if
     * any) will be raised to the top of the stack.
     *
     * If `direction` is `XCB_CIRCULATE_LOWER_HIGHEST`, the highest mapped child will
     * be lowered to the bottom of the stack.
     * @param direction
     * @param window The window to raise/lower (depending on `direction`).
     */
    circulateWindow(direction: Circulate, window: WINDOW): RequestChecker
  }
}

XConnection.prototype.circulateWindow = function(direction: Circulate, window: WINDOW): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xI', direction, window))

  return this.sendVoidRequest(requestParts, 13)
}


declare module './connection' {
  interface XConnection {
    /**
     * Get current window geometry
     *
     * Gets the current geometry of the specified drawable (either `Window` or `Pixmap`).
     * @param drawable The drawable (`Window` or `Pixmap`) of which the geometry will be received.
     *
     * See also:
     */
    getGeometry(drawable: DRAWABLE): GetGeometryCookie
  }
}

XConnection.prototype.getGeometry = function(drawable: DRAWABLE): GetGeometryCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', drawable))

  return this.sendRequest<GetGeometryReply>(requestParts, 14, unmarshallGetGeometryReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * query the window tree
     *
     * Gets the root window ID, parent window ID and list of children windows for the
     * specified `window`. The children are listed in bottom-to-top stacking order.
     * @param window The `window` to query.
     *
     * See also:
     */
    queryTree(window: WINDOW): QueryTreeCookie
  }
}

XConnection.prototype.queryTree = function(window: WINDOW): QueryTreeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<QueryTreeReply>(requestParts, 15, unmarshallQueryTreeReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * Get atom identifier by name
     *
     * Retrieves the identifier (xcb_atom_t TODO) for the atom with the specified
     * name. Atoms are used in protocols like EWMH, for example to store window titles
     * (`_NET_WM_NAME` atom) as property of a window.
     *
     * If `only_if_exists` is 0, the atom will be created if it does not already exist.
     * If `only_if_exists` is 1, `XCB_ATOM_NONE` will be returned if the atom does
     * not yet exist.
     * @param name_len The length of the following `name`.
     * @param name The name of the atom.
     * @param only_if_exists Return a valid atom id only if the atom already exists.
     *
     * See also:
     *
     * {@link XConnection.getAtomName}
     */
    internAtom(onlyIfExists: number, name: Int8Array): InternAtomCookie
  }
}

XConnection.prototype.internAtom = function(onlyIfExists: number, name: Int8Array): InternAtomCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xH2x', onlyIfExists, nameLen))
  requestParts.push(pad(name.buffer))

  return this.sendRequest<InternAtomReply>(requestParts, 16, unmarshallInternAtomReply)
}


declare module './connection' {
  interface XConnection {
    getAtomName(atom: ATOM): GetAtomNameCookie
  }
}

XConnection.prototype.getAtomName = function(atom: ATOM): GetAtomNameCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', atom))

  return this.sendRequest<GetAtomNameReply>(requestParts, 17, unmarshallGetAtomNameReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * Changes a window property
     *
     * Sets or updates a property on the specified `window`. Properties are for
     * example the window title (`WM_NAME`) or its minimum size (`WM_NORMAL_HINTS`).
     * Protocols such as EWMH also use properties - for example EWMH defines the
     * window title, encoded as UTF-8 string, in the `_NET_WM_NAME` property.
     * @param window The window whose property you want to change.
     * @param mode
     * @param property The property you want to change (an atom).
     * @param type The type of the property you want to change (an atom).
     * @param format Specifies whether the data should be viewed as a list of 8-bit, 16-bit or
     * 32-bit quantities. Possible values are 8, 16 and 32. This information allows
     * the X server to correctly perform byte-swap operations as necessary.
     * @param data_len Specifies the number of elements (see `format`).
     * @param data The property data.
     *
     * See also:
     *
     * {@link XConnection.internAtom}
     */
    changeProperty(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: TypedArray): RequestChecker
  }
}

XConnection.prototype.changeProperty = function(mode: PropMode, window: WINDOW, property: ATOM, _type: ATOM, format: number, data: TypedArray): RequestChecker {
  const dataLen = data.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIIB3xI', mode, window, property, _type, format, dataLen))
  requestParts.push(pad(data.buffer))

  return this.sendVoidRequest(requestParts, 18)
}


declare module './connection' {
  interface XConnection {
    deleteProperty(window: WINDOW, property: ATOM): RequestChecker
  }
}

XConnection.prototype.deleteProperty = function(window: WINDOW, property: ATOM): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', window, property))

  return this.sendVoidRequest(requestParts, 19)
}


declare module './connection' {
  interface XConnection {
    /**
     * Gets a window property
     *
     * Gets the specified `property` from the specified `window`. Properties are for
     * example the window title (`WM_NAME`) or its minimum size (`WM_NORMAL_HINTS`).
     * Protocols such as EWMH also use properties - for example EWMH defines the
     * window title, encoded as UTF-8 string, in the `_NET_WM_NAME` property.
     *
     * TODO: talk about `type`
     *
     * TODO: talk about `delete`
     *
     * TODO: talk about the offset/length thing. what's a valid use case?
     * @param window The window whose property you want to get.
     * @param delete Whether the property should actually be deleted. For deleting a property, the
     * specified `type` has to match the actual property type.
     * @param property The property you want to get (an atom).
     * @param type The type of the property you want to get (an atom).
     * @param long_offset Specifies the offset (in 32-bit multiples) in the specified property where the
     * data is to be retrieved.
     * @param long_length Specifies how many 32-bit multiples of data should be retrieved (e.g. if you
     * set `long_length` to 4, you will receive 16 bytes of data).
     *
     * See also:
     *
     * {@link XConnection.internAtom}
     */
    getProperty(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie
  }
}

XConnection.prototype.getProperty = function(_delete: number, window: WINDOW, property: ATOM, _type: ATOM, longOffset: number, longLength: number): GetPropertyCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIIII', _delete, window, property, _type, longOffset, longLength))

  return this.sendRequest<GetPropertyReply>(requestParts, 20, unmarshallGetPropertyReply)
}


declare module './connection' {
  interface XConnection {
    listProperties(window: WINDOW): ListPropertiesCookie
  }
}

XConnection.prototype.listProperties = function(window: WINDOW): ListPropertiesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<ListPropertiesReply>(requestParts, 21, unmarshallListPropertiesReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * Sets the owner of a selection
     *
     * Makes `window` the owner of the selection `selection` and updates the
     * last-change time of the specified selection.
     *
     * TODO: briefly explain what a selection is.
     * @param selection The selection.
     * @param owner The new owner of the selection.
     *      * The special value `XCB_NONE` means that the selection will have no owner.
     * @param time Timestamp to avoid race conditions when running X over the network.
     *      * The selection will not be changed if `time` is earlier than the current
     * last-change time of the `selection` or is later than the current X server time.
     * Otherwise, the last-change time is set to the specified time.
     *      * The special value `XCB_CURRENT_TIME` will be replaced with the current server
     * time.
     *
     * See also:
     *
     * {@link XConnection.setSelectionOwner}
     */
    setSelectionOwner(owner: WINDOW, selection: ATOM, time: TIMESTAMP): RequestChecker
  }
}

XConnection.prototype.setSelectionOwner = function(owner: WINDOW, selection: ATOM, time: TIMESTAMP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', owner, selection, time))

  return this.sendVoidRequest(requestParts, 22)
}


declare module './connection' {
  interface XConnection {
    /**
     * Gets the owner of a selection
     *
     * Gets the owner of the specified selection.
     *
     * TODO: briefly explain what a selection is.
     * @param selection The selection.
     *
     * See also:
     *
     * {@link XConnection.setSelectionOwner}
     */
    getSelectionOwner(selection: ATOM): GetSelectionOwnerCookie
  }
}

XConnection.prototype.getSelectionOwner = function(selection: ATOM): GetSelectionOwnerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', selection))

  return this.sendRequest<GetSelectionOwnerReply>(requestParts, 23, unmarshallGetSelectionOwnerReply)
}


declare module './connection' {
  interface XConnection {
    convertSelection(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): RequestChecker
  }
}

XConnection.prototype.convertSelection = function(requestor: WINDOW, selection: ATOM, target: ATOM, property: ATOM, time: TIMESTAMP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIII', requestor, selection, target, property, time))

  return this.sendVoidRequest(requestParts, 24)
}


declare module './connection' {
  interface XConnection {
    /**
     * send an event
     *
     * Identifies the `destination` window, determines which clients should receive
     * the specified event and ignores any active grabs.
     *
     * The `event` must be one of the core events or an event defined by an extension,
     * so that the X server can correctly byte-swap the contents as necessary. The
     * contents of `event` are otherwise unaltered and unchecked except for the
     * `send_event` field which is forced to 'true'.
     * @param destination The window to send this event to. Every client which selects any event within
     * `event_mask` on `destination` will get the event.
     *      * The special value `XCB_SEND_EVENT_DEST_POINTER_WINDOW` refers to the window
     * that contains the mouse pointer.
     *      * The special value `XCB_SEND_EVENT_DEST_ITEM_FOCUS` refers to the window which
     * has the keyboard focus.
     * @param event_mask Event_mask for determining which clients should receive the specified event.
     * See `destination` and `propagate`.
     * @param propagate If `propagate` is true and no clients have selected any event on `destination`,
     * the destination is replaced with the closest ancestor of `destination` for
     * which some client has selected a type in `event_mask` and for which no
     * intervening window has that type in its do-not-propagate-mask. If no such
     * window exists or if the window is an ancestor of the focus window and
     * `InputFocus` was originally specified as the destination, the event is not sent
     * to any clients. Otherwise, the event is reported to every client selecting on
     * the final destination any of the types specified in `event_mask`.
     * @param event The event to send to the specified `destination`.
     *
     * See also:
     *
     * {@link ConfigureNotifyEvent}
     */
    sendEvent(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): RequestChecker
  }
}

XConnection.prototype.sendEvent = function(propagate: number, destination: WINDOW, eventMask: number, event: Int8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', propagate, destination, eventMask))
  requestParts.push(pad(event.buffer))

  return this.sendVoidRequest(requestParts, 25)
}


declare module './connection' {
  interface XConnection {
    /**
     * Grab the pointer
     *
     * Actively grabs control of the pointer. Further pointer events are reported only to the grabbing client. Overrides any active pointer grab by this client.
     * @param event_mask Specifies which pointer events are reported to the client.
     *      * TODO: which values?
     * @param confine_to Specifies the window to confine the pointer in (the user will not be able to
     * move the pointer out of that window).
     *      * The special value `XCB_NONE` means don't confine the pointer.
     * @param cursor Specifies the cursor that should be displayed or `XCB_NONE` to not change the
     * cursor.
     * @param owner_events If 1, the `grab_window` will still get the pointer events. If 0, events are not
     * reported to the `grab_window`.
     * @param grab_window Specifies the window on which the pointer should be grabbed.
     * @param time The time argument allows you to avoid certain circumstances that come up if
     * applications take a long time to respond or if there are long network delays.
     * Consider a situation where you have two applications, both of which normally
     * grab the pointer when clicked on. If both applications specify the timestamp
     * from the event, the second application may wake up faster and successfully grab
     * the pointer before the first application. The first application then will get
     * an indication that the other application grabbed the pointer before its request
     * was processed.
     *      * The special value `XCB_CURRENT_TIME` will be replaced with the current server
     * time.
     * @param pointer_mode
     * @param keyboard_mode
     *
     * See also:
     *
     * {@link XConnection.grabKeyboard}
     */
    grabPointer(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie
  }
}

XConnection.prototype.grabPointer = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, time: TIMESTAMP): GrabPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHBBIII', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, time))

  return this.sendRequest<GrabPointerReply>(requestParts, 26, unmarshallGrabPointerReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * release the pointer
     *
     * Releases the pointer and any queued events if you actively grabbed the pointer
     * before using `xcb_grab_pointer`, `xcb_grab_button` or within a normal button
     * press.
     *
     * EnterNotify and LeaveNotify events are generated.
     * @param time Timestamp to avoid race conditions when running X over the network.
     *      * The pointer will not be released if `time` is earlier than the
     * last-pointer-grab time or later than the current X server time.
     * @param name_len Length (in bytes) of `name`.
     * @param name A pattern describing an X core font.
     *
     * See also:
     *
     * {@link XConnection.grabPointer}
     *
     * {@link XConnection.grabButton}
     *
     * {@link EnterNotifyEvent}
     *
     * {@link LeaveNotifyEvent}
     */
    ungrabPointer(time: TIMESTAMP): RequestChecker
  }
}

XConnection.prototype.ungrabPointer = function(time: TIMESTAMP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', time))

  return this.sendVoidRequest(requestParts, 27)
}


declare module './connection' {
  interface XConnection {
    /**
     * Grab pointer button(s)
     *
     * This request establishes a passive grab. The pointer is actively grabbed as
     * described in GrabPointer, the last-pointer-grab time is set to the time at
     * which the button was pressed (as transmitted in the ButtonPress event), and the
     * ButtonPress event is reported if all of the following conditions are true:
     *
     * The pointer is not grabbed and the specified button is logically pressed when
     * the specified modifier keys are logically down, and no other buttons or
     * modifier keys are logically down.
     *
     * The grab-window contains the pointer.
     *
     * The confine-to window (if any) is viewable.
     *
     * A passive grab on the same button/key combination does not exist on any
     * ancestor of grab-window.
     *
     * The interpretation of the remaining arguments is the same as for GrabPointer.
     * The active grab is terminated automatically when the logical state of the
     * pointer has all buttons released, independent of the logical state of modifier
     * keys. Note that the logical state of a device (as seen by means of the
     * protocol) may lag the physical state if device event processing is frozen. This
     * request overrides all previous passive grabs by the same client on the same
     * button/key combinations on the same window. A modifier of AnyModifier is
     * equivalent to issuing the request for all possible modifier combinations
     * (including the combination of no modifiers). It is not required that all
     * specified modifiers have currently assigned keycodes. A button of AnyButton is
     * equivalent to issuing the request for all possible buttons. Otherwise, it is
     * not required that the button specified currently be assigned to a physical
     * button.
     *
     * An Access error is generated if some other client has already issued a
     * GrabButton request with the same button/key combination on the same window.
     * When using AnyModifier or AnyButton, the request fails completely (no grabs are
     * established), and an Access error is generated if there is a conflicting grab
     * for any combination. The request has no effect on an active grab.
     * @param owner_events If 1, the `grab_window` will still get the pointer events. If 0, events are not
     * reported to the `grab_window`.
     * @param grab_window Specifies the window on which the pointer should be grabbed.
     * @param event_mask Specifies which pointer events are reported to the client.
     *      * TODO: which values?
     * @param confine_to Specifies the window to confine the pointer in (the user will not be able to
     * move the pointer out of that window).
     *      * The special value `XCB_NONE` means don't confine the pointer.
     * @param cursor Specifies the cursor that should be displayed or `XCB_NONE` to not change the
     * cursor.
     * @param modifiers The modifiers to grab.
     *      * Using the special value `XCB_MOD_MASK_ANY` means grab the pointer with all
     * possible modifier combinations.
     * @param pointer_mode
     * @param keyboard_mode
     * @param button
     */
    grabButton(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): RequestChecker
  }
}

XConnection.prototype.grabButton = function(ownerEvents: number, grabWindow: WINDOW, eventMask: number, pointerMode: GrabMode, keyboardMode: GrabMode, confineTo: WINDOW, cursor: CURSOR, button: ButtonIndex, modifiers: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHBBIIBxH', ownerEvents, grabWindow, eventMask, pointerMode, keyboardMode, confineTo, cursor, button, modifiers))

  return this.sendVoidRequest(requestParts, 28)
}


declare module './connection' {
  interface XConnection {
    ungrabButton(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): RequestChecker
  }
}

XConnection.prototype.ungrabButton = function(button: ButtonIndex, grabWindow: WINDOW, modifiers: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIH2x', button, grabWindow, modifiers))

  return this.sendVoidRequest(requestParts, 29)
}


declare module './connection' {
  interface XConnection {
    changeActivePointerGrab(cursor: CURSOR, time: TIMESTAMP, eventMask: number): RequestChecker
  }
}

XConnection.prototype.changeActivePointerGrab = function(cursor: CURSOR, time: TIMESTAMP, eventMask: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIH2x', cursor, time, eventMask))

  return this.sendVoidRequest(requestParts, 30)
}


declare module './connection' {
  interface XConnection {
    /**
     * Grab the keyboard
     *
     * Actively grabs control of the keyboard and generates FocusIn and FocusOut
     * events. Further key events are reported only to the grabbing client.
     *
     * Any active keyboard grab by this client is overridden. If the keyboard is
     * actively grabbed by some other client, `AlreadyGrabbed` is returned. If
     * `grab_window` is not viewable, `GrabNotViewable` is returned. If the keyboard
     * is frozen by an active grab of another client, `GrabFrozen` is returned. If the
     * specified `time` is earlier than the last-keyboard-grab time or later than the
     * current X server time, `GrabInvalidTime` is returned. Otherwise, the
     * last-keyboard-grab time is set to the specified time.
     * @param owner_events If 1, the `grab_window` will still get the pointer events. If 0, events are not
     * reported to the `grab_window`.
     * @param grab_window Specifies the window on which the pointer should be grabbed.
     * @param time Timestamp to avoid race conditions when running X over the network.
     *      * The special value `XCB_CURRENT_TIME` will be replaced with the current server
     * time.
     * @param pointer_mode
     * @param keyboard_mode
     *
     * See also:
     *
     * {@link XConnection.grabPointer}
     */
    grabKeyboard(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie
  }
}

XConnection.prototype.grabKeyboard = function(ownerEvents: number, grabWindow: WINDOW, time: TIMESTAMP, pointerMode: GrabMode, keyboardMode: GrabMode): GrabKeyboardCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIBB2x', ownerEvents, grabWindow, time, pointerMode, keyboardMode))

  return this.sendRequest<GrabKeyboardReply>(requestParts, 31, unmarshallGrabKeyboardReply)
}


declare module './connection' {
  interface XConnection {
    ungrabKeyboard(time: TIMESTAMP): RequestChecker
  }
}

XConnection.prototype.ungrabKeyboard = function(time: TIMESTAMP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', time))

  return this.sendVoidRequest(requestParts, 32)
}


declare module './connection' {
  interface XConnection {
    /**
     * Grab keyboard key(s)
     *
     * Establishes a passive grab on the keyboard. In the future, the keyboard is
     * actively grabbed (as for `GrabKeyboard`), the last-keyboard-grab time is set to
     * the time at which the key was pressed (as transmitted in the KeyPress event),
     * and the KeyPress event is reported if all of the following conditions are true:
     *
     * The keyboard is not grabbed and the specified key (which can itself be a
     * modifier key) is logically pressed when the specified modifier keys are
     * logically down, and no other modifier keys are logically down.
     *
     * Either the grab_window is an ancestor of (or is) the focus window, or the
     * grab_window is a descendant of the focus window and contains the pointer.
     *
     * A passive grab on the same key combination does not exist on any ancestor of
     * grab_window.
     *
     * The interpretation of the remaining arguments is as for XGrabKeyboard.  The active grab is terminated
     * automatically when the logical state of the keyboard has the specified key released (independent of the
     * logical state of the modifier keys), at which point a KeyRelease event is reported to the grabbing window.
     *
     * Note that the logical state of a device (as seen by client applications) may lag the physical state if
     * device event processing is frozen.
     *
     * A modifiers argument of AnyModifier is equivalent to issuing the request for all possible modifier combinations (including the combination of no modifiers).  It is not required that all modifiers specified
     * have currently assigned KeyCodes.  A keycode argument of AnyKey is equivalent to issuing the request for
     * all possible KeyCodes.  Otherwise, the specified keycode must be in the range specified by min_keycode
     * and max_keycode in the connection setup, or a BadValue error results.
     *
     * If some other client has issued a XGrabKey with the same key combination on the same window, a BadAccess
     * error results.  When using AnyModifier or AnyKey, the request fails completely, and a BadAccess error
     * results (no grabs are established) if there is a conflicting grab for any combination.
     * @param owner_events If 1, the `grab_window` will still get the pointer events. If 0, events are not
     * reported to the `grab_window`.
     * @param grab_window Specifies the window on which the pointer should be grabbed.
     * @param key The keycode of the key to grab.
     *      * The special value `XCB_GRAB_ANY` means grab any key.
     * @param cursor Specifies the cursor that should be displayed or `XCB_NONE` to not change the
     * cursor.
     * @param modifiers The modifiers to grab.
     *      * Using the special value `XCB_MOD_MASK_ANY` means grab the pointer with all
     * possible modifier combinations.
     * @param pointer_mode
     * @param keyboard_mode
     *
     * See also:
     *
     * {@link XConnection.grabKeyboard}
     */
    grabKey(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): RequestChecker
  }
}

XConnection.prototype.grabKey = function(ownerEvents: number, grabWindow: WINDOW, modifiers: number, key: KEYCODE, pointerMode: GrabMode, keyboardMode: GrabMode): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHBBB3x', ownerEvents, grabWindow, modifiers, key, pointerMode, keyboardMode))

  return this.sendVoidRequest(requestParts, 33)
}


declare module './connection' {
  interface XConnection {
    /**
     * release a key combination
     *
     * Releases the key combination on `grab_window` if you grabbed it using
     * `xcb_grab_key` before.
     * @param key The keycode of the specified key combination.
     *      * Using the special value `XCB_GRAB_ANY` means releasing all possible key codes.
     * @param grab_window The window on which the grabbed key combination will be released.
     * @param modifiers The modifiers of the specified key combination.
     *      * Using the special value `XCB_MOD_MASK_ANY` means releasing the key combination
     * with every possible modifier combination.
     *
     * See also:
     *
     * {@link XConnection.grabKey}
     */
    ungrabKey(key: KEYCODE, grabWindow: WINDOW, modifiers: number): RequestChecker
  }
}

XConnection.prototype.ungrabKey = function(key: KEYCODE, grabWindow: WINDOW, modifiers: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIH2x', key, grabWindow, modifiers))

  return this.sendVoidRequest(requestParts, 34)
}


declare module './connection' {
  interface XConnection {
    /**
     * release queued events
     *
     * Releases queued events if the client has caused a device (pointer/keyboard) to
     * freeze due to grabbing it actively. This request has no effect if `time` is
     * earlier than the last-grab time of the most recent active grab for this client
     * or if `time` is later than the current X server time.
     * @param mode
     * @param time Timestamp to avoid race conditions when running X over the network.
     *      * The special value `XCB_CURRENT_TIME` will be replaced with the current server
     * time.
     */
    allowEvents(mode: Allow, time: TIMESTAMP): RequestChecker
  }
}

XConnection.prototype.allowEvents = function(mode: Allow, time: TIMESTAMP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xI', mode, time))

  return this.sendVoidRequest(requestParts, 35)
}


declare module './connection' {
  interface XConnection {
    grabServer(): RequestChecker
  }
}

XConnection.prototype.grabServer = function(): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendVoidRequest(requestParts, 36)
}


declare module './connection' {
  interface XConnection {
    ungrabServer(): RequestChecker
  }
}

XConnection.prototype.ungrabServer = function(): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendVoidRequest(requestParts, 37)
}


declare module './connection' {
  interface XConnection {
    /**
     * get pointer coordinates
     *
     * Gets the root window the pointer is logically on and the pointer coordinates
     * relative to the root window's origin.
     * @param window A window to check if the pointer is on the same screen as `window` (see the
     * `same_screen` field in the reply).
     */
    queryPointer(window: WINDOW): QueryPointerCookie
  }
}

XConnection.prototype.queryPointer = function(window: WINDOW): QueryPointerCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<QueryPointerReply>(requestParts, 38, unmarshallQueryPointerReply)
}


declare module './connection' {
  interface XConnection {
    getMotionEvents(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie
  }
}

XConnection.prototype.getMotionEvents = function(window: WINDOW, start: TIMESTAMP, stop: TIMESTAMP): GetMotionEventsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', window, start, stop))

  return this.sendRequest<GetMotionEventsReply>(requestParts, 39, unmarshallGetMotionEventsReply)
}


declare module './connection' {
  interface XConnection {
    translateCoordinates(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie
  }
}

XConnection.prototype.translateCoordinates = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number): TranslateCoordinatesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', srcWindow, dstWindow, srcX, srcY))

  return this.sendRequest<TranslateCoordinatesReply>(requestParts, 40, unmarshallTranslateCoordinatesReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * move mouse pointer
     *
     * Moves the mouse pointer to the specified position.
     *
     * If `src_window` is not `XCB_NONE` (TODO), the move will only take place if the
     * pointer is inside `src_window` and within the rectangle specified by (`src_x`,
     * `src_y`, `src_width`, `src_height`). The rectangle coordinates are relative to
     * `src_window`.
     *
     * If `dst_window` is not `XCB_NONE` (TODO), the pointer will be moved to the
     * offsets (`dst_x`, `dst_y`) relative to `dst_window`. If `dst_window` is
     * `XCB_NONE` (TODO), the pointer will be moved by the offsets (`dst_x`, `dst_y`)
     * relative to the current position of the pointer.
     * @param src_window If `src_window` is not `XCB_NONE` (TODO), the move will only take place if the
     * pointer is inside `src_window` and within the rectangle specified by (`src_x`,
     * `src_y`, `src_width`, `src_height`). The rectangle coordinates are relative to
     * `src_window`.
     * @param dst_window If `dst_window` is not `XCB_NONE` (TODO), the pointer will be moved to the
     * offsets (`dst_x`, `dst_y`) relative to `dst_window`. If `dst_window` is
     * `XCB_NONE` (TODO), the pointer will be moved by the offsets (`dst_x`, `dst_y`)
     * relative to the current position of the pointer.
     *
     * See also:
     *
     * {@link XConnection.setInputFocus}
     */
    warpPointer(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): RequestChecker
  }
}

XConnection.prototype.warpPointer = function(srcWindow: WINDOW, dstWindow: WINDOW, srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhhHHhh', srcWindow, dstWindow, srcX, srcY, srcWidth, srcHeight, dstX, dstY))

  return this.sendVoidRequest(requestParts, 41)
}


declare module './connection' {
  interface XConnection {
    /**
     * Sets input focus
     *
     * Changes the input focus and the last-focus-change time. If the specified `time`
     * is earlier than the current last-focus-change time, the request is ignored (to
     * avoid race conditions when running X over the network).
     *
     * A FocusIn and FocusOut event is generated when focus is changed.
     * @param focus The window to focus. All keyboard events will be reported to this window. The
     * window must be viewable (TODO), or a `xcb_match_error_t` occurs (TODO).
     *      * If `focus` is `XCB_NONE` (TODO), all keyboard events are
     * discarded until a new focus window is set.
     *      * If `focus` is `XCB_POINTER_ROOT` (TODO), focus is on the root window of the
     * screen on which the pointer is on currently.
     * @param time Timestamp to avoid race conditions when running X over the network.
     *      * The special value `XCB_CURRENT_TIME` will be replaced with the current server
     * time.
     * @param revert_to Specifies what happens when the `focus` window becomes unviewable (if `focus`
     * is neither `XCB_NONE` nor `XCB_POINTER_ROOT`).
     *
     * See also:
     *
     * {@link FocusInEvent}
     *
     * {@link FocusOutEvent}
     */
    setInputFocus(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): RequestChecker
  }
}

XConnection.prototype.setInputFocus = function(revertTo: InputFocus, focus: WINDOW, time: TIMESTAMP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', revertTo, focus, time))

  return this.sendVoidRequest(requestParts, 42)
}


declare module './connection' {
  interface XConnection {
    getInputFocus(): GetInputFocusCookie
  }
}

XConnection.prototype.getInputFocus = function(): GetInputFocusCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetInputFocusReply>(requestParts, 43, unmarshallGetInputFocusReply)
}


declare module './connection' {
  interface XConnection {
    queryKeymap(): QueryKeymapCookie
  }
}

XConnection.prototype.queryKeymap = function(): QueryKeymapCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<QueryKeymapReply>(requestParts, 44, unmarshallQueryKeymapReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * opens a font
     *
     * Opens any X core font matching the given `name` (for example "-misc-fixed-*").
     *
     * Note that X core fonts are deprecated (but still supported) in favor of
     * client-side rendering using Xft.
     * @param fid The ID with which you will refer to the font, created by `xcb_generate_id`.
     * @param name_len Length (in bytes) of `name`.
     * @param name A pattern describing an X core font.
     *
     * See also:
     */
    openFont(fid: FONT, name: Int8Array): RequestChecker
  }
}

XConnection.prototype.openFont = function(fid: FONT, name: Int8Array): RequestChecker {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', fid, nameLen))
  requestParts.push(pad(name.buffer))

  return this.sendVoidRequest(requestParts, 45)
}


declare module './connection' {
  interface XConnection {
    closeFont(font: FONT): RequestChecker
  }
}

XConnection.prototype.closeFont = function(font: FONT): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', font))

  return this.sendVoidRequest(requestParts, 46)
}


declare module './connection' {
  interface XConnection {
    /**
     * query font metrics
     *
     * Queries information associated with the font.
     * @param font The fontable (Font or Graphics Context) to query.
     */
    queryFont(font: FONTABLE): QueryFontCookie
  }
}

XConnection.prototype.queryFont = function(font: FONTABLE): QueryFontCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', font))

  return this.sendRequest<QueryFontReply>(requestParts, 47, unmarshallQueryFontReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * get text extents
     *
     * Query text extents from the X11 server. This request returns the bounding box
     * of the specified 16-bit character string in the specified `font` or the font
     * contained in the specified graphics context.
     *
     * `font_ascent` is set to the maximum of the ascent metrics of all characters in
     * the string. `font_descent` is set to the maximum of the descent metrics.
     * `overall_width` is set to the sum of the character-width metrics of all
     * characters in the string. For each character in the string, let W be the sum of
     * the character-width metrics of all characters preceding it in the string. Let L
     * be the left-side-bearing metric of the character plus W. Let R be the
     * right-side-bearing metric of the character plus W. The lbearing member is set
     * to the minimum L of all characters in the string. The rbearing member is set to
     * the maximum R.
     *
     * For fonts defined with linear indexing rather than 2-byte matrix indexing, each
     * `xcb_char2b_t` structure is interpreted as a 16-bit number with byte1 as the
     * most significant byte. If the font has no defined default character, undefined
     * characters in the string are taken to have all zero metrics.
     *
     * Characters with all zero metrics are ignored. If the font has no defined
     * default_char, the undefined characters in the string are also ignored.
     * @param font The `font` to calculate text extents in. You can also pass a graphics context.
     * @param string_len The number of characters in `string`.
     * @param string The text to get text extents for.
     */
    queryTextExtents(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie
  }
}

XConnection.prototype.queryTextExtents = function(font: FONTABLE, stringLen: number, _string: CHAR2B[]): QueryTextExtentsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<x'))
  requestParts.push(pack('<B', (stringLen & 1)))
  requestParts.push(pack('<2xI', font))
  _string.forEach(({ byte1, byte2 }) => {
    requestParts.push(pack('<BB', byte1, byte2))

  })

  return this.sendRequest<QueryTextExtentsReply>(requestParts, 48, unmarshallQueryTextExtentsReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * get matching font names
     *
     * Gets a list of available font names which match the given `pattern`.
     * @param pattern_len The length (in bytes) of `pattern`.
     * @param pattern A font pattern, for example "-misc-fixed-*".
     *      * The asterisk (*) is a wildcard for any number of characters. The question mark
     * (?) is a wildcard for a single character. Use of uppercase or lowercase does
     * not matter.
     * @param max_names The maximum number of fonts to be returned.
     */
    listFonts(maxNames: number, pattern: Int8Array): ListFontsCookie
  }
}

XConnection.prototype.listFonts = function(maxNames: number, pattern: Int8Array): ListFontsCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xHH', maxNames, patternLen))
  requestParts.push(pad(pattern.buffer))

  return this.sendRequest<ListFontsReply>(requestParts, 49, unmarshallListFontsReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * get matching font names and information
     *
     * Gets a list of available font names which match the given `pattern`.
     * @param pattern_len The length (in bytes) of `pattern`.
     * @param pattern A font pattern, for example "-misc-fixed-*".
     *      * The asterisk (*) is a wildcard for any number of characters. The question mark
     * (?) is a wildcard for a single character. Use of uppercase or lowercase does
     * not matter.
     * @param max_names The maximum number of fonts to be returned.
     */
    listFontsWithInfo(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie
  }
}

XConnection.prototype.listFontsWithInfo = function(maxNames: number, pattern: Int8Array): ListFontsWithInfoCookie {
  const patternLen = pattern.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xHH', maxNames, patternLen))
  requestParts.push(pad(pattern.buffer))

  return this.sendRequest<ListFontsWithInfoReply>(requestParts, 50, unmarshallListFontsWithInfoReply)
}


declare module './connection' {
  interface XConnection {
    setFontPath(font: STR[]): RequestChecker
  }
}

XConnection.prototype.setFontPath = function(font: STR[]): RequestChecker {
  const fontQty = font.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xH2x', fontQty))
  font.forEach(({ nameLen, name }) => {
    requestParts.push(pack('<B', nameLen))
    requestParts.push(pad(name.buffer))

  })

  return this.sendVoidRequest(requestParts, 51)
}


declare module './connection' {
  interface XConnection {
    getFontPath(): GetFontPathCookie
  }
}

XConnection.prototype.getFontPath = function(): GetFontPathCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetFontPathReply>(requestParts, 52, unmarshallGetFontPathReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * Creates a pixmap
     *
     * Creates a pixmap. The pixmap can only be used on the same screen as `drawable`
     * is on and only with drawables of the same `depth`.
     * @param depth TODO
     * @param pid The ID with which you will refer to the new pixmap, created by
     * `xcb_generate_id`.
     * @param drawable Drawable to get the screen from.
     * @param width The width of the new pixmap.
     * @param height The height of the new pixmap.
     *
     * See also:
     */
    createPixmap(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): RequestChecker
  }
}

XConnection.prototype.createPixmap = function(depth: number, pid: PIXMAP, drawable: DRAWABLE, width: number, height: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIHH', depth, pid, drawable, width, height))

  return this.sendVoidRequest(requestParts, 53)
}


declare module './connection' {
  interface XConnection {
    /**
     * Destroys a pixmap
     *
     * Deletes the association between the pixmap ID and the pixmap. The pixmap
     * storage will be freed when there are no more references to it.
     * @param pixmap The pixmap to destroy.
     */
    freePixmap(pixmap: PIXMAP): RequestChecker
  }
}

XConnection.prototype.freePixmap = function(pixmap: PIXMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', pixmap))

  return this.sendVoidRequest(requestParts, 54)
}


declare module './connection' {
  interface XConnection {
    /**
     * Creates a graphics context
     *
     * Creates a graphics context. The graphics context can be used with any drawable
     * that has the same root and depth as the specified drawable.
     * @param cid The ID with which you will refer to the graphics context, created by
     * `xcb_generate_id`.
     * @param drawable Drawable to get the root/depth from.
     *
     * See also:
     */
    createGC(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): RequestChecker
  }
}

XConnection.prototype.createGC = function(cid: GCONTEXT, drawable: DRAWABLE, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): RequestChecker {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xIII', cid, drawable, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 55)
}


declare module './connection' {
  interface XConnection {
    /**
     * change graphics context components
     *
     * Changes the components specified by `value_mask` for the specified graphics context.
     * @param gc The graphics context to change.
     * @param value_mask
     * @param value_list Values for each of the components specified in the bitmask `value_mask`. The
     * order has to correspond to the order of possible `value_mask` bits. See the
     * example.
     */
    changeGC(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): RequestChecker
  }
}

XConnection.prototype.changeGC = function(gc: GCONTEXT, valueList: Partial<{ function: GX, planeMask: number, foreground: number, background: number, lineWidth: number, lineStyle: LineStyle, capStyle: CapStyle, joinStyle: JoinStyle, fillStyle: FillStyle, fillRule: FillRule, tile: PIXMAP, stipple: PIXMAP, tileStippleXOrigin: number, tileStippleYOrigin: number, font: FONT, subwindowMode: SubwindowMode, graphicsExposures: BOOL32, clipXOrigin: number, clipYOrigin: number, clipMask: PIXMAP, dashOffset: number, dashes: number, arcMode: ArcMode }>): RequestChecker {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xII', gc, valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 56)
}


declare module './connection' {
  interface XConnection {
    copyGC(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): RequestChecker
  }
}

XConnection.prototype.copyGC = function(srcGc: GCONTEXT, dstGc: GCONTEXT, valueMask: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIII', srcGc, dstGc, valueMask))

  return this.sendVoidRequest(requestParts, 57)
}


declare module './connection' {
  interface XConnection {
    setDashes(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): RequestChecker
  }
}

XConnection.prototype.setDashes = function(gc: GCONTEXT, dashOffset: number, dashes: Uint8Array): RequestChecker {
  const dashesLen = dashes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHH', gc, dashOffset, dashesLen))
  requestParts.push(pad(dashes.buffer))

  return this.sendVoidRequest(requestParts, 58)
}


declare module './connection' {
  interface XConnection {
    setClipRectangles(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.setClipRectangles = function(ordering: ClipOrdering, gc: GCONTEXT, clipXOrigin: number, clipYOrigin: number, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIhh', ordering, gc, clipXOrigin, clipYOrigin))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 59)
}


declare module './connection' {
  interface XConnection {
    /**
     * Destroys a graphics context
     *
     * Destroys the specified `gc` and all associated storage.
     * @param gc The graphics context to destroy.
     */
    freeGC(gc: GCONTEXT): RequestChecker
  }
}

XConnection.prototype.freeGC = function(gc: GCONTEXT): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', gc))

  return this.sendVoidRequest(requestParts, 60)
}


declare module './connection' {
  interface XConnection {
    clearArea(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): RequestChecker
  }
}

XConnection.prototype.clearArea = function(exposures: number, window: WINDOW, x: number, y: number, width: number, height: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIhhHH', exposures, window, x, y, width, height))

  return this.sendVoidRequest(requestParts, 61)
}


declare module './connection' {
  interface XConnection {
    /**
     * copy areas
     *
     * Copies the specified rectangle from `src_drawable` to `dst_drawable`.
     * @param dst_drawable The destination drawable (Window or Pixmap).
     * @param src_drawable The source drawable (Window or Pixmap).
     * @param gc The graphics context to use.
     * @param src_x The source X coordinate.
     * @param src_y The source Y coordinate.
     * @param dst_x The destination X coordinate.
     * @param dst_y The destination Y coordinate.
     * @param width The width of the area to copy (in pixels).
     * @param height The height of the area to copy (in pixels).
     */
    copyArea(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): RequestChecker
  }
}

XConnection.prototype.copyArea = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIhhhhHH', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height))

  return this.sendVoidRequest(requestParts, 62)
}


declare module './connection' {
  interface XConnection {
    copyPlane(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): RequestChecker
  }
}

XConnection.prototype.copyPlane = function(srcDrawable: DRAWABLE, dstDrawable: DRAWABLE, gc: GCONTEXT, srcX: number, srcY: number, dstX: number, dstY: number, width: number, height: number, bitPlane: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIhhhhHHI', srcDrawable, dstDrawable, gc, srcX, srcY, dstX, dstY, width, height, bitPlane))

  return this.sendVoidRequest(requestParts, 63)
}


declare module './connection' {
  interface XConnection {
    polyPoint(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): RequestChecker
  }
}

XConnection.prototype.polyPoint = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', coordinateMode, drawable, gc))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('<hh', x, y))

  })

  return this.sendVoidRequest(requestParts, 64)
}


declare module './connection' {
  interface XConnection {
    /**
     * draw lines
     *
     * Draws `points_len`-1 lines between each pair of points (point[i], point[i+1])
     * in the `points` array. The lines are drawn in the order listed in the array.
     * They join correctly at all intermediate points, and if the first and last
     * points coincide, the first and last lines also join correctly. For any given
     * line, a pixel is not drawn more than once. If thin (zero line-width) lines
     * intersect, the intersecting pixels are drawn multiple times. If wide lines
     * intersect, the intersecting pixels are drawn only once, as though the entire
     * request were a single, filled shape.
     * @param drawable The drawable to draw the line(s) on.
     * @param gc The graphics context to use.
     * @param points_len The number of `xcb_point_t` structures in `points`.
     * @param points An array of points.
     * @param coordinate_mode
     */
    polyLine(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): RequestChecker
  }
}

XConnection.prototype.polyLine = function(coordinateMode: CoordMode, drawable: DRAWABLE, gc: GCONTEXT, pointsLen: number, points: POINT[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xII', coordinateMode, drawable, gc))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('<hh', x, y))

  })

  return this.sendVoidRequest(requestParts, 65)
}


declare module './connection' {
  interface XConnection {
    /**
     * draw lines
     *
     * Draws multiple, unconnected lines. For each segment, a line is drawn between
     * (x1, y1) and (x2, y2). The lines are drawn in the order listed in the array of
     * `xcb_segment_t` structures and does not perform joining at coincident
     * endpoints. For any given line, a pixel is not drawn more than once. If lines
     * intersect, the intersecting pixels are drawn multiple times.
     *
     * TODO: include the xcb_segment_t data structure
     *
     * TODO: an example
     * @param drawable A drawable (Window or Pixmap) to draw on.
     * @param gc The graphics context to use.
     *      * TODO: document which attributes of a gc are used
     * @param segments_len The number of `xcb_segment_t` structures in `segments`.
     * @param segments An array of `xcb_segment_t` structures.
     */
    polySegment(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): RequestChecker
  }
}

XConnection.prototype.polySegment = function(drawable: DRAWABLE, gc: GCONTEXT, segmentsLen: number, segments: SEGMENT[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  segments.forEach(({ x1, y1, x2, y2 }) => {
    requestParts.push(pack('<hhhh', x1, y1, x2, y2))

  })

  return this.sendVoidRequest(requestParts, 66)
}


declare module './connection' {
  interface XConnection {
    polyRectangle(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.polyRectangle = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 67)
}


declare module './connection' {
  interface XConnection {
    polyArc(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): RequestChecker
  }
}

XConnection.prototype.polyArc = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  arcs.forEach(({ x, y, width, height, angle1, angle2 }) => {
    requestParts.push(pack('<hhHHhh', x, y, width, height, angle1, angle2))

  })

  return this.sendVoidRequest(requestParts, 68)
}


declare module './connection' {
  interface XConnection {
    fillPoly(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): RequestChecker
  }
}

XConnection.prototype.fillPoly = function(drawable: DRAWABLE, gc: GCONTEXT, shape: PolyShape, coordinateMode: CoordMode, pointsLen: number, points: POINT[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIBB2x', drawable, gc, shape, coordinateMode))
  points.forEach(({ x, y }) => {
    requestParts.push(pack('<hh', x, y))

  })

  return this.sendVoidRequest(requestParts, 69)
}


declare module './connection' {
  interface XConnection {
    /**
     * Fills rectangles
     *
     * Fills the specified rectangle(s) in the order listed in the array. For any
     * given rectangle, each pixel is not drawn more than once. If rectangles
     * intersect, the intersecting pixels are drawn multiple times.
     * @param drawable The drawable (Window or Pixmap) to draw on.
     * @param gc The graphics context to use.
     *      * The following graphics context components are used: function, plane-mask,
     * fill-style, subwindow-mode, clip-x-origin, clip-y-origin, and clip-mask.
     *      * The following graphics context mode-dependent components are used:
     * foreground, background, tile, stipple, tile-stipple-x-origin, and
     * tile-stipple-y-origin.
     * @param rectangles_len The number of `xcb_rectangle_t` structures in `rectangles`.
     * @param rectangles The rectangles to fill.
     */
    polyFillRectangle(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker
  }
}

XConnection.prototype.polyFillRectangle = function(drawable: DRAWABLE, gc: GCONTEXT, rectanglesLen: number, rectangles: RECTANGLE[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  rectangles.forEach(({ x, y, width, height }) => {
    requestParts.push(pack('<hhHH', x, y, width, height))

  })

  return this.sendVoidRequest(requestParts, 70)
}


declare module './connection' {
  interface XConnection {
    polyFillArc(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): RequestChecker
  }
}

XConnection.prototype.polyFillArc = function(drawable: DRAWABLE, gc: GCONTEXT, arcsLen: number, arcs: ARC[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', drawable, gc))
  arcs.forEach(({ x, y, width, height, angle1, angle2 }) => {
    requestParts.push(pack('<hhHHhh', x, y, width, height, angle1, angle2))

  })

  return this.sendVoidRequest(requestParts, 71)
}


declare module './connection' {
  interface XConnection {
    putImage(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): RequestChecker
  }
}

XConnection.prototype.putImage = function(format: ImageFormat, drawable: DRAWABLE, gc: GCONTEXT, width: number, height: number, dstX: number, dstY: number, leftPad: number, depth: number, dataLen: number, data: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIHHhhBB2x', format, drawable, gc, width, height, dstX, dstY, leftPad, depth))
  requestParts.push(pad(data.buffer))

  return this.sendVoidRequest(requestParts, 72)
}


declare module './connection' {
  interface XConnection {
    getImage(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie
  }
}

XConnection.prototype.getImage = function(format: ImageFormat, drawable: DRAWABLE, x: number, y: number, width: number, height: number, planeMask: number): GetImageCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIhhHHI', format, drawable, x, y, width, height, planeMask))

  return this.sendRequest<GetImageReply>(requestParts, 73, unmarshallGetImageReply)
}


declare module './connection' {
  interface XConnection {
    polyText8(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): RequestChecker
  }
}

XConnection.prototype.polyText8 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', drawable, gc, x, y))
  requestParts.push(pad(items.buffer))

  return this.sendVoidRequest(requestParts, 74)
}


declare module './connection' {
  interface XConnection {
    polyText16(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): RequestChecker
  }
}

XConnection.prototype.polyText16 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, itemsLen: number, items: Uint8Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIhh', drawable, gc, x, y))
  requestParts.push(pad(items.buffer))

  return this.sendVoidRequest(requestParts, 75)
}


declare module './connection' {
  interface XConnection {
    /**
     * Draws text
     *
     * Fills the destination rectangle with the background pixel from `gc`, then
     * paints the text with the foreground pixel from `gc`. The upper-left corner of
     * the filled rectangle is at [x, y - font-ascent]. The width is overall-width,
     * the height is font-ascent + font-descent. The overall-width, font-ascent and
     * font-descent are as returned by `xcb_query_text_extents` (TODO).
     *
     * Note that using X core fonts is deprecated (but still supported) in favor of
     * client-side rendering using Xft.
     * @param drawable The drawable (Window or Pixmap) to draw text on.
     * @param string_len The length of the `string`. Note that this parameter limited by 255 due to
     * using 8 bits!
     * @param string The string to draw. Only the first 255 characters are relevant due to the data
     * type of `string_len`.
     * @param x The x coordinate of the first character, relative to the origin of `drawable`.
     * @param y The y coordinate of the first character, relative to the origin of `drawable`.
     * @param gc The graphics context to use.
     *      * The following graphics context components are used: plane-mask, foreground,
     * background, font, subwindow-mode, clip-x-origin, clip-y-origin, and clip-mask.
     *
     * See also:
     *
     * {@link XConnection.imageText16}
     */
    imageText8(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): RequestChecker
  }
}

XConnection.prototype.imageText8 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: Int8Array): RequestChecker {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIhh', stringLen, drawable, gc, x, y))
  requestParts.push(pad(_string.buffer))

  return this.sendVoidRequest(requestParts, 76)
}


declare module './connection' {
  interface XConnection {
    /**
     * Draws text
     *
     * Fills the destination rectangle with the background pixel from `gc`, then
     * paints the text with the foreground pixel from `gc`. The upper-left corner of
     * the filled rectangle is at [x, y - font-ascent]. The width is overall-width,
     * the height is font-ascent + font-descent. The overall-width, font-ascent and
     * font-descent are as returned by `xcb_query_text_extents` (TODO).
     *
     * Note that using X core fonts is deprecated (but still supported) in favor of
     * client-side rendering using Xft.
     * @param drawable The drawable (Window or Pixmap) to draw text on.
     * @param string_len The length of the `string` in characters. Note that this parameter limited by
     * 255 due to using 8 bits!
     * @param string The string to draw. Only the first 255 characters are relevant due to the data
     * type of `string_len`. Every character uses 2 bytes (hence the 16 in this
     * request's name).
     * @param x The x coordinate of the first character, relative to the origin of `drawable`.
     * @param y The y coordinate of the first character, relative to the origin of `drawable`.
     * @param gc The graphics context to use.
     *      * The following graphics context components are used: plane-mask, foreground,
     * background, font, subwindow-mode, clip-x-origin, clip-y-origin, and clip-mask.
     *
     * See also:
     *
     * {@link XConnection.imageText8}
     */
    imageText16(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): RequestChecker
  }
}

XConnection.prototype.imageText16 = function(drawable: DRAWABLE, gc: GCONTEXT, x: number, y: number, _string: CHAR2B[]): RequestChecker {
  const stringLen = _string.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIhh', stringLen, drawable, gc, x, y))
  _string.forEach(({ byte1, byte2 }) => {
    requestParts.push(pack('<BB', byte1, byte2))

  })

  return this.sendVoidRequest(requestParts, 77)
}


declare module './connection' {
  interface XConnection {
    createColormap(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): RequestChecker
  }
}

XConnection.prototype.createColormap = function(alloc: ColormapAlloc, mid: COLORMAP, window: WINDOW, visual: VISUALID): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIII', alloc, mid, window, visual))

  return this.sendVoidRequest(requestParts, 78)
}


declare module './connection' {
  interface XConnection {
    freeColormap(cmap: COLORMAP): RequestChecker
  }
}

XConnection.prototype.freeColormap = function(cmap: COLORMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))

  return this.sendVoidRequest(requestParts, 79)
}


declare module './connection' {
  interface XConnection {
    copyColormapAndFree(mid: COLORMAP, srcCmap: COLORMAP): RequestChecker
  }
}

XConnection.prototype.copyColormapAndFree = function(mid: COLORMAP, srcCmap: COLORMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', mid, srcCmap))

  return this.sendVoidRequest(requestParts, 80)
}


declare module './connection' {
  interface XConnection {
    installColormap(cmap: COLORMAP): RequestChecker
  }
}

XConnection.prototype.installColormap = function(cmap: COLORMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))

  return this.sendVoidRequest(requestParts, 81)
}


declare module './connection' {
  interface XConnection {
    uninstallColormap(cmap: COLORMAP): RequestChecker
  }
}

XConnection.prototype.uninstallColormap = function(cmap: COLORMAP): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))

  return this.sendVoidRequest(requestParts, 82)
}


declare module './connection' {
  interface XConnection {
    listInstalledColormaps(window: WINDOW): ListInstalledColormapsCookie
  }
}

XConnection.prototype.listInstalledColormaps = function(window: WINDOW): ListInstalledColormapsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', window))

  return this.sendRequest<ListInstalledColormapsReply>(requestParts, 83, unmarshallListInstalledColormapsReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * Allocate a color
     *
     * Allocates a read-only colormap entry corresponding to the closest RGB value
     * supported by the hardware. If you are using TrueColor, you can take a shortcut
     * and directly calculate the color pixel value to avoid the round trip. But, for
     * example, on 16-bit color setups (VNC), you can easily get the closest supported
     * RGB value to the RGB value you are specifying.
     * @param cmap TODO
     * @param red The red value of your color.
     * @param green The green value of your color.
     * @param blue The blue value of your color.
     */
    allocColor(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie
  }
}

XConnection.prototype.allocColor = function(cmap: COLORMAP, red: number, green: number, blue: number): AllocColorCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHHH2x', cmap, red, green, blue))

  return this.sendRequest<AllocColorReply>(requestParts, 84, unmarshallAllocColorReply)
}


declare module './connection' {
  interface XConnection {
    allocNamedColor(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie
  }
}

XConnection.prototype.allocNamedColor = function(cmap: COLORMAP, name: Int8Array): AllocNamedColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', cmap, nameLen))
  requestParts.push(pad(name.buffer))

  return this.sendRequest<AllocNamedColorReply>(requestParts, 85, unmarshallAllocNamedColorReply)
}


declare module './connection' {
  interface XConnection {
    allocColorCells(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie
  }
}

XConnection.prototype.allocColorCells = function(contiguous: number, cmap: COLORMAP, colors: number, planes: number): AllocColorCellsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHH', contiguous, cmap, colors, planes))

  return this.sendRequest<AllocColorCellsReply>(requestParts, 86, unmarshallAllocColorCellsReply)
}


declare module './connection' {
  interface XConnection {
    allocColorPlanes(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie
  }
}

XConnection.prototype.allocColorPlanes = function(contiguous: number, cmap: COLORMAP, colors: number, reds: number, greens: number, blues: number): AllocColorPlanesCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHHHH', contiguous, cmap, colors, reds, greens, blues))

  return this.sendRequest<AllocColorPlanesReply>(requestParts, 87, unmarshallAllocColorPlanesReply)
}


declare module './connection' {
  interface XConnection {
    freeColors(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): RequestChecker
  }
}

XConnection.prototype.freeColors = function(cmap: COLORMAP, planeMask: number, pixelsLen: number, pixels: Uint32Array): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xII', cmap, planeMask))
  requestParts.push(pad(pixels.buffer))

  return this.sendVoidRequest(requestParts, 88)
}


declare module './connection' {
  interface XConnection {
    storeColors(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): RequestChecker
  }
}

XConnection.prototype.storeColors = function(cmap: COLORMAP, itemsLen: number, items: COLORITEM[]): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))
  items.forEach(({ pixel, red, green, blue, flags }) => {
    requestParts.push(pack('<IHHHBx', pixel, red, green, blue, flags))

  })

  return this.sendVoidRequest(requestParts, 89)
}


declare module './connection' {
  interface XConnection {
    storeNamedColor(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): RequestChecker
  }
}

XConnection.prototype.storeNamedColor = function(flags: number, cmap: COLORMAP, pixel: number, name: Int8Array): RequestChecker {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIIH2x', flags, cmap, pixel, nameLen))
  requestParts.push(pad(name.buffer))

  return this.sendVoidRequest(requestParts, 90)
}


declare module './connection' {
  interface XConnection {
    queryColors(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie
  }
}

XConnection.prototype.queryColors = function(cmap: COLORMAP, pixelsLen: number, pixels: Uint32Array): QueryColorsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cmap))
  requestParts.push(pad(pixels.buffer))

  return this.sendRequest<QueryColorsReply>(requestParts, 91, unmarshallQueryColorsReply)
}


declare module './connection' {
  interface XConnection {
    lookupColor(cmap: COLORMAP, name: Int8Array): LookupColorCookie
  }
}

XConnection.prototype.lookupColor = function(cmap: COLORMAP, name: Int8Array): LookupColorCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIH2x', cmap, nameLen))
  requestParts.push(pad(name.buffer))

  return this.sendRequest<LookupColorReply>(requestParts, 92, unmarshallLookupColorReply)
}


declare module './connection' {
  interface XConnection {
    createCursor(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): RequestChecker
  }
}

XConnection.prototype.createCursor = function(cid: CURSOR, source: PIXMAP, mask: PIXMAP, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number, x: number, y: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIHHHHHHHH', cid, source, mask, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue, x, y))

  return this.sendVoidRequest(requestParts, 93)
}


declare module './connection' {
  interface XConnection {
    /**
     * create cursor
     *
     * Creates a cursor from a font glyph. X provides a set of standard cursor shapes
     * in a special font named cursor. Applications are encouraged to use this
     * interface for their cursors because the font can be customized for the
     * individual display type.
     *
     * All pixels which are set to 1 in the source will use the foreground color (as
     * specified by `fore_red`, `fore_green` and `fore_blue`). All pixels set to 0
     * will use the background color (as specified by `back_red`, `back_green` and
     * `back_blue`).
     * @param cid The ID with which you will refer to the cursor, created by `xcb_generate_id`.
     * @param source_font In which font to look for the cursor glyph.
     * @param mask_font In which font to look for the mask glyph.
     * @param source_char The glyph of `source_font` to use.
     * @param mask_char The glyph of `mask_font` to use as a mask: Pixels which are set to 1 define
     * which source pixels are displayed. All pixels which are set to 0 are not
     * displayed.
     * @param fore_red The red value of the foreground color.
     * @param fore_green The green value of the foreground color.
     * @param fore_blue The blue value of the foreground color.
     * @param back_red The red value of the background color.
     * @param back_green The green value of the background color.
     * @param back_blue The blue value of the background color.
     */
    createGlyphCursor(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): RequestChecker
  }
}

XConnection.prototype.createGlyphCursor = function(cid: CURSOR, sourceFont: FONT, maskFont: FONT, sourceChar: number, maskChar: number, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIIIHHHHHHHH', cid, sourceFont, maskFont, sourceChar, maskChar, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return this.sendVoidRequest(requestParts, 94)
}


declare module './connection' {
  interface XConnection {
    /**
     * Deletes a cursor
     *
     * Deletes the association between the cursor resource ID and the specified
     * cursor. The cursor is freed when no other resource references it.
     * @param cursor The cursor to destroy.
     */
    freeCursor(cursor: CURSOR): RequestChecker
  }
}

XConnection.prototype.freeCursor = function(cursor: CURSOR): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', cursor))

  return this.sendVoidRequest(requestParts, 95)
}


declare module './connection' {
  interface XConnection {
    recolorCursor(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): RequestChecker
  }
}

XConnection.prototype.recolorCursor = function(cursor: CURSOR, foreRed: number, foreGreen: number, foreBlue: number, backRed: number, backGreen: number, backBlue: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHHHHHH', cursor, foreRed, foreGreen, foreBlue, backRed, backGreen, backBlue))

  return this.sendVoidRequest(requestParts, 96)
}


declare module './connection' {
  interface XConnection {
    queryBestSize(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie
  }
}

XConnection.prototype.queryBestSize = function(_class: QueryShapeOf, drawable: DRAWABLE, width: number, height: number): QueryBestSizeCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xIHH', _class, drawable, width, height))

  return this.sendRequest<QueryBestSizeReply>(requestParts, 97, unmarshallQueryBestSizeReply)
}


declare module './connection' {
  interface XConnection {
    /**
     * check if extension is present
     *
     * Determines if the specified extension is present on this X11 server.
     *
     * Every extension has a unique `major_opcode` to identify requests, the minor
     * opcodes and request formats are extension-specific. If the extension provides
     * events and errors, the `first_event` and `first_error` fields in the reply are
     * set accordingly.
     *
     * There should rarely be a need to use this request directly, XCB provides the
     * `xcb_get_extension_data` function instead.
     * @param name_len The length of `name` in bytes.
     * @param name The name of the extension to query, for example "RANDR". This is case
     * sensitive!
     *
     * See also:
     */
    queryExtension(name: Int8Array): QueryExtensionCookie
  }
}

XConnection.prototype.queryExtension = function(name: Int8Array): QueryExtensionCookie {
  const nameLen = name.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xH2x', nameLen))
  requestParts.push(pad(name.buffer))

  return this.sendRequest<QueryExtensionReply>(requestParts, 98, unmarshallQueryExtensionReply)
}


declare module './connection' {
  interface XConnection {
    listExtensions(): ListExtensionsCookie
  }
}

XConnection.prototype.listExtensions = function(): ListExtensionsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<ListExtensionsReply>(requestParts, 99, unmarshallListExtensionsReply)
}


declare module './connection' {
  interface XConnection {
    changeKeyboardMapping(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): RequestChecker
  }
}

XConnection.prototype.changeKeyboardMapping = function(firstKeycode: KEYCODE, keysymsPerKeycode: number, keysyms: Uint32Array): RequestChecker {
  const keycodeCount = keysyms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xBB2x', keycodeCount, firstKeycode, keysymsPerKeycode))
  requestParts.push(pad(keysyms.buffer))

  return this.sendVoidRequest(requestParts, 100)
}


declare module './connection' {
  interface XConnection {
    getKeyboardMapping(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie
  }
}

XConnection.prototype.getKeyboardMapping = function(firstKeycode: KEYCODE, count: number): GetKeyboardMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xBB', firstKeycode, count))

  return this.sendRequest<GetKeyboardMappingReply>(requestParts, 101, unmarshallGetKeyboardMappingReply)
}


declare module './connection' {
  interface XConnection {
    changeKeyboardControl(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): RequestChecker
  }
}

XConnection.prototype.changeKeyboardControl = function(valueList: Partial<{ keyClickPercent: number, bellPercent: number, bellPitch: number, bellDuration: number, led: number, ledMode: LedMode, key: KEYCODE32, autoRepeatMode: AutoRepeatMode }>): RequestChecker {
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
  const valueMask = valueMaskSortedList.map(value => valueListBitmasks[value]).reduce((mask, bit) => mask | bit, 0)

  const valueListValues =
    Object.entries(valueList)
      .sort(([key], [otherKey]) => valueMaskSortedList.indexOf(key) - valueMaskSortedList.indexOf(otherKey))
      .map(([_, value]) => value)
      .filter(notUndefined)
  requestParts.push(pack('<xx2xI', valueMask))
  requestParts.push(pack(`<${valueMaskSortedList.map(key => valueListFormats[key]).join('')}`, ...valueListValues))

  return this.sendVoidRequest(requestParts, 102)
}


declare module './connection' {
  interface XConnection {
    getKeyboardControl(): GetKeyboardControlCookie
  }
}

XConnection.prototype.getKeyboardControl = function(): GetKeyboardControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetKeyboardControlReply>(requestParts, 103, unmarshallGetKeyboardControlReply)
}


declare module './connection' {
  interface XConnection {
    bell(percent: number): RequestChecker
  }
}

XConnection.prototype.bell = function(percent: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xb2x', percent))

  return this.sendVoidRequest(requestParts, 104)
}


declare module './connection' {
  interface XConnection {
    changePointerControl(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): RequestChecker
  }
}

XConnection.prototype.changePointerControl = function(accelerationNumerator: number, accelerationDenominator: number, threshold: number, doAcceleration: number, doThreshold: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xhhhBB', accelerationNumerator, accelerationDenominator, threshold, doAcceleration, doThreshold))

  return this.sendVoidRequest(requestParts, 105)
}


declare module './connection' {
  interface XConnection {
    getPointerControl(): GetPointerControlCookie
  }
}

XConnection.prototype.getPointerControl = function(): GetPointerControlCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetPointerControlReply>(requestParts, 106, unmarshallGetPointerControlReply)
}


declare module './connection' {
  interface XConnection {
    setScreenSaver(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): RequestChecker
  }
}

XConnection.prototype.setScreenSaver = function(timeout: number, interval: number, preferBlanking: Blanking, allowExposures: Exposures): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xhhBB', timeout, interval, preferBlanking, allowExposures))

  return this.sendVoidRequest(requestParts, 107)
}


declare module './connection' {
  interface XConnection {
    getScreenSaver(): GetScreenSaverCookie
  }
}

XConnection.prototype.getScreenSaver = function(): GetScreenSaverCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetScreenSaverReply>(requestParts, 108, unmarshallGetScreenSaverReply)
}


declare module './connection' {
  interface XConnection {
    changeHosts(mode: HostMode, family: Family, address: Uint8Array): RequestChecker
  }
}

XConnection.prototype.changeHosts = function(mode: HostMode, family: Family, address: Uint8Array): RequestChecker {
  const addressLen = address.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2xBxH', mode, family, addressLen))
  requestParts.push(pad(address.buffer))

  return this.sendVoidRequest(requestParts, 109)
}


declare module './connection' {
  interface XConnection {
    listHosts(): ListHostsCookie
  }
}

XConnection.prototype.listHosts = function(): ListHostsCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<ListHostsReply>(requestParts, 110, unmarshallListHostsReply)
}


declare module './connection' {
  interface XConnection {
    setAccessControl(mode: AccessControl): RequestChecker
  }
}

XConnection.prototype.setAccessControl = function(mode: AccessControl): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mode))

  return this.sendVoidRequest(requestParts, 111)
}


declare module './connection' {
  interface XConnection {
    setCloseDownMode(mode: CloseDown): RequestChecker
  }
}

XConnection.prototype.setCloseDownMode = function(mode: CloseDown): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mode))

  return this.sendVoidRequest(requestParts, 112)
}


declare module './connection' {
  interface XConnection {
    /**
     * kills a client
     *
     * Forces a close down of the client that created the specified `resource`.
     * @param resource Any resource belonging to the client (for example a Window), used to identify
     * the client connection.
     *      * The special value of `XCB_KILL_ALL_TEMPORARY`, the resources of all clients
     * that have terminated in `RetainTemporary` (TODO) are destroyed.
     *
     * See also:
     */
    killClient(resource: number): RequestChecker
  }
}

XConnection.prototype.killClient = function(resource: number): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xI', resource))

  return this.sendVoidRequest(requestParts, 113)
}


declare module './connection' {
  interface XConnection {
    rotateProperties(window: WINDOW, delta: number, atoms: Uint32Array): RequestChecker
  }
}

XConnection.prototype.rotateProperties = function(window: WINDOW, delta: number, atoms: Uint32Array): RequestChecker {
  const atomsLen = atoms.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2xIHh', window, atomsLen, delta))
  requestParts.push(pad(atoms.buffer))

  return this.sendVoidRequest(requestParts, 114)
}


declare module './connection' {
  interface XConnection {
    forceScreenSaver(mode: ScreenSaver): RequestChecker
  }
}

XConnection.prototype.forceScreenSaver = function(mode: ScreenSaver): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mode))

  return this.sendVoidRequest(requestParts, 115)
}


declare module './connection' {
  interface XConnection {
    setPointerMapping(map: Uint8Array): SetPointerMappingCookie
  }
}

XConnection.prototype.setPointerMapping = function(map: Uint8Array): SetPointerMappingCookie {
  const mapLen = map.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', mapLen))
  requestParts.push(pad(map.buffer))

  return this.sendRequest<SetPointerMappingReply>(requestParts, 116, unmarshallSetPointerMappingReply)
}


declare module './connection' {
  interface XConnection {
    getPointerMapping(): GetPointerMappingCookie
  }
}

XConnection.prototype.getPointerMapping = function(): GetPointerMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetPointerMappingReply>(requestParts, 117, unmarshallGetPointerMappingReply)
}


declare module './connection' {
  interface XConnection {
    setModifierMapping(keycodes: Uint8Array): SetModifierMappingCookie
  }
}

XConnection.prototype.setModifierMapping = function(keycodes: Uint8Array): SetModifierMappingCookie {
  const keycodesPerModifier = keycodes.length
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xB2x', keycodesPerModifier))
  requestParts.push(pad(keycodes.buffer))

  return this.sendRequest<SetModifierMappingReply>(requestParts, 118, unmarshallSetModifierMappingReply)
}


declare module './connection' {
  interface XConnection {
    getModifierMapping(): GetModifierMappingCookie
  }
}

XConnection.prototype.getModifierMapping = function(): GetModifierMappingCookie {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendRequest<GetModifierMappingReply>(requestParts, 119, unmarshallGetModifierMappingReply)
}


declare module './connection' {
  interface XConnection {
    noOperation(): RequestChecker
  }
}

XConnection.prototype.noOperation = function(): RequestChecker {
  const requestParts: ArrayBuffer[] = []

  requestParts.push(pack('<xx2x'))

  return this.sendVoidRequest(requestParts, 127)
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
