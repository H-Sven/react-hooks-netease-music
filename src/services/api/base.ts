/*
 * @Author: Siwen
 * @Date: 2020-05-29 13:37:26
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-29 13:47:07
 * @Description: 
 */
import { get } from '@/services/request'

/* 登录 */
export const login = (params: Object = {}) => {
  return get('/login/cellphone', params)
}
/* 退出登录 */
export const logout = (params: Object = {}) => {
  return get('/logout', params)
}
/* 注册找回 */
export const register = (params: Object = {}) => {
  return get('/register/cellphone', params)
}
/* 发送验证码 */
export const sentCaptcha = (params: Object = {}) => {
  return get('/captcha/sent', params)
}