import React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';
import Label from '../../atoms/Label';

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: nowrap;
`;

const Brand = props => (
  <div>
    <Logo />
    <Label>Empresa</Label>
  </div>
);

export default Brand;
