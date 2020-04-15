// APW 1.1
// Interfaces - Page

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createItem, readItems, updateItem, deleteItem } from '../../model/data/items';

// Estilos del Componente
import style from './style.module.css';

import Title from '../../components/Title'
import List from '../../components/List'

const Page = props => {

  // Inicialización de la interface
  useEffect(() => {

    props.readItems();

  }, []);

  return (
      <main className='page'>
        <Title>Lista de elementos</Title>
        <List items={props.items} addItem={props.createItem} updateItem={props.updateItem} deleteItem={props.deleteItem}/>
      </main>
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
