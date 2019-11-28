import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MonsterCard from '../monster-card/Monstercard';
import StoryViewer from '../game/history'

class Router extends Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route exact path='/history' component={StoryViewer} />
                <Route exact path='/' component={MonsterCard} />
            </Switch>
        );
    }
}
 
export default Router;

