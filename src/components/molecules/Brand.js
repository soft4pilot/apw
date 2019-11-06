import React from 'react';
import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import Label from 'components/atoms/Label';

const Container = styled.div`
  
`;

const Brand = props => (
  <Container>
    <Logo />
    <Label>Empresa</Label>
  </Container>
);

export default Brand;
