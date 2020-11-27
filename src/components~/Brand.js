// Librerias
import React, { useContext } from 'react';
import styled from 'styled-components';

// Metadatos
//import metadata from '../model/metadata.json'; // NOTA: Ya no se utilizará esta técnica
import { Metadata } from '../model/metadata';

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

  const [{company}] = useContext(Metadata);

  <Container>
    <Logo />
    <Title size='2em'>{company.name}</Title>
  </Container>
);

export default Brand;
