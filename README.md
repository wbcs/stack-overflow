## quick start

```sh
nvm use
npm install -g pnpm
pnpm install
pnpm --filter shared compile

# 观察两者有什么差别
# 如果构建环境没有对 css 做处理会怎样
pnpm --filter remix dev
pnpm --filter vite dev
```
