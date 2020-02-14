import React from 'react';
import Styled from 'styled-components';

import Image from './Logo.png';

// Componente con estilo
const StyleImage = Styled.img`
  height: 60px;
  margin: 10px;
  cursor: pointer;
`;


const Logo = () => (

  <StyleImage src={Image} />

);

export default Logo;
