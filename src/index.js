// APW 1.1

// import * as Services from './services'; <-- PENDIENTE: Agregar servicio fuera de línea (off-line)

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";

import Header from './components/organisms/Header';

import Home from './interfaces/Home';
import Page from './interfaces/Page';

const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
      <Page path="/page" />
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// Services.unregister();
