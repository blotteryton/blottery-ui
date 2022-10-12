import React from 'react';

import './Header.scss';
import sprite from '../../assets/images/sprite.svg';

const Header = () => {
    return (
        <header className='header'>
            <button className="header__btn">
                <svg className="header__btn-icon">
                    <use href={sprite + '#icon-arrow-back'}></use>
                </svg>
            </button>
            <button className="header__btn">
                <svg className="header__btn-icon header__btn-icon--sm">
                    <use href={sprite + '#icon-share'}></use>
                </svg>
            </button>
        </header>
    );
}

export default Header;