import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

// Estilos
const Container = styled(RouterLink)`
  display: inline;
  padding: 0 3px;
  color: black;
  &:hover {
    color: grey;
    cursor: pointer;
  }
  text-decoration: ${props => props.selected ? 'underline' : 'none'};
`;

// Componente
const Link = props => (
  <Container to={props.to}>{props.children}</Container>
);

export default Link;
