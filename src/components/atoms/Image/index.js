import React from 'react';

require('./style.css');

const Image = props => (
  <img className="a__image" src={props.src} alt={props.alt} />
);

export default Image;
