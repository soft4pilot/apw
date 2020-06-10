import React from 'react';
import styled from 'styled-components';

// Componetes utilizados
import Brand from './Brand';
import Menu from './Menu';

// Estilos
const Container = styled.header`
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
