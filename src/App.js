import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import io from 'socket.io-client';

import PasswordView from './views/password';
import HomeViews from './views/home';
import AdminView from './views/admin';


import './App.css';

export let AlertList = [];
{
  /*
        <img className="logo" src="https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"></img>
        <p className="text-def copyright">© 2020-2021 MyHeroes. Tous droits réservés. </p>
  */
}

const SOCKET_URL = 'http://146.59.227.90:3333';

export const socket = io.connect(SOCKET_URL, {
    transports: ['websocket'],
    reconnectionAttempts: 15 //Nombre de fois qu'il doit réessayer de se connecter
});

const App = () => {
  socket.on('connect', function(data) {
    socket.emit('join', 0);
  });

  socket.on('get_alerts', function(data){
    console.log("get_alerts");
    AlertList = []
    data.map((v, k) => {
      AlertList.push(v)
    })
    console.log(AlertList)
  });

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
          />   

          <Route path="/admin" exact={true}>
            <AdminView />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
