/*
 * @Author: Siwen
 * @Date: 2020-05-29 13:37:26
 * @LastEditors: Siwen
 * @LastEditTime: 2020-06-02 14:32:21
 * @Description:
 */
import * as base from '@/services/api/base'
import * as user from '@/services/api/user'
import * as list from '@/services/api/list'

export default {
  ...list,
  ...base,
  ...user
}