/*
 * @Author: Siwen
 * @Date: 2020-05-27 11:51:16
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 11:41:58
 * @Description: 
 */ 

import { request, get, post } from '@/services/request'
import * as utils from '@/utils'

/* 登录状态 */
export const getLoginStatus = (params: Object = {}) => {
  return get('/login/status', params)
}
/* 登录 */
export const login = (data: Object = {}) => {
  return post('/login/cellphone', data)
}
/* 用户信息 */
export const getUserInfo = (params: Object = {}) => {
  return get('/user/detail', params)
}
/* 热门歌单 */
export const getTopPlaylist = (params: Object = {}) => {
  return get('/top/playlist', params)
}
