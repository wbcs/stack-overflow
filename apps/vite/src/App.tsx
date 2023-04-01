// 不报错。AntdButton 有样式，ArcoButton 没有样式
import * as esbuild from 'shared/esbuild'
import * as rollup from 'shared/rollup'

export default function Index() {
  return (
    <div>
      <esbuild.AntdButton />
      <esbuild.ArcoButton />
      <rollup.AntdButton />
      <rollup.ArcoButton />
    </div>
  )
}
