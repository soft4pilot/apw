// APW 1.1
// Interfaces - Home

import React from 'react';
import styled from 'styled-components';

// Dependencias
import Product from '../components/Product';

// Estilos
const Container = styled.main`
  
`;

// Componente
const Home = props => {

  // Estructura
  return (
      <Container>
        <Product />
      </Container>
  );
}

export default Home;
