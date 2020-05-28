import React from 'react';
import { connect } from 'umi'

const My = (props) => {
  const { dispatch, my, user } = props
  function handleDelete() {
    dispatch({
      type: 'user/getLoginStatus',
      payload: {uid: ''},
    });
  }
  return (
    <>
      <h2>{`${user.isLogin}`}</h2>
      <h1 onClick={() => handleDelete()}>我的音乐</h1>
    </>
  )
}

function mapStateToProps(state) { //state是项目所有的models
  return {
    my: state.my,
    user: state.user
  }
}
export default connect(mapStateToProps)(My)
