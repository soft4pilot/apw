import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.div`
  padding: 90px 100px 100px;
  column-count: 2;
  column-gap: 50px;
  h1,h2,h3 {
    column-span: all;
    ;
  }
  /* Cambiar a una columna cuando el ancho sea menor a 960px */
`;

// Componente
const Section = props => (

  <Container>
    {props.children}
  </Container>

);

export default Section;
