import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import CustomLink from '../components/CustomLink/CustomLink';
import AboutAuthor from '../components/AboutAuthor/AboutAuthor';

import NFTimage from "../assets/images/nft.jpg";

const AuthorPage = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header />
            <div className="wrapper__section">
                <AboutAuthor />
            </div>
            <div className="wrapper__section">
                <Heading title={'NFT коллекции'} />
                <div className="nft-cover-list">
                    <CustomLink to='nft' className="nft-cover-list__item">
                        <div className="nft-cover-list__cover">
                            <img src={NFTimage} alt="NFT" />
                        </div>
                        <picture className="nft-cover-list__img">
                            <img src={NFTimage} alt="NFT" />
                        </picture>
                        <div className="nft-cover-list__body">
                            <span className="nft-cover-list__name">Dummy</span>
                            <span className="nft-cover-list__price">Floor Price: 0.4 TON</span>
                        </div>
                    </CustomLink>
                    <CustomLink to='nft' className="nft-cover-list__item">
                        <div className="nft-cover-list__cover">
                            <img src={NFTimage} alt="NFT" />
                        </div>
                        <picture className="nft-cover-list__img">
                            <img src={NFTimage} alt="NFT" />
                        </picture>
                        <div className="nft-cover-list__body">
                            <span className="nft-cover-list__name">Dummy</span>
                            <span className="nft-cover-list__price">Floor Price: 0.4 TON</span>
                        </div>
                    </CustomLink>
                </div>
            </div>
        </div>
    );
}

export default AuthorPage;