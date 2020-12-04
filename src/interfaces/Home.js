// APW 1.1
// Interfaces - Home

import React from 'react';
import styled from 'styled-components';

import useQuery from '../model/queries';

import { Text } from '@soft4pilot/sdb';

import Foreword from '../components/Foreword';
import Section from '../components/Section';
import Features from '../components/Features';
import Brands from '../components/Brands';

// Contenedor
const Container = styled.main`

  background: ${props => props.theme.color.secondary.lightest};


`;

// Contenido
const Content = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: ${props => props.theme.space.xxl} ${props => props.theme.space.huge};

  & > section {
    flex: none;
    flex-grow: 0;
    margin: ${props => props.theme.space.l} 0;
  }

`;

// PASARLO A UN ARCHIVO INDEPENDIENTE -->
// URL de la API
const url = 'https://api-us-west-2.graphcms.com/v2/ckhbgkjs3afpk01z7dnqocy9j/master';

// Consulta de datos
const query = `query {
  product(where: {id: "ckhdxcc944hys0a7483vqpzge"}) {
    summary { html }
    design { html }
  }
}`;
// <-- PASARLO A UN ARCHIVO INDEPENDIENTE

// Componente
const Home = props => {

  // Ejecutar la consulta
  const [{loading, error, data}, setQuery] = useQuery(url, query);

  if (loading) return 'Cargando...';
  if (error) return '¡Ocurrió un error!';

  // Generar el componente
  return (

    <Container>
      <Foreword/>
      <Content>
        <Section id="vision" heading="Visión">
          <Text size="18px" align="justify" dangerouslySetInnerHTML={{__html: data && data.product.summary.html}} />
        </Section>
        <Section id="features" heading="Características">
          <Features />
        </Section>
        <Section id="design" heading="Diseño">
          <Text size="18px" align="justify" dangerouslySetInnerHTML={{__html: data && data.product.design.html}} />
        </Section>
        <Section id="technology" heading="Tecnologías">
          <Brands />
        </Section>
      </Content>
    </Container>

  );
}

export default Home;
