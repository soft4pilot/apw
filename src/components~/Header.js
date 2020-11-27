import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Componetes utilizados
// import Brand from './Brand';
import Menu from './Menu';

// Estilos
const Container = styled.header`

  position: fixed;
  z-index: 100;

  width: 100%;

  display: grid;
  grid-template-columns: 200px 1fr;
  align-content: top;

  padding: 32px;

  nav {
    justify-self: right;
  }


  /* display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dedede; */

`;



// Componente exportado
const Header = props => {

  // Estructura
  return (
    <Container>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="229" height="168" fill="none"><g clip-path="url(#clip0)" stroke-width="6.824" stroke-linecap="round" stroke-linejoin="round"><path d="M74.44 115.904c31.247 0 56.578-25.212 56.578-56.312 0-31.1-25.331-56.312-56.579-56.312-31.247 0-56.579 25.212-56.579 56.312 0 31.1 25.331 56.312 56.58 56.312z" stroke="url(#paint0_linear)"/><path d="M72.482 66.671L173.788 116" stroke="url(#paint1_linear)"/><path d="M108.159 68.047l41.291 20.106" stroke="url(#paint2_linear)"/></g><defs><linearGradient id="paint0_linear" x1="74.439" y1="3.28" x2="74.439" y2="115.904" gradientUnits="userSpaceOnUse"><stop stop-color="#E922EF"/><stop offset="1" stop-color="#52D5FF"/></linearGradient><linearGradient id="paint1_linear" x1="123.135" y1="66.671" x2="123.135" y2="116" gradientUnits="userSpaceOnUse"><stop stop-color="#E922EF"/><stop offset="1" stop-color="#52D5FF"/></linearGradient><linearGradient id="paint2_linear" x1="128.805" y1="68.047" x2="128.805" y2="88.153" gradientUnits="userSpaceOnUse"><stop stop-color="#E922EF"/><stop offset="1" stop-color="#52D5FF"/></linearGradient><clipPath id="clip0"><path fill="#fff" d="M0 0h228.229v168H0z"/></clipPath></defs></svg>
      </Link>
      <Menu />
    </Container>
  );

}

export default Header;
