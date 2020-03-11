import React from 'react';
import Styled from 'styled-components';

// Componente con estilo
const Title = Styled.h1`
  /* Marco */
  display: ${props => props.inline ? 'inline' : 'block'};
  margin-right: 0.3em;
  /* Texto */
  font-size: 2em;
`;

export default Title;
