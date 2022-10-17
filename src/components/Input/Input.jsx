import React, { useState } from 'react';
import CopyButton from '../CopyButton/CopyButton';

import './Input.scss';
import sprite from '../../assets/images/sprite.svg';

const Input = (props) => {
    const [copyBtnActive, setCopyBtnActive] = useState(false);

    return (
        <div className="input-control__item">
            <label htmlFor={props.idName} className="input-control__label">{props.label}</label>
            <div className="input-control__group">
                <input type="text" id={props.idName} className="input-control__input" />
                { props.icon ? 
                    <button className="input-control__btn">
                        <svg className="input-control__icon">
                            <use href={sprite + props.icon}></use>
                        </svg>
                    </button>
                    : 
                    null
                }
                { props.link ?
                    <button className="input-control__link">{props.link}</button>
                    :
                    null
                }
                { props.help ?
                    <span className="input-control__help">Доступно: {props.help} TON</span>
                    :
                    null
                }
                { props.copy ?
                    <CopyButton active={copyBtnActive} setActive={setCopyBtnActive} />
                    :
                    null
                }
            </div>
        </div>
    );
}

export default Input;