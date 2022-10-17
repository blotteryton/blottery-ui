import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './Ton.scss';

const TonSend = () => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <Input idName='ton-number-wallet' label='Введите номер кошелька:' link='Вставить'/>
                <Input idName='ton-sum' label='Введите сумму:' help='43'/>
            </div>
            <Button className="ton__btn" icon='#icon-send-vr' title='Отправить' />
        </div>
    );
}

export default TonSend;