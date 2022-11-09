import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './Navtabs.scss';
import sprite from '../../assets/images/sprite.svg';

const Notification = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <CustomLink to='/notification/' className='nav__link'>
                        <svg className='nav__icon'>
                            <use href={sprite + '#icon-notification'}></use>
                        </svg>
                        <span>Уведомления</span>
                    </CustomLink>
                </li>
                <li className='nav__item'>
                    <CustomLink to='/marketplace/' className='nav__link'>
                        <svg className='nav__icon'>
                            <use href={sprite + '#icon-marketplace'}></use>
                        </svg>
                        <span>Маркетплейс</span>
                    </CustomLink>
                </li>
                <li className='nav__item'>
                    <CustomLink to='/cabinet/' className='nav__link'>
                        <svg className='nav__icon'>
                            <use href={sprite + '#icon-cabinet'}></use>
                        </svg>
                        <span>Кабинет</span>
                    </CustomLink>
                </li>
            </ul>
        </nav>
    );
}

export default Notification;