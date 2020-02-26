// APW 1.1
// Interfaces - Home

import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

// Componentes utilizados
import Product from '../components/molecules/Product';

const Container = Styled.main`
  padding: 20px;
`;

// Interfaz exportada
const Home = props => {

  // Propiedades
  const {
    product,
  } = props;

  // Estructura
  return (
      <Container>
        <Product product={product}/>

      </Container>
  );
}

// Datos utilizados
const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps)(Home);
