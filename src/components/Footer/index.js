// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import Styled from 'styled-components';

import { Link } from '@soft4pilot/sdb';
import { Metadata } from 'model/metadata';

// Estilo
const Container = Styled.footer`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.color.primary.darker};

  padding-top: ${props => props.theme.space.ml};
  padding-bottom: ${props => props.theme.space.ml};

`;

// Componente
const Footer = props => {

  const [{company}] = React.useContext(Metadata);

  return (
    <Container>
      <Link inverted>{company.email}</Link>
    </Container>
  );

}

export default Footer;
