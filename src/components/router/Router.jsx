import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route exact path='/history' component={History} />
                <Route exact path='/' component={HomePage} />
            </Switch>
         );
    }
}
 
export default Router;

