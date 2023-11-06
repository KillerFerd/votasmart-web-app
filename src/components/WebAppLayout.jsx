import React from 'react'
import { Outlet } from 'react-router-dom';
import WebAppHeader from './WebAppHeader/WebAppHeader';
import WebAppFooter from './WebAppFooter';

const webAppLayout = () => {
  return (
    <>
      <WebAppHeader />

      <div className='mainContainer'>
        <Outlet />
      </div>
      <WebAppFooter />
    </>
  )
}

export default webAppLayout