import React from 'react';
import Styled from 'styled-components';

import Logo from '../../atoms/Logo';
import Title from '../../atoms/Title';

const Container = Styled.div`
  display: inline-block;
  line-height: 120px;
  height: 120px;
  .left {
    float: left;
  }
`;

const Brand = props => (
  <Container>
    <Logo class="left" />
    <Title>{props.name}</Title>
  </Container>
);

export default Brand;
