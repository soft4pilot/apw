import React from 'react';
import styled from 'styled-components';

import LabeledInput from 'components/molecules/LabeledInput';
import Button from 'components/atoms/Button';

const StyledForm = styled.form`
`;

const Form = props => (
  <StyledForm>
    { props.fields.map((field, i) => (
        <LabeledInput label={field.label} placeholder={field.placeholder} key={i} />
      )
    )}
    <Button text={props.buttonText} />
  </StyledForm>
);

export default Form;
