import React from 'react'
import {Outlet} from 'react-router-dom';

const adminLayout = () => {
    return (
        <>
        <main>
            <div>
                <Outlet/>
            </div>
        </main>
    </>
      )
}

export default adminLayout