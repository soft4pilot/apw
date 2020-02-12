import React from 'react';
import Styled from 'styled-components';

const Title = Styled.h2`
  display: ${props => props.inline ? 'inline' : 'initial'}
  padding: 10px;
  font-size: 2em;
  color: grey;
`;

export default Title;
