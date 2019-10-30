import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: black;
  background-color: white;
`

const Button = props => (
  <StyledButton>{props.text}</StyledButton>
);

export default Button;
