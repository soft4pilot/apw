import React from 'react';
import { Icon } from 'react-icons-kit';
import styled from 'styled-components';

// Estilos
const Container = styled(Icon)`
  cursor: pointer;
`;

// Componente
const Command = props => (

  <Container icon={props.icon} onClick={props.action} />

);

export default Command;
