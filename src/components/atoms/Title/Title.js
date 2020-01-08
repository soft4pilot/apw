import React from 'react';
import Styled from 'styled-components';

const StyledSpan = Styled.span`
  padding: 10px;
  font-family: sans-serif;
  font-size: 2em;
`;

const Title = props => (
  <StyledSpan>{props.children}</StyledSpan>
);

export default Title;
