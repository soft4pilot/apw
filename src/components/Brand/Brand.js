import React from 'react';
import Styled from 'styled-components';

import Logo from '../Logo';
import Label from '../Label';

// Contenedro del componente
const Container = Styled.div`
  display: flex;
  align-items: center;
`;

// Componente exportado
const Brand = props => {

  const {
    company,
  } = props;

  // Estructura del componente
  return (
    <Container>
      <Logo />
      <Label size='2em'>{company.name}</Label>
    </Container>
  );

}

export default Brand;
