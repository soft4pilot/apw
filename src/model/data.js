// APW 1.1
// Hooks - Acceso a los datos

import { useEffect, useState } from 'react';

const useData = (collection) => {

  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState(true);

  // Inicialización de la interface
  useEffect(() => {

    fetch(`http://132.248.31.70:3000/pruebas/items/${collection}`, {
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      setItems(response.data);
      setUpdate(false);
    });

  }, [update]); // eslint-disable-line react-hooks/exhaustive-deps

  // Agregar un elemento a la colección
  const createItem = data => {

    fetch(`http://132.248.31.70:3000/pruebas/items/${collection}`, {
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
  const readItem = id => {

    fetch(`http://132.248.31.70:3000/pruebas/items/${collection}/${id}`, {
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
  const updateItem = (id, data) => {

    fetch(`http://132.248.31.70:3000/pruebas/items/${collection}/${id}`, {
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
  const deleteItem = id => {

    fetch(`http://132.248.31.70:3000/pruebas/items/${collection}/${id}`, {
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

  return [

      items,
      createItem,
      readItem,
      updateItem,
      deleteItem

  ]

}

export default useData;
