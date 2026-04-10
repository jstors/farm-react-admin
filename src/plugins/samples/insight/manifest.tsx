import type { AdminPluginManifest } from '@/plugins/types';
import React from 'react';

const InsightPage = () => {
  return <div>这是 Insight 插件页面，用于演示插件式页面挂载能力。</div>;
};

const manifest: AdminPluginManifest = {
  id: 'insight-plugin',
  name: 'Insight Plugin',
  version: '0.1.0',
  routes: [
    {
      path: '/plugins/insight',
      element: <InsightPage />,
      permission: 'plugin:insight:view',
    },
  ],
  menus: [
    {
      title: '插件洞察',
      path: '/plugins/insight',
      permission: 'plugin:insight:view',
    },
  ],
  permissions: ['plugin:insight:view'],
  capabilities: ['insight:read'],
};

export default manifest;
