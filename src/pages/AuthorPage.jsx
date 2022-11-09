import React from 'react';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import AboutAuthor from '../components/AboutAuthor/AboutAuthor';
import AboutAuthorCollections from '../components/AboutAuthor/AboutAuthorCollections';

import {useParams} from "react-router-dom";

const AuthorPage = () => {
    return (
        <div className="wrapper__content wrapper__content--header">
            <Header />
            <div className="wrapper__section">
                <AboutAuthor {...useParams()}/>
            </div>
            <div className="wrapper__section">
                <Heading title={'Коллекции NFT'} />
                <AboutAuthorCollections {...useParams()}/>
            </div>
        </div>
    );
}

export default AuthorPage;