import React from 'react';
import styled from 'styled-components';

import Brand from '../../molecules/Brand';
import Menu from '../../molecules/Menu';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #efefef;
`;

const Header = props => (
  <StyledHeader>
    <Brand />
    <Menu />
  </StyledHeader>
);

export default Header;
