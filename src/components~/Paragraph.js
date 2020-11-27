import React from 'react';
import styled from 'styled-components';

// Estilos
const Container = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
  margin-top: 20px;
`;

// Componente
const Paragraph = props => (

  <Container>
    {props.children}
  </Container>

);

export default Paragraph;
