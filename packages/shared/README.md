## intro

> 一般开发携带样式的库，都会基于一个 UI 库进行二次开发

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
- babel 产物：头部被插入了一条 `import '@arco-design/web-react/lib/Button/style/css'`
