import React from 'react';
import Styled from 'styled-components';

import Link from '../../atoms/Link';

const Container = Styled.ul`
  li {
    display: inline;
    padding: 0 3px;
  }
`;

const Menu = props => (

  <Container>
    { props.items.map((item, i) => (
        <li key={item.id}>
          <Link>{item.byname}</Link>
        </li>
      ))
    }
  </Container>
);

export default Menu;
