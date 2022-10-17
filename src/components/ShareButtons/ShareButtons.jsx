import React from 'react';

import './ShareButtons.scss';
import sprite from '../../assets/images/sprite.svg';

const ShareButtons = () => {
    return (
        <ul className="share-buttons">
            <li className="share-buttons__item">
                <button className="share-buttons__btn">
                    <svg className='share-buttons__icon'>
                        <use href={sprite + '#icon-global'}></use>
                    </svg>
                </button>
            </li>
            <li className="share-buttons__item">
                <button className="share-buttons__btn">
                    <svg className='share-buttons__icon'>
                        <use href={sprite + '#icon-share'}></use>
                    </svg>
                </button>
            </li>
        </ul>
    );
}

export default ShareButtons;