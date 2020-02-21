import React from 'react';
import Styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

// Componentes utilizados
import Link from '../../atoms/Link';

// Componente con estilo
const Container = Styled.nav`
  /* Marco */
  display: flex;
  align-items: center;
  justufy-content: space-between;
  padding: 10px;
`;

// Íconos
const Icon = Styled(FiSearch)`
  padding-left: 10px;
  font-size: 32px;
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
      <Icon />
    </Container>
  );

}

export default Menu;
