import React from 'react';
import Styled from 'styled-components';

import State from '../../../metadata';

import Email from '../../atoms/Email';

const Container = Styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dedede;
  padding: 20px;
`;

const Footer = props => {

  // Estado de la aplicación
  const state = React.useContext(State);

  return (
    <Container>
      <Email href="mailto:{state.company.email}">{state.company.email}</Email>
    </Container>
  );

}

export default Footer;
