import React from 'react';

require('./style.css');

const Title = props => (
  <h1 className="a__title">{props.text}</h1>
);

export default Title;
