import * as net from 'net'
import { homedir } from 'os'
import * as fs from 'fs'
import * as util from 'util'
import * as path from 'path'
import { pack, unpackFrom } from './struct'
import { typePad, Unmarshaller, xcbComplexList, xcbSimpleList } from './xjsbInternals'
import { DEPTH, FORMAT, SCREEN, Setup, SetupFailed, VISUALTYPE } from './xproto'

const fsReadFile = util.promisify(fs.readFile)

interface ConnectionTypeToName {
  256: 'Local',
  65535: 'Wild',
  254: 'Netname',
  253: 'Krb5Principal',
  252: 'LocalHost',
  0: 'Internet',
  1: 'DECnet',
  2: 'Chaos',
  5: 'ServerInterpreted',
  6: 'Internet6'
}

const connectionTypeToName: ConnectionTypeToName = {
  256: 'Local',
  65535: 'Wild',
  254: 'Netname',
  253: 'Krb5Principal',
  252: 'LocalHost',
  0: 'Internet',
  1: 'DECnet',
  2: 'Chaos',
  5: 'ServerInterpreted',
  6: 'Internet6'
}

interface Cookie {
  type: keyof ConnectionTypeToName
  address: string
  display: string
  authName: string
  authData: string
}

async function readXauthority(xAuthority?: string): Promise<Buffer | null> {
  const nixFilename = xAuthority || process.env.XAUTHORITY || path.join(homedir(), '.Xauthority')
  try {
    return await fsReadFile(nixFilename)
  } catch (err) {
    if (err.code === 'ENOENT') {
      // TODO we could solve this with recursion instead of c/p the readFile logic here from before
      // Xming/windows uses %HOME%/Xauthority ( .Xauthority with no dot ) - try with this name
      const winFilename = process.env.XAUTHORITY ?? path.join(homedir(), 'Xauthority')
      try {
        return await fsReadFile(winFilename)
      } catch (err) {
        if (err.code === 'ENOENT') {
          return null
        } else {
          throw err
        }
      }
    } else {
      throw err
    }
  }
}

function parseXauth(buf: Buffer): Cookie[] {
  let offset = 0
  const auth: Cookie[] = []
  const cookieProperties: (keyof Omit<Cookie, 'type'>)[] = ['address', 'display', 'authName', 'authData']

  while (offset < buf.length) {
    const type = buf.readUInt16BE(offset)
    if (!connectionTypeToName.hasOwnProperty(type)) {
      throw new Error('Unknown address type')
    }
    const cookie: Partial<Cookie> = {
      type: type as keyof ConnectionTypeToName
    }

    offset += 2
    cookieProperties.forEach((property) => {
      const length = buf.readUInt16BE(offset)
      offset += 2
      if (cookie.type === 0 && property === 'address') { // Internet
        // 4 bytes of ip addess, convert to w.x.y.z string
        cookie.address = [
          buf[offset],
          buf[offset + 1],
          buf[offset + 2],
          buf[offset + 3]
        ].map(octet => octet.toString(10)).join('.')
      } else {
        let res = ''
        const end = offset + length
        let offzet = offset
        while (offzet < end) {
          res += String.fromCharCode(buf[offzet++])
        }
        cookie[property] = res
      }
      offset += length
    })
    auth.push(cookie as Cookie)
  }
  return auth
}

async function getAuthString(displayNum: string, authHost: string, socketFamily: 'IPv4' | 'IPv6' | undefined, xAuthority?: string): Promise<{ authName: string, authData: string }> {
  let family: number
  if (socketFamily === 'IPv4') {
    family = 0 // Internet
  } else if (socketFamily === 'IPv6') {
    family = 6 // Internet6
  } else {
    family = 256 // Local
  }

  const data = await readXauthority(xAuthority)

  if (!data) {
    return {
      authName: '',
      authData: ''
    }
  }
  const auth = parseXauth(data)
  for (let cookieNum in auth) {
    const cookie = auth[cookieNum]
    if ((connectionTypeToName[cookie.type] === 'Wild' || (cookie.type === family && cookie.address === authHost)) &&
      (cookie.display.length === 0 || cookie.display === displayNum)) {
      return cookie
    }
  }
  // If no cookie is found, proceed without authentication
  return {
    authName: '',
    authData: ''
  }
}

function paddedLength(len?: number): number {
  if (len) {
    return ((len + 3) >> 2) << 2
  } else {
    return 0
  }
}

function paddedString(str: string) {
  if (str.length === 0) {
    return ''
  }

  const pad = paddedLength(str.length) - str.length
  let res = str
  for (let i = 0; i < pad; ++i) {
    res += String.fromCharCode(0)
  }

  return res
}

function getByteOrder(): number {
  const isLittleEndian = ((new Uint32Array((new Uint8Array([1, 2, 3, 4])).buffer))[0] === 0x04030201)
  if (isLittleEndian) {
    return 'l'.charCodeAt(0)
  } else {
    return 'B'.charCodeAt(0)
  }
}

export async function writeClientHello(socket: net.Socket, displayNum: string, authHost: string, socketFamily: 'IPv4' | 'IPv6' | undefined, xAuthority?: string): Promise<void> {
  // TODO handle cookie read error
  const cookie = await getAuthString(displayNum, authHost, socketFamily, xAuthority)

  if (!cookie) {
    throw new Error('No Cookie found :(')
  }

  const byteOrder = getByteOrder()
  const protocolMajor = 11 // TODO: config? env?
  const protocolMinor = 0
  const authReq = pack(`<BxHHHHxx${paddedString(cookie.authName).length}s${paddedString(cookie.authData).length}s`,
    byteOrder,
    protocolMajor,
    protocolMinor,
    cookie.authName.length,
    cookie.authData.length,
    paddedString(cookie.authName),
    paddedString(cookie.authData)
  )

  socket.write(new Buffer(authReq))
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

const unmarshallSetup: Unmarshaller<Setup> = (buffer, offset = 0) => {
  const [
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
    maxKeycode
  ] = unpackFrom('<BxHHHIIIIHHBBBBBBBB4x', buffer, offset)
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

export function readServerHello(buffer: Buffer): Setup {
  const retCode = buffer.readUInt8(0)
  if (retCode === 0) {
    // error
    const setupFailed = unmarshallSetupFailed(buffer, 0).value
    throw new Error(`X server connection failed: ${setupFailed.reason.toString()}`)
  }

  return unmarshallSetup(buffer.buffer, buffer.byteOffset).value
}
