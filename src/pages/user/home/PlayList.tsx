import React, { useEffect } from 'react'
import { connect, Link } from 'umi'
import styles from './playList.less'
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons'

const UserInfo = (props:any) => {
  const { dispatch, user } = props
  const playList = user.playList

  useEffect(() => {
    dispatch({ type: 'user/getUserPlayList' })
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>我创建的歌单 ({playList.length})</div>
        {playList.map(item => {
          return (
            <div className={styles.item} key={item.id}>
              <div className={styles.cover}>
                <img src={item.coverImgUrl} alt=""/>
                <Link to={`/playlist?id=${item.id}`}></Link>
                <div className={styles.bottom}>
                  <div className={styles.left}>
                    <CustomerServiceOutlined />
                    <div className={styles.subscribers_count}>{item.subscribers.length}</div>
                  </div>
                  <PlayCircleOutlined />
                </div>
              </div>
              <div key={item.id}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = (state:any) => {
  return {
    user: state.user
  }
}
export default React.memo(connect(mapStateToProps)(UserInfo))