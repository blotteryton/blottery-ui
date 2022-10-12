import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Notification from './pages/Notification';
import Marketplace from './pages/Marketplace';
import Cabinet from './pages/Cabinet';
import Send from './pages/Send';
import Get from './pages/Get';
import Nft from './pages/Nft/Nft';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Cabinet />}></Route>
                    <Route path='/get' element={<Get />}></Route>
                    <Route path='/send' element={<Send />}></Route>
                    <Route path='notification' element={<Notification />}></Route>
                    <Route path='marketplace' element={<Marketplace />}></Route>
                    <Route path='marketplace/nft' element={<Nft />}></Route>
                    <Route path='marketplace/nft/send' element={<Send />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;