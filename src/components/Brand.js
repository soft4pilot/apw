// Librerias
import React from 'react';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Dependencias
import Logo from './Logo';
import Title from './Title';

// Estilos
const Container = styled.div`
  display: flex;
  align-items: center;
`;

// Componente exportado
const Brand = () => (

  <Container>
    <Logo />
    <Title size='2em'>{metadata.company.name}</Title>
  </Container>
);

export default Brand;
