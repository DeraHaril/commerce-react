import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route, useParams, Link } from 'react-router-dom';

const Hats = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Hats</h1>
    </div>
  )
}
const Sneakers = () => {
  return(
  <div>
    <Link to='/'><h1>Sneakers</h1></Link>
    <span>{}</span>
  </div>    
  )
}

function App(){
  return(
    <Routes>
      <Route path='/' Component={Homepage}/>
      <Route path='/hats' Component={Hats}/>
      <Route path='/sneakers' Component={Sneakers}/>
    </Routes>
  )
} 

export default App;
