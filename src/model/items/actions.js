// APW 1.1
// Modelo/Empresa (Acciones)

import types from "./types";

// Crear un elemento
const createItems = data => ({
    type: types.POST,
    payload: {
      api: {
        url: '/items',
        method: 'post',
        data: data
      }
    }
});

// Obtener un elemento
const getItems = () => ({
    type: types.GET,
    payload: {
      api: {
        url: '/items',
        method: 'get'
      }
    }
});

// Modificar un elemento
const updateItems = data => ({
    type: types.PUT,
    payload: {
      api: {
        url: `/items/${data.id}`,
        method: 'put',
        data: data
      }
    }
});

// Eliminar un elemento
const deleteItems = id => ({
    type: types.DELETE,
    payload: {
      api: {
        url: `/items/${id}`,
        method: 'delete'
      }
    }
});

export default {
    createItems,
    getItems,
    updateItems,
    deleteItems,
};
