import { ChildProcessWithoutNullStreams } from 'child_process'
import { connect, XConnectionOptions } from '../src'
import { setupXvfb } from './setupXvfb'

describe('Connection', () => {

  const displayNum = '0'
  const display = `:${displayNum}`
  let testOptions: XConnectionOptions
  let xvfbProc: ChildProcessWithoutNullStreams

  beforeAll(async (done) => {
    const { xProc, xAuthority } = await setupXvfb(display)
    xvfbProc = xProc
    testOptions = { display, xAuthority }
    done()
  })

  afterAll(done => {
    xvfbProc.kill()
    done()
  })

  it('performs a setup handshake with the X server.', async done => {
    const connection = await connect(testOptions)

    expect.any(connection.setup.roots[0])
    expect.any(connection.setup.roots[0].root)
    expect.any(connection.setup.protocolMajorVersion)
    connection.close()
    done()
  })
})
