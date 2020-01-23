/**
 * Enlace a otra página
 */

import React from 'react';
import Styled from 'styled-components';

const StyledLink = Styled.a`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

`;

const Link = props => (
  <StyledLink>{props.children}</StyledLink>
);

export default Link;
