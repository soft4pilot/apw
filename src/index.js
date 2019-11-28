// APW 1.1

// import * as Services from './services'; <-- PENDIENTE: Agregar servicio fuera de línea (off-line)

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";

import Home from './containers/Home';
import About from './containers/About';

import Header from './components/organisms/Header';

const App = () => (
  <div>
    <Header />
    <Router>
      <Home path="/" />
      <About path="about" />
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// Services.unregister();
