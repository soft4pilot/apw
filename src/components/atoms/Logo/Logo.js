import React from 'react';
import Styled from 'styled-components';

import logo from '../../../assets/logo.svg'

const StyledImage = Styled.img`
  height: 200px;
`;

const Image = props => (
  <StyledImage src={logo} />
);

export default Image;
