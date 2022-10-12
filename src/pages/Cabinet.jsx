import React from 'react';
import { Outlet } from "react-router-dom";
import Heading from '../components/Heading/Heading';
import Balance from '../components/Balance/Balance';

const Cabinet = () => {
    return (
        <div className='wrapper__content'>
            <Heading title={'Личный кабинет'} />
            <div className="cabinet">
                <Balance />
                <Outlet />
            </div>
        </div>
    );
}

export default Cabinet;