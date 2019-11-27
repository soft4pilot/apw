import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  margin-right: 5px;
  color: black;
  background-color: lightGray;
`

const Button = props => (
  <StyledButton>{props.children}</StyledButton>
);

export default Button;
