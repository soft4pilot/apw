// APW 1.1
// Aplicación principal

// Libreías
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MetadataProvider } from './model/metadata';

// Estilos globales
import GlobalStyles from './styles.js'; // NOTA: Esta técnica ya no se utilizará...
import { Theme } from '@soft4pilot/sdb'; // NOTA: Se utilizará esta técnica!

// Componentes utilizados
import Header from './components/Header';
import Footer from './components/Footer';

// Recursos disponibles
import Home from './interfaces/Home';
import Page from './interfaces/Page';

// Crear componente raíz
const App = () => (

  <MetadataProvider>
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
  </MetadataProvider>  
);

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
