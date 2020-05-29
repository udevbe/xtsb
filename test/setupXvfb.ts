import { ChildProcessWithoutNullStreams, execSync, spawn } from 'child_process'
import { closeSync, mkdtempSync, openSync, rmdir, rmdirSync } from 'fs'

const cleanExit = function() {
  process.exit()
}
process.on('SIGINT', cleanExit) // catch ctrl-c
process.on('SIGTERM', cleanExit) // catch kill

export async function setupXvfb(display: string): Promise<{ xProc: ChildProcessWithoutNullStreams, xAuthority: string }> {
  const tempDir = mkdtempSync('Xauthority-test-Xvfb')
  const xAuthority = `${tempDir}/XAuthority`
  closeSync(openSync(xAuthority, 'w'))
  execSync(`xauth add ${display} . $(mcookie)`, {
    env: {
      ...process.env,
      'XAUTHORITY': `${xAuthority}`
    }
  })
  const xProc = spawn('Xvfb', ['-auth', xAuthority, display])
  // make sure we kill xvfb if node is killed
  process.on('exit', () => {
    xProc.kill('SIGINT')
    rmdirSync(tempDir)
  })
  await new Promise(resolve => setTimeout(() => {
    resolve(xProc)
  }, 100))

  return { xProc, xAuthority }
}
