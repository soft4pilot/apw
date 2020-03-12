import React from 'react';
import Styled from 'styled-components';

const Title = Styled.h2`
  display: ${props => props.inline ? 'inline' : 'block'};
  margin-right: 0.3em;
  color: grey;
  font-size: 1.5em;
`;

export default Title;
