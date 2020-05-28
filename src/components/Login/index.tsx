import React, { useState, useEffect } from 'react'
import { Modal, Button, notification, Input } from 'antd'
import { WechatOutlined, QqOutlined, WeiboOutlined, TwitterOutlined,
  UserOutlined, LockOutlined
} from '@ant-design/icons';
import styles from '@/components/Login/index.less'
import Login from './component/login'
import Register from './component/register'

const loginType = [
  { icon: <WechatOutlined style={{color: '#41b035'}} />, label: '微信登录', type: 'wechat' },
  { icon: <QqOutlined style={{color: '#4e9ff9'}} />, label: 'QQ登录', type: 'qq' },
  { icon: <WeiboOutlined style={{color: '#ed3229'}} />, label: '微博登录', type: 'weibo' },
  { icon: <TwitterOutlined style={{color: '#55acee'}} />, label: '推特登录', type: 'twitter' }
]
const LoginModal = (props:any) => {
  const { visible, setVisible } = props
  const [loginOrRegister, setLoginOrRegister] = useState('登录')
  const [title, setTitle] = useState('登录')

  useEffect(() => {
    setLoginOrRegister('')
    setVisible(visible)
  }, [visible])

  useEffect(() => {
    loginOrRegister && setTitle(loginOrRegister)
  }, [loginOrRegister])

  const loginOrRegisterFunc = (type: string) => {
    setLoginOrRegister(type)
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
    <div className={styles.login_modal}>
      <Modal
        wrapClassName={styles.choose}
        title={title}
        width="530px"
        centered
        destroyOnClose
        mask={false}
        maskClosable={false}
        getContainer={false}
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        {
          !loginOrRegister &&
          <div className={styles.container}>
            <div className={styles.left}>
              <img className={styles.img} src="https://s2.music.126.net/style/web2/img/platform.png?1b954ad6c1c5cc5c1d0aef0393657152" alt=""/>
              <Button type="primary" block onClick={() => loginOrRegisterFunc('登录')}>手机号登录</Button>
              <Button block onClick={() => loginOrRegisterFunc('注册')}>注册</Button>
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
        }
        {/* 登录组件 */}
        {loginOrRegister === '登录' && <Login setVisible={setVisible} setLoginOrRegister={setLoginOrRegister} />}
        {loginOrRegister === '注册' && <Register type="立即注册" setVisible={setVisible} setLoginOrRegister={setLoginOrRegister} />}
        {loginOrRegister === '找回密码' && <Register type="立即找回" setVisible={setVisible} setLoginOrRegister={setLoginOrRegister} />}
      </Modal>
    </div>
  )
}
export default React.memo(LoginModal)