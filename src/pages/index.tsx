import useRouterGuard from '@/hooks/useRouterGuard';
import { message } from 'antd';
import React from 'react';
import Home from './home';

function Main() {
  // 路由守卫
  useRouterGuard(() => {
    message.error('用户未登录,请登录后重试');
  });

  return <Home />;
}
export default Main;
