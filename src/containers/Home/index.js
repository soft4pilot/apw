// APW 1.1
// Interfaces - Home

import React from 'react';
import { connect } from 'react-redux';

// Estilos del Componente
import style from './style.module.css';

// Componentes utilizados
import Product from '../../components/Product';

// Interfaz exportada
const Home = props => {

  // Estructura
  return (
      <main className={style.home}>
        <Product />
      </main>
  );
}

export default Home;
