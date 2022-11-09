import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Heading from '../components/Heading/Heading';
import Button from '../components/Button/Button';
//import CustomTabs from '../components/Tabs/Tabs';

const News = () => {
    return (
        <div className="wrapper__content">
            <div className="wrapper__section">
                <Heading title={'Новости'} />
                <div className="tabs">
                    <Tabs>
                        <TabList>
                            <Tab>Обновления</Tab>
                            <Tab>Коллекции</Tab>
                            <Tab>Розыгрыши</Tab>
                            <Tab>Сейвы</Tab>
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
                                <Button className="notification-list__more" title='Показать еще' />
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
            </div>
        </div>
    );
}

export default News;