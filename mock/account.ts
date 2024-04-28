import type { MockMethod } from 'vite-plugin-mock';
import { ResultEnum, resultError, resultSuccess } from './utils';

const userInfo = {
  name: 'admin',
  userid: '123456',
  email: '528851597@qq.com',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  title: '交互专家',
  group: '某某某事业群－某某平台部－某某技术部－UED',
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  address: 'Xiamen City 77',
  phone: '0592-268888888',
};

export default [
  {
    url: '/basic-api/account/getAccountInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(userInfo);
    },
  },
  {
    url: '/basic-api/user/sessionTimeout',
    method: 'post',
    statusCode: 401,
    response: () => {
      return resultError();
    },
  },
  {
    url: '/basic-api/user/tokenExpired',
    method: 'post',
    statusCode: 200,
    response: () => {
      return resultError('Token Expired!', { code: ResultEnum.TIMEOUT as number });
    },
  },
] as MockMethod[];
