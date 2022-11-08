import React from 'react';
import Input from '../Input/Input';
import Cookies from "js-cookie";

import './Ton.scss';
import ButtonDefault from "../Button/ButtonDefault";
import AccountService from "../../services/account.service";


const transfer = () => {
    const dest = document.getElementById("ton-number-wallet")
    const amount = document.getElementById("ton-sum")

    AccountService.transfer(dest.value, amount.value)
        .then(response => {
            dest.value = ""
            amount.value = ""
        })
        .catch(e => {
            console.log(e);
        });
}

const TonSend = () => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <Input idName='ton-number-wallet' label='Введите номер кошелька:' link='Вставить'/>
                <Input idName='ton-sum' label='Введите сумму:' help={Cookies.get("ton_balance")}/>
            </div>
            <ButtonDefault clicked={() => {transfer()}} className="ton__btn" icon='#icon-send-vr' title='Отправить' />
        </div>
    );
}

export default TonSend;