// APW 1.1
// Recursos de información

// Librerías
import React from 'react';
import { createStore, combineReducers } from 'redux';

// Importar reductores
import company from './metadata/company';
import product from './metadata/product';
import resources from './metadata/resources';
import user from './metadata/user';

const reducers = combineReducers({
  company,
  product,
  resources,
  user
});

const model = createStore(reducers);

export default model;
