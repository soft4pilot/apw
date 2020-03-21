// APW 1.1
// Interfaces - Home

import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

// Componentes utilizados
import Product from '../components/Product';

const Container = Styled.main`
  padding: 20px;
`;

// Interfaz exportada
const Home = props => {

  // Estructura
  return (
      <Container>
        <Product />
      </Container>
  );
}

export default Home;
