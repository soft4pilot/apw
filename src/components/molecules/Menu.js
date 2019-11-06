import React from 'react';
import styled from 'styled-components';

import Anchor from 'components/atoms/Anchor';

const StyledMenu = styled.div`
  text-align: center;
`;

const Menu = props => (
  <StyledMenu>
    { props.items.map((item, i) => (
        <Anchor id={i}>{item}</Anchor>
      ))
    }
  </StyledMenu>
);

export default Menu;
