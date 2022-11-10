import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Heading from '../components/Heading/Heading';
import RecommendedCollections from '../components/RecommendedCollections/RecommendedCollections';
import RecommendedAuthors from '../components/RecommendedAuthors/RecommendedAuthors';
import CustomLink from '../components/CustomLink/CustomLink';
import Button from '../components/Button/Button';
import ButtonDefault from '../components/Button/ButtonDefault';

const Marketplace = () => {
    function clickMe() {
        console.log('text');
    }

    return (
        <div className="wrapper__content">
            <div className="wrapper__section">
                <Heading title={'Рекомендованные коллекции'} />
                <RecommendedCollections />
            </div>
            <div className="wrapper__section">
                <Heading title={'Популярные коллекции'} />
                <div className="notification-list">
                    <CustomLink to='collection' className="notification-list__item">
                        <div className="notification-list__block">
                            <picture className="notification-list__img"></picture>
                            <div className="notification-list__group">
                                <span className="notification-list__name">Golden Tiger</span>
                                <span className="notification-list__help">Floor Price: 3 TON</span>
                            </div>
                        </div>
                        {/*<div className="notification-list__block">
                            <span className="notification-list__name">785.44 TON</span>
                            <div className="notification-list__inner">
                                <span className="notification-list__help">$846.4K</span>
                                <span className="notification-list__help notification-list__help--green">+250%</span>
                            </div>
                        </div>*/}
                    </CustomLink>
                    <CustomLink to='collection' className="notification-list__item">
                        <div className="notification-list__block">
                            <picture className="notification-list__img"></picture>
                            <div className="notification-list__group">
                                <span className="notification-list__name">Dummy</span>
                                <span className="notification-list__help">Floor Price: 0.4 TON</span>
                            </div>
                        </div>
                        {/*<div className="notification-list__block">
                            <span className="notification-list__name">785.44 TON</span>
                            <div className="notification-list__inner">
                                <span className="notification-list__help">$131K</span>
                                <span className="notification-list__help notification-list__help--green">+32%</span>
                            </div>
                        </div>*/}
                    </CustomLink>
                    <Button to='collections' className="notification-list__more" title='Все коллекции' />
                    <ButtonDefault clicked={clickMe} className="notification-list__more" title='Все коллекции' />
                </div>
            </div>
            <div className="wrapper__section wrapper__section--background">
                <Heading title={'Рекомендуемые авторы'} />
                <RecommendedAuthors />
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
                                    {/*<div className="notification-list__block">
                                        <span className="notification-list__name">785.44 TON</span>
                                        <div className="notification-list__inner">
                                            <span className="notification-list__help">$846.4K</span>
                                            <span className="notification-list__help notification-list__help--green">+250%</span>
                                        </div>
                                    </div>*/}
                                </div>
                                <div className="notification-list__item">
                                    <div className="notification-list__block">
                                        <picture className="notification-list__img"></picture>
                                        <div className="notification-list__group">
                                            <span className="notification-list__name">Dummy</span>
                                            <span className="notification-list__help">Floor Price: 0.4 TON</span>
                                        </div>
                                    </div>
                                    {/*<div className="notification-list__block">
                                        <span className="notification-list__name">785.44 TON</span>
                                        <div className="notification-list__inner">
                                            <span className="notification-list__help">$131K</span>
                                            <span className="notification-list__help notification-list__help--green">+32%</span>
                                        </div>
                                    </div>*/}
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
                                    {/*<div className="notification-list__block">
                                        <span className="notification-list__name">785.44 TON</span>
                                        <div className="notification-list__inner">
                                            <span className="notification-list__help">$846.4K</span>
                                            <span className="notification-list__help notification-list__help--green">+250%</span>
                                        </div>
                                    </div>*/}
                                </div>
                                <div className="notification-list__item">
                                    <div className="notification-list__block">
                                        <picture className="notification-list__img"></picture>
                                        <div className="notification-list__group">
                                            <span className="notification-list__name">Dummy</span>
                                            <span className="notification-list__help">Floor Price: 0.4 TON</span>
                                        </div>
                                    </div>
                                    {/*<div className="notification-list__block">
                                        <span className="notification-list__name">785.44 TON</span>
                                        <div className="notification-list__inner">
                                            <span className="notification-list__help">$131K</span>
                                            <span className="notification-list__help notification-list__help--green">+32%</span>
                                        </div>
                                    </div>*/}
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
                                    {/*<div className="notification-list__block">
                                        <span className="notification-list__name">785.44 TON</span>
                                        <div className="notification-list__inner">
                                            <span className="notification-list__help">$846.4K</span>
                                            <span className="notification-list__help notification-list__help--green">+250%</span>
                                        </div>
                                    </div>*/}
                                </div>
                                <div className="notification-list__item">
                                    <div className="notification-list__block">
                                        <picture className="notification-list__img"></picture>
                                        <div className="notification-list__group">
                                            <span className="notification-list__name">Dummy</span>
                                            <span className="notification-list__help">Floor Price: 0.4 TON</span>
                                        </div>
                                    </div>
                                    {/*<div className="notification-list__block">
                                        <span className="notification-list__name">785.44 TON</span>
                                        <div className="notification-list__inner">
                                            <span className="notification-list__help">$131K</span>
                                            <span className="notification-list__help notification-list__help--green">+32%</span>
                                        </div>
                                    </div>*/}
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

export default Marketplace;