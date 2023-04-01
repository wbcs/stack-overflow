// @ts-check
import glob from 'glob'
import { build } from 'esbuild'

/** @type {import('esbuild').BuildOptions[]} */
const esbuildConfigs = [
  {
    entryPoints: await glob('./src/**/*.{ts,tsx}'),
    bundle: false,
    format: 'esm',
    outdir: 'dist/esbuild/',
  },
]

await Promise.all(esbuildConfigs.map((item) => build(item)))
