import React from 'react';
import Styled from 'styled-components';

import Image from './Logo.png';

// Componente con estilo
const StyleImage = Styled.img`
  height: 50px;
  margin: 15px;
  cursor: pointer;
`;

const Logo = () => (

  <StyleImage src={Image} />

);

export default Logo;
