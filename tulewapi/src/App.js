import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Review from './components/Review';
import LoginForm from './components/LoginForm';
import MyRestaurant from './components/MyRestaurant';
import Cuisines from './components/Cuisines';
import Footer from './components/Footer';

function App() {


  
const appName="TuleWapi Restaurant Advisor"
 useEffect(()=>{
  document.title = appName
 },[appName])

 let component
 switch (window.location.pathname){
  case "/":
    component =<Home/>
    break
  case "/Favorites":
    component=<Favorites/>
    break
  case "/Review":
    component=<Review/>
    break
  case "/LoginForm":
    component=<LoginForm/>
    break
  case "/Cuisines":
    component=<Cuisines/>
    break
  case "/MyRestaurant":
    component=<MyRestaurant/>
    break

 }
  
  return (
    <div className="App">
      <Title/>
      <Navbar/>
      {component}
      <Footer/>
    </div>
  );

  }

export default App;
