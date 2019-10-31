import React from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import MonsterCard from '../src/components/monster-card/Monstercard'
import Navb from './components/navbar/Navbar';
import {Route,Switch,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
        <Navb/>
      </div>
    <div className='cotainerApp'>
      <BrowserRouter>
            <MonsterCard/>
      <Switch>
        <Route path='/MonsterCard/' component={MonsterCard}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
