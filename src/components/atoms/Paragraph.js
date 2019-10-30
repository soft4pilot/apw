import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  padding: 0 20px;
`;

const Paragraph = props => (
  <StyledParagraph>{props.text}</StyledParagraph>
);

export default Paragraph;
