import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.h2`
  margin-right: 0.3em;
  color: grey;
  font-size: 1.5em;
  display: ${props => props.inline ? 'inline' : 'block'};
`;

// Componente
const Subtitle = props => (
  <Container>{props.children}</Container>
);

export default Subtitle;
