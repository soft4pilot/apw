import React from 'react';
import styled from 'styled-components';

import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';

const StyledContent = styled.div`
  text-align: center;
`;

const Content = props => (
  <StyledContent>
    <Title text={props.title} />
    <Paragraph text={props.text} />
  </StyledContent>
);

export default Content;
