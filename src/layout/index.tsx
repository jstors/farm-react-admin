import { INDEPENDENT_ROUTES } from '@/config/const';
import { Layout, Spin } from '@arco-design/web-react';
import React, { Suspense, useState } from 'react';
import { useLocation, useRoutes } from 'react-router';
import Menu from './menu';

const Header = Layout.Header;
const Content = Layout.Content;
const Sider = Layout.Sider;

const CustomLayout = ({ routers = [] }) => {
  console.log('🤖 == CustomLayout == routers:', routers);
  const collapsedWidth = 60;
  const normalWidth = 220;
  const [siderWidth, setSiderWidth] = useState(normalWidth);
  const location = useLocation();

  /**
   * 是否折叠侧边栏
   * @param collapsed boolean
   */
  const onCollapse = (collapsed) => {
    setSiderWidth(collapsed ? collapsedWidth : normalWidth);
  };

  /**
   * 拖动调整侧边栏宽度
   * @param width number
   */
  const handleResizeSider = (width) => {
    setSiderWidth(width);
  };

  // 是否为独立页面(不需要Layout布局的页面)
  // 例如: login页面
  const isIndependent = INDEPENDENT_ROUTES.includes(location.pathname);

  return (
    <>
      {isIndependent ? (
        <Suspense fallback={<Spin dot />}>{useRoutes(routers)}</Suspense>
      ) : (
        <Layout className="h-[100vh]">
          <Layout>
            <Sider
              collapsible
              collapsed={siderWidth === collapsedWidth}
              trigger={null}
              width={siderWidth}
              resizeBoxProps={{
                directions: ['right'],
                onMoving: handleResizeSider,
              }}
            >
              <Menu onCollapse={onCollapse} />
            </Sider>
            <div>
              <Header>Header</Header>
              <Content>
                <Suspense fallback={<Spin dot />}>{useRoutes(routers)}</Suspense>
              </Content>
            </div>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default CustomLayout;
