import { capabilityRegistry } from '@/core/extensions/capabilityRegistry';
import { runLifecycleHook } from '@/core/extensions/lifecycle';
import type { RouteObject } from 'react-router';
import type { AdminPluginManifest } from './types';

export interface RuntimePluginRoute extends RouteObject {
  permission?: string;
}

class PluginRegistry {
  private plugins = new Map<string, AdminPluginManifest>();

  async register(plugin: AdminPluginManifest) {
    this.plugins.set(plugin.id, plugin);
    if (plugin.capabilities) {
      for (const capability of plugin.capabilities) {
        capabilityRegistry.register(capability, { pluginId: plugin.id });
      }
    }
    await runLifecycleHook('plugin:loaded');
  }

  async registerBatch(plugins: AdminPluginManifest[]) {
    for (const plugin of plugins) {
      await this.register(plugin);
    }
  }

  getRoutes(): RuntimePluginRoute[] {
    return this.list().flatMap((plugin) =>
      plugin.routes.map((route) => ({ path: route.path, element: route.element, permission: route.permission })),
    );
  }

  getMenus() {
    return this.list().flatMap((plugin) => plugin.menus);
  }

  list() {
    return Array.from(this.plugins.values());
  }
}

export const pluginRegistry = new PluginRegistry();
