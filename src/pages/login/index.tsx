import LogoSvg from '@/assets/login.svg';
import RegisterSvg from '@/assets/register.svg';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classnames from 'classnames';
import React, { useState } from 'react';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import './style.less';

export enum LoginMode {
  LOGIN = 'login',
  REGISTER = 'register',
}

const TIPS_MAP = {
  [LoginMode.LOGIN]: {
    tip: '欢迎使用该系统',
    content: '如果是新用户，请前往注册',
  },
  [LoginMode.REGISTER]: {
    tip: '欢迎来到账号注册',
    content: '如果已有账号,请前往登录',
  },
};

const Login = () => {
  const [mode, setMode] = useState<LoginMode>(LoginMode.LOGIN);

  /**
   * 切换登录/注册
   */
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
        <div className="sign-register">
          {/* 登录 */}
          <LoginForm />
          {/* 注册 */}
          <RegisterForm />
        </div>
      </div>
      <div className="panel-container">
        <div className="panel left-panel">
          <div className="content ">
            <div className="mr-6">
              <h3>{TIPS_MAP[mode].tip}</h3>
              <p>{TIPS_MAP[mode].content}</p>
            </div>
            <Button type="link" icon={<ArrowRightOutlined />} onClick={handleToggle} />
          </div>

          <img src={LogoSvg} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <Button type="link" icon={<ArrowLeftOutlined />} onClick={handleToggle} />
            <div className="ml-6">
              <h3>{TIPS_MAP[mode].tip}</h3>
              <p>{TIPS_MAP[mode].content}</p>
            </div>
          </div>
          <img src={RegisterSvg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
