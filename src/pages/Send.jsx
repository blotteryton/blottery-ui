import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import TonSend from '../components/Ton/TonSend';

const Send = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header />
            <Heading title={'Отправить'} />
            <TonSend />
        </div>
    );
}

export default Send;