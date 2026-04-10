import { adminApi } from '@/api/admin';
import { useQuery } from '@tanstack/react-query';
import { Card, Table } from 'antd';
import React from 'react';

const RolesPage = () => {
  const { data = [], isLoading } = useQuery({ queryKey: ['admin-roles'], queryFn: adminApi.getRoles });

  return (
    <Card title="角色权限">
      <Table
        rowKey="role"
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={[
          { title: '角色', dataIndex: 'role' },
          { title: '描述', dataIndex: 'description' },
        ]}
      />
    </Card>
  );
};

export default RolesPage;
