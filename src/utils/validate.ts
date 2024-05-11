/**
 * 
 * @param email 邮箱
 */
export const validateEmail = (email) => {
  if(!email) return false
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * 
 * @param phone 手机号
 */
export const validatePhone = (phone) => {
  if(!phone) return false
  const regex = /^1[3456789]\d{9}$/;
  return regex.test(phone);
}