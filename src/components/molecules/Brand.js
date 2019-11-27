import React from 'react';
import styled from 'styled-components';

import Logo from '../atoms/Logo';
import Label from '../atoms/Label';

const BrandLogo = styled(Logo)`
  float: left;
`;

const BrandLabel = styled(Label)`
  float: left;
`;

const Brand = props => (
  <div>
    <BrandLogo />
    <BrandLabel>Empresa</BrandLabel>
  </div>
);

export default Brand;
