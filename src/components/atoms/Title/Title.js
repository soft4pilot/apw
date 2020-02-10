import React from 'react';
import Styled from 'styled-components';

const Container = Styled.span`
  padding: 10px;
  font-size: 2em;
`;

const Title = props => (
  <Container>{props.children}</Container>
);

export default Title;
