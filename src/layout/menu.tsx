import menuConfig from '@/router/menu';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const CustomMenu = ({ collapsed }) => {
  const [menuKey, setMenuKey] = useState('/');
  const go = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenuKey(location.pathname);
  }, [location]);

  /**
   * 切换路由
   * @param key
   */
  const handleMenuItemClick = (menu) => {
    setMenuKey(menu?.key);
    go(menu?.key);
  };

  /**
   * 渲染菜单
   * @param config
   **/
  const renderMenu = (config) => {
    return config.map((item) => {
      if (item?.subMenu) {
        return (
          <SubMenu
            key={item.path}
            title={
              <>
                <span className="mr-2">{item?.icon}</span>
                {item.title}
              </>
            }
          >
            {renderMenu(item?.subMenu)}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={item.path}>
          <span className="mr-2">{item?.icon}</span>
          {item.title}
        </MenuItem>
      );
    });
  };

  return (
    <Menu
      mode="inline"
      inlineCollapsed={collapsed}
      style={{ minHeight: '100vh' }}
      selectedKeys={[menuKey]}
      onClick={handleMenuItemClick}
    >
      {renderMenu(menuConfig ?? [])}
    </Menu>
  );
};

export default CustomMenu;
