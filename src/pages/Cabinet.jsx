import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import Heading from '../components/Heading/Heading';
import Balance from '../components/Balance/Balance';
import CustomLink from '../components/CustomLink/CustomLink';
import Price from '../components/Price/Price';

import NFTimage from "../assets/images/nft.jpg";

const Cabinet = () => {
    return (
        <div className="wrapper__content">
            <div className="wrapper__section">
                <Heading title={'Личный кабинет'} />
                <Balance ton={'424.869340000'} currency={'19,370.612'}/>
            </div>
            <div className="wrapper__section">
                <Heading subtitle={'NFT коллекции'} />
                <Accordion>
                    {[1, 2, 3, 4].map(item => {
                    return (
                        <AccordionItem title={`Collection ${item}`} expanded={item === 1}>
                        <div>
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
                        </AccordionItem>
                    );
                    })}
                </Accordion>
            </div>
        </div>
    );
}

export default Cabinet;