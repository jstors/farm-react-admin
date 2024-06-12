import DefaultAvatar from '@/assets/logo.png';
import { LOGIN_PATH, TOKEN_KEY } from '@/router/const';
import { setCookie } from '@/utils/cookie';
import { Avatar, Dropdown, Menu, type MenuProps, Space } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const CustomHeader = () => {
  const go = useNavigate();
  const handleLogout = () => {
    setCookie(TOKEN_KEY, undefined, 0);
    go(LOGIN_PATH);
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>个人中心</span>,
    },
    {
      key: '2',
      label: <span>管理后台</span>,
    },
    {
      key: '3',
      label: <span onClick={handleLogout}> 注销登录</span>,
    },
  ];

  return (
    <Space
      align="center"
      direction="horizontal"
      size="large"
      className="w-full h-12 p-2 justify-end box-border bg-[var(--color-bg-1)] pr-5"
    >
      <Dropdown menu={{ items }}>
        <Avatar src={DefaultAvatar} className="border-[1px] border-[rgb(var(--primary-3))] border-solid" />
      </Dropdown>
    </Space>
  );
};

export default CustomHeader;
