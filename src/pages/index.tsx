import React from 'react';
import TopBar from '@/components/TopBar/TopBar';

const Index = (props) => {
  return (
    <>
      <TopBar />
      <div>{ props.children }</div>
    </>
  )
}


export default Index
