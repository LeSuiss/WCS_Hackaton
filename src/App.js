import React from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import MonsterCard from '../src/components/monster-card/Monstercard'
import Navb from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navb/>
      </div>
      <div className='cotainerApp'>
        <MonsterCard/>
      </div>
      <div>
        <Footer/>
      </div>        
    </div>
  );
}

export default App;
