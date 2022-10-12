import React from 'react';
import { Link } from 'react-router-dom'

import './Balance.scss';
import sprite from '../../assets/images/sprite.svg';

const Balance = () => {
    return (
        <div className='balance'>
            <div className="balance__top">
                <div className="balance__group">
                    <span className="balance__help">TON</span>
                    <span className="balance__value">424.869340000</span>
                </div>
                <div className="balance__group">
                    <span className="balance__help">RUB</span>
                    <span className="balance__value">19,370.612</span>
                    </div>
            </div>
            <div className="balance__main">
                <ul className="balance__list">
                    <li className="balance__item">
                        <Link to='get' className="balance__link">
                            <span className="balance__icon-wrap">
                                <svg className="balance__icon balance__icon--lg">
                                    <use href={sprite + '#icon-plus'}></use>
                                </svg>
                            </span>
                            <span>Получить</span>
                        </Link>
                    </li>
                    <li className="balance__item">
                        <Link to='send' className="balance__link">
                            <span className="balance__icon-wrap">
                                <svg className="balance__icon">
                                    <use href={sprite + '#icon-send'}></use>
                                </svg>
                            </span>
                            <span>Отправить</span>
                        </Link>
                    </li>
                    <li className="balance__item">
                        <Link to='history' className="balance__link">
                            <span className="balance__icon-wrap">
                                <svg className="balance__icon">
                                    <use href={sprite + '#icon-history'}></use>
                                </svg>
                            </span>
                            <span>История</span>
                        </Link>
                    </li>
                    <li className="balance__item">
                        <Link to='premium' className="balance__link">
                            <span className="balance__icon-wrap balance__icon-wrap--gradient">
                                <svg className="balance__icon">
                                    <use href={sprite + '#icon-diamond'}></use>
                                </svg>
                            </span>
                            <span>Премиум</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Balance;