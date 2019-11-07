import React from 'react';
import styled from 'styled-components';

import Anchor from 'components/atoms/Anchor';

const StyledMenu = styled.ul`
  li {
    display: inline;
    padding: 0 3px;
  }
`;

const Menu = props => (
  <StyledMenu>
    { props.items.map((item, i) => (
        <li>
          <Anchor key={i}>{item}</Anchor>
        </li>
      ))
    }
  </StyledMenu>
);

export default Menu;
