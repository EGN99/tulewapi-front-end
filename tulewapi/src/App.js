import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  return (
    <Router>
      <div className="App">
        <Title />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Favorites" element={<Favorites/>} />
          <Route path="/Review" element={<Review/>} />
          <Route path="/LoginForm" element={<LoginForm/>} />
          <Route path="/Cuisines" element={<Cuisines/>} />
          <Route path="/MyRestaurant/:id" element={<MyRestaurant/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
  }

export default App;
