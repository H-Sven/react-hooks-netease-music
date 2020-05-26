import React from 'react';
import { connect } from 'umi';

const My = (props) => {
  const { dispatch, my } = props
  function handleDelete() {
    dispatch({
      type: 'my/add',
      payload: my.count + 1,
    });
  }
  return (
    <>
      <h1 onClick={() => handleDelete()}>我的音乐</h1>
    </>
  )
}


export default connect(({ my }) => ({ my }))(My)
