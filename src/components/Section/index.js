// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { Heading } from '@soft4pilot/sdb';

// Estilo
const Container = Styled.section`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;

`;

const Content = Styled.section`

  margin-top: ${props => props.theme.space.m};

`;

// Componente
const Section = props => {

  return (
    <Container>
      <Heading>{props.heading}</Heading>
      <Content>{props.children}</Content>
    </Container>
  );

}

// Parámetros
Section.propTypes = {
  heading: PropTypes.string
}

// Valores predeterminados
Section.defaultProps = {
  heading: 'Lorem ipsum'
}

export default Section;
