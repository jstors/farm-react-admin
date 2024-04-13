import { defineConfig } from '@farmfe/core';
import Pages from 'vite-plugin-pages';
import less from '@farmfe/js-plugin-less';
import { vitePluginForArco } from '@arco-plugins/vite-react'
import postcss from '@farmfe/js-plugin-postcss';

export default defineConfig({
  plugins: [
    '@farmfe/plugin-react',
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
      theme:"@arco-themes/react-juzi001"
    }),
  ],
  compilation: {
    persistentCache: false,
  },
});
