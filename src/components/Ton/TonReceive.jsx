import React from 'react';

import './Ton.scss';
import sprite from '../../assets/images/sprite.svg';

const TonReceive = () => {
    return (
        <div className='ton'>
            <div className="input-control ton__input">
                <div className="input-control__item">
                    <label htmlFor="number-wallet" className="input-control__label">Адрес кошелька:</label>
                    <div className="input-control__group">
                        <input type="text" id='number-wallet' className="input-control__input" value={'0x902384034v2304u092323...'} />
                        <button className="input-control__btn">
                            <svg className="input-control__icon">
                                <use href={sprite + '#icon-copy'}></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <button className="ton__btn btn">
                <svg className="btn__icon">
                    <use href={sprite + '#icon-share'}></use>
                </svg>
                <span>Поделиться</span>
            </button>
        </div>
    );
}

export default TonReceive;