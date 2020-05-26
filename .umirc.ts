/*
 * @Author: Siwen
 * @Date: 2020-05-26 11:26:11
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-26 18:18:06
 * @Description: 
 */ 
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', redirect: '/discover/recommend' },
        { path: '/discover/recommend', component: '@/pages/discover/Recommend' },
        { path: '/discover/toplist', component: '@/pages/discover/Toplist' },
        { path: '/my',component: '@/pages/my/My' },
        { path: '/friend',component: '@/pages/friend/Friend' },
      ]
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  devtool: false,
  dynamicImport: {
    loading: '@/loading'
  },
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
