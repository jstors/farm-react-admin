import { Button } from '@arco-design/web-react';
import classnames from 'classnames';
import React from 'react';
import LogoSvg from '../../assets/login.svg';
import RegisterSvg from '../../assets/register.svg';
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
    tip: '老用户了吗？',
    content: '老用户请直接登录',
  },
};

const Login = () => {
  const [mode, setMode] = React.useState<LoginMode>(LoginMode.LOGIN);

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
          <LoginForm />
          {/* 注册 */}
          <RegisterForm />
        </div>
      </div>

      {/* 容器 */}
      <div className="panel-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>{TIPS_MAP[mode].tip}</h3>
            <p>{TIPS_MAP[mode].content}</p>
            <Button onClick={handleToggle}>GO</Button>
          </div>
          <img src={LogoSvg} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>{TIPS_MAP[mode].tip}</h3>
            <p>{TIPS_MAP[mode].content}</p>
            <Button onClick={handleToggle}>Go</Button>
          </div>
          <img src={RegisterSvg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
