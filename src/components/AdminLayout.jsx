import React from 'react'
import {Outlet} from 'react-router-dom';
import AdminLeftNavBar from './AdminLeftNavBar/AdminLeftNavBar';

const adminLayout = () => {
    return (
        <>
        <main>
            <AdminLeftNavBar/>
            <div>
                <Outlet/>
            </div>
        </main>
    </>
      )
}

export default adminLayout