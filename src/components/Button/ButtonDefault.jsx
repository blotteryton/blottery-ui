import React from 'react';

import './Button.scss';
import sprite from '../../assets/images/sprite.svg';

const Button = (props) => {
    return (
        <button onClick={props.clicked} className={"btn " + props.className}>
            { props.icon ? 
                <svg className="btn__icon">
                    <use href={sprite + props.icon}></use>
                </svg>
                :
                null
            }
            <span>{props.title}</span>
        </button>
    );
}

export default Button;