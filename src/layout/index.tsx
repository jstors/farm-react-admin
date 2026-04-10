import useRouterGuard from '@/hooks/useRouterGuard';
import { INDEPENDENT_ROUTES } from '@/router/const';
import { useUiStore } from '@/store/ui';
import { Layout, Spin, message } from 'antd';
import React, { Suspense } from 'react';
import { useLocation, useRoutes } from 'react-router';
import Animate from './animate';
import CustomHeader from './header';
import Menu from './menu';
import './style.less';
import CustomTheme from './theme';

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

const CustomLayout = ({ routers = [] }) => {
  const collapsed = useUiStore((state) => state.collapsed);
  const setCollapsed = useUiStore((state) => state.setCollapsed);
  const location = useLocation();

  useRouterGuard(() => {
    message.error('用户未登录或会话已过期,请重新登录');
  });

  const onCollapse = (nextCollapsed) => {
    setCollapsed(nextCollapsed);
  };

  const isIndependent = INDEPENDENT_ROUTES.includes(location.pathname);

  return (
    <CustomTheme>
      {isIndependent ? (
        <Animate>
          <Suspense fallback={<Spin />}>{useRoutes(routers)}</Suspense>
        </Animate>
      ) : (
        <Layout className="h-[100vh]">
          <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} trigger={null}>
              <Menu collapsed={collapsed} />
            </Sider>
            <div className="w-full box-border bg-[#f0f2f5]">
              <Header style={{ background: '#fff' }}>
                <CustomHeader />
              </Header>

              <Content className="content-wrap relative m-1 p-2 rounded bg-white">
                <Suspense fallback={<Spin className="absolute inset-0 flex justify-center items-center h-[80vh]" />}>
                  <Animate>{useRoutes(routers)}</Animate>
                </Suspense>
              </Content>
            </div>
          </Layout>
        </Layout>
      )}
    </CustomTheme>
  );
};

export default CustomLayout;
