import React from 'react';
import Styled from 'styled-components';

const Label = Styled.span`
  font-size: ${props => props.size ? props.size : '1em'};
`;

export default Label;
