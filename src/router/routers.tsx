import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../about';
import { Main } from '../main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
