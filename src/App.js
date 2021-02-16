import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PasswordView from './views/password';
import HomeViews from './views/home';

import './App.css';


const App = () => {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <HomeViews />
            </Route>

            <Route 
              path="/password-reset/:token"   
              render={props => <PasswordView {...props} />}
            >
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
