import React, { useContext } from 'react';
import Styled from 'styled-components';

import State from '../../../state';

import Brand from '../../molecules/Brand';
import Menu from '../../molecules/Menu';

const StyledHeader = Styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #efefef;
`;

const Header = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  return (
    <StyledHeader>
      <Brand name={state.company.name} />
      <Menu items={state.resources} />
    </StyledHeader>
  );

}

export default Header;
