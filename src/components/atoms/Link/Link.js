/**
 * Enlace a otra página
 */

import React from 'react';
import Styled from 'styled-components';

const Link = Styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

`;

export default Link;
