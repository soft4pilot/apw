// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import Styled from 'styled-components';

import Product from '../Product';
import Links from '../Links';


// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space.xxl} 0;
  background: ${props => props.theme.color.primary.dark};

`;

// Componente
const Foreword = props => {

  return (
    <Container>
      <Product />
      <Links />
    </Container>
  );

}

export default Foreword;
