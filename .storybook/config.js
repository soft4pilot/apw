// APW 1.1
// Guía de estilos - Redux

// Libreías
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { addDecorator } from '@storybook/react';

// Modelo de datos
import model from '../src/model';

// Estilo global
import GlobalStyle from '../src/style';


addDecorator(Stories => (

  <Provider store={model}>
      <GlobalStyle />
      <Router>
        <Stories />
      </Router>
  </Provider>

));


//configure(require.context('../src', true, /\.stories\.js$/), module);
