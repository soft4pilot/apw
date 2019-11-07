import React from 'react';
import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import Label from 'components/atoms/Label';

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
