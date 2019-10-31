import React from 'react';
import styled from 'styled-components';

import Article from 'components/molecules/Article';

const StyledArticleList = styled.div`
  padding: 20px;
`;

const ArticleList = props => (
  <StyledArticleList>
    { props.items.map((item, i) => (
        <Article
          title={item.title}
          image={item.image}
          content={item.content}
          key={i}
        />
      )
    )}
  </StyledArticleList>
);

export default ArticleList;
