import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import Brand from '../../molecules/Brand';
import Menu from '../../molecules/Menu';

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
