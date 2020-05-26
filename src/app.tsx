/*
 * @Author: Siwen
 * @Date: 2020-05-26 15:35:05
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-26 17:42:26
 * @Description: 运行时配置文件
 */ 
// import { history } from 'umi';

/* 覆盖render,用于做权限检验 */
export function render(oldRender) {
  oldRender()
}