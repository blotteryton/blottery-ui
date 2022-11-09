import React, {Component} from 'react';

import './AboutAuthor.scss';
import AuthorDataService from "../../services/author.service"
import CustomLink from "../CustomLink/CustomLink";
import ButtonDefault from "../Button/ButtonDefault";



export default class AboutAuthor extends Component {
    constructor(props) {
        super(props);
        this.getAuthorCollections = this.getAuthorCollections.bind(this);

        this.state = {
            id: this.props.authorId,
            offset: 0,
            AuthorCollections: {
                "count": 0,
                "next": null,
                "previous": null,
                "results": []
            },
        };
    }

    componentDidMount() {
        this.getAuthorCollections();
    }

    getAuthorCollections() {
        AuthorDataService.getCollections(this.state.id, 10, this.state.offset)
            .then(response => {
                response.data.results = this.state.AuthorCollections.results.concat(response.data.results)
                this.setState({
                    AuthorCollections: response.data
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
        const { AuthorCollections } = this.state;

        return (
            <div className="nft-cover-list">
                {AuthorCollections.results.map(collection => (
                    <CustomLink to={'/marketplace/collections/' + collection.id + '/'}
                                className="nft-cover-list__item" key={collection.id}>
                        <div className="nft-cover-list__cover">
                            <img src={collection.image} alt="NFT Collection" />
                        </div>
                        <picture className="nft-cover-list__img">
                            <img src={collection.image} alt="NFT Collection" />
                        </picture>
                        <div className="nft-cover-list__body">
                            <span className="nft-cover-list__name">{collection.name}</span>
                            <span className="nft-cover-list__price">Floor Price: {collection.floor_price} TON</span>
                        </div>
                    </CustomLink>
                ))}
                {AuthorCollections.next ? <ButtonDefault clicked={this.getAuthorCollections} className="notification-list__more" title='Показать еще' />: null}
            </div>
        );
    }
}