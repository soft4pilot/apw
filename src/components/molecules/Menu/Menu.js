import React from 'react';
import styled from 'styled-components';

import { Search } from 'styled-icons/boxicons-regular/Search';

import Link from '../../atoms/Link';

const Container = styled.nav`
  display: flex;
  align-items: center;
  justufy-content: space-between;
  padding: 10px;
`;

const SearchIcon = styled(Search)`
  margin-left: 5px;
`;

const Menu = props => (

    <Container>
      { props.items.map((item, i) => (
            <Link key={i} to={item.route}>{item.byname}</Link>
        ))
      }
      <SearchIcon size='24' />

    </Container>
);

export default Menu;
