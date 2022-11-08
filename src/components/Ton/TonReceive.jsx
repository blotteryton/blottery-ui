import React from 'react';
import Input from '../Input/Input';
import QRCode from "react-qr-code";

import './Ton.scss';

const TonReceive = (props) => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <Input idName='ton-address-wallet' label='Адрес кошелька:' copy='true' value={props.value} disabled={true}/>
            </div>
            <div style={{ background: 'white', padding: '16px', textAlign: "center", marginTop: "20px" }}>
                <QRCode value={props.value} />
            </div>
        </div>
    );
}

export default TonReceive;