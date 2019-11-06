import React from 'react';
import styled from 'styled-components';

import Brand from 'components/molecules/Brand';
import Menu from 'components/molecules/Menu';

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
