import React from 'react';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Estilos
const Container = styled.img`
  height: 50px;
  margin: 15px;
  cursor: pointer;
`;

// Componente
const Logo = () => (
  <Container src={metadata.company.logo} />
);

export default Logo;
