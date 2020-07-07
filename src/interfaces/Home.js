// APW 1.1
// Interfaces - Home

import React from 'react';
import styled from 'styled-components';

// Dependencias
import Product from '../components/Product';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

// Estilos
const Container = styled.main`
  background: #D0D7EE;
`;

// Componente
const Home = props => {

  // Estructura
  return (
      <Container>
        <Product />
        <Section>
          <Title>Visión</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet risus, ut nullam cursus sit vestibulum, porttitor lectus. Dictum euismod mauris, purus, id. Diam quam duis pulvinar arcu ut condimentum habitant sit. Vitae integer scelerisque tellus, imperdiet. Pulvinar vitae eget faucibus tempus vestibulum suspendisse. Sagittis donec ut condimentum nisl, interdum consectetur venenatis, malesuada eget. Ullamcorper arcu urna dictum rutrum.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet risus, ut nullam cursus sit vestibulum, porttitor lectus. Dictum euismod mauris, purus, id. Diam quam duis pulvinar arcu ut condimentum habitant sit. Vitae integer scelerisque tellus, imperdiet. Pulvinar vitae eget faucibus tempus vestibulum suspendisse. Sagittis donec ut condimentum nisl, interdum consectetur venenatis, malesuada eget. Ullamcorper arcu urna dictum rutrum.
          </Paragraph>
        </Section>
      </Container>
  );
}

export default Home;
