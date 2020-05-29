import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer'

const Index = (props) => {
  return (
    <>
      <NavBar />
      <div style={{ width: '100%', height: '100%' }}>{ props.children }</div>
      <Footer />
    </>
  )
}


export default Index
