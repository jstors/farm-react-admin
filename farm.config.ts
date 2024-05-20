import path from 'node:path';
import { vitePluginForArco } from '@arco-plugins/vite-react';
import { defineConfig } from '@farmfe/core';
import less from '@farmfe/js-plugin-less';
import postcss from '@farmfe/js-plugin-postcss';
import Pages from 'vite-plugin-pages';
import { adminInfo } from './global.config';

export default defineConfig({
  compilation: {
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
    less(),
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
    vitePluginForArco({
      theme: '@arco-themes/react-juzi001',
    }),
  ],
});
