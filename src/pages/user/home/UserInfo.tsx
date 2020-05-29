import React from 'react'
import { connect } from 'umi'
import styles from './userInfo.less'
import { Avatar, Button } from 'antd'

const UserInfo = (props:any) => {
  const { user } = props
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Avatar shape="square" src={user.userInfo.profile.avatarUrl} />
          <div className={styles.userinfo}>
            <div className={styles.name_box}>
              <div className={styles.left}>
                <div className={styles.nickname}>{user.userInfo.profile.nickname}</div>
                <div className={styles.level}>Lv.{user.userInfo.level}</div>
              </div>
              <Button className={styles.edit_user}>编辑个人资料</Button>
            </div>
            <div className={styles.data}>
              <div className={styles.data_info}>
                <div className={styles.count}>{user.userInfo.profile.eventCount}</div>
                <div className={styles.desc}>动态</div>
              </div>
              <div className={styles.data_info}>
                <div className={styles.count}>{user.userInfo.profile.follows}</div>
                <div className={styles.desc}>关注</div>
              </div>
              <div className={styles.data_info}>
                <div className={styles.count}>{user.userInfo.profile.followeds}</div>
                <div className={styles.desc}>粉丝</div>
              </div>
            </div>
            <div className={styles.addres}>
              <div className={styles.addres_title}>所在地区：&nbsp;</div>
              <div className={styles.province}>{user.userInfo.profile.province}</div>
              <div>&nbsp;-&nbsp;</div>
              <div className={styles.city}>{user.userInfo.profile.city}</div>
            </div>
          </div>
        </div>
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