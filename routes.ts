/*
 * @Author: Siwen
 * @Date: 2020-05-27 10:37:49
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-01 09:57:49
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
      { path: '/user/message',component: '@/pages/user/message' },
      { path: '/user/level',component: '@/pages/user/level' },
      { path: '/user/member',component: '@/pages/user/member' },
    ]
  },
]
export default routes
