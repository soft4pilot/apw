import React from 'react';
import Styled from 'styled-components';

const StyledImage = Styled.img`
  height: 120px;
  float: left;
`;

const Logo = props => (
  <StyledImage src='https://via.placeholder.com/120' />
);

export default Logo;
