import { useLoginMutation } from '@/hooks/useAuthMutations';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const FormItem = Form.Item;

const initialValues = {
  username: 'farm',
  password: '123456',
};

const LoginForm = () => {
  const go = useNavigate();
  const loginMutation = useLoginMutation();

  const handleLogin = async (value) => {
    try {
      await loginMutation.mutateAsync(value);
      message.success('登录成功');
      go('/');
    } catch (error) {
      message.error(error instanceof Error ? error.message : '登录失败');
    }
  };

  return (
    <div className="form sign-form">
      <Form initialValues={initialValues} onFinish={handleLogin} className="w-1/2">
        <FormItem name="username" rules={[{ required: true, message: '用户名不能为空' }]}>
          <Input size="large" prefix={<UserOutlined />} placeholder="请输入用户邮箱或者手机号" />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password size="large" prefix={<LockOutlined />} placeholder="请输入密码" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-btn" loading={loginMutation.isPending}>
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default LoginForm;
