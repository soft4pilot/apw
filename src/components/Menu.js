// Librerias
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Dependencias
// import Command from './Command';
// import Link from './Link';

// Estilos
const Container = styled.nav`
  display: flex;
  align-items: top;
  justify-content: space-around;
`;

const Item = styled.li`

  display: inline;
  margin-left: 16px;

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
    color: #D0D7EE;
  }

`;

// Componente
const Menu = () => (

  <Container>
    <ul>
      { metadata.resources.map((resource, i) => (
        <Item key={i}>
          <Link to={resource.route}>{resource.byname}</Link>
        </Item>
      ))}
    </ul>
  </Container>
);

export default Menu;
