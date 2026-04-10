import {
  HomeOutlined,
  ProjectOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type React from 'react';

export interface AppMenuItem {
  title: string;
  icon?: React.ReactNode;
  path?: string;
  permission?: string;
  subMenu?: AppMenuItem[];
}

const menuConfig: AppMenuItem[] = [
  {
    title: '工作台',
    icon: <HomeOutlined />,
    path: '/',
    permission: 'dashboard:view',
  },
  {
    title: '个人中心',
    icon: <UserOutlined />,
    path: '/profile',
    permission: 'profile:view',
  },
  {
    title: '系统管理',
    icon: <SettingOutlined />,
    subMenu: [
      {
        title: '角色权限',
        path: '/admin/roles',
        icon: <SafetyCertificateOutlined />,
        permission: 'role:view',
      },
      {
        title: '菜单权限',
        path: '/admin/menu-permissions',
        icon: <SolutionOutlined />,
        permission: 'menu:view',
      },
      {
        title: '审计日志',
        path: '/admin/audit',
        icon: <ProjectOutlined />,
        permission: 'audit:view',
      },
    ],
  },
  {
    title: '演示页面',
    icon: <ProjectOutlined />,
    subMenu: [
      {
        title: '菜单1-1',
        path: '/about',
      },
      {
        title: '菜单1-2',
        path: '/index',
      },
    ],
  },
];

export default menuConfig;
