import React, {  } from 'react'
import { history } from 'umi'
import styles from './index.less'
import PlayListDetail from './PlayListDetail'

const PlayList = (props:any) => {
  const { dispatch } = props
  const id = history.location.query.id
  return (
    <>
      <div className={styles.container}>
        <PlayListDetail />
      </div>
    </>
  )
}

export default React.memo(PlayList)