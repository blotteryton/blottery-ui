import React from 'react';
import Header from '../../components/Header/Header';
import AboutNft from '../../components/AboutNft/AboutNft'

import './Nft.scss';
import {useParams} from "react-router-dom";

const Nft = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header share={true} />
            <AboutNft {...useParams()} />
        </div>
    );
}

export default Nft;