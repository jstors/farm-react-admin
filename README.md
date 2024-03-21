<div align="center">
  <a href="https://github.com/farm-fe/farm">
  <img src="./src/assets/logo.png" width="300" />
  </a>
  <h3>开箱即用的Farm-react开发模版</h3>
  <p>
   集成了开发常用的功能,如路由,代码格式化,commit约束等
  </p>
  <p align="center">
    <a href="https://discord.gg/mDErq9aFnF">
      <img src="https://img.shields.io/badge/chat-discord-blueviolet?style=flat&logo=discord&colorA=ffe3f5&colorB=711a5f" alt="discord chat" />
    </a>
    <a href="https://npmjs.com/package/@farmfe/core"><img src="https://img.shields.io/npm/v/@farmfe/core.svg?style=flat-square&colorA=ffe3f5&colorB=711a5f" alt="npm package"></a>
    <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/@farmfe/core.svg?style=flat-square&colorA=ffe3f5&colorB=711a5f" alt="node compatibility"></a>
  <a href="https://github.com/farm-fe/farm/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@farmfe/core?style=flat-square&colorA=ffe3f5&colorB=711a5f" alt="license" />
  </a>
  </p>
  <br/>
</div>

---

## 使用
1. 将改仓库`Fork`到你的仓库中
2. `npx degit <Git用户名/farm-react-template> <你的项目名>`: 例如:`pnpx degit jstors/farm-react-template my-project`

> 如果`npx degit`下载的过慢,可以考虑全局安装`degit`工具,然后直接使用`degit`命令进行下载

## 注意
- 请确保你的node版本在**18**以上
- 为了更好的开发体验,请在本地开发工具上[**安装Biome插件**](https://biomejs.dev/zh-cn/reference/vscode/)


## 集成内容
- [Farm](https://farm-fe.github.io/zh/docs/quick-start): Rust开发的基础框架,提供了一套完整的开发体验
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#react-1): 提供约定式路由功能
- [Biome](https://biomejs.dev/zh-cn/reference/configuration/#javascriptformatterjsxquotestyle): Rust开发的lint和format工具,提升极致的开发体验
- `husky`&`commitlint`: 提供了`commit`规范和代码提交的检查

