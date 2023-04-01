import EsbuildAntd from 'shared/esbuild/AntdButton'
import EsbuildArco from 'shared/esbuild/ArcoButton'
import RollupAntd from 'shared/rollup/AntdButton'
import RollupArco from 'shared/rollup/ArcoButton'

export default function Index() {
  return (
    <div>
      <EsbuildAntd />
      <EsbuildArco />
      <RollupAntd />
      <RollupArco />
    </div>
  )
}
