import React, { useState, useEffect } from 'react'
import styles from './login.less'
import { Form, Input, Button, notification } from 'antd'
import { UserOutlined, LockOutlined, EditOutlined, BranchesOutlined } from '@ant-design/icons'
import { register, sentCaptcha } from '@/services/api'
import { connect } from 'umi'
import * as utils from '@/utils'

const Register = (props) => {
  const { dispatch, setLoginOrRegister, type }  = props
  let [time, setTime] = useState(0)
  const [form] = Form.useForm()

  const onFinish = (values:Object) => {
    register(values).then(res => {
      notification.destroy()
      notification.success({
        message: '注册成功',
        description: '请登录'
      })
      setLoginOrRegister('登录')
    }).catch(err => {
      notification.destroy()
      notification.error({
        message: '错误',
        description: err.message
      })
    })
  }
  useEffect(() => {
    if (!time) return
    let timer = setTimeout(() => {
      setTime(time - 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [time])
  const getCode =() => {
    if (utils.isPhone(form.getFieldValue('phone'))) {
      sentCaptcha({ phone: form.getFieldValue('phone')}).catch(err => {
        notification.error({
          message: '错误',
          description: err.message
        })
      })
      setTime(59)
    } else {
      notification.destroy()
      notification.error({
        message: '错误',
        description: '请先输入正确的手机号码'
      })
    }
  }

  return (
    <>
      <div className={styles.login_container}>
        <Form form={form} name="normal_register" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="phone" rules={[{ required: true, message: '请输入注册手机号' }]} >
            <Input placeholder="请输入注册手机号" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '字母、数字、符号中至少两种,长度为6-16位' }]} >
            <Input.Password placeholder="请输入密码，不少于6位" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="nickname" rules={[{ required: true, message: '请输入昵称' }]} >
            <Input placeholder="请输入昵称" prefix={<EditOutlined />} />
          </Form.Item>
          <Form.Item name="captcha" rules={[{ required: true, message: '请输入验证码' }]} >
            <div>
              <Input placeholder="请输入验证码" maxLength={4} prefix={<BranchesOutlined />} />
              <Button type="link" disabled={time !== 0} className={styles.get_code} onClick={() => getCode()}>{ time === 0 ? '发送验证码' : `重新获取${time > 9 ? time : '0' + time }` }</Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{type}</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
function mapStateToProps(state:any) {
  return {}
}
export default React.memo(connect(mapStateToProps)(Register))
