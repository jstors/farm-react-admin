import { Menu, Slider } from '@arco-design/web-react';
import { IconApps, IconBug, IconBulb } from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const CustomMenu = ({ onCollapse }) => {
  const [menuKey, setMenuKey] = useState('/about');
  const go = useNavigate();

  /**
   * 切换路由
   * @param key
   */
  const handleMenuItemClick = (key) => {
    setMenuKey(key);
    go(key);
  };

  return (
    <Menu
      style={{ height: 'calc(100% - 28px)' }}
      selectedKeys={[menuKey]}
      defaultOpenKeys={['0']}
      hasCollapseButton
      onCollapseChange={onCollapse}
      onClickMenuItem={handleMenuItemClick}
    >
      <SubMenu
        key="0"
        title={
          <>
            <IconApps /> Navigation 1
          </>
        }
      >
        <MenuItem key="/about">Menu 1</MenuItem>
        <MenuItem key="0_1">Menu 2</MenuItem>
        <MenuItem key="0_2" disabled>
          Menu 3
        </MenuItem>
      </SubMenu>
      <SubMenu
        key="1"
        title={
          <>
            <IconBug /> Navigation 2
          </>
        }
      >
        <MenuItem key="1_0">Menu 1</MenuItem>
        <MenuItem key="1_1">Menu 2</MenuItem>
        <MenuItem key="1_2">Menu 3</MenuItem>
      </SubMenu>
      <SubMenu
        key="2"
        title={
          <>
            <IconBulb /> Navigation 3
          </>
        }
      >
        <MenuItem key="2_0">Menu 1</MenuItem>
        <MenuItem key="2_1">Menu 2</MenuItem>
        <MenuItem key="2_2">Menu 3</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default CustomMenu;
