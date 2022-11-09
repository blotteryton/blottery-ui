import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './Balance.scss';
import sprite from '../../assets/images/sprite.svg';

const Balance = (props) => {
    return (
        <div className="balance">
            <div className="balance__top">
                <div className="balance__group">
                    <span className="balance__help">TON</span>
                    <span className="balance__value">{props.ton}</span>
                </div>
                <div className="balance__group">
                    <span className="balance__help">RUB</span>
                    <span className="balance__value">{props.currency}</span>
                </div>
            </div>
            <div className="balance__main">
                <ul className="balance__list">
                    <li className="balance__item">
                        <CustomLink to='get/' className="balance__link">
                            <span className="balance__icon-wrap">
                                <svg className="balance__icon balance__icon--lg">
                                    <use href={sprite + '#icon-plus'}></use>
                                </svg>
                            </span>
                            <span>Получить</span>
                        </CustomLink>
                    </li>
                    <li className="balance__item">
                        <CustomLink to='send/' className="balance__link">
                            <span className="balance__icon-wrap">
                                <svg className="balance__icon">
                                    <use href={sprite + '#icon-send'}></use>
                                </svg>
                            </span>
                            <span>Отправить</span>
                        </CustomLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Balance;