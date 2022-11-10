import React, {Component} from 'react';

import RecommendationsDataService from "../../services/recommendations.service"
import Heading from "../Heading/Heading";
import RecommendedCollections from "../RecommendedCollections/RecommendedCollections";
import CustomLink from "../CustomLink/CustomLink";
import Button from "../Button/Button";
import RecommendedAuthors from "../RecommendedAuthors/RecommendedAuthors";
import AuthDataService from "../../services/auth.service";
import Cookies from "js-cookie"
import Notifications from "../Notifications/Notifications";


export default class MarketplaceMain extends Component {
    constructor(props) {
        super(props);

        this.getRecommendations = this.getRecommendations.bind(this);
        this.getAuth = this.getAuth.bind(this);

        this.state = {
            Recommendations: {
                "recommended_collections": [],
                "popular_collections": [],
                "recommended_authors": []
            },
        };
    }

    componentDidMount() {
        this.getAuth();
        this.getRecommendations();
    }

    getRecommendations() {
        RecommendationsDataService.getAll()
            .then(response => {
                this.setState({
                    Recommendations: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    getAuth() {
        const user_uid = this.props.search_params.get("user_uid")
        if (user_uid) {
            AuthDataService.get(user_uid)
                .then(response => {
                    Cookies.set("token", response.data.token, {SameSite: "None", secure: true});

                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render() {
        const { Recommendations } = this.state;

        return (
            <div className="wrapper__content">
                <div className="wrapper__section">
                    <Heading title={'Рекомендованные коллекции'} />
                    <RecommendedCollections recommends={Recommendations} slug={'recommend_collection_'} />
                </div>
                <div className="wrapper__section">
                    <Heading title={'Популярные коллекции'} />
                    <div className="notification-list">
                        {Recommendations.popular_collections.map(collection => (
                            <CustomLink to={'/marketplace/collections/' + collection.id + '/'} className="notification-list__item" key={'popular_' + collection.id}>
                                <div className="notification-list__block">
                                    <picture className="notification-list__img">
                                        <img src={collection.image} alt="Collection" />
                                    </picture>
                                    <div className="notification-list__group">
                                        <span className="notification-list__name">{collection.name}</span>
                                        <span className="notification-list__help">Floor Price: {collection.floor_price} TON</span>
                                    </div>
                                </div>
                            </CustomLink>
                        ))}
                        <Button to='/marketplace/collections/' className="notification-list__more" title='Все коллекции' />
                    </div>
                </div>
                <div className="wrapper__section wrapper__section--background">
                    <Heading title={'Рекомендуемые авторы'} />
                    <RecommendedAuthors recommends={Recommendations} slug={'recommend_authors_'} />
                </div>
                <Notifications heading={'Новости'} more={false} />
                <Button to='news' className="wrapper__more" title='Все новости' />
            </div>
        );
    }
}