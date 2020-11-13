import React, { useContext } from 'react';
import styled from 'styled-components';

// Metadatos
//import metadata from '../model/metadata.json';
import { Metadata } from '../model/metadata';

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
const Footer = () => {

  const [{company}] = useContext(Metadata);

  return (
    <Container>
      <Email href="mailto:{company.email}">{company.email}</Email>
    </Container>
  );

}

export default Footer;
