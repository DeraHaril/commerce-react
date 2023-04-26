import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App(){
  return(
    <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/shop' Component={ShopPage}/>
    </Routes>
  )
} 

export default App;
