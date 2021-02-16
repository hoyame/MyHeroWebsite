import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PasswordView from './views/password';

import './App.css';


const App = () => {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/password-reset">
              <PasswordView />
            </Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
