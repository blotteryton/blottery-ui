import React from 'react';

import './Ton.scss';
import sprite from '../../assets/images/sprite.svg';

const TonSend = () => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <div className="input-control__item">
                    <label htmlFor="number-wallet" className="input-control__label">Введите номер кошелька:</label>
                    <div className="input-control__group">
                        <input type="text" id='number-wallet' className="input-control__input" value={'0x902384034v23...73u0'} />
                        <button className="input-control__link">Вставить</button>
                    </div>
                </div>
                <div className="input-control__item">
                    <label htmlFor="number-wallet" className="input-control__label">Введите номер кошелька:</label>
                    <div className="input-control__group">
                        <input type="text" id='number-wallet' className="input-control__input" value={'12 TON'} />
                        <span className="input-control__help">Доступно: 43 TON</span>
                    </div>
                </div>
            </div>
            <button className="ton__btn btn">
                <svg className="btn__icon">
                    <use href={sprite + '#icon-send-vr'}></use>
                </svg>
                <span>Отправить</span>
            </button>
        </div>
    );
}

export default TonSend;