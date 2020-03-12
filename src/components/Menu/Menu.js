// Librerias
import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import {search} from 'react-icons-kit/fa/search'

// Componentes utilizados
import Command from '../Command';
import Link from '../Link';

// Componente con estilo
const Container = Styled.nav`
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

// Datos utilizados
const mapStateToProps = model => {
  return {
    resources: model.resources,
  }
}

export default connect(mapStateToProps)(Menu);
