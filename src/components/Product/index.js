// APW 1.5
// Componentes
// Encabezado (Header)

// TEMPORAL: Para crear este componente utilizaré un componente Heading (o similar) con las propiedades adecuadas.

import React from 'react';
import Styled, { ThemeContext } from 'styled-components';

import { Heading } from '@soft4pilot/sdb';
import { Text } from '@soft4pilot/sdb';

import { Metadata } from 'model/metadata';

// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  margin-bottom: ${props => props.theme.space.ml};

  /* Solución temporal: Corregir el componente Heading */
  & > h1 {
    margin: 0;
    line-height: 100%;
  }

`;

// Componente
const Product = props => {

  const theme = React.useContext(ThemeContext);
  const [{product}] = React.useContext(Metadata);

  console.log(product);

  return (
    <Container>
      <Heading level={1} size={theme.font.size.display.large} color={theme.color.base.white}>{product.name} <small>{product.version}</small></Heading>
      <Text size={theme.font.size.display.medium} color={theme.color.base.white}>{product.summary}</Text>
    </Container>
  );

}

export default Product;
