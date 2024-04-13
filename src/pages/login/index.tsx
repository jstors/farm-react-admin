import { Button, Checkbox, Form, Input } from '@arco-design/web-react';
import React from 'react';

const FormItem = Form.Item;

const Login = () => {
  /**
   *
   * @param value
   */
  const handleLogin = async (value) => {
    console.log('🤖 == Login == handleLogin', value);
  };

  return (
    <div className="w-32 ml-10">
      <Form onSubmit={handleLogin}>
        <FormItem field="username" rules={[{ required: true, message: '用户名不能为空' }]}>
          <Input placeholder="请输入用户邮箱或者手机号" />
        </FormItem>
        <FormItem field="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder="请输入密码" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Login;
