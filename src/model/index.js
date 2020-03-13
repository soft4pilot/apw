// APW 1.1
// Recursos de información

// Librerías
import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';

// Acceso a la API
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

// Importar metadatos
import company from './metadata/company';
import product from './metadata/product';
import resources from './metadata/resources';
import user from './metadata/user';

// Importar recursos de información
import items from './data/items';

// Combinar todos los reductores
const reducers = combineReducers({
  company,
  product,
  resources,
  user,
  items
});

// Configurar el acceso al gestor de contenido
const client = axios.create({
  baseURL: 'http://132.248.31.70:3000/pruebas',
  responseType: 'json'
});

// Crear el modelo de datos
const model = createStore(reducers, applyMiddleware(axiosMiddleware(client)));

export default model;
