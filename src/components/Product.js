import React from 'react';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Componentes utilizados
import Title from './Title';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

// Estilos
const Container = styled.div`
  padding: 30px 20px;
  background-color: #f5f5f5;
`;

// Componente exportado
const Product = () => (

  <Container>
    <Title inline>{metadata.product.name}</Title>
    <Subtitle inline>{metadata.product.version}</Subtitle>
    <Paragraph>{metadata.product.summary}</Paragraph>
  </Container>

);

export default Product;
