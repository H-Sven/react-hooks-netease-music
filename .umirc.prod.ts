/*
 * @Author: Siwen
 * @Date: 2020-05-26 11:26:11
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-27 10:52:27
 * @Description: 正式环境变量
 */ 
import { defineConfig } from 'umi'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': 'production',
    'process.env.BASE_URL': 'https://music.163.com'
  }
})
