import React from 'react';
import Styled from 'styled-components';

import State from '../../../metadata';

import Brand from '../../molecules/Brand';
import Menu from '../../molecules/Menu';

const Container = Styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dedede;
`;

const Header = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  return (
    <Container>
      <Brand name={state.company.name} />
      <Menu items={state.resources} />
    </Container>
  );

}

export default Header;
