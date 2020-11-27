import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.h2`

  font-weight: 600;
  font-size: 36px;
  line-height: 49px;

`;

// Componente
const Title = props => (
  <Container>{props.children}</Container>
);

export default Title;
