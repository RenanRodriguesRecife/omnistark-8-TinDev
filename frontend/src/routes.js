import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Login from './pages/Login';
import Main from './pages/Main';

export default function Rout(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}