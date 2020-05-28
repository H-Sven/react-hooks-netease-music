/*
 * @Author: Siwen
 * @Date: 2020-05-27 11:51:16
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 18:59:55
 * @Description: 
 */ 

import { request, get, post } from '@/services/request'
import * as utils from '@/utils'

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
/* 用户信息 */
export const getUserInfo = (params: Object = {}) => {
  return get('/user/detail', params)
}
/* 热门歌单 */
export const getTopPlaylist = (params: Object = {}) => {
  return get('/top/playlist', params)
}
