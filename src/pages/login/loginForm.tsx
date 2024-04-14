import { TOKEN_KEY } from '@/config/const';
import { setCookie } from '@/utils/cookie';
import { Button, Form, Input, Message } from '@arco-design/web-react';
import React from 'react';
import { useNavigate } from 'react-router';
const FormItem = Form.Item;

const initialValues = {
  username: 'farm',
  password: '123456',
};

const LoginForm = () => {
  const go = useNavigate();
  /**
   *
   * @param value
   */
  const handleLogin = async (value) => {
    // TODO complete login logic
    setCookie(TOKEN_KEY, new Date().getTime(), 1);
    Message.success('登录成功');
    go('/');
  };

  return (
    <div className="form sign-form">
      <Form initialValues={initialValues} onSubmit={handleLogin} className="w-1/2">
        <FormItem field="username" rules={[{ required: true, message: '用户名不能为空' }]}>
          <Input placeholder="请输入用户邮箱或者手机号" />
        </FormItem>
        <FormItem field="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" />
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

export default LoginForm;
