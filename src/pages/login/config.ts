// 注册tab类型 邮箱、手机号、用户名
export const REGISTER_TYPE = {
  EMAIL: '1',
  PHONE: '2',
  USER_NAME: '3'
}

// 注册tab显示类型选择, 通过设置true/false控制是否显示
export const REGISTER_TYPE_SHOW = {
  EMAIL: true,
  PHONE: true,
  USER_NAME: true
}

// placeholder
export const PLACEHOLDER = {
  [REGISTER_TYPE.EMAIL]: '请输入邮箱',
  [REGISTER_TYPE.PHONE]: '请输入手机号',
  [REGISTER_TYPE.USER_NAME]: '请输入用户名',
}

// tabList列表
export const TAB_LIST = [
  { key: REGISTER_TYPE.EMAIL, title: '邮箱注册', show: REGISTER_TYPE_SHOW.EMAIL },
  { key: REGISTER_TYPE.PHONE, title: '手机号注册', show: REGISTER_TYPE_SHOW.PHONE },
  { key: REGISTER_TYPE.USER_NAME, title: '用户名注册', show: REGISTER_TYPE_SHOW.USER_NAME }
]