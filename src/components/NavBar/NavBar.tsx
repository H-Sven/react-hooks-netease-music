import React, { useState, useEffect } from 'react'
import styles from '@/components/NavBar/navBar.less'
import { NavLink, useLocation, history, connect, withRouter } from 'umi'
import { Input, Avatar, Menu, Dropdown, notification } from 'antd';
import { SearchOutlined, UserOutlined, BellOutlined, CrownOutlined, SketchOutlined,
  SettingOutlined, SafetyCertificateOutlined, PoweroffOutlined
} from '@ant-design/icons'
import { logout } from '@/services/api/base'
import Login from '@/components/Login'

const navList = [
  { name: '发现音乐', url: '/' },
  { name: '我的音乐', url: '/my' },
  { name: '朋友', url: '/friend' },
  { name: '商城', url: '/store' },
  { name: '音乐人', url: '/nmusician' }
]
const homeNav = [ //首页分类导航
  { name: '推荐', url: '/discover/recommend' },
  { name: '排行榜', url: '/discover/toplist' },
  { name: '歌单', url: '/discover/playlist' },
  { name: '主播电台', url: '/discover/djradio' },
  { name: '歌手', url: '/discover/artist' },
  { name: '新碟上架', url: '/discover/album' }
]
const userMenu = [
  { icon: <UserOutlined />, label: '我的主页', url: '/user/home' },
  { icon: <BellOutlined />, label: '我的消息', url: '' },
  { icon: <CrownOutlined />, label: '我的等级', url: '' },
  { icon: <SketchOutlined />, label: 'VIP会员', url: '' },
  { icon: <SettingOutlined />, label: '个人设置', url: '' },
  { icon: <SafetyCertificateOutlined />, label: '实名认证', url: '' },
  { icon: <PoweroffOutlined />, label: '退出', url: 'logout' }
]

const NavBar = (props) => {
  const { pathname } = useLocation()
  const { dispatch, user } = props
  const [visible, setVisible] = useState(false)
  const menu = (
    <Menu className={styles.user_menu}>
      {userMenu.map(item => {
        return (
          <Menu.Item key={item.label}>
            {item.icon}
            <span onClick={() => handlerUserMenu(item.url)}>{item.label}</span>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  const handlerUserMenu = (url:string) => {
    if (url === 'logout') {
      logout().then(() => {
        dispatch({
          type: 'user/setLoginStatus',
          payload: false
        })
        dispatch({
          type: 'user/updateUserInfo',
          payload: {}
        })
      }).catch(err => {
        notification.destroy()
        notification.error({
          message: '错误',
          description: err.message
        })
      })
    } else {
      history.push(url)
    }
  }

  useEffect(() => {
    if (Object.keys(user.userInfo).length) {
      const userId = user.userInfo.profile.userId
      dispatch({
        type: 'user/getUserInfo',
        payload: { uid: userId }
      })
    }
  }, [])

  return (
    <>
      <div className={styles.tob_bar}>
        <div className={styles.nav_top}>
          <div className={styles.wrap}>
            <div className={styles.left}>
              <h1 className={styles.logo}></h1>
              <div className={styles.item_nav}>
                {
                  navList.map(item => {
                    return (
                      <NavLink to={item.url} key={item.url} exact={pathname !== '/' && !pathname.includes('discover')} activeClassName={styles.selected}>
                        {item.name}
                        {
                          (pathname === item.url || ( item.url === '/' && pathname.includes('discover'))) &&
                          <div className={styles.sign}></div>
                        }
                      </NavLink>
                    )
                  })
                }
              </div>
            </div>
            <div className={styles.right}>
              <Input placeholder="音乐/视频/电台/用户" className={styles.search} prefix={<SearchOutlined />} />
              <div className={styles.creator}>创作者中心</div>
              {!user.isLogin && <div className={styles.login} onClick={() => setVisible(true)}>登录</div>}
              {user.isLogin &&
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Avatar className={styles.avatarUrl} src={(user.userInfo && user.userInfo.profile) ? user.userInfo.profile.avatarUrl : ''} />
                </Dropdown>
              }
            </div>
          </div>
        </div>
        <div className={styles.nav_bottom}>
          {(pathname === '/' || pathname.includes('discover')) &&
            <div className={styles.b_nav_box}>
              {
                homeNav.map(item => {
                  return (
                    <NavLink to={item.url} key={item.url} exact={item.url !== pathname} activeClassName={styles.home_selected}>
                      {item.name}
                    </NavLink>
                  )
                })
              }
            </div>
          }
        </div>
      </div>
      <Login visible={visible} setVisible={setVisible} />
    </>
  )
}
function mapStateToProps(state) { //state是项目所有的models
  return {
    user: state.user
  }
}
export default withRouter(connect(mapStateToProps)(NavBar))