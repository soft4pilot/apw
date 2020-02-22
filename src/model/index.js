// APW 1.1
// Recursos de información

// Librerías
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Acceso a la API
import apiMidleware from "./api";

// Importar metadatos
import company from './metadata/company';
import product from './metadata/product';
import resources from './metadata/resources';
import user from './metadata/user';

// Importar recursos
import items from './items';

// Combinar reductores
const reducers = combineReducers({
  company,
  product,
  resources,
  user,
  items
});

// Crear el modelo de datos
const model = createStore(reducers, applyMiddleware(apiMidleware));

export default model;
