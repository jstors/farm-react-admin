import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router/routers';
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
