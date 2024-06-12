import { HomeOutlined, ProjectOutlined } from '@ant-design/icons';
import React from 'react';

export default [
  {
    title: '工作台',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    title: '数据看板',
    icon: <ProjectOutlined />,
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
