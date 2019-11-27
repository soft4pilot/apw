import React from 'react';
import styled from 'styled-components';

import Brand from '../molecules/Brand';
import Menu from '../molecules/Menu';

const Container = styled.div`

`;

const items = ['Uno', 'Dos', 'Tres'];

const Navigation = props => (
  <Container>
    <Brand />
    <Menu items={items} />
  </Container>
);

export default Navigation;
