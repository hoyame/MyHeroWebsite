import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PasswordView from './views/password';
import HomeViews from './views/home';

import './App.css';


const App = () => {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <HomeViews />
            </Route>
            <Route path="/password-reset">
              <PasswordView />
            </Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
