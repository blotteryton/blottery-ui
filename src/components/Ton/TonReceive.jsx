import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './Ton.scss';

const TonReceive = () => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <Input idName='ton-adress-wallet' label='Адрес кошелька:' copy='true'/>
            </div>
            <Button className="ton__btn" icon='#icon-share' title='Поделиться' />
        </div>
    );
}

export default TonReceive;