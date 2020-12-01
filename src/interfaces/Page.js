// APW 1.1
// Interfaces - Page

import React from 'react';
import styled from 'styled-components';

import useQuery from '../model/queries';

import Title from '../components/Title'
import List from '../components/List'


// URL de la API
const url = 'http://132.248.31.70:3000/pruebas/gql?access_token=cn9qw7o6ROGUFkltE7kEkI41';

// Consulta de datos
const query = `query {
  items {
    data {
      id
      text
    }
  }
}`;

// Estilos
const Container = styled.main`
  padding: 20px;
`;

const Page = props => {



  const [{loading, error, data}, setQuery] = useQuery(url, query);

  if (loading) return 'Cargando...';
  if (error) return '¡Ocurrió un error!';

  return (
      <Container>
        <Title>Página interna</Title>
        {data && (
          <List items={data && data.items.data} />
        )}
      </Container>
  );
}

export default Page;
