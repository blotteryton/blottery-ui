import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import CustomLink from '../components/CustomLink/CustomLink';
import Price from '../components/Price/Price';
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
                <div className="nft-list">
                    <CustomLink to='nft' className="nft-list__item">
                        <picture className="nft-list__img">
                            <img src={NFTimage} alt="NFT" />
                        </picture>
                        <div className="nft-list__body">
                            <span className="nft-list__name">Warrior Woman #9523234</span>
                            <Price className='price--sm' value={'0.000000001'}/>
                        </div>
                    </CustomLink>
                    <CustomLink to='nft' className="nft-list__item">
                        <picture className="nft-list__img">
                            <img src={NFTimage} alt="NFT" />
                        </picture>
                        <div className="nft-list__body">
                            <span className="nft-list__name">Warrior Woman #9523234</span>
                            <Price className='price--sm' value={'0.000000001'}/>
                        </div>
                    </CustomLink>
                    <CustomLink to='nft' className="nft-list__item">
                        <picture className="nft-list__img">
                            <img src={NFTimage} alt="NFT" />
                        </picture>
                        <div className="nft-list__body">
                            <span className="nft-list__name">Warrior Woman #9523234</span>
                            <Price className='price--sm' value={'0.000000001'}/>
                        </div>
                    </CustomLink>
                    <CustomLink to='nft' className="nft-list__item">
                        <picture className="nft-list__img">
                            <img src={NFTimage} alt="NFT" />
                        </picture>
                        <div className="nft-list__body">
                            <span className="nft-list__name">Warrior Woman #9523234</span>
                            <Price className='price--sm' value={'0.000000001'}/>
                        </div>
                    </CustomLink>
                </div>
            </div>
        </div>
    );
}

export default AuthorPage;