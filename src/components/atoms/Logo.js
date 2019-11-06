import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.svg'

const StyledImage = styled.img`
  height: 100px;
`;

const Image = props => (
  <StyledImage src={logo} />
);

export default Image;
