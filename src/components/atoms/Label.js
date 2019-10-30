import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`

`;

const Label = props => (
  <StyledLabel>{props.text}</StyledLabel>
);

export default Label;
