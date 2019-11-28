import React from 'react';
import styled from 'styled-components';

import Link from '../atoms/Link';

const Container = styled.ul`
  li {
    display: inline;
    padding: 0 3px;
  }
`;

const Menu = props => (

  <Container>
    { props.items.map((item, i) => (
        <li key={i}>
          <Link>{item}</Link>
        </li>
      ))
    }
  </Container>
);

export default Menu;
