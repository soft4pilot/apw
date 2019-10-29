import React from 'react';

require('./style.css');

const Button = props => (
  <button className="Button">{props.text}</button>
);

export default Button;
