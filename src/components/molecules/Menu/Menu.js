import React from 'react';
import Styled from 'styled-components';

import {search} from 'react-icons-kit/fa/search'


// Componentes utilizados
import Command from '../../atoms/Command';
import Link from '../../atoms/Link';

// Componente con estilo
const Container = Styled.nav`
  /* Marco */
  display: flex;
  align-items: center;
  justufy-content: space-between;
  padding: 10px;
`;

// Componente exportado
const Menu = props => {

  // Propiedades
  const {
    resources,
  } = props;

  // Estructura
  return (
    <Container>
      { resources.map((resource, i) => (
        <Link key={i} to={resource.route}>{resource.byname}</Link>
      ))}
      <Command icon={search} action={() => alert('Ouch!')} />
    </Container>
  );

}

export default Menu;
