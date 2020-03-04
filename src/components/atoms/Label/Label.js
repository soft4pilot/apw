import React from 'react';
import Styled from 'styled-components';

const Label = Styled.span`
  font-size: ${props => props.size ? props.size : '1em'};
  line-height: ${props => props.size ? props.size + props.size / 2 : '1.5em'};
`;

export default Label;
