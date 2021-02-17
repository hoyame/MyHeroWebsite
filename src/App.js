import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PasswordView from './views/password';
import HomeViews from './views/home';

import './App.css';


{
  /*
        <img className="logo" src="https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"></img>
        <p className="text-def copyright">© 2020-2021 MyHeroes. Tous droits réservés. </p>
  */
}


const App = () => {
  return (
    <div className="App">
        <div className="header">
          <img className="logo" src="https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"></img>

          <div className="header-buttons">
            <div className="header-button">C.G.U</div>
            <div className="header-button">Telecharger</div>
          </div>
        </div>

        <div className="content">        
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
    </div>
  );
}

export default App;
