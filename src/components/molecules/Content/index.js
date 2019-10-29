import React from 'react';

import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';

require('./style.css');

const Content = props => (
  <div className="m__content">
    <Title text={props.title} />
    <Paragraph text={props.text} />
  </div>
);

export default Content;
