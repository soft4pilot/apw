import React from 'react';
import Styled from 'styled-components';
import { Icon } from 'react-icons-kit'

const Command = props => (

  <Icon icon={props.icon} onClick={props.doCommand} />

);

export default Command;
