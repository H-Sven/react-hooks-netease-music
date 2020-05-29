/*
 * @Author: Siwen
 * @Date: 2020-05-27 13:48:36
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-29 14:24:46
 * @Description: 用户信息
 */ 
import api from '@/services/api/index'

export default {
  namespace: 'user',
  state: {
    isLogin: JSON.parse(`${localStorage.getItem('isLogin')}`) || false,
    userInfo: JSON.parse(`${localStorage.getItem('userInfo')}`) || {},
    playList: []
  },
  reducers: {
    setLoginStatus(state, { payload: status}) {
      let myState = { ...state }
      myState.isLogin = status
      localStorage.setItem('isLogin', status)
      return myState
    },
    updateUserInfo(state, { payload: userInfo}) {
      let myState = { ...state }
      myState.userInfo = !Object.keys(userInfo).length ? {} : { ...myState.userInfo, ...userInfo}
      localStorage.setItem('userInfo', JSON.stringify(myState.userInfo))
      return myState
    },
    setUserPlayList(state, { payload: playlist}) {
      let myState = { ...state }
      myState.playList = playlist
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
    },
    *getUserPlayList({ payload: params}, { call, put, select}) {
      const uid = yield select(state => state.user.userInfo.profile.userId)
      const res = yield call(api.getUserPlayList, { uid })
      yield put({ type: 'setUserPlayList', payload: res.playlist })
    }
  }
}
