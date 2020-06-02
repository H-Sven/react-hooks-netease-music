/*
 * @Author: Siwen
 * @Date: 2020-05-29 13:37:42
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-02 14:16:11
 * @Description: 用户相关接口
 */ 
import { get } from '@/services/request'

/* 用户信息 */
export const getUserInfo = (params: Object = {}) => {
  return get('/user/detail', params)
}
/* 获取用户歌单 */
export const getUserPlayList = (params: Object = {}) => {
  return get('/user/playlist', params)
}