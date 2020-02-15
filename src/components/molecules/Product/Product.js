import React from 'react';
import Styled from 'styled-components';

import State from '../../../metadata';

import Title from '../../atoms/Title';
import Subtitle from '../../atoms/Subtitle';
import Paragraph from '../../atoms/Paragraph';

// Componente contenedro
const Container = Styled.div`
  /* Marco */
  padding: 40px 20px;
  /* Color */
  background-color: #fbfbfb;
`;

// Componente exportado
const Product = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  // Estructura del componente
  return (
    <Container>
      <Title inline>{state.product.name}</Title>
      <Subtitle inline>{state.product.version}</Subtitle>
      <Paragraph>{state.product.summary}</Paragraph>
    </Container>
  );

}

export default Product;
