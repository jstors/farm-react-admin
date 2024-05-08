import { IconApps, IconCommon } from '@arco-design/web-react/icon';
import React from 'react';

export default [
  {
    title: '菜单1',
    icon: <IconApps />,
    subMenu: [
      {
        title: '菜单1-1',
        path: '/about',
      },
      {
        title: '菜单1-2',
        path: '/index',
        icon: <IconCommon />,
      },
    ],
  },
  {
    title: '非嵌套菜单',
    path: '/',
  },
];
