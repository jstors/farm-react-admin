import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Main } from '../main';
import About from '../about';

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
