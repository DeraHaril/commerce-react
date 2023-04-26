import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App(){
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' Component={Homepage}/>
        <Route path='/shop' Component={ShopPage}/>
      </Routes>      
    </div>

  )
} 

export default App;
