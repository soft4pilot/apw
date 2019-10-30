import React from 'react';
import styled from 'styled-components';

import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';

const StyledLabeledInput = styled.div`
  margin: 0 0 10px 0;
`;

const LabeledInput = props => (
  <StyledLabeledInput>
    <Label text={props.label} />
    <Input value="" placeholder={props.placeholder} type="text" />
  </StyledLabeledInput>
);

export default LabeledInput;
