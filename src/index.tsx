import Layout from '@/layout';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '~react-pages';
import './style/rest.less';
import './style/tailwind.css';

const container = document.querySelector('#root');
const root = createRoot(container);

function App() {
  return <Layout routers={routes} />;
}

root.render(
  <Router>
    <App />
  </Router>,
);
