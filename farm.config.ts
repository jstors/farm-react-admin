import path from 'node:path';
import { vitePluginForArco } from '@arco-plugins/vite-react';
import { defineConfig } from '@farmfe/core';
import less from '@farmfe/js-plugin-less';
import postcss from '@farmfe/js-plugin-postcss';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@/': path.join(process.cwd(), 'src'),
      },
    },
    persistentCache: {
      buildDependencies: ['tailwind.config.js'],
    },
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
    'farm-plugin-remove-console',
    less(),
    postcss(),
  ],
  vitePlugins: [
    Pages({
      resolver: 'react',
      moduleId: '~react-pages',
    }),
    vitePluginForArco({
      theme: '@arco-themes/react-juzi001',
    }),
  ],
});
