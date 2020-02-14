import React from 'react';
import Styled from 'styled-components';

import State from '../../../metadata';

import Logo from '../../atoms/Logo';
import Label from '../../atoms/Label';

// Contenedro del componente
const Container = Styled.div`
  display: flex;
  align-items: center;
`;

// Componente exportado
const Brand = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  // Estructura del componente
  return (
    <Container>
      <Logo />
      <Label size='2em'>{state.company.name}</Label>
    </Container>
  );

}

export default Brand;
