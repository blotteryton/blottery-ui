import React from 'react';

import './Price.scss';
import sprite from '../../assets/images/sprite.svg';

const Price = (props) => {
    return (
        <div className={"price " + props.className}>
            <div className="price__icon-wrap">
                <svg className="price__icon">
                    <use href={sprite + '#icon-diamond'}></use>
                </svg>
            </div>
            <span className="price__value">{props.value} TON</span>
        </div>
    );
}

export default Price;