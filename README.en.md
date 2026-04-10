<div align="center">

<!--   <h3>Farm-react Starter Template</h3> -->
  <p>
    <img src="./src/assets/logo.png" width="30" align="center" />
    An out-of-the-box Farm-react development template
  </p>
  <p align="center">
    <a href="https://discord.gg/mDErq9aFnF">
      <img src="https://img.shields.io/badge/chat-discord-blueviolet?style=flat&logo=discord&colorA=ffe3f5&colorB=711a5f" alt="discord chat" />
    </a>
    <a href="https://npmjs.com/package/@farmfe/core">
      <img src="https://img.shields.io/npm/v/@farmfe/core.svg?style=flat-square&colorA=ffe3f5&colorB=711a5f" alt="npm package">
    </a>
    <a href="https://nodejs.org/en/about/releases/">
      <img src="https://img.shields.io/node/v/@farmfe/core.svg?style=flat-square&colorA=ffe3f5&colorB=711a5f" alt="node compatibility">
    </a>
    <a href="https://github.com/farm-fe/farm/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/@farmfe/core?style=flat-square&colorA=ffe3f5&colorB=711a5f" alt="license" />
    </a>
  </p>
  <br/>
</div>

  <p>
    <img src="https://github.com/jstors/assets/blob/main/home.jpeg" align="center" />
  </p>

> For a better development experience, please install the [**Biome plugin**](https://biomejs.dev/en/reference/vscode/) on your local development tool.


## RoadMap

[RoadMap](https://github.com/jstors/farm-react-template/issues/21)

## Usage

### User Configuration

All configuration files are located in the `config` directory and can be modified according to your needs.
- `config/const.ts`: Contains constants used in the project.
- `config/menu.ts`: Menu configuration

## Integrated Features
- [Farm](https://farm-fe.github.io/en/docs/quick-start): A Rust-based foundation framework that provides a complete development experience.
- [Biome](https://biomejs.dev/en/reference/configuration/#javascriptformatterjsxquotestyle): A Rust-based linting and formatting tool that enhances the development experience.
- [Ant Design](https://ant.design/components/overview-cn/): An out-of-the-box React component library, use version 5.x.
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#react-1): Provides a routing system based on conventions.

## Added Capabilities (MVP)
- Complete auth flow: login/register/refresh/logout (mock API, backend-replaceable)
- State stack upgraded to `zustand + @tanstack/react-query`
- Admin foundations: profile, role permissions, menu permissions, audit entry
- Plugin architecture: manifest, runtime registry, plugin route/menu mounting
- Third-party extension APIs: event bus, lifecycle hooks, capability registry

## Docs
- UI/UX and animation guidelines: `/home/runner/work/farm-react-admin/farm-react-admin/docs/ui-ux-animation-guidelines.md`
- Third-party integration guide: `/home/runner/work/farm-react-admin/farm-react-admin/docs/third-party-integration.md`
- Plugin scaffold template: `/home/runner/work/farm-react-admin/farm-react-admin/templates/plugin`
