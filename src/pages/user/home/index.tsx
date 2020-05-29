import React from 'react'
import UserInfo from './UserInfo'
import UserPlayList from './PlayList'
const styles = {
  width: '1000px',
  minHeight: '700px',
  margin: '0 auto',
  padding: '40px',
  backgroundColor: '#fff',
  borderLeft: '1px solid #d3d3d3',
  borderRight: '1px solid #d3d3d3'
}
const Home = () => {
  return (
    <>
      <div style={styles}>
        <UserInfo />
        <UserPlayList />
      </div>
    </>
  )
}

export default React.memo(Home)