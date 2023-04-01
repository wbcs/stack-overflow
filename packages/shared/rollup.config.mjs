// @ts-check
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import packageJson from './package.json' assert { type: 'json' }

function relative(...paths) {
  const __dirname = fileURLToPath(new URL('.', import.meta.url))
  return path.resolve(__dirname, ...paths)
}
const external = [
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
  'react/jsx-runtime',
]

export default defineConfig([
  {
    input: relative('./src/index.ts'),
    external,
    output: [
      {
        file: 'dist/rollup/index.js',
        format: 'esm',
      },
    ],
    plugins: [
      getBabelOutputPlugin({
        plugins: [
          [
            'babel-plugin-import',
            {
              libraryName: '@arco-design/web-react',
              libraryDirectory: 'es',
              camel2DashComponentName: false,
              style: 'css',
            },
          ],
        ],
      }),
      typescript({ check: false }),
    ],
  },
])
