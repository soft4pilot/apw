import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

import useService from '../services'

import Title from '../components/atoms/Title'
import List from '../components/organisms/List'

const Container = Styled.main`
  padding: 20px;
`;

const Page = () => {

  // Acceso a los servicios
  const items = useService('/items');

  // Inicialización de la interface
  useEffect(() => {

    items.read();

  }, []);

  const delUser = (id) => {

    items.remove(id);

  }

  return (
      <Container>
        <Title>Lista de elementos</Title>
        <List items={items.data} />
      </Container>
  );
}

export default Page;
