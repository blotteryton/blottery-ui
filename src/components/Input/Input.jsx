import React from 'react';

import './Input.scss';
import sprite from '../../assets/images/sprite.svg';

const Input = (props) => {
    return (
        <div className="input-control">
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
    );
}

export default Input;