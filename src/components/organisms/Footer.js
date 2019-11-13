import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
`;

const Footer = props => (
  <StyledFooter>
    { props.children }
  </StyledFooter>
);

export default Footer;
