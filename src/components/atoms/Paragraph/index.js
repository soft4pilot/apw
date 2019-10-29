import React from 'react';

require('./style.css');

const Paragraph = props => (
  <p className="a__paragraph">{props.text}</p>
);

export default Paragraph;
