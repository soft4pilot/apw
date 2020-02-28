// APW 1.1
// Modelo - Datos - Items

// Tipos de acciones
export const GET = 'data/items/GET';
export const GET_SUCCESS = 'data/items/GET_SUCCESS';
export const DELETE = 'data/items/DELETE';
export const DELETE_SUCCESS = 'data/items/DELETE_SUCCESS';

// Estado predeterminado
const items = [];

// Reductor
export default (state = items, {type, payload} ) => {
  switch (type) {
    case GET:
      return state;
    case GET_SUCCESS:
      return [...payload.data];
    case DELETE:
      return state;
    case DELETE_SUCCESS:
      return state.filter(item => item.id !== payload.data.id)
    default:
      return state;
  }
}

// Acción: Obtener elementos
export const getItems = () => ({
  type: GET,
  payload: {
    request: {
      url: '/items'
    }
  }
});

// Acción: Obtener elementos
export const deleteItem = id => ({
  type: DELETE,
  payload: {
    request: {
      url: `/items/${id}`
    }
  }
});
