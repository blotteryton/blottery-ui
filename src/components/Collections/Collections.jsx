import React, {Component} from 'react';

import CollectionsDataService from "../../services/collection.service"
import CollectionsList from "./CollectionsList";
import ButtonDefault from "../Button/ButtonDefault";
import Heading from "../Heading/Heading";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";


export default class Collections extends Component {
    constructor(props) {
        super(props);
        this.getPopular = this.getPopular.bind(this);
        this.getNew = this.getNew.bind(this);
        this.getAll = this.getAll.bind(this);

        this.state = {
            offset_popular: 0,
            offset_new: 0,
            offset_all: 0,
            Popular: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            },
            New: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            },
            All: {
                "count": 0,
                "next": "",
                "previous": "",
                "results": []
            }
        };
    }

    componentDidMount() {
        this.getPopular();
        this.getNew();
        this.getAll();
    }

    getPopular() {
        CollectionsDataService.getPopular(10, this.state.offset_popular)
            .then(response => {
                response.data.results = this.state.Popular.results.concat(response.data.results)
                this.setState({
                    Popular: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset_popular: this.state.offset_popular + 10
        });
    }

    getNew() {
        CollectionsDataService.getNew(10, this.state.offset_new)
            .then(response => {
                response.data.results = this.state.New.results.concat(response.data.results)
                this.setState({
                    New: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });

        this.setState({
            offset_new: this.state.offset_new + 10
        });
    }

    getAll() {
        CollectionsDataService.getAll(10, this.state.offset_all)
            .then(response => {
                response.data.results = this.state.All.results.concat(response.data.results)
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

    render() {
        const { Popular } = this.state;
        const { New } = this.state;
        const { All } = this.state;

        return (
            <div className="wrapper__content">
                <div className="wrapper__section">
                    <Heading title={'Коллекции'} />
                    <div className="tabs">
                        <Tabs>
                            <TabList>
                                <Tab>Популярные</Tab>
                                <Tab>Новые</Tab>
                                <Tab>Все</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="notification-list">
                                    <CollectionsList {...Popular} />
                                    {Popular.next ? <ButtonDefault clicked={this.getPopular} className="notification-list__more" title='Показать еще' />: null}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="notification-list">
                                    <CollectionsList {...New} />
                                    {New.next ? <ButtonDefault clicked={this.getNew} className="notification-list__more" title='Показать еще' />: null}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="notification-list">
                                    <CollectionsList {...All} />
                                    {All.next ? <ButtonDefault clicked={this.getAll} className="notification-list__more" title='Показать еще' />: null}
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}