/*
 * @Author: Siwen
 * @Date: 2020-05-27 13:48:36
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 10:02:04
 * @Description: 用户信息
 */ 
import * as api from '@/services/api'

export default {
  namespace: 'user',
  state: {
    isLogin: false,
    userInfo: {}
  },
  reducers: {
    setLoginStatus(state, { payload: status}) {
      let myState = {...state}
      myState.isLogin = status
      return myState
    },
    updateUserInfo(state, { payload: data}) {
      let myState = {...state}
      myState.userInfo = data
      return myState
    }
  },
  effects: {
    *getLoginStatus ({ payload: params}, { call, put}) {
      try {
        yield call(api.getLoginStatus)
        yield put({
          type: 'setLoginStatus',
          payload: true
        })
        const data = yield call(api.getUserInfo, params)
        yield put({
          type: 'updateUserInfo',
          payload: data
        })
      } catch (error) {
        yield put({
          type: 'setLoginStatus',
          payload: false
        })
      }
    }
  }
}
