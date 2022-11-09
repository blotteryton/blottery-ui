import React, {Component} from 'react';

import RecommendationsDataService from "../../services/recommendations.service"
import Heading from "../Heading/Heading";
import RecommendedCollections from "../RecommendedCollections/RecommendedCollections";
import CustomLink from "../CustomLink/CustomLink";
import Button from "../Button/Button";
import RecommendedAuthors from "../RecommendedAuthors/RecommendedAuthors";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import AuthDataService from "../../services/auth.service";
import Cookies from "js-cookie"


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
        this.getRecommendations();
        this.getAuth();
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
                <div className="wrapper__section">
                    <Heading title={'Новости'} />
                    <div className="tabs">
                        <Tabs>
                            <TabList>
                                <Tab>Обновления</Tab>
                                <Tab>Коллекции</Tab>
                                <Tab>Розыгрышы</Tab>
                                <Tab>Сейлы</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="notification-list">
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">@user3482</span>
                                                <span className="notification-list__help">Запуск сейла новой коллекции с 24.09 до 29.09</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">bloger_99</span>
                                                <span className="notification-list__help">Удалил NFT “7320390аыва2”</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="notification-list">
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">Golden Tiger</span>
                                                <span className="notification-list__help">Floor Price: 3 TON</span>
                                            </div>
                                        </div>
                                        <div className="notification-list__block">
                                            <span className="notification-list__name">785.44 TON</span>
                                            <div className="notification-list__inner">
                                                <span className="notification-list__help">$846.4K</span>
                                                <span className="notification-list__help notification-list__help--green">+250%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">Dummy</span>
                                                <span className="notification-list__help">Floor Price: 0.4 TON</span>
                                            </div>
                                        </div>
                                        <div className="notification-list__block">
                                            <span className="notification-list__name">785.44 TON</span>
                                            <div className="notification-list__inner">
                                                <span className="notification-list__help">$131K</span>
                                                <span className="notification-list__help notification-list__help--green">+32%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="notification-list">
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">Golden Tiger</span>
                                                <span className="notification-list__help">Floor Price: 3 TON</span>
                                            </div>
                                        </div>
                                        <div className="notification-list__block">
                                            <span className="notification-list__name">785.44 TON</span>
                                            <div className="notification-list__inner">
                                                <span className="notification-list__help">$846.4K</span>
                                                <span className="notification-list__help notification-list__help--green">+250%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">Dummy</span>
                                                <span className="notification-list__help">Floor Price: 0.4 TON</span>
                                            </div>
                                        </div>
                                        <div className="notification-list__block">
                                            <span className="notification-list__name">785.44 TON</span>
                                            <div className="notification-list__inner">
                                                <span className="notification-list__help">$131K</span>
                                                <span className="notification-list__help notification-list__help--green">+32%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="notification-list">
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">Golden Tiger</span>
                                                <span className="notification-list__help">Floor Price: 3 TON</span>
                                            </div>
                                        </div>
                                        <div className="notification-list__block">
                                            <span className="notification-list__name">785.44 TON</span>
                                            <div className="notification-list__inner">
                                                <span className="notification-list__help">$846.4K</span>
                                                <span className="notification-list__help notification-list__help--green">+250%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notification-list__item">
                                        <div className="notification-list__block">
                                            <picture className="notification-list__img"></picture>
                                            <div className="notification-list__group">
                                                <span className="notification-list__name">Dummy</span>
                                                <span className="notification-list__help">Floor Price: 0.4 TON</span>
                                            </div>
                                        </div>
                                        <div className="notification-list__block">
                                            <span className="notification-list__name">785.44 TON</span>
                                            <div className="notification-list__inner">
                                                <span className="notification-list__help">$131K</span>
                                                <span className="notification-list__help notification-list__help--green">+32%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <Button to='news' className="wrapper__more" title='Все новости' />
                </div>
            </div>
        );
    }
}