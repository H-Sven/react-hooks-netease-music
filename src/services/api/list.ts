/*
 * @Author: Siwen
 * @Date: 2020-06-02 14:31:27
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-02 14:32:05
 * @Description: 列表类接口
 */ 
import { get } from '@/services/request'

/* 获取歌单详情 */
export const getPlayListDetail = (params: Object = {}) => {
  return get('/playlist/detail', params)
}