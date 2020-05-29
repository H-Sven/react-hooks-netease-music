import React from 'react'
import styles from './index.less'
import { connect } from 'umi'
import { Progress } from 'antd'
const Lever = (props) => {
  const { user } = props
  const percent = !user.userInfo.lever ? 0 : user.userInfo.lever * 10
  return (
    <>
      <div className={styles.container}>
        <div className={styles.my_lever}>
          <div className={styles.label}>当前等级：</div>
          <div className={styles.lever}>Lv.{percent}</div>
        </div>
        <Progress percent={percent} showInfo={false} strokeWidth={12} steps={10} width={300} strokeColor="#e03a24" />
        <div className={styles.tips}>等级数据每天下午2点更新</div>
        <div className={styles.label}>当前等级特权：</div>
        <ul className={styles.telist}>
          <li>没有任何特权，加油升级哦!</li>
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state:any) => {
  return {
    user: state.user
  }
}
export default React.memo(connect(mapStateToProps)(Lever))