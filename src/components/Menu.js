// Librerias
import React from 'react';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Dependencias
import Command from './Command';
import Link from './Link';

// Iconos
import { search } from 'react-icons-kit/fa/search';

// Estilos
const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

// Componente
const Menu = () => (

  <Container>
    { metadata.resources.map((resource, i) => (
      <Link key={i} to={resource.route}>{resource.byname}</Link>
    ))}
    <Command icon={search} action={() => alert('Ouch!')} />
  </Container>
);

export default Menu;
