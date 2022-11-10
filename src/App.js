import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Marketplace from './pages/Marketplace';
import CabinetPage from './pages/Cabinet';
import Send from './pages/Send';
import Get from './pages/Get';
import Nft from './pages/Nft/Nft';
import Collection from './pages/Collection';
import CollectionsPage from './pages/Collections';
import AuthorPage from './pages/AuthorPage';
import News from './pages/News';
import NotificationsPage from "./pages/Notification";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Navigate to='cabinet' replace />}></Route>
                    <Route path='cabinet'>
                        <Route index element={<CabinetPage />}></Route>
                        <Route path='get' element={<Get />}></Route>
                        <Route path='send' element={<Send />}></Route>
                        <Route path='nft'>
                            <Route index element={<Nft />}></Route>
                            <Route path='send' element={<Send />}></Route>
                        </Route>
                    </Route>
                    <Route path='notification' element={<NotificationsPage />}></Route>
                    <Route path='marketplace/'>
                        <Route index element={<Marketplace />}></Route>
                        <Route path='nfts/:nftId'>
                            <Route index element={<Nft />}></Route>
                            <Route path='send' element={<Send />}></Route>
                        </Route>
                        <Route path='authors/:authorId'>
                            <Route index element={<AuthorPage />}></Route>
                        </Route>
                        <Route path='collections/'>
                            <Route index element={<CollectionsPage />}></Route>
                            <Route path=':collectionId' element={<Collection />}></Route>
                        </Route>
                        <Route path='news' element={<News />}></Route>
                    </Route>
                    <Route path="*" element={<Navigate to='/cabinet/' replace />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;