import React, {Component} from 'react';
import ShareButtons from '../ShareButtons/ShareButtons';
import InfoTable from '../InfoTable/InfoTable';

import '../AboutAuthor/AboutAuthor.scss';
import CollectionsDataService from "../../services/collection.service";



export default class AboutCollectionAuthor extends Component {
    constructor(props) {
        super(props);
        this.getCollection = this.getCollection.bind(this);

        this.state = {
            currentCollection: {
                id: null,
                author: {
                    avatar: "",
                    cover: "",
                    first_name: "",
                    last_name: "",
                },
                info: {
                    creator: "",
                    nft_count: 0,
                    total_cash: 0,
                    floor_price: 0,
                },
            },
        };
    }

    componentDidMount() {
        this.getCollection(this.props.collectionId);
    }

    getCollection(id) {
        CollectionsDataService.get(id)
            .then(response => {
                this.setState({
                    currentCollection: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentCollection } = this.state;

        return (
            <div className="author-info">
                <picture className="author-info__cover">
                    <img src={ currentCollection.author.cover } alt="Cover" />
                </picture>
                <div className="author-info__top">
                    <picture className="author-info__img">
                        <img src={ currentCollection.author.avatar } alt="Cover" />
                    </picture>
                    <ShareButtons />
                </div>
                <h2 className="author-info__title">{ currentCollection.author.first_name } { currentCollection.author.last_name }</h2>
                <InfoTable { ...currentCollection.info } />
            </div>
        );
    }
}