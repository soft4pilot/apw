/**
 * Enlace a otra página
 */

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

const Link = styled(RouterLink)`
  display: inline;
  padding: 0 3px;
  color: black;
  text-decoration: ${props => props.selected ? 'underline' : 'none'};
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

export default Link;
