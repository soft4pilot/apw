import React from 'react';
import Styled from 'styled-components';

import State from '../../../metadata';
// Poner aquí el accoeso a datos...

import Brand from '../../molecules/Brand';
import Menu from '../../molecules/Menu';

const Container = Styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dedede;
`;

const Header = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  // Estructura del componente
  return (
    <Container>
      <Brand />
      <Menu />
    </Container>
  );

}

export default Header;
