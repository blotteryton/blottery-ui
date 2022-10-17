import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';
import sprite from '../../assets/images/sprite.svg';

const Header = (props) => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <header className="header">
            <button className="header__btn" onClick={goBack}>
                <svg className="header__btn-icon">
                    <use href={sprite + '#icon-arrow-back'}></use>
                </svg>
            </button>
            { props.share === true ? 
                <button className="header__btn">
                    <svg className="header__btn-icon header__btn-icon--sm">
                        <use href={sprite + '#icon-share'}></use>
                    </svg>
                </button>
                :
                null
            }
        </header>
    );
}

export default Header;