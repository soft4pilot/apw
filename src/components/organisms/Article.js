import React from 'react';
import styled from 'styled-components';

import Content from 'components/molecules/Content';

const ArticleBody = styled.div`
  display: inline-block;
  margin-left: 50px;
  width: 300px;
  background-color: #f7f3f3;
`;

const ArticleImage = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 200px;
`;

const Article = props => (
  <ArticleBody>
    <ArticleImage src={props.image.src} alt={props.image.alt} />
    <Content text={props.content} title={props.title} />
  </ArticleBody>
);

export default Article;
