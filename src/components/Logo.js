import React, { useContext } from 'react';
import styled from 'styled-components';

// Metadatos
//import metadata from '../model/metadata.json';
import { Metadata } from '../model/metadata';

// Estilos
const Container = styled.img`
  height: 50px;
  margin: 15px;
  cursor: pointer;
`;

// Componente
const Logo = () => {

  const [{company}] = useContext(Metadata);

  return (
    <Container src={company.logo} />
  );
  
}

export default Logo;
