import { formatterArrToObj } from '@/utils/commonFn';

// 注册tab类型 邮箱、手机号、用户名
export const REGISTER_TYPE = {
  EMAIL: '1',
  PHONE: '2',
  USER_NAME: '3'
}
// 注册类型tab配置
const TYPE_LIST = [
  { name: '邮箱', value: REGISTER_TYPE.EMAIL, show: true, tabTitle: '邮箱注册', placeholder: '请输入邮箱' },
  { name: '手机号', value: REGISTER_TYPE.PHONE, show: true, tabTitle: '手机号注册', placeholder: '请输入手机号' },
  { name: '用户名', value: REGISTER_TYPE.USER_NAME, show: true, tabTitle: '用户名注册', placeholder: '请输入用户名' }
]

// 注册选项类型列表
export const TAB_LIST = TYPE_LIST.filter(v => v.show).map(({ value, tabTitle, show }) => {
  return { value, tabTitle, show }
})

// placeholder文本
export const PLACEHOLDER = formatterArrToObj(TYPE_LIST, 'value', 'placeholder')
