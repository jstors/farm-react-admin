import { pluginRegistry } from '@/plugins/registry';
import menuConfig, { type AppMenuItem } from '@/router/menu';
import { useSessionStore } from '@/store/session';
import { Menu } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const filterMenuByPermission = (
  menus: AppMenuItem[],
  hasPermission: (permission?: string) => boolean,
): AppMenuItem[] => {
  return menus
    .map((item) => {
      if (item.subMenu?.length) {
        const subMenu = filterMenuByPermission(item.subMenu, hasPermission);
        if (subMenu.length === 0 && item.path === undefined) {
          return null;
        }
        return { ...item, subMenu };
      }
      return hasPermission(item.permission) ? item : null;
    })
    .filter(Boolean) as AppMenuItem[];
};

const CustomMenu = ({ collapsed }) => {
  const [menuKey, setMenuKey] = useState('/');
  const go = useNavigate();
  const location = useLocation();
  const hasPermission = useSessionStore((state) => state.hasPermission);

  const computedMenu = useMemo(() => {
    const pluginMenus = pluginRegistry.getMenus().map((item) => ({ ...item, icon: undefined }));
    const merged = [
      ...menuConfig,
      ...(pluginMenus.length
        ? [
            {
              title: '插件扩展',
              path: undefined,
              subMenu: pluginMenus,
            },
          ]
        : []),
    ];
    return filterMenuByPermission(merged, hasPermission);
  }, [hasPermission]);

  useEffect(() => {
    setMenuKey(location.pathname);
  }, [location.pathname]);

  const handleMenuItemClick = (menu) => {
    setMenuKey(menu?.key);
    go(menu?.key);
  };

  const buildNodeKey = (item: AppMenuItem, parentKey: string, index: number) => {
    if (item.path) return item.path;
    return `${parentKey}-${index}`;
  };

  const renderMenu = (config: AppMenuItem[], parentKey = 'root') => {
    return config.map((item, index) => {
      const nodeKey = buildNodeKey(item, parentKey, index);
      if (item?.subMenu) {
        return (
          <SubMenu
            key={nodeKey}
            title={
              <>
                <span className="mr-2">{item?.icon}</span>
                {item.title}
              </>
            }
          >
            {renderMenu(item?.subMenu, nodeKey)}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={nodeKey}>
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
      {renderMenu(computedMenu)}
    </Menu>
  );
};

export default CustomMenu;
