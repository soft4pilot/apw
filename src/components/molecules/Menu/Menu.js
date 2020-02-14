import React from 'react';
import styled from 'styled-components';

import State from '../../../metadata';

import { Search } from 'styled-icons/boxicons-regular/Search';

import Link from '../../atoms/Link';

// Componente con estilo
const Container = styled.nav`
  display: flex;
  align-items: center;
  justufy-content: space-between;
  padding: 10px;
`;

// Ícono
const SearchIcon = styled(Search)`
  margin-left: 5px;
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
      <SearchIcon size='24' />
    </Container>
  );

}

export default Menu;
