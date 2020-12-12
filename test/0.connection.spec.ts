import { ChildProcessWithoutNullStreams } from 'child_process'
import {
  BadWindow,
  connect,
  EventMask,
  nodeConnectionSetup,
  WindowClass,
  XConnection,
  getShape,
  getXFixes,
  getRender, ColormapAlloc
} from '../src'
import { setupXvfb } from './setupXvfb'

interface VisualAndColormap {
  visualId: number,
  colormap: number
}

async function setupVisualAndColormap(xConnection: XConnection): Promise<VisualAndColormap> {
  const visuals = xConnection.setup.roots.map(screen => {
    const depth = screen.allowedDepths.find(depth => depth.depth === 32)
    return depth?.visuals
  })?.[0]

  if (visuals === undefined) {
    throw new Error('no 32 bit visualtype\n')
  }
  const visualId = visuals[0].visualId

  const colormap = xConnection.allocateID()
  await xConnection.createColormap(ColormapAlloc.None, colormap, xConnection.setup.roots[0].root, visualId).check()

  return {
    visualId,
    colormap
  }
}

describe('Connection', () => {
  const displayNum = '0'
  const display = `:${displayNum}`
  let xvfbProc: ChildProcessWithoutNullStreams

  let connection: XConnection

  beforeAll(async (done) => {
    const { xProc, xAuthority } = await setupXvfb(display)
    xvfbProc = xProc
    connection = await connect(nodeConnectionSetup({ display, xAuthority }))
    done()
  })

  afterAll((done) => {
    connection.close()
    xvfbProc.kill()
    done()
  })

  it('can receive a reply from a request.', async (done) => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection.createWindow(
      0,
      windowId,
      connection.setup.roots[0].root,
      0,
      0,
      1,
      1,
      0,
      WindowClass.InputOutput,
      0,
      {}
    )
    const queryTreeReply = await connection.queryTree(windowId)

    // Then
    expect(queryTreeReply.parent).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.root).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.childrenLen).toBe(0)
    expect(queryTreeReply.children.length).toBe(0)
    done()
  })

  it('can receive an error from a result request.', async (done) => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection.createWindow(
      0,
      windowId,
      connection.setup.roots[0].root,
      0,
      0,
      1,
      1,
      0,
      WindowClass.InputOutput,
      0,
      {}
    )
    connection.queryTree(123).catch((error) => {
      expect(error).toBeInstanceOf(BadWindow)
      done()
    })
  })

  it('can receive an error from checked a request.', async (done) => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection
      .createWindow(0, windowId, 12345, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, {})
      .check()
      .catch((error) => {
        expect(error).toBeInstanceOf(BadWindow)
        done()
      })
  })

  it('can receive events.', async (done) => {
    // Given
    const { colormap, visualId } = await setupVisualAndColormap(connection)
    const windowId = connection.allocateID()

    // When
    await connection.createWindow(
      32,
      windowId,
      connection.setup.roots[0].root,
      0,
      0,
      484,
      341,
      0,
      WindowClass.InputOutput,
      visualId,
      {
        colormap,
        eventMask: EventMask.KeyPress |
          EventMask.KeyRelease |
          EventMask.ButtonPress |
          EventMask.ButtonRelease |
          EventMask.PointerMotion |
          EventMask.EnterWindow |
          EventMask.LeaveWindow |
          EventMask.SubstructureNotify |
          EventMask.SubstructureRedirect |
          EventMask.StructureNotify,
        borderPixel: connection.setup.roots[0].blackPixel
      }
    ).check()
    connection.onDestroyNotifyEvent = (event) => {
      connection.onDestroyNotifyEvent = undefined
      expect(event.window).toBe(windowId)
      done()
    }

    connection.destroyWindow(windowId)
  })

  it('can wait on a successful checked request.', async (done) => {
    // Given
    const windowId0 = connection.allocateID()
    const windowId1 = connection.allocateID()

    // When
    connection.createWindow(
      0,
      windowId0,
      connection.setup.roots[0].root,
      0,
      0,
      1,
      1,
      0,
      WindowClass.InputOutput,
      0,
      { eventMask: EventMask.StructureNotify }
    )
    await connection.destroyWindow(windowId0).check()
    await connection
      .createWindow(
        0,
        windowId1,
        connection.setup.roots[0].root,
        0,
        0,
        1,
        1,
        0,
        WindowClass.InputOutput,
        0,
        {}
      )
      .check()
    const queryTreeReply = await connection.queryTree(windowId1)

    // Then
    expect(queryTreeReply.parent).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.root).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.childrenLen).toBe(0)
    expect(queryTreeReply.children.length).toBe(0)
    done()
  })

  it('can query extensions', async (done) => {
    const listExtensionsReply = await connection.listExtensions()
    listExtensionsReply.names.forEach(value => {
      expect(value).not.toBeUndefined()
      expect(typeof value.name.chars()).toBe('string')
    })

    const xFixes = await getXFixes(connection)
    const render = await getRender(connection)
    const shape = await getShape(connection)

    expect(xFixes).not.toBeUndefined()
    expect(render).not.toBeUndefined()
    expect(shape).not.toBeUndefined()

    done()
  })
})
