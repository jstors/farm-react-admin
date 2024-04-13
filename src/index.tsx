import { Spin } from '@arco-design/web-react';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import './style/tailwind.css';

const container = document.querySelector('#root');
const root = createRoot(container);

function App() {
  return <Suspense fallback={<Spin dot />}>{useRoutes(routes)}</Suspense>;
}

root.render(
  <Router>
    <App />
  </Router>,
);
