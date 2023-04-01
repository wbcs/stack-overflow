// @ts-check
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'
import packageJson from './package.json' assert { type: 'json' }

// import glob from 'glob'
// const entryPoints = await glob('./src/**/*.{ts,tsx}')
function relative(...paths) {
  const __dirname = fileURLToPath(new URL('.', import.meta.url))
  return path.resolve(__dirname, ...paths)
}

const external = [
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
]

/** @type {import('esbuild').BuildOptions[]} */
const esbuildConfigs = [
  {
    entryPoints: [relative('./src/index.ts')],
    bundle: true,
    external,
    format: 'esm',
    outdir: 'dist/esbuild/',
  },
]

await Promise.all(esbuildConfigs.map((item) => build(item)))
