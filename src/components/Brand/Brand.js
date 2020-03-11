import React from 'react';
import Styled from 'styled-components';

import { connect } from 'react-redux';

import Logo from '../Logo';
import Label from '../Label';

// Contenedro del componente
const Container = Styled.div`
  display: flex;
  align-items: center;
`;

// Componente exportado
const Brand = props => {

  const {
    company,
  } = props;

  // Estructura del componente
  return (
    <Container>
      <Logo />
      <Label size='2em'>{company.name}</Label>
    </Container>
  );

}

// Datos utilizados
const mapStateToProps = model => {
  return {
    company: model.company
  }
}

export default connect(mapStateToProps)(Brand);
