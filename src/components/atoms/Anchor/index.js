import React from 'react';

require('./style.css');

// const style = {
//   display: block;
//   width: inherit;
//   height: inherit;
//   textDecoration: none;
//   color: black;
// }

const Anchor = props => (
  <a className="Anchor">{props.text}</a>
);

export default Anchor;
