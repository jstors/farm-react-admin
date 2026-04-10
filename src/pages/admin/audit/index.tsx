import { adminApi } from '@/api/admin';
import { useQuery } from '@tanstack/react-query';
import { Card, Table } from 'antd';
import React from 'react';

const AuditPage = () => {
  const { data = [], isLoading } = useQuery({ queryKey: ['admin-audit'], queryFn: adminApi.getAuditLogs });

  return (
    <Card title="审计日志入口">
      <Table
        rowKey="id"
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={[
          { title: '动作', dataIndex: 'action' },
          { title: '操作人', dataIndex: 'operator' },
          { title: '时间', dataIndex: 'createdAt' },
        ]}
      />
    </Card>
  );
};

export default AuditPage;
