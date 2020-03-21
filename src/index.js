// APW 1.1
// Aplicación principal

// Libreías
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Modelo de datos
import model from './model';

// Componentes utilizados
import Header from './components/Header';
import Footer from './components/Footer';

// Recursos disponibles
import Home from './containers/Home';
import Page from './containers/Page';

// Estilo global
import GlobalStyle from './style';

// Crear componente raíz
const App = () => {

  return (
    <Provider store={model}>
      <GlobalStyle />
      <Router>
        <Header/>
        <Switch>
          <Route path="/page" component={Page}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );

}

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
