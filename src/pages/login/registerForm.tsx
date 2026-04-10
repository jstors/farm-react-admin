import { useRegisterMutation } from '@/hooks/useAuthMutations';
import { validateEmail, validatePhone } from '@/utils/validate';
import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import RegisterTabs from './RegisterTabs';
import { PLACEHOLDER, REGISTER_TYPE } from './config';
import StrengthCheckInput from './strengthCheck';

const FormItem = Form.Item;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const go = useNavigate();
  const registerMutation = useRegisterMutation();
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER[REGISTER_TYPE.EMAIL]);
  const [tabVal, setTabVal] = useState(REGISTER_TYPE.EMAIL);
  const [password, setPassword] = useState('');

  const handleRegister = async (value) => {
    try {
      await registerMutation.mutateAsync({ username: value.username, password: value.password });
      message.success('注册成功');
      go('/');
    } catch (error) {
      message.error(error instanceof Error ? error.message : '注册失败');
    }
  };

  const accountValidator = (value, callback) => {
    if (REGISTER_TYPE.EMAIL === tabVal) {
      if (!validateEmail(value)) return callback('邮箱格式有误');
      return callback();
    }
    if (REGISTER_TYPE.PHONE === tabVal) {
      if (!validatePhone(value)) return callback('手机号格式有误');
      return callback();
    }
    if (REGISTER_TYPE.USER_NAME === tabVal) {
      if (value.length < 3) return callback('用户名最少三位字符');
      return callback();
    }
  };

  const confirmPasswordValidator = (value, callback) => {
    if (!value || form.getFieldValue('password') !== value) {
      return callback('两次输入的密码不一致');
    }
    return callback();
  };

  const handleTabChange = (val) => {
    setTabVal(val);
    form.resetFields();
    setPlaceholder(PLACEHOLDER[val]);
  };

  return (
    <div className="form register-form">
      <Form form={form} onFinish={handleRegister} className="w-1/2">
        <FormItem>
          <RegisterTabs onTabChange={handleTabChange} />
        </FormItem>
        <FormItem name="username" rules={[{ required: true, message: placeholder }, { validator: accountValidator }]}>
          <Input placeholder={placeholder} style={{ width: '100%' }} />
        </FormItem>
        <FormItem name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password
            normalize={(v) => (v ? v.trim() : v)}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="请输入密码"
          />
        </FormItem>
        <FormItem
          name="confirmPassword"
          rules={[{ required: true, message: '请确认密码' }, { validator: confirmPasswordValidator }]}
        >
          <Input.Password
            normalizeTrigger={['onBlur']}
            normalize={(v) => (v ? v.trim() : v)}
            placeholder="请确认密码"
          />
        </FormItem>
        <FormItem>
          <StrengthCheckInput password={password} />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="register-btn" loading={registerMutation.isPending}>
            注册
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default RegisterForm;
