import { runLifecycleHook } from '@/core/extensions/lifecycle';
import Layout from '@/layout';
import { builtInPlugins } from '@/plugins';
import { pluginRegistry } from '@/plugins/registry';
import AppProviders from '@/providers/AppProviders';
import ProtectedRoute from '@/router/ProtectedRoute';
import { useSessionStore } from '@/store/session';
import type React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { RouteObject } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '~react-pages';
import './style/rest.less';
import './style/tailwind.css';

const container = document.querySelector('#root');
const root = createRoot(container);

function App() {
  const bootstrap = useSessionStore((state) => state.bootstrap);
  const [pluginRoutes, setPluginRoutes] = useState<RouteObject[]>([]);

  useEffect(() => {
    bootstrap();
    void (async () => {
      await pluginRegistry.registerBatch(builtInPlugins);
      const mounted = pluginRegistry
        .getRoutes()
        .map((route) => ({
          ...route,
          element: <ProtectedRoute permission={route.permission}>{route.element as React.ReactNode}</ProtectedRoute>,
        }))
        .filter((route) => !!route.path);
      setPluginRoutes(mounted);
      await runLifecycleHook('app:ready');
    })();
  }, [bootstrap]);

  const appRoutes = useMemo(() => [...routes, ...pluginRoutes], [pluginRoutes]);

  return <Layout routers={appRoutes} />;
}

root.render(
  <Router>
    <AppProviders>
      <App />
    </AppProviders>
  </Router>,
);
