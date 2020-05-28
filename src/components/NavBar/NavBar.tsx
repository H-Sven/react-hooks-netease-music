import React, { useState } from 'react'
import styles from '@/components/NavBar/navBar.less'
import { NavLink, useLocation, connect, withRouter } from 'umi'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Login from '@/components/Login/login'

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

const NavBar = (props) => {
  const { pathname } = useLocation()
  const { dispatch, user } = props
  const [visible, setVisible] = useState(false)

  const login = () => {
    setVisible(true)
  }
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
              {!user.isLogin && <div className={styles.login} onClick={() => login()}>登录</div>}
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