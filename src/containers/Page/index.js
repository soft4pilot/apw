// APW 1.1
// Interfaces - Page

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
//import { createItem, readItems, updateItem, deleteItem } from '../../model/data/items';

// Estilos del Componente
import style from './style.module.css';

import Title from '../../components/Title'
import List from '../../components/List'

const Page = props => {

  const [update, setUpdate] = useState(true);
  const [items, setItems] = useState([]);

  // Inicialización de la interface
  useEffect(() => {

    // props.readItems();

    fetch('http://132.248.31.70:3000/pruebas/items/items', {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      setItems(response.data);
      setUpdate(false);
    });

  }, [update]);

  // fetch(url, {
  //   method: 'POST', // or 'PUT'
  //   body: JSON.stringify(data), // data can be `string` or {object}!
  //   headers:{
  //     'Content-Type': 'application/json'
  //   }
  // }).then(res => res.json())
  // // .then(response => console.log('Success:', response));


  // Agregar un elemento a la colección
  const addItem = data => {

    fetch('http://132.248.31.70:3000/pruebas/items/items', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(response => response.json())
    .then(response => {
      setUpdate(true);
      return response.data
    });

  };

  // Obtener un elemento de la colección
  const getItem = id => {

    fetch(`http://132.248.31.70:3000/pruebas/items/items/${id}`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(response => response.json())
    .then(response => {
      setUpdate(true);
      return response.data
    });

  };

  // Actualizar un elemento de la colección
  const setItem = (id, data) => {

    fetch(`http://132.248.31.70:3000/pruebas/items/items/${id}`, {
       method: 'PATCH',
       body: JSON.stringify(data),
       headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(response => response.json())
    .then(response => {
      setUpdate(true);
      return response.data
    });

  };

  // Acción: Eliminar elemento
  const removeItem = id => {

    fetch(`http://132.248.31.70:3000/pruebas/items/items/${id}`, {
       method: 'DELETE',
       headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(response => response.json())
    .then(response => {
      setUpdate(true);
      return response.data
    });

  };

  return (
      <main className={style.page}>
        <Title>Lista de elementos</Title>
        <List items={items} addItem={addItem} updateItem={setItem} deleteItem={removeItem}/>
      </main>
  );
}

// // Obtener datos del modelo
// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }
//
// // Obtener acciones del modelo
// const mapDispatchToProps = {
//
//   createItem,
//   readItems,
//   updateItem,
//   deleteItem
//
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Page);

export default Page;
