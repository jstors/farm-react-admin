import DefaultAvatar from '@/assets/logo.png';
import { LOGIN_PATH, TOKEN_KEY } from '@/router/const';
import { setCookie } from '@/utils/cookie';
import { Avatar, Button, Dropdown, Menu, Space } from '@arco-design/web-react';
import React from 'react';
import { useNavigate } from 'react-router';

const CustomHeader = () => {
  const go = useNavigate();

  const dropList = (
    <Menu>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">管理后台</Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => {
          setCookie(TOKEN_KEY, undefined, 0);
          go(LOGIN_PATH);
        }}
      >
        注销登录
      </Menu.Item>
    </Menu>
  );
  return (
    <Space
      align="center"
      direction="horizontal"
      size="large"
      className="w-full h-12 p-2 justify-end box-border bg-[var(--color-bg-1)] pr-5"
    >
      <Dropdown droplist={dropList} position="br">
        <Avatar className="border-[1px] border-[rgb(var(--primary-3))] border-solid">
          <img alt="avatar" className=" bg-[var(--color-bg-1)] pr-5" src={DefaultAvatar} />
        </Avatar>
      </Dropdown>
    </Space>
  );
};

export default CustomHeader;
