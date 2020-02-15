import React from 'react';
import Styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

import State from '../../../metadata';

import Link from '../../atoms/Link';

// Componente con estilo
const Container = Styled.nav`
  /* Marco */
  display: flex;
  align-items: center;
  justufy-content: space-between;
  padding: 10px;
`;

const Icon = Styled(FiSearch)`
  padding-left: 10px;
  font-size: 32px;
`;

// Componente exportado
const Menu = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  // Estructura del componente
  return (
    <Container>
      { state.resources.map((item, i) => (
        <Link key={i} to={item.route}>{item.byname}</Link>
      ))}
      <Icon />
    </Container>
  );

}

export default Menu;
