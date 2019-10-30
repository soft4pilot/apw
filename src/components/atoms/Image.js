import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`

`;

const Image = props => (
  <StyledImage src={props.src} alt={props.alt} />
);

export default Image;
