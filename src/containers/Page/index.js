// APW 1.1
// Interfaces - Page

import React, { useEffect, useState } from 'react';
import useData from '../../data';

// Estilos del Componente
import style from './style.module.css';

import Title from '../../components/Title'
import List from '../../components/List'

const Page = props => {

  const [items, createItem, readItem, updateItem, deleteItem] = useData('items');

  return (
      <main className={style.page}>
        <Title>Lista de elementos</Title>
        <List items={items} addItem={createItem} updateItem={updateItem} deleteItem={deleteItem}/>
      </main>
  );
}

export default Page;
