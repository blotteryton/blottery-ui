import React from 'react';

import './CopyButton.scss';
import sprite from '../../assets/images/sprite.svg';

const CopyButton = ({active, setActive}) => {
    return (
        <div className='copy-btn'>
            <div className={active ? "copy-btn__dropdown copy-btn__dropdown--active" : "copy-btn__dropdown"} onClick={() => setActive(false)}>
                <span className="copy-btn__text">Адрес скопирован</span>
            </div>
            <button className="copy-btn__btn" onClick={() => {setActive(true); setTimeout(() => { setActive(false) }, 1000)}}>
                <svg className="btn__icon">
                    <use href={sprite + '#icon-copy'}></use>
                </svg>
            </button>
        </div>
    );
}

export default CopyButton;