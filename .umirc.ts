/*
 * @Author: Siwen
 * @Date: 2020-05-26 11:26:11
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 09:35:49
 * @Description: 
 */ 
import { defineConfig } from 'umi';
import router from './routes'

export default defineConfig({
  routes: router,
  esbuild: {},
  plugins: [],
  nodeModulesTransform: {
    type: 'none',
  },
  devtool: false,
  dynamicImport: {
    loading: '@/loading'
  },
  proxy: {
    '/api': {
      'target': 'http://localhost:3000',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
