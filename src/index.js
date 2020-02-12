// APW 1.1
// Punto de entrada

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Metadatos del producto
import State, { initialState } from './metadata';

// Componentes utilizados
import Header from './components/organisms/Header';

// Recursos disponibles
import Home from './interfaces/Home';
import Page from './interfaces/Page';

// Estilo global
import GlobalStyle from './style';


// Crear componente raíz
const App = () => {

  return (
    <div>
      <GlobalStyle />
      <State.Provider value={initialState}>
        <Router>
          <Header />
          <Switch>
            <Route path="/page">
              <Page/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </State.Provider>
    </div>
  );

}

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
