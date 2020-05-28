import React from 'react'
import styles from './login.less'
import { Form, Input, Button, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '@/services/api'
import { connect } from 'umi'

const Login = (props) => {
  const { dispatch, setLoginOrRegister, setVisible }  = props

  const onFinish = (values:Object) => {
    login(values).then(res => {
      dispatch({
        type: 'user/setLoginStatus',
        payload: true
      })
      dispatch({
        type: 'user/updateUserInfo',
        payload: res
      })
      setVisible(false)
    }).catch(err => {
      notification.destroy()
      notification.error({
        message: '错误',
        description: err.message
      })
    })
  }

  return (
    <>
      <div className={styles.login_container}>
      <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="phone" rules={[{ required: true, message: '请输入手机号' }]} >
          <Input placeholder="请输入手机号" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]} >
          <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item noStyle>
          <div className={styles.forgot} onClick={() => setLoginOrRegister('找回密码')}>忘记密码？</div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
        <Button type="link" danger onClick={() => setLoginOrRegister('注册')}>没有账号？ 免费注册</Button>
      </div>
    </>
  )
}
function mapStateToProps(state:any) {
  return {}
}
export default React.memo(connect(mapStateToProps)(Login))
