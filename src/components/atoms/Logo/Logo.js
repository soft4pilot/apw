import React from 'react';
import Styled from 'styled-components';

const Container = Styled.img`
  height: 120px;
  float: left;
`;

const Logo = props => (
  <Container src='https://via.placeholder.com/120' />
);

export default Logo;
