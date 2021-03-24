import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import io from 'socket.io-client';
import axios from 'axios';
import PasswordView from './views/password';
import HomeViews from './views/home';
import AdminView from './views/admin';

import './App.css';

export let AlertList = [];
export let InformationsH24 = [];
export let InformationsH24AV = [];

const SOCKET_URL = 'http://146.59.227.90:3333';

export const socket = io.connect(SOCKET_URL, {
    transports: ['websocket'],
    reconnectionAttempts: 15 //Nombre de fois qu'il doit réessayer de se connecter
});

const App = () => {
  axios.get(`${SOCKET_URL}/list/get`)
    .then((response) => {
        const data = response.data;
        console.log("d", data)
        InformationsH24 = data;
    })

    .catch((err) => {
        console.log("err", err);
    }
  )

  axios.get(`${SOCKET_URL}/list/get-verif`)
    .then((response) => {
        const data = response.data;
        console.log("d", data)
        InformationsH24AV = data;
    })

    .catch((err) => {
        console.log("err", err);
    }
  )

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
