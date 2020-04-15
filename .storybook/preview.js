// APW 1.1
// Guía de estilos - Redux

// Libreías
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { addDecorator } from '@storybook/react';
// import { configure } from '@storybook/react';

// Estilo global
import '../src/style.css';

// Modelo de datos
import model from '../src/model';

// Agregar un contexto para visualizar Slos componentes
addDecorator(Stories => (

  <Provider store={model}>
      <Router>
        <Stories />
      </Router>
  </Provider>

));
