import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import TonSend from '../components/Ton/TonSend';
import {useSearchParams} from "react-router-dom";

const Send = () => {
    const [URLSearchParams] = useSearchParams()
    const wallet_address = URLSearchParams.get("wallet_address")
    const amount = URLSearchParams.get("amount")

    return (
        <div className="wrapper__content wrapper__content--header">
            <Header />
            <Heading title={'Отправить'} />
            <TonSend wallet_address={wallet_address} amount={amount} />
        </div>
    );
}

export default Send;