import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './Button.scss';
import sprite from '../../assets/images/sprite.svg';

const Button = (props) => {
    return (
        <CustomLink to={props.to} className={"btn " + props.className}>
            { props.icon ? 
                <svg className="btn__icon">
                    <use href={sprite + props.icon}></use>
                </svg>
                :
                null
            }
            <span>{props.title}</span>
        </CustomLink>
    );
}

export default Button;