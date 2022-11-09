import React, {Component} from 'react';

import Price from '../../components/Price/Price';
import Button from '../../components/Button/Button';

import '../../pages/Nft/Nft.scss';
import NftDataService from "../../services/nft.service"



export default class AboutNft extends Component {
    constructor(props) {
        super(props);
        this.getNft = this.getNft.bind(this);

        this.state = {
            currentNft: {
                id: 0,
                username: "",
                name: "",
                description: "",
                image: "",
                price: "",
                categories: [],
                address: ""
            },
        };
    }

    componentDidMount() {
        this.getNft(this.props.nftId);
    }

    getNft(id) {
        NftDataService.get(id)
            .then(response => {
                this.setState({
                    currentNft: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentNft } = this.state;

        return (
            <div className="nft">
                <picture className="nft__img">
                    <img src={currentNft.image} alt="NFT" />
                </picture>
                <div className="nft__info">
                    <span className="nft__nickname">@{currentNft.username}</span>
                    <h2 className="nft__name">{currentNft.name}</h2>
                    <Price value={currentNft.price}/>
                    <Button to={'send'} className="nft__btn" title='Отправить' />
                </div>
                <div className="nft__body">
                    <h3 className="nft__title">Описание</h3>
                    <p className="nft__description">{currentNft.description}</p>
                    <ul className="nft__tags">
                        {currentNft.categories.map(category => (
                            <li className="nft__tags-item" key={category.id}>{category.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}