import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  font-family: sans-serif;
  font-size: 1em;
`;

const Label = props => (
  <StyledLabel>{props.children}</StyledLabel>
);

export default Label;
