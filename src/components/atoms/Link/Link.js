import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: black;
  font-family: sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * Enlace a otra página
 * @param {string} somebody
 * @example
 * ´´´
 * <Link level="1" />
 *
 */
const Link = props => (
  <StyledLink>{props.children}</StyledLink>
);

export default Link;
