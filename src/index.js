// APW 1.1
// Aplicación principal

// Libreías
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Estilos globales
import GlobalStyles from './styles.js'; // NOTA: Esta técnica ya no se utilizará...

import { Theme } from '@soft4pilot/sdb';

// Componentes utilizados
import Header from './components/Header';
import Footer from './components/Footer';

// Recursos disponibles
import Home from './interfaces/Home';
import Page from './interfaces/Page';

// Crear componente raíz
const App = () => (
    <Router>
      <GlobalStyles/>
      <Theme>
        <Header/>
        <Switch>
          <Route path="/page" component={Page}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Theme>
    </Router>
);

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
