// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
// import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { Metadata } from 'model/metadata';

import { ReactComponent as Logo } from 'assets/soft4pilot.svg';

// Componetes utilizados
// import Brand from './Brand';
// import Menu from './Menu';

import { Menu } from '@soft4pilot/sdb';

// Estilos generales
const Container = Styled.header`


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space.m} ${props => props.theme.space.m};

  background: ${props => props.theme.color.primary.darker};

`;

// TEMPORAL: Cambiar el color y tamaño del logotipo. Sin embargo, estos estilos vendrán del tema "Dark" del sistema de diseño.
const StyledLogo = Styled(Logo)`

  color: ${props => props.theme.color.base.white};
  font-size: ${props => props.theme.font.size.display.large};

`;

// Componente exportado
const Header = props => {

  const [{resources}] = React.useContext(Metadata);

  // Estructura
  return (
    <Container>
      <StyledLogo />
      <Menu items={resources} inverted />
    </Container>
  );

}


export default Header;
