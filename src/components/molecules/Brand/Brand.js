import React from 'react';
import Styled from 'styled-components';

import Logo from '../../atoms/Logo';
import Label from '../../atoms/Label';

const Container = Styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: nowrap;
`;

const Brand = props => (
  <div>
    <Logo />
    <Label>{props.name}</Label>
  </div>
);

export default Brand;
