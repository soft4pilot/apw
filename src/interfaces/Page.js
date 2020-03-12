// APW 1.1
// Interfaces - Page

import React, { useEffect } from 'react';
import Styled from 'styled-components';

import { createItem, readItems, updateItem, deleteItem } from '../model/data/items';

import Title from '../components/Title'
import List from '../components/List'

const Container = Styled.main`
  padding: 20px;
`;

const Page = props => {

  // Inicialización de la interface
  useEffect(() => {

    props.readItems();

  }, []);

  return (
      <Container>
        <Title>Lista de elementos</Title>
        <List items={props.items} addItem={props.createItem} updateItem={props.updateItem} deleteItem={props.deleteItem}/>
      </Container>
  );
}

// Obtener datos del modelo
const mapStateToProps = state => {
  return {
    items: state.items
  }
}

// Obtener acciones del modelo
const mapDispatchToProps = {

  createItem,
  readItems,
  updateItem,
  deleteItem

};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
