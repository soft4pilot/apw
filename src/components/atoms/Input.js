import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0 0 0 10px;
`;

const Input = props => (
  <StyledInput type={props.type} placeholder={props.placeholder} value={props.text} />
);

export default Input;
