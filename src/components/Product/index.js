// APW 1.5
// Componentes
// Encabezado (Header)

// TEMPORAL: Para crear este componente utilizaré un componente Heading (o similar) con las propiedades adecuadas.

import React from 'react';
import Styled, { ThemeContext } from 'styled-components';

import { Text } from '@soft4pilot/sdb';

import { Metadata } from 'model/metadata';

// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  margin-bottom: ${props => props.theme.space.ml};

`;

// Componente
const Product = props => {

  const theme = React.useContext(ThemeContext);
  const [{product}] = React.useContext(Metadata);

  console.log(product);

  return (
    <Container>
      <Text size={theme.font.size.display.large} color={theme.color.base.white} style={{lineHeight: '110%'}}>{product.name} <small style={{fontSize: '32px'}}>{product.version}</small></Text>
      <Text size={theme.font.size.display.medium} color={theme.color.base.white}>{product.summary}</Text>
    </Container>
  );

}

export default Product;
