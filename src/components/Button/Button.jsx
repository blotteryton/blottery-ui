import React from 'react';

import './Button.scss';
import sprite from '../../assets/images/sprite.svg';

const Button = (props) => {
    return (
        <button className="btn">
            <svg className="btn__icon">
                <use href={sprite + '#icon-share'}></use>
            </svg>
            <span>{props.title}</span>
        </button>
    );
}

export default Button;