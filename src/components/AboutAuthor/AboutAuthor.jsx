import React, {Component} from 'react';
import ShareButtons from '../ShareButtons/ShareButtons';
import InfoTable from '../InfoTable/InfoTable';

import './AboutAuthor.scss';
import AuthorDataService from "../../services/author.service"



export default class AboutAuthor extends Component {
    constructor(props) {
        super(props);
        this.getAuthor = this.getAuthor.bind(this);

        this.state = {
            currentAuthor: {
                id: null,
                avatar: "",
                cover: "",
                first_name: "",
                last_name: "",
                creator: "",
                info: {
                    nft_count: 0,
                    total_cash: 0,
                    floor_price: 0,
                }
            },
        };
    }

    componentDidMount() {
        this.getAuthor(this.props.authorId);
    }

    getAuthor(id) {
        AuthorDataService.get(id)
            .then(response => {
                this.setState({
                    currentAuthor: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentAuthor } = this.state;

        return (
            <div className="author-info">
                <picture className="author-info__cover">
                    <img src={ currentAuthor.cover } alt="Cover" />
                </picture>
                <div className="author-info__top">
                    <picture className="author-info__img">
                        <img src={ currentAuthor.avatar } alt="Cover" />
                    </picture>
                    <ShareButtons />
                </div>
                <h2 className="author-info__title">{ currentAuthor.first_name } { currentAuthor.last_name }</h2>
                <InfoTable { ...currentAuthor.info } />
            </div>
        );
    }
}