import React from 'react';

require('./style.css');

const Anchor = props => (
  <a className="a__anchor">{props.text}</a>
);

export default Anchor;
