import Layout from '@/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '~react-pages';
import './style/rest.less';
import './style/tailwind.css';

const container = document.querySelector('#root');
const root = createRoot(container);

// setup react-query
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Router>
      <Layout routers={routes} />
    </Router>
  </QueryClientProvider>,
);
