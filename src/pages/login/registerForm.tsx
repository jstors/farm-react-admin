import { TOKEN_KEY } from '@/config/const';
import { setCookie } from '@/utils/cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Form, Input, Message } from '@arco-design/web-react';
import RegisterTabs from './RegisterTabs';
import { PLACEHOLDER, REGISTER_TYPE } from './config';
import { validateEmail, validatePhone } from '@/utils/validate';

const FormItem = Form.Item;

const RegisterForm = () => {
  const [form] = Form.useForm()
  const go = useNavigate();
  // 默认请输入邮箱
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER[REGISTER_TYPE.EMAIL])
  // 默认邮箱注册
  const [tabVal, setTabVal] = useState(REGISTER_TYPE.EMAIL)
  /**
   *
   * @param value
   */
  const handleRegister = async (value) => {
    // TODO complete register logic
    setCookie(TOKEN_KEY, new Date().getTime(), 1);
    Message.success('注册成功');
    go('/');
  };

  // 账号校验
  const accountValidator = (value, callback) => {
    if(REGISTER_TYPE.EMAIL === tabVal) {
      if (!validateEmail(value)) return callback('邮箱格式有误')
      return callback()
    }
    if(REGISTER_TYPE.PHONE === tabVal) {
      if (!validatePhone(value)) return callback('手机号格式有误')
      return callback()
    }
    if(REGISTER_TYPE.USER_NAME === tabVal) {
      if (value.length < 3) return callback('用户名最少三位字符')
      return callback()
    }
  }

  // 确认密码校验
  const confirmPasswordValidator = (value, callback) => {
    if (!value || form.getFieldValue('password') !== value) {
      return callback('两次输入的密码不一致')
    }
    return callback()
  }

  // 切换tab选择注册方式
  const handleTabChange = (val) => {
    form.resetFields()
    setTabVal(val)
    setPlaceholder(PLACEHOLDER[val])
  }
  return (
    <div className="form register-form">
      <RegisterTabs onTabChange={handleTabChange}></RegisterTabs>
      <Form form={form} onSubmit={handleRegister} className="w-1/2">
        <FormItem field="username"
          rules={[
            { required: true, message: placeholder },
            { validator:  accountValidator },
          ]}>
          <Input placeholder={placeholder} />
        </FormItem>
        <FormItem field="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder="请输入密码" />
        </FormItem>
        <FormItem
          field="confirmPassword"
          rules={[
            { required: true, message: '请确认密码' },
            { validator: confirmPasswordValidator }
          ]}>
          <Input placeholder="请确认密码" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="register-btn">
            注册
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default RegisterForm;
