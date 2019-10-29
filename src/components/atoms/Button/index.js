import React from 'react';

require('./style.css');

const Button = props => (
  <button className="a__button">{props.text}</button>
);

export default Button;
