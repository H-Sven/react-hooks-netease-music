import React, { useEffect, useState } from 'react'
import { connect, history } from 'umi'
import styles from './PlayListDetail.less'
import { getPlayListDetail } from '@/services/api/list'
import { Avatar, Tag, Button } from 'antd'

const PlayListDetail = (props:any) => {
  const { dispatch } = props
  const [detail, setDetail] = useState<any>()
  useEffect(() => {
    getPlayListDetail({ id: history.location.query.id }).then(res => {
      setDetail(res)
    })
  }, [])
  return (
    <>
      <div className={styles.container}>
        {detail &&
          <div className={styles.info}>
            <Avatar shape="square" src={detail.playlist.coverImgUrl} />
            <div className={styles.cnt}>
              <div className={styles.cnt_1}>
                <Tag color="#c20c0c">歌单</Tag>
                <div className={styles.title}>{detail.playlist.name}</div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    
  }
}
export default connect(mapStateToProps)(PlayListDetail)