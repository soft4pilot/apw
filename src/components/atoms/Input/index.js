import React from 'react';

require('./style.css');

const Input = props => (
  <input type={props.type} placeholder={props.placeholder} value={props.text} className="a__input" />
);

export default Input;
