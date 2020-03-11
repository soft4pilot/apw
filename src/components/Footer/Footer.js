import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import Email from '../Email';

const Container = Styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  padding: 20px;
`;

// Componente exportado
const Footer = props => {

  // Propiedades
  const {
    company,
  } = props;

  // Estructura
  return (
    <Container>
      <Email href="mailto:{company.email}">{company.email}</Email>
    </Container>
  );

}

// Datos utilizados
const mapStateToProps = (state) => {
  return {
    company: state.company
  }
}

export default connect(mapStateToProps)(Footer);
