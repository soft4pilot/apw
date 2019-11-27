import React from 'react';
import styled from 'styled-components';

import Link from '../atoms/Link';

const StyledMenu = styled.ul`
  li {
    display: inline;
    padding: 0 3px;
  }
`;

const Menu = props => (

  <StyledMenu>
    { props.items.map((item, i) => (
        <li key={i}>
          <Link>{item}</Link>
        </li>
      ))
    }
  </StyledMenu>
);

export default Menu;
