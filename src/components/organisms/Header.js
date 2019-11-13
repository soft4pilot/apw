import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #efefef;

`;

const Header = props => (
  <StyledHeader>
    { props.children }
  </StyledHeader>
);

export default Header;
