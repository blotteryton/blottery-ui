import React, {Component} from 'react';

import '../AboutAuthor/AboutAuthor.scss';
import CollectionsDataService from "../../services/collection.service"
import CustomLink from "../CustomLink/CustomLink";
import Price from "../Price/Price";
import ButtonDefault from "../Button/ButtonDefault";



export default class CollectionNfts extends Component {
    constructor(props) {
        super(props);
        this.getCollectionNfts = this.getCollectionNfts.bind(this);

        this.state = {
            id: this.props.collectionId,
            offset: 0,
            CollectionNfts: {
                "count": 0,
                "next": null,
                "previous": null,
                "results": []
            },
        };
    }

    componentDidMount() {
        this.getCollectionNfts();
    }

    getCollectionNfts() {
        CollectionsDataService.getCollectionNfts(this.state.id, 10, this.state.offset)
            .then(response => {
                response.data.results = this.state.CollectionNfts.results.concat(response.data.results)
                this.setState({
                    CollectionNfts: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset: this.state.offset + 10
        });
    }

    render() {
        const { CollectionNfts } = this.state;

        return (
            <div className="nft-list">
                {CollectionNfts.results.map(nft => (
                    <CustomLink to={'/marketplace/nfts/' + nft.id + '/'} className="nft-list__item" key={nft.id}>
                        <picture className="nft-list__img">
                            <img src={nft.image} alt="NFT" />
                        </picture>
                        <div className="nft-list__body">
                            <span className="nft-list__name">{ nft.name }</span>
                            <Price className='price--sm' value={ nft.price }/>
                        </div>
                    </CustomLink>
                ))}
                {CollectionNfts.next ? <ButtonDefault clicked={this.getCollectionNfts} className="notification-list__more" title='Показать еще' />: null}
            </div>
        );
    }
}