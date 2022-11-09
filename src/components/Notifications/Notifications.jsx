import React, {Component} from 'react';

import NotificationsList from "./NotificationsList";
import ButtonDefault from "../Button/ButtonDefault";
import Heading from "../Heading/Heading";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import NotificationsService from "../../services/notifications.service";


export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.getAll = this.getAll.bind(this);
        this.getCollections = this.getCollections.bind(this);
        this.getSales = this.getSales.bind(this);
        this.getDraws = this.getDraws.bind(this);

        this.state = {
            offset_all: 0,
            offset_collections: 0,
            offset_sales: 0,
            offset_draws: 0,
            All: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            },
            Collections: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            },
            Sales: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            },
            Draws: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            }
        };
    }

    componentDidMount() {
        this.getAll();
        this.getCollections();
        this.getSales();
        this.getDraws();
    }

    getAll() {
        NotificationsService.getAll(10, this.state.offset_all)
            .then(response => {
                response.data.results = this.state.All.results.concat(response.data.results)
                response.data.next = this.props.more ? response.data.next : null

                this.setState({
                    All: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset_all: this.state.offset_all + 10
        });
    }

    getCollections() {
        NotificationsService.getByCategory("COLLECTION", 10, this.state.offset_collections)
            .then(response => {
                response.data.results = this.state.Collections.results.concat(response.data.results)
                response.data.next = this.props.more ? response.data.next : null

                this.setState({
                    Collections: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset_collections: this.state.offset_collections + 10
        });
    }

    getSales() {
        NotificationsService.getByCategory("SALE", 10, this.state.offset_sales)
            .then(response => {
                response.data.results = this.state.Sales.results.concat(response.data.results)
                response.data.next = this.props.more ? response.data.next : null

                this.setState({
                    Sales: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset_sales: this.state.offset_sales + 10
        });
    }

    getDraws() {
        NotificationsService.getByCategory("DRAW", 10, this.state.offset_draws)
            .then(response => {
                response.data.results = this.state.Draws.results.concat(response.data.results)
                response.data.next = this.props.more ? response.data.next : null

                this.setState({
                    Draws: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset_draws: this.state.offset_draws + 10
        });
    }

    render() {
        const { All } = this.state;
        const { Collections } = this.state;
        const { Sales } = this.state;
        const { Draws } = this.state;

        return (
            <div className="wrapper__section">
                <Heading title={this.props.heading} />
                <div className="tabs">
                    <Tabs>
                        <TabList>
                            <Tab>Все</Tab>
                            <Tab>Коллекции</Tab>
                            <Tab>Розыгрышы</Tab>
                            <Tab>Сейлы</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="notification-list">
                                <NotificationsList obj={All} />
                                {All.next ? <ButtonDefault clicked={this.getAll} className="notification-list__more" title='Показать еще' />: null}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="notification-list">
                                <NotificationsList obj={Collections} />
                                {Collections.next ? <ButtonDefault clicked={this.getCollections} className="notification-list__more" title='Показать еще' />: null}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="notification-list">
                                <NotificationsList obj={Sales} />
                                {Sales.next ? <ButtonDefault clicked={this.getSales} className="notification-list__more" title='Показать еще' />: null}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="notification-list">
                                <NotificationsList obj={Draws} />
                                {Draws.next ? <ButtonDefault clicked={this.getDraws} className="notification-list__more" title='Показать еще' />: null}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}