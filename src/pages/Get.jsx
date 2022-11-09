import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import TonReceive from '../components/Ton/TonReceive';
import Cookies from "js-cookie";


const Get = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header />
            <Heading title={'Получить'} />
            <TonReceive value={Cookies.get("wallet_address")}/>
        </div>
    );
}

export default Get;