import React from 'react';

import LabeledInput from 'components/molecules/LabeledInput';
import Button from 'components/atoms/Button';

require('./style.css');

const Form = props => (
  <form className="o__form">
    {
      props.fields.map((field, i) => (<LabeledInput label={field.label} placeholder={field.placeholder} key={i} />))
    }
    <Button text={props.buttonText} />
  </form>
);

export default Form;
