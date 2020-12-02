// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import Styled, { ThemeContext } from 'styled-components';

import { Metadata } from 'model/metadata';

import { Brand } from '@soft4pilot/sdb';
import { Menu } from '@soft4pilot/sdb';

// Estilos generales
const Container = Styled.header`


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space.s} ${props => props.theme.space.ml};

  background: ${props => props.theme.color.primary.darker};

`;

// Componente exportado
const Header = props => {

  const theme = React.useContext(ThemeContext);
  const [{resources}] = React.useContext(Metadata);

  // Estructura
  return (
    <Container>
      <Brand icon="soft4pilot" color={theme.color.base.white} size={theme.font.size.display.large} />
      <Menu items={resources} inverted />
    </Container>
  );

}


export default Header;
