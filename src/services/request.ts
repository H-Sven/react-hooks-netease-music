/*
 * @Author: Siwen
 * @Date: 2020-05-27 11:12:55
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-27 18:18:54
 * @Description: 接口请求
 */ 
import { extend } from 'umi-request'
// import { notification } from 'antd'

const codeMessage:any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
export const errorHandler = (error:any) => {
  const { response = {}, data } = error
  // const errortext = codeMessage[response.status] || data.msg
  // const { status, url } = response
  // notification.error({
  //   message: `请求错误 ${status}: ${url}`,
  //   description: errortext,
  // })
  throw data
  // return data
}
const request = extend({
  prefix: `${process.env.BASE_URL}`,
  timeout: 10000,
  redirect: 'error',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  credentials: 'include',
  errorHandler: errorHandler,
})

/* 全局拦截器 */
// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return { url, options }
})
// response拦截器, 处理response
request.interceptors.response.use(async response => {
  const data = await response.clone().json()
  return response
})
const get = async (url:string, params:Object = {}) => {
  const response = await request.get(url, { params })
  if (response.code === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}
const post = async (url:string, data:Object = {}) => {
  const response = await request.post(url, { data })
  if (response.code === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}
export { request, get, post }

