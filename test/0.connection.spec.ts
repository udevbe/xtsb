import { ChildProcessWithoutNullStreams } from 'child_process'
import { BadWindow, connect, EventMask, WindowClass, XConnection, XConnectionOptions } from '../src'
import { setupXvfb } from './setupXvfb'

describe('Connection', () => {

  const displayNum = '0'
  const display = `:${displayNum}`
  let xvfbProc: ChildProcessWithoutNullStreams

  let connection: XConnection

  beforeAll(async (done) => {
    const { xProc, xAuthority } = await setupXvfb(display)
    xvfbProc = xProc
    connection = await connect({ display, xAuthority })
    done()
  })

  afterAll(done => {
    connection.close()
    xvfbProc.kill()
    done()
  })

  it('can receive a reply from a request.', async done => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection.createWindow(0, windowId, connection.setup.roots[0].root, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, {})
    const queryTreeReply = await connection.queryTree(windowId)

    // Then
    expect(queryTreeReply.parent).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.root).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.childrenLen).toBe(0)
    expect(queryTreeReply.children.length).toBe(0)
    done()
  })

  it('can receive an error from a result request.', async done => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection.createWindow(0, windowId, connection.setup.roots[0].root, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, {})
    connection.queryTree(123).catch(error => {
      expect(error).toBeInstanceOf(BadWindow)
      done()
    })
  })

  it('can receive an error from checked a request.', async done => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection.createWindow(0, windowId, 12345, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, {}).check().catch(error => {
      expect(error).toBeInstanceOf(BadWindow)
      done()
    })
  })

  it('can receive events.', async done => {
    // Given
    const windowId = connection.allocateID()

    // When
    connection.createWindow(0, windowId, connection.setup.roots[0].root, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, { eventMask: EventMask.StructureNotify })
    connection.onDestroyNotifyEvent = event => {
      expect(event.window).toBe(windowId)
      done()
    }

    connection.destroyWindow(windowId)
  })

  it('can wait on a successful checked request.', async done => {
    // Given
    const windowId0 = connection.allocateID()
    const windowId1 = connection.allocateID()

    // When
    connection.createWindow(0, windowId0, connection.setup.roots[0].root, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, { eventMask: EventMask.StructureNotify })
    await connection.destroyWindow(windowId0).check()
    await connection.createWindow(0, windowId1, connection.setup.roots[0].root, 0, 0, 1, 1, 0, WindowClass.InputOutput, 0, {}).check()
    const queryTreeReply = await connection.queryTree(windowId1)

    // Then
    expect(queryTreeReply.parent).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.root).toBe(connection.setup.roots[0].root)
    expect(queryTreeReply.childrenLen).toBe(0)
    expect(queryTreeReply.children.length).toBe(0)
    done()
  })
})
