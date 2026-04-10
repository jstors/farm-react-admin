import type { ReactNode } from 'react';

export interface PluginRoute {
  path: string;
  element: ReactNode;
  permission?: string;
}

export interface PluginMenuItem {
  title: string;
  path: string;
  permission?: string;
}

export interface AdminPluginManifest {
  id: string;
  name: string;
  version: string;
  routes: PluginRoute[];
  menus: PluginMenuItem[];
  permissions?: string[];
  capabilities?: string[];
}
