import type { AdminPluginManifest } from '@/plugins/types';
import React from 'react';

const ExamplePage = () => <div>Example Plugin Page</div>;

const manifest: AdminPluginManifest = {
  id: 'example-plugin',
  name: 'Example Plugin',
  version: '0.1.0',
  routes: [
    {
      path: '/plugins/example',
      element: <ExamplePage />,
      permission: 'plugin:example:view',
    },
  ],
  menus: [
    {
      title: '示例插件',
      path: '/plugins/example',
      permission: 'plugin:example:view',
    },
  ],
  permissions: ['plugin:example:view'],
  capabilities: ['example:read'],
};

export default manifest;
