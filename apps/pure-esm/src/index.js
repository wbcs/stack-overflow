// @ts-check
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import EsbuildAntd from 'shared/esbuild/AntdButton'
import EsbuildArco from 'shared/esbuild/ArcoButton'
import RollupAntd from 'shared/rollup/AntdButton'
import RollupArco from 'shared/rollup/ArcoButton'

console.log([
  renderToString(createElement(EsbuildAntd)),
  renderToString(createElement(EsbuildArco)),
  renderToString(createElement(RollupAntd)),
  renderToString(createElement(RollupArco)),
])
