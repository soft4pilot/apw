// APW 1.1
// Aplicación principal

// Libreías
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MetadataProvider } from './model/metadata';

// Variables de diseño (Tokens)
import { Style } from '@soft4pilot/sdb'; // NOTA: Se utilizará esta técnica!

// Componentes utilizados
import Header from './components/Header';
// import Footer from './components/Footer';

// Recursos disponibles
import Home from './interfaces/Home';

// Crear componente raíz
const App = () => (

  <MetadataProvider>
    <Router>
      <Style>
        <Header/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Style>
    </Router>
  </MetadataProvider>
);

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
