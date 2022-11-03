import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomLink from '../CustomLink/CustomLink';

import 'swiper/css';
import './RecommendedCollections.scss';
import Cover from "../../assets/images/cover.jpg";
import Ava from "../../assets/images/ava.jpg";

const RecommendedCollections = () => {
    return (
        <div className="recommended-collections">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <CustomLink to='collection' className="recommended-collections__slide">
                        <picture className="recommended-collections__cover">
                            <img src={Cover} alt="Cover" />
                        </picture>
                        <picture className="recommended-collections__img">
                            <img src={Ava} alt="User ava" />
                        </picture>
                        <div className="recommended-collections__body">
                            <div className="recommended-collections__block">
                                <span className="recommended-collections__name">Maslenikov [Liga NFT]</span>
                                <span className="recommended-collections__help">NFT коллекция блогера Димы...</span>
                            </div>
                            {/*<div className="recommended-collections__block">
                                <span className="recommended-collections__name">785.44 TON</span>
                                <div className="recommended-collections__inner">
                                    <span className="recommended-collections__help">$741.6K</span>
                                    <span className="recommended-collections__help recommended-collections__help--green">+4250%</span>
                                </div>
                            </div>*/}
                        </div>
                    </CustomLink>
                </SwiperSlide>
                <SwiperSlide>
                    <CustomLink to='collection' className="recommended-collections__slide">
                        <picture className="recommended-collections__cover">
                            <img src={Cover} alt="Cover" />
                        </picture>
                        <picture className="recommended-collections__img">
                            <img src={Ava} alt="User ava" />
                        </picture>
                        <div className="recommended-collections__body">
                            <div className="recommended-collections__block">
                                <span className="recommended-collections__name">Maslenikov [Liga NFT]</span>
                                <span className="recommended-collections__help">NFT коллекция блогера Димы...</span>
                            </div>
                            {/*<div className="recommended-collections__block">
                                <span className="recommended-collections__name">785.44 TON</span>
                                <div className="recommended-collections__inner">
                                    <span className="recommended-collections__help">$741.6K</span>
                                    <span className="recommended-collections__help recommended-collections__help--green">+4250%</span>
                                </div>
                            </div>*/}
                        </div>
                    </CustomLink>
                </SwiperSlide>
                <SwiperSlide>
                    <CustomLink to='collection' className="recommended-collections__slide">
                        <picture className="recommended-collections__cover">
                            <img src={Cover} alt="Cover" />
                        </picture>
                        <picture className="recommended-collections__img">
                            <img src={Ava} alt="User ava" />
                        </picture>
                        <div className="recommended-collections__body">
                            <div className="recommended-collections__block">
                                <span className="recommended-collections__name">Maslenikov [Liga NFT]</span>
                                <span className="recommended-collections__help">NFT коллекция блогера Димы...</span>
                            </div>
                            {/*<div className="recommended-collections__block">
                                <span className="recommended-collections__name">785.44 TON</span>
                                <div className="recommended-collections__inner">
                                    <span className="recommended-collections__help">$741.6K</span>
                                    <span className="recommended-collections__help recommended-collections__help--green">+4250%</span>
                                </div>
                            </div>*/}
                        </div>
                    </CustomLink>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default RecommendedCollections;