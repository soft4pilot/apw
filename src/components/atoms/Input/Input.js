import React from 'react';
import Styled from 'styled-components';

const Input = Styled.input`

  width: 90%;
  font-size: ${props => props.size ? props.size : '1em'};
  background: #fdfdfd;
`;

export default Input;
