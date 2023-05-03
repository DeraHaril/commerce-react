import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' Component={Homepage}/>
          <Route path='/shop' Component={ShopPage}/>
          <Route path='/signin' Component={SignInAndSignUpPage}/>
        </Routes>      
      </div>
    )
  }

} 

export default App;
