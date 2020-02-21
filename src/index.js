// APW 1.1
// Punto de entrada

// Libreías
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Modelo de datos
import model from './model';

// Componentes utilizados
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

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
      <Provider store={model}>
        <Router>
          <Header/>
          <Switch>
            <Route path="/page" component={Page}/>
            <Route path="/" component={Home}/>
          </Switch>
          <Footer/>
        </Router>
      </Provider>
    </div>
  );

}

// Desplegar aplicación principal
ReactDOM.render(<App />, document.getElementById('root'));
