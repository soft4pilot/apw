// SBD 1.0
// Átomos
// Feature (Característica)

import React from 'react';
import PropTypes from 'prop-types';
import Styled, { ThemeContext } from 'styled-components';

import { Icon } from '@soft4pilot/sdb';
import { Text } from '@soft4pilot/sdb';

// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${props => props.theme.space.m} 0;

  width: 184px;
  /* height: auto; */

  background: ${props => props.theme.color.secondary.lighter};
  border: 1px solid ${props => props.theme.color.secondary.lightest};
  border-radius: 8px;
  /* box-sizing: border-box; */
  box-shadow: 0px ${props => props.theme.effect.shadow.Y} ${props => props.theme.effect.shadow.blur} ${props => props.theme.color.primary.darker};

  color: ${props => props.theme.color.primary.dark};

  p {

    margin-top: ${props => props.theme.space.ms};

    color: ${props => props.theme.color.primary.darkest};

    font-family: ${props => props.theme.font.family.text};
    font-style: normal; /* Quizá falta esta variabe */
    font-weight: ${props => props.theme.font.weight.regular};
    font-size: ${props => props.theme.font.size.text.small};
    line-height: ${props => props.theme.font.height.text};

    text-align: center;

  }

  * {
    flex: none;
    order: 1;
    align-self: center;
    flex-grow: 0;
    margin: 0px ${props => props.theme.space.ms};
  }

`;

// Componente
const Feature = props => {

  const theme = React.useContext(ThemeContext);

  return (
    <Container>
      <Icon name={props.icon} size={theme.space.xl} color={theme.color.primary.dark}/>
      <Text>{props.title}</Text>
    </Container>
  )

}

// Parámetros
Feature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
}

// Valores predeterminados
Feature.defaultProps = {
  icon: 'circle',
  title: 'Descripción'
}

export default Feature;
