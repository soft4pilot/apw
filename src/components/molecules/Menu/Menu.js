import React from 'react';
import styled from 'styled-components';

import Link from '../../atoms/Link';

const Ul = styled.ul`
  li {
    display: inline;
    padding: 0 3px;
  }
`;

const Menu = props => (

  <Ul>
    { props.items.map((item, i) => (
        <li key={i}>
          <Link>{item}</Link>
        </li>
      ))
    }
  </Ul>
);

export default Menu;
