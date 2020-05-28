import React, { useState, useEffect } from 'react'
import { Modal, Button, notification } from 'antd'
import { WechatOutlined, QqOutlined, WeiboOutlined, TwitterOutlined } from '@ant-design/icons';
import styles from '@/components/Login/login.less'
import { login } from '@/services/api';

const loginType = [
  { icon: <WechatOutlined style={{color: '#41b035'}} />, label: '微信登录', type: 'wechat' },
  { icon: <QqOutlined style={{color: '#4e9ff9'}} />, label: 'QQ登录', type: 'qq' },
  { icon: <WeiboOutlined style={{color: '#ed3229'}} />, label: '微博登录', type: 'weibo' },
  { icon: <TwitterOutlined style={{color: '#55acee'}} />, label: '推特登录', type: 'twitter' }
]
const Login = (props:any) => {
  const { dispatch, visible, setVisible } = props
  useEffect(() => {
    setVisible(visible)
  }, [visible])

  const loginFunc = () => {

  }
  const registerFunc = () => {

  }
  const changeLogin = (label:string, type:string) => {
    notification.destroy()
    notification.warning({
      message: '提示',
      duration: 2.5,
      description: `${label}暂不支持`
    })
  }
  return (
    <>
      <Modal
        wrapClassName={styles.login_modal}
        title="登录"
        width="530px"
        centered
        destroyOnClose
        mask={false}
        maskClosable={false}
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <img className={styles.img} src="https://s2.music.126.net/style/web2/img/platform.png?1b954ad6c1c5cc5c1d0aef0393657152" alt=""/>
            <Button type="primary" block onClick={() => loginFunc()}>手机号登录</Button>
            <Button block onClick={() => registerFunc()}>注 册</Button>
          </div>
          <ul className={styles.right}>
            {loginType.map(item => {
              return (
                <li key={item.type} onClick={() => changeLogin(item.label, item.type)}>
                  <div className={styles.icon_box}>{ item.icon }</div>
                  <span>{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </Modal>
    </>
  )
}
export default Login