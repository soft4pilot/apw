import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.p`
  padding: 5px 0;
`;

// Componente
const Paragraph = props => (

  <Container>{props.children}</Container>

);

export default Paragraph;
