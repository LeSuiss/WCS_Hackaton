import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MonsterCard from '../monster-card/Monstercard';

class Router extends Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route exact path='/history' component={History} />
                <Route exact path='/' component={MonsterCard} />
            </Switch>
         );
    }
}
 
export default Router;

