// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import Styled, { ThemeContext } from 'styled-components';

import useQuery from 'model/queries';
import { Brand } from '@soft4pilot/sdb';

// URL de la API
const url = 'https://api-us-west-2.graphcms.com/v2/ckhbgkjs3afpk01z7dnqocy9j/master'; // TEMPORAL: La URL de la API debe estar en el contexto de la aplicación

// Consulta de datos
const query = `query {
  technologies {
    icon,
    url
  }
}`;

// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 0px;

`;

const Content = Styled.span`

  flex: none;
  flex-grow: 0;
  margin: 0px 32px; /* Utilizar variable de diseño */

`;

// Componente
const Brands = props => {

  const theme = React.useContext(ThemeContext);

  const [{loading, error, data}, setQuery] = useQuery(url, query);

  return (
    <Container>
      { data && (data.technologies.map((technology, i) => (
        <Content>
          <Brand logo={technology.icon} url={technology.url} size='80px' color={theme.color.primary.lighter} />
        </Content>
      )))}
    </Container>
  );

}

export default Brands;
