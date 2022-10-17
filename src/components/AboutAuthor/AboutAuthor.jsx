import React from 'react';
import ShareButtons from '../ShareButtons/ShareButtons';
import InfoTable from '../InfoTable/InfoTable';

import './AboutAuthor.scss';
import Cover from "../../assets/images/cover.jpg";
import Ava from "../../assets/images/ava.jpg";

const AboutAuthor = () => {
    return (
        <div className="author-info">
            <picture className="author-info__cover">
                <img src={Cover} alt="Cover" />
            </picture>
            <div className="author-info__top">
                <picture className="author-info__img">
                    <img src={Ava} alt="Cover" />
                </picture>
                <ShareButtons />
            </div>
            <h2 className="author-info__title">Maslenikov [Liga NFT]</h2>
            <p className="author-info__description">Gods Unchained is a strategic, skill-based trading card game led by Chris Clay, former Game Director of Magic the Gathering: Arena.</p>
            <InfoTable />
        </div>
    );
}

export default AboutAuthor;