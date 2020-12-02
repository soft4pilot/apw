// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import Styled from 'styled-components';

// Acceso al modelo de datos
import useQuery from 'model/queries';

import { Figure } from '@soft4pilot/sdb';

// URL de la API
const url = 'https://api-us-west-2.graphcms.com/v2/ckhbgkjs3afpk01z7dnqocy9j/master'; // TEMPORAL: La URL de la API debe estar en el contexto de la aplicación

// Consulta de datos
const query = `query {
  features {
    icon,
    title
  }
}`;

// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

`;

const Content = Styled.span`

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 16px; /* Utilizar variable de diseño */

`;

// Componente
const Features = props => {

  const [{loading, error, data}, setQuery] = useQuery(url, query);

  return (
    <Container>
      { data && (data.features.map((feature, i) => (
        <Content>
          <Figure key={i} icon={feature.icon} title={feature.title} />
        </Content>
      )))}
    </Container>
  );

}

export default Features;
