// import { IconApps, IconCommon, IconDashboard, IconHome } from '@ant-design/icons';
import React from 'react';

export default [
  {
    title: '工作台',
    // icon: <IconHome />,
    path: '/',
  },
  {
    title: '数据看板',
    // icon: <IconDashboard />,
    subMenu: [
      {
        title: '菜单1-1',
        path: '/about',
        // icon: <IconApps />,
      },
      {
        title: '菜单1-2',
        path: '/index',
        // icon: <IconCommon />,
      },
    ],
  },
];
