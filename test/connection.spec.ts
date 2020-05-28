import { ChildProcessWithoutNullStreams } from 'child_process'
import { connect } from '../src/connection'
import { setupXvfb } from './setupXvfb'

// Make sure to give each test file it's own unique display num to ensure they connect to to their own X server.
const displayNum = '99'
const display = `:${displayNum}`
const xAuthority = `/tmp/.Xauthority-test-Xvfb-${displayNum}`
const testOptions = { display, xAuthority }

describe('Connection', () => {
  let xvfbProc: ChildProcessWithoutNullStreams

  beforeAll(async (done) => {
    xvfbProc = await setupXvfb(display, xAuthority)
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
    done()
  })
})
