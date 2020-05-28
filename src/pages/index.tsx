import React from 'react';
import NavBar from '@/components/NavBar/NavBar';

const Index = (props) => {
  return (
    <>
      <NavBar />
      <div>{ props.children }</div>
    </>
  )
}


export default Index
