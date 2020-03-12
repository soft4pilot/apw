import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

// Componentes utilizados
import Title from '../Title';
import Subtitle from '../Subtitle';
import Paragraph from '../Paragraph';

// Componente contenedor
const Container = Styled.div`
  /* Marco */
  padding: 40px 20px;
  /* Color */
  background-color: #fbfbfb;
`;

// Componente exportado
const Product = props => {

  // Propiedades
  const {
    product
  } = props;

  // Estructura
  return (
    <Container>
      <Title inline>{product.name}</Title>
      <Subtitle inline>{product.version}</Subtitle>
      <Paragraph>{product.summary}</Paragraph>
    </Container>
  );

}

// Metadatos utilizados
const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps)(Product);
