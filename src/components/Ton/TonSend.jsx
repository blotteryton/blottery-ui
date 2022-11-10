import React from 'react';
import Input from '../Input/Input';
import Cookies from "js-cookie";

import './Ton.scss';
import ButtonDefault from "../Button/ButtonDefault";
import AccountService from "../../services/account.service";


const balance = Cookies.get("ton_balance")

const transfer = () => {
    const dest = document.getElementById("ton-number-wallet")
    const amount = document.getElementById("ton-sum")

    AccountService.transfer(dest.value, amount.value)
        .then(() => {
            dest.value = ""
            amount.value = ""
        })
        .catch(e => {
            console.log(e);
        });
}

const TonSend = (props) => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <Input idName='ton-number-wallet' label='Введите номер кошелька:' value={props.wallet_address} link={props.wallet_address ? null : 'Вставить' } disabled={!!props.wallet_address} />
                <Input idName='ton-sum' label='Введите сумму:' value={props.amount} help={balance} disabled={!!props.amount} />
            </div>
            <ButtonDefault clicked={() => {transfer()}} className="ton__btn" icon='#icon-send-vr' title='Отправить' disabled={props.amount > balance} />
        </div>
    );
}

export default TonSend;