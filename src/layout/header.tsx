import DefaultAvatar from '@/assets/logo.png';
import { LOGIN_PATH } from '@/router/const';
import { useSessionStore } from '@/store/session';
import { Avatar, Dropdown, type MenuProps, Space, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const CustomHeader = () => {
  const go = useNavigate();
  const logout = useSessionStore((state) => state.logout);
  const user = useSessionStore((state) => state.user);

  const handleLogout = async () => {
    try {
      await logout();
      go(LOGIN_PATH);
    } catch (error) {
      message.error(error instanceof Error ? error.message : '退出失败，请稍后重试');
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span onClick={() => go('/profile')}>个人中心</span>,
    },
    {
      key: '2',
      label: <span onClick={() => go('/admin/roles')}>管理后台</span>,
    },
    {
      key: '3',
      label: <span onClick={() => void handleLogout()}>注销登录</span>,
    },
  ];

  return (
    <Space
      align="center"
      direction="horizontal"
      size="large"
      className="w-full h-12 p-2 justify-end box-border bg-[var(--color-bg-1)] pr-5"
    >
      <span>{user?.displayName || '未登录用户'}</span>
      <Dropdown menu={{ items }}>
        <Avatar src={DefaultAvatar} className="border-[1px] border-[rgb(var(--primary-3))] border-solid" />
      </Dropdown>
    </Space>
  );
};

export default CustomHeader;
