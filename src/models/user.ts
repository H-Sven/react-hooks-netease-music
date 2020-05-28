/*
 * @Author: Siwen
 * @Date: 2020-05-27 13:48:36
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-28 16:03:54
 * @Description: 用户信息
 */ 
import * as api from '@/services/api'

export default {
  namespace: 'user',
  state: {
    isLogin: JSON.parse(`${localStorage.getItem('isLogin')}`) || false,
    userInfo: JSON.parse(`${localStorage.getItem('userInfo')}`) || {}
  },
  reducers: {
    setLoginStatus(state, { payload: status}) {
      let myState = { ...state }
      localStorage.setItem('isLogin', status)
      myState.isLogin = status
      return myState
    },
    updateUserInfo(state, { payload: userInfo}) {
      let myState = { ...state }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      myState.userInfo = userInfo
      return myState
    }
  },
  effects: {
    *getUserInfo ({ payload: params}, { call, put}) {
      try {
        const userInfo = yield call(api.getUserInfo, params)
        yield put({
          type: 'updateUserInfo',
          payload: userInfo
        })
      } catch (error) {
        yield put({
          type: 'setLoginStatus',
          payload: false
        })
        yield put({
          type: 'updateUserInfo',
          payload: {}
        })
      }
    }
  }
}
