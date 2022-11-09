import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import AboutCollectionAuthor from '../components/AboutCollection/AboutCollectionAuthor';

import CollectionNfts from "../components/AboutCollection/CollectionNfts";
import {useParams} from "react-router-dom";


const Collection = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header />
            <div className="wrapper__section">
                <AboutCollectionAuthor {...useParams()} />
            </div>
            <div className="wrapper__section">
                <Heading title={'Содержание коллекции'} />
                <CollectionNfts {...useParams()} />
            </div>
        </div>
    );
}

export default Collection;