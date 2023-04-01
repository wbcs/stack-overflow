// @ts-check
import glob from 'glob'
import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default defineConfig([
  {
    input: await glob('./src/**/*.{ts,tsx}'),
    output: [
      {
        dir: 'dist/rollup',
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
