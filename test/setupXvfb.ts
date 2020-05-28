import { ChildProcessWithoutNullStreams, execSync, spawn } from 'child_process'

const cleanExit = function() {
  process.exit()
}
process.on('SIGINT', cleanExit) // catch ctrl-c
process.on('SIGTERM', cleanExit) // catch kill

export async function setupXvfb(display: string, xAuthority: string): Promise<ChildProcessWithoutNullStreams> {
  execSync(`xauth add ${display} . $(mcookie)`)
  const xProc = spawn('Xvfb', ['-auth', xAuthority, display])
  // make sure we kill xvfb if node is killed
  process.on('exit', () => {
    xProc.kill('SIGINT')
  })
  return new Promise(resolve => setTimeout(() => resolve(xProc), 50))
}
