// APW 1.1

// import * as Services from './services'; <-- PENDIENTE: Agregar servicio fuera de línea (off-line)

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";

import Metadata from 'model/Metadata';

import Navigation from 'components/organisms/Navigation';
import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

import Home from 'interfaces/Home';
import About from 'interfaces/About';

const App = () => (
  <div>
    <Navigation />
    <Header />
    <Router>
      <Home path="/" metadata={ Metadata } />
      <About path="about" />
    </Router>
    <Footer>
      Pie de página
    </Footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// Services.unregister();
