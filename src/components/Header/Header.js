import React from 'react';
import Styled from 'styled-components';

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

  // Estructura
  return (
    <Container>
      <Brand />
      <Menu />
    </Container>
  );

}

export default Header;
