import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: black;
  font-family: sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Anchor = props => (
  <StyledAnchor>{props.children}</StyledAnchor>
);

export default Anchor;
