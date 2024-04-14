import useRouterGuard from '@/hooks/useRouterGuard';
import { Message } from '@arco-design/web-react';
import React from 'react';

function Main() {
  // 路由守卫
  useRouterGuard(() => {
    Message.error('用户未登录,请登录后重试');
  });

  return <>这是首页</>;
}
export default Main;
