import React from 'react';

import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';

require('./style.css');

const LabeledInput = props => (
  <div className="m__labeled_input">
    <Label text={props.label} />
    <Input value="" placeholder={props.placeholder} type="text" />
  </div>
);

export default LabeledInput;
