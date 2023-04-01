## intro

一个基于第三方 ui 库进行二次封装的组件库

```jsonc
{
  "scripts": {
    // 用 rollup 构建，使用 babel-plugin-import
    "compile:rollup": "rollup",
    // 用 esbuild 构建，无任何插件
    "compile:esbuild": "node esbuild.config.mjs",
    // 生成 .d.ts
    "compile:types": "tsc"
  }
}
```

### 产物差别

- esbuild 产物

`./dist/esbuild/index.mjs`

```js
// src/components/AntdButton.tsx
import { Button } from 'antd'
import { jsx } from 'react/jsx-runtime'
function AntdButton() {
  return /* @__PURE__ */ jsx(Button, { children: 'antd button' })
}
var AntdButton_default = AntdButton

// src/components/ArcoButton.tsx
import { Button as Button2 } from '@arco-design/web-react'
import { jsx as jsx2 } from 'react/jsx-runtime'
function ArcoButton() {
  return /* @__PURE__ */ jsx2(Button2, { children: 'arco button' })
}
var ArcoButton_default = ArcoButton
export { AntdButton_default as AntdButton, ArcoButton_default as ArcoButton }
```

- babel 产物

头部被插入了一条 `import '@arco-design/web-react/lib/Button/style/css'`, 并非标准 js 文件

```js
import '@arco-design/web-react/es/Button/style/css'
import _Button from '@arco-design/web-react/es/Button'
import { jsx } from 'react/jsx-runtime'
import { Button } from 'antd'
function AntdButton() {
  return jsx(Button, {
    children: 'antd button',
  })
}
function ArcoButton() {
  return jsx(_Button, {
    children: 'arco button',
  })
}
export { AntdButton, ArcoButton }
```
