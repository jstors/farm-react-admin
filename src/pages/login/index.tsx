import { Button, Checkbox, Form, Input } from '@arco-design/web-react';
import React from 'react';
import './style.less';
import LogoSvg from '../../assets/login.svg';
import RegisterSvg from '../../assets/register.svg';
import classnames from 'classnames';

const FormItem = Form.Item;

export enum LoginMode {
  LOGIN = 'login',
  REGISTER = 'register',
}

const Login = () => {
  const [mode, setMode] = React.useState<LoginMode>(LoginMode.LOGIN);
  /**
   *
   * @param value
   */
  const handleLogin = async (value) => {
    console.log('🤖 == Login == handleLogin', value);
  };

  const handleToggle = () => {
    setMode(mode === LoginMode.LOGIN ? LoginMode.REGISTER : LoginMode.LOGIN);
  };

  return (
    <div
      className={classnames('login-container', {
        'sign-up-mode': mode === LoginMode.REGISTER,
      })}
    >
      <div className="form-container">
        {/* Login */}
        <div className="sign-signup">
          <div className="form sign-form">
            <Form onSubmit={handleLogin} className="w-1/2">
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
          {/* 注册 */}
          <div className="form signup-form">
            <Form onSubmit={handleLogin} className="w-1/2">
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
        </div>
      </div>

      {/* 容器 */}
      <div className="panel-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>新用户吗？</h3>
            <p>如果是新用户，请前往注册</p>
            <Button onClick={handleToggle}>GO</Button>
          </div>
          <img src={LogoSvg} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>老用户了吗？</h3>
            <p>老用户请直接登录</p>
            <Button onClick={handleToggle}>Go</Button>
          </div>
          <img src={RegisterSvg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
