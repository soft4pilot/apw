// APW 1.1
// Interfaces - Page

import React from 'react';
import styled from 'styled-components';

import useData from '../model/data';

import Title from '../components/Title'
import List from '../components/List'

// Estilos
const Container = styled.main`
  padding: 20px;
`;

const Page = props => {

  const [items, createItem, , updateItem, deleteItem] = useData('items');

  return (
      <Container>
        <Title>Lista de elementos</Title>
        <List items={items} addItem={createItem} updateItem={updateItem} deleteItem={deleteItem}/>
      </Container>
  );
}

export default Page;
