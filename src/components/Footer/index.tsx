import React from 'react'
import styles from './index.less'
import { SafetyCertificateOutlined, WhatsAppOutlined, PropertySafetyOutlined, PlayCircleOutlined } from '@ant-design/icons'

const link = [
  { title: '服务条款', url: 'https://st.music.163.com/official-terms/service' },
  { title: '隐私政策', url: 'https://st.music.163.com/official-terms/privacy' },
  { title: '儿童隐私政策', url: 'https://st.music.163.com/official-terms/children' },
  { title: '版权投诉指引', url: 'https://music.163.com/st/staticdeal/complaints.html' }
]
const enter = [
  { title: '用户认证', icon: <SafetyCertificateOutlined /> },
  { title: '音乐人', icon: <WhatsAppOutlined /> },
  { title: '打赏', icon: <PropertySafetyOutlined /> },
  { title: '视频奖励', icon: <PlayCircleOutlined /> }
]

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.link}>
              {link.map(item => {
                return (
                  <a key={item.title} href={item.url} target="_blank">{item.title}</a>
                )
              })}
            </div>
            <p>网易公司版权所有©1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
            <p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
            <p>粤B2-20090191-18工业和信息化部备案管理系统网站</p>
          </div>
          <div className={styles.right}>
            {enter.map(item => {
              return (
                <div key={item.title} className={styles.icon}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Footer)