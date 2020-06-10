import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.h2`
  margin-right: 0.3em;
  font-size: 2em;
  display: ${props => props.inline ? 'inline' : 'block'};
`;

// Componente
const Title = props => (
  <Container>{props.children}</Container>
);

export default Title;
