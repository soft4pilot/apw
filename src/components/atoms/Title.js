import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`

`;

const Title = props => (
  <StyledTitle>{props.text}</StyledTitle>
);

export default Title;
