import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.a`
  display: inline;
  padding: 0 3px;
  color: black;
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

// Componente
const Email = props => {

  return (
    <Container>{props.children}</Container>
  );
}

export default Email;
