import React from 'react'
import {Outlet} from 'react-router-dom';
import WebAppHeader from './WebAppHeader';
import WebAppFooter from './WebAppFooter';

const webAppLayout = () => {
  return (
    <>
        <WebAppHeader/>
        <main>
            <div>
                <Outlet/>
            </div>
        </main>
        <WebAppFooter/>
    </>
  )
}

export default webAppLayout