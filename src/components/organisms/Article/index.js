import React from 'react';

import Content from 'components/molecules/Content';

require('./style.css');

const Article = props => (
  <div className="o__article">
    <img className="article_featured" src={props.image.src} alt={props.image.alt} />
    <Content text={props.content} title={props.title} />
  </div>
);

export default Article;
