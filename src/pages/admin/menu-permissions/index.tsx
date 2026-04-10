import { adminApi } from '@/api/admin';
import { useQuery } from '@tanstack/react-query';
import { Card, Table } from 'antd';
import React from 'react';

const MenuPermissionsPage = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ['admin-menu-permissions'],
    queryFn: adminApi.getMenuPermissions,
  });

  return (
    <Card title="菜单权限">
      <Table
        rowKey="path"
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={[
          { title: '菜单路由', dataIndex: 'path' },
          { title: '权限点', dataIndex: 'permission' },
        ]}
      />
    </Card>
  );
};

export default MenuPermissionsPage;
