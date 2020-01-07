import React from 'react';
import Styled from 'styled-components';

import Link from '../../atoms/Link';

const List = Styled.ul`
  li {
    display: inline;
    padding: 0 3px;
  }
`;

const Menu = props => (

  <List>
    { props.items.map((item, i) => (
        <li key={item.id}>
          <Link>{item.byname}</Link>
        </li>
      ))
    }
  </List>
);

export default Menu;
