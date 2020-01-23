import React from 'react';
import Styled from 'styled-components';

const StyledSpan = Styled.span`
  font-size: 1em;
`;

const Label = props => (
  <StyledSpan>{props.children}</StyledSpan>
);

/** @component */
export default Label;
