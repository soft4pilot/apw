import React from 'react';
import Styled from 'styled-components';
import { Icon } from 'react-icons-kit'

const StyledIcon = Styled(Icon)`
  cursor: pointer;
`;

const Command = props => (

  <StyledIcon icon={props.icon} onClick={props.action} />

);

export default Command;
