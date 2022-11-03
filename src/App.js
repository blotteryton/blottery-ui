import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Notification from './pages/Notification';
import Marketplace from './pages/Marketplace';
import Cabinet from './pages/Cabinet';
import Send from './pages/Send';
import Get from './pages/Get';
import Nft from './pages/Nft/Nft';
import Collection from './pages/Collection';
import Collections from './pages/Collections';
import AuthorPage from './pages/AuthorPage';
import News from './pages/News';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Navigate to='cabinet' replace />}></Route>
                    <Route path='cabinet'>
                        <Route index element={<Cabinet />}></Route>
                        <Route path='get' element={<Get />}></Route>
                        <Route path='send' element={<Send />}></Route>
                        <Route path='nft'>
                            <Route index element={<Nft />}></Route>
                            <Route path='send' element={<Send />}></Route>
                        </Route>
                    </Route>
                    <Route path='notification' element={<Notification />}></Route>
                    <Route path='marketplace'>
                        <Route index element={<Marketplace />}></Route>
                        <Route path='nft'>
                            <Route index element={<Nft />}></Route>
                            <Route path='send' element={<Send />}></Route>
                        </Route>
                        <Route path='collection'>
                            <Route index element={<Collection />}></Route>
                            <Route path='nft'>
                                <Route index element={<Nft />}></Route>
                                <Route path='send' element={<Send />}></Route>
                            </Route>
                        </Route>
                        <Route path='author'>
                            <Route index element={<AuthorPage />}></Route>
                            <Route path='nft'>
                                <Route index element={<Nft />}></Route>
                                <Route path='send' element={<Send />}></Route>
                            </Route>
                        </Route>
                        <Route path='collections' element={<Collections />}></Route>
                        <Route path='news' element={<News />}></Route>
                    </Route>
                    <Route path="*" element={<Navigate to='cabinet' replace />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;