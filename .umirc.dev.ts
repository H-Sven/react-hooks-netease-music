/*
 * @Author: Siwen
 * @Date: 2020-05-26 11:26:11
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-27 10:51:24
 * @Description: 开发环境变量
 */ 
import { defineConfig } from 'umi'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': 'development',
    'process.env.BASE_URL': '/api'
  }
})
