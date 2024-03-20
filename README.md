# Farm-react-template

开箱即用的Farm-react开发模版.

> 集成了开发常用的功能,如路由,代码格式化,commit约束等


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

