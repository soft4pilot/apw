import React from 'react';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Componentes utilizados
import Email from './Email';

// Estilos
const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  padding: 20px;
`;

// Componente exportado
const Footer = () => (
  <Container>
    <Email href="mailto:{metadata.company.email}">{metadata.company.email}</Email>
  </Container>
);

export default Footer;
