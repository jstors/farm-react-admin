import menuConfig from '@/router/menu';
import { Menu, Slider } from '@arco-design/web-react';
import { IconApps, IconBug, IconBulb } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const CustomMenu = ({ onCollapse }) => {
  const [menuKey, setMenuKey] = useState('/');
  const go = useNavigate();

  /**
   * 切换路由
   * @param key
   */
  const handleMenuItemClick = (key) => {
    setMenuKey(key);
    go(key);
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
                {item?.icon}
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
          {item?.icon}
          {item.title}
        </MenuItem>
      );
    });
  };

  return (
    <Menu
      autoOpen
      style={{ height: 'calc(100% - 28px)' }}
      selectedKeys={[menuKey]}
      hasCollapseButton
      onClickMenuItem={handleMenuItemClick}
      onCollapseChange={onCollapse}
    >
      {renderMenu(menuConfig ?? [])}
    </Menu>
  );
};

export default CustomMenu;
