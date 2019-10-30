import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  display: block;
  width: inherit;
  height: inherit;
  textDecoration: none;
  color: black;
`;

const Anchor = props => (
  <StyledAnchor>{props.text}</StyledAnchor>
);

export default Anchor;
