/*
 * @Author: Siwen
 * @Date: 2020-05-26 11:48:08
 * @LastEditors: Siwen
 * @LastEditTime: 2020-05-26 13:37:50
 * @Description: 
 */ 
export default {
  namespace: 'my',
  state: {
    count: 0
  },
  reducers: {
    add(state, { payload: count }) {
      let myState = {...state}
      myState.count++
      return myState
    },
  },
};