import React from 'react';
import Styled from 'styled-components';

import { connect } from 'react-redux';

import Brand from '../Brand';
import Menu from '../Menu';

const Container = Styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dedede;
`;

// Componente exportado
const Header = props => {

  // Prpiedades
  const {
    company,
    resources,
  } = props;

  // Estructura
  return (
    <Container>
      <Brand company={company} />
      <Menu resources={resources} />
    </Container>
  );

}

// Datos utilizados
const mapStateToProps = model => {
  return {
    company: model.company,
    resources: model.resources,
  }
}

export default connect(mapStateToProps)(Header);
