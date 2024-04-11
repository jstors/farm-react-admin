import { defineConfig } from '@farmfe/core';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    '@farmfe/plugin-react',
    [
      'farm-plugin-remove-console',
      {
        // plugin options
        // include: ["./src/**/*"],
      },
    ],
  ],
  vitePlugins: [
    Pages({
      resolver: 'react',
      moduleId: '~react-pages',
    }),
  ],
  compilation: {
    persistentCache: false,
  },
});
