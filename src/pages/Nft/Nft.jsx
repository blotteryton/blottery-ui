import React from 'react';
import Header from '../../components/Header/Header';
import Price from '../../components/Price/Price';
import Button from '../../components/Button/Button';

import './Nft.scss';
import NFTimage from "../../assets/images/nft.jpg";

const Nft = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header share={true} />
            <div className="nft">
                <picture className="nft__img">
                    <img src={NFTimage} alt="NFT" />
                </picture>
                <div className="nft__info">
                    <span className="nft__nickname">@bloger_name</span>
                    <h2 className="nft__name">TechRobot #9242</h2>
                    <Price value={'0.000000001'}/>
                    <Button to={'send'} className="nft__btn" title='Отправить' />
                </div>
                <div className="nft__body">
                    <h3 className="nft__title">Описание</h3>
                    <p className="nft__description">Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров.</p>
                    <ul className="nft__tags">
                        <li className="nft__tags-item">Heroes</li>
                        <li className="nft__tags-item">Games</li>
                        <li className="nft__tags-item">TON</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nft;