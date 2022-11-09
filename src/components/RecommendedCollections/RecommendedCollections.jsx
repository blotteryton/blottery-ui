import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomLink from '../CustomLink/CustomLink';

import 'swiper/css';
import './RecommendedCollections.scss';


const RecommendedCollections = ({recommends, slug}) => {
    return (
        <div className="recommended-collections">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
            >
                {recommends.recommended_collections.map(collection => (
                    <SwiperSlide key={collection.id}>
                        <CustomLink to={'/marketplace/collections/' + collection.id + '/'} className="recommended-collections__slide" key={slug + collection.id}>
                            <picture className="recommended-collections__cover">
                                <img src={collection.author.cover} alt="Cover" />
                            </picture>
                            <picture className="recommended-collections__img">
                                <img src={collection.author.avatar} alt="User ava" />
                            </picture>
                            <div className="recommended-collections__body">
                                <div className="recommended-collections__block">
                                    <span className="recommended-collections__name">{collection.author.first_name} {collection.author.last_name}</span>
                                    <span className="recommended-collections__help">{collection.description}</span>
                                </div>
                            </div>
                        </CustomLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default RecommendedCollections;