import { useSessionStore } from '@/store/session';
import { Card, Descriptions, Tag } from 'antd';
import React from 'react';

const ProfilePage = () => {
  const user = useSessionStore((state) => state.user);

  if (!user) {
    return <div>暂无用户信息</div>;
  }

  return (
    <Card title="个人中心">
      <Descriptions column={1} bordered>
        <Descriptions.Item label="用户名">{user.username}</Descriptions.Item>
        <Descriptions.Item label="显示名">{user.displayName}</Descriptions.Item>
        <Descriptions.Item label="角色">
          <Tag color="purple">{user.role}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="权限">
          {user.permissions.map((permission) => (
            <Tag key={permission}>{permission}</Tag>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ProfilePage;
