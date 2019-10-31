import React from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import MonsterCard from '../src/components/monster-card/Monstercard'
import Navb from './components/navbar/Navbar';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Router from './components/router/Router';

function App() {
  return (
    <div>
      <Navb/>
    <div className='cotainerApp'>
      <Router />
      <Footer/>
    </div>
    </div>
  );
}

export default App;
