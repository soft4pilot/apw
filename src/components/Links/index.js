// APW 1.5
// Componentes
// Encabezado (Header)

import React from 'react';
import Styled from 'styled-components';

import { Button } from '@soft4pilot/sdb';
import { Metadata } from 'model/metadata';

// Estilo
const Container = Styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  & > button {
    margin: 0 ${props => props.theme.space.s};
  }

`;

// Componente
const Links = props => {

  const [{product}] = React.useContext(Metadata);

  return (
    <Container>
      <Button onClick={e => window.open(product.code,'_blank')}>Repositorio</Button>
      <Button onClick={e => window.open(product.docs,'_blank')}>Documentos</Button>
    </Container>
  );

}

export default Links;
