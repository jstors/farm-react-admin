import useRouterGuard from '@/hooks/useRouterGuard';
import { Message } from '@arco-design/web-react';
import React, { useState } from 'react';

function Main() {
  useRouterGuard(() => {
    Message.error('用户未登录,请登录后重试');
  });

  return <>s</>;
}
export default Main;
