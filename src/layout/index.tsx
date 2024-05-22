import { INDEPENDENT_ROUTES } from '@/router/const';
import { Layout, Spin } from 'antd';
import React, { Suspense, useState } from 'react';
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
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  /**
   * 是否折叠侧边栏
   * @param collapsed boolean
   */
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  // 是否为独立页面(不需要Layout布局的页面)
  // 例如: login页面
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
