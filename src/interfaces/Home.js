// APW 1.1
// Interfaces - Home

import React from 'react';
import styled from 'styled-components';

import useQuery from '../model/queries';

// Dependencias
import Product from '../components/Product';
import Section from '../components/Section';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

// Estilos
const Container = styled.main`
  background: #D0D7EE;
`;

// URL de la API
const url = 'https://api-us-west-2.graphcms.com/v2/ckhbgkjs3afpk01z7dnqocy9j/master';

// Consulta de datos
const query = `query {
  product(where: {id: "ckhdxcc944hys0a7483vqpzge"}) {
    summary
  }
}`;

// Componente
const Home = props => {

  // Ejecutar la consulta
  const [{loading, error, data}, setQuery] = useQuery(url, query);

  if (loading) return 'Cargando...';
  if (error) return '¡Ocurrió un error!';

  // Generar el componente
  return (

    <Container>
      <Product />
      <Section>
        <Title>Visión</Title>
        <Paragraph>
          {data && data.product.summary}
        </Paragraph>
      </Section>
    </Container>

  );
}

export default Home;
