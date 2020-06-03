import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  margin: 100px 0 0;
  background: url(${props => props.image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 800px) {
      height: 820px;
  }
`;

const Logo = styled.img`

  width: 128px;
  margin: 0 auto;
  align-self: end;
`;

const TitleGroup = styled.div`

  max-width: 80%;
  margin: 0 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 35% auto;
  grid-template-rows: auto 100%;

  @media (max-width: 960px) {
      grid-template-columns: 1fr;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 64px;
  margin: 0;
  line-height: 1.2;
  @media (max-width: 800px) {
      font-size: 48px;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 24px;
`;

const Section = props => (
  <Container image={props.image}>
      <Logo src={props.logo} />
      <TitleGroup>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
      </TitleGroup>
  </Container>
);

export default Section;
