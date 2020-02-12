import React from 'react';
import Styled from 'styled-components';

import Logo from '../../atoms/Logo';
import Title from '../../atoms/Title';

const Container = Styled.div`
  display: flex;
  align-items: center;
  background-color: #efefef;
`;

const Brand = props => (
  <Container>
    <Logo src='https://via.placeholder.com/60' />
    <Title>{props.name}</Title>
  </Container>
);

export default Brand;
