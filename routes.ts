/*
 * @Author: Siwen
 * @Date: 2020-05-27 10:37:49
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-29 12:14:17
 * @Description: 路由文件
 */ 
const routes = [
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      { path: '/', redirect: '/discover/recommend' },
      { path: '/discover/recommend', component: '@/pages/discover/Recommend' },
      { path: '/discover/toplist', component: '@/pages/discover/Toplist' },
      { path: '/my',component: '@/pages/my/My' },
      { path: '/friend',component: '@/pages/friend/Friend' },
      { path: '/user/home',component: '@/pages/user/home' },
    ]
  },
]
export default routes
