import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    width: 100%;
    padding: 15px;

    text-decoration: none;
    text-align: center;
    font-size: 1.4em;
    font-family: monospace;
    border: 1px solid black;
    color: black;

    a {
      display: block;
      width: inherit;
      height: inherit;

      text-decoration: none;
      color: black;
    }
  }
`;

const Nav = () => (
    <StyledNav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </StyledNav>
  );

export default Nav;
