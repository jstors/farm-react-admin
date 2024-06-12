import path from 'node:path';
import { defineConfig } from '@farmfe/core';
import less from '@farmfe/js-plugin-less';
import postcss from '@farmfe/js-plugin-postcss';
import { theme } from 'antd';
import { viteMockServe } from 'vite-plugin-mock';
import Pages from 'vite-plugin-pages';
import { adminInfo, theme as themeConfig } from './global.config';

const { getDesignToken } = theme;
const globalToken = getDesignToken(themeConfig);

export default defineConfig({
  compilation: {
    minify: false,
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src'),
      },
    },
    persistentCache: false,
    runtime: {
      isolate: true,
    },
  },
  plugins: [
    [
      '@farmfe/plugin-react',
      {
        runtime: 'automatic',
      },
    ],
    less({
      lessOptions: {
        modifyVars: globalToken,
      },
    }),
    postcss(),
    'farm-plugin-remove-console',
    [
      '@jstors/farm-plugin-html-template',
      {
        template: path.resolve(__dirname, 'index.html'),
        data: adminInfo,
      },
    ],
  ],
  vitePlugins: [
    Pages({
      resolver: 'react',
      moduleId: '~react-pages',
      importMode: 'async',
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
});
