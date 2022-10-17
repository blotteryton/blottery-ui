import React from 'react';
import { Outlet } from 'react-router-dom';

import 'bootstrap/scss/bootstrap-reboot.scss';
import './Layout.scss';

import Navtabs from '../Navtabs/Navtabs'

const Layout = () => {
    return (
        <div className='wrapper'>
            <Navtabs />
            <Outlet />
        </div>
    );
}

export default Layout;