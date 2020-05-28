/*
 * @Author: Siwen
 * @Date: 2020-05-26 15:35:05
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 10:03:06
 * @Description: 运行时配置文件
 */ 
// import { history } from 'umi'

export const dva = {
  config: {
    onError(e:any) {
      // e.preventDefault()
    },
  }
}

/* 覆盖render,用于做权限检验 */
export function render(oldRender) {
  oldRender()
}
/* 在初始加载和路由切换时做一些事情 */
export function onRouteChange({ location, routes, action }) {
  // console.log(process.env.NODE_ENV)
}