// APW 1.1
// Aplicación principal

// Libreías
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MetadataProvider } from './model/metadata';

// Variables de diseño (Tokens)
import { StyleProvider } from '@soft4pilot/sdb'; // NOTA: Se utilizará esta técnica!

// Componentes utilizados
import Header from './components/Header';
// import Footer from './components/Footer';

// Recursos disponibles
import Home from './interfaces/Home';

// Crear componente raíz
const App = () => (

  <MetadataProvider>
    <Router>
      <StyleProvider>
        <Header/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </StyleProvider>
    </Router>
  </MetadataProvider>
);

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
