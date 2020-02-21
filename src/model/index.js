// APW 1.1
// Recursos de información

// Librerías
import React from 'react';
import { createStore, combineReducers } from 'redux';

// Importar reductores
import company from './metadata/company/reducer';
import product from './metadata/product/reducer';
import subjects from './metadata/subjects/reducer';
import user from './metadata/user/reducer';

const reducers = combineReducers({
  company,
  product,
  subjects,
  user
});

const resources = createStore(reducers);

export default resources;
