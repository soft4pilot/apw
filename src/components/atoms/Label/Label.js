import React from 'react';
import Styled from 'styled-components';

const StyledLabel = Styled.span`
  font-family: sans-serif;
  font-size: 1em;
`;

const Label = props => (
  <StyledLabel>{props.children}</StyledLabel>
);

export default Label;
