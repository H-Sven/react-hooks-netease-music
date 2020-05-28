/*
 * @Author: Siwen
 * @Date: 2020-05-28 10:22:11
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 10:25:47
 * @Description: 
 */ 
export const isPhone = (phone: string) => {
  const reg = /^1[123456789]\d{9}$/
  return reg.test(phone)
}
export const isEmail = (email: string) => {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(email)
}