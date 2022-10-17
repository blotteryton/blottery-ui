import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

import './RecommendedAuthors.scss';
import Ava from "../../assets/images/ava.jpg";

const RecommendedAuthors = () => {
    return (
        <div className="recommended-authors">
            <CustomLink to='author' className="recommended-authors__item">
                <picture className="recommended-authors__img">
                    <img src={Ava} alt="Ava" />
                </picture>
                <span className="recommended-authors__name">Bloger Name</span>
            </CustomLink>
            <CustomLink to='author' className="recommended-authors__item">
                <picture className="recommended-authors__img">
                    <img src={Ava} alt="Ava" />
                </picture>
                <span className="recommended-authors__name">Bloger Name</span>
            </CustomLink>
        </div>
    );
}

export default RecommendedAuthors;