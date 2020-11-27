import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.span`
  font-size: 1em;
  line-height: 1.5em;
`;

// Componente
const Label = props => (

  <Container>{props.children}</Container>

);

export default Label;
