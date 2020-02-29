// APW 1.1
// Modelo - Datos - Items

// Tipos de acciones
export const POST = 'data/items/POST';
export const POST_SUCCESS = 'data/items/POST_SUCCESS';
export const POST_FAIL = 'data/items/POST_FAIL';

export const GET = 'data/items/GET';
export const GET_SUCCESS = 'data/items/GET_SUCCESS';
export const GET_FAIL = 'data/items/GET_FAIL';

export const PUT = 'data/items/PUT';
export const PUT_SUCCESS = 'data/items/PUT_SUCCESS';
export const PUT_FAIL = 'data/items/PUT_FAIL';

export const DELETE = 'data/items/DELETE';
export const DELETE_SUCCESS = 'data/items/DELETE_SUCCESS';
export const DELETE_FAIL = 'data/items/DELETE_FAIL';

// Estado predeterminado
const items = [];

// Reductor
export default (state = items, {type, payload} ) => {
  switch (type) {
    case POST:
      return state;
    case POST_SUCCESS:
      return [...payload.data];
    case POST_FAIL:
      console.log('ERROR', payload);
      return state;
    case GET:
      return state;
    case GET_SUCCESS:
      return [...payload.data];
    case GET_FAIL:
      console.log('ERROR', payload);
      return state;
    case PUT:
      return state;
    case PUT_SUCCESS:
      return [...payload.data];
    case PUT_FAIL:
      console.log('ERROR', payload);
      return state;
    case DELETE:
      return state;
    case DELETE_SUCCESS:
      console.log('SUCCESS');
      return state.filter(item => item.id !== payload.data.id)
    case DELETE_FAIL:
      console.log('ERROR', payload);
      return state;
    default:
      return state;
  }
}

// Acción: Obtener elementos
export const addItem = data => ({
  type: POST,
  payload: {
    request: {
      method: 'post',
      url: '/items',
      data: data
    }
  }
});

// Acción: Obtener elementos
export const getItems = () => ({
  type: GET,
  payload: {
    request: {
      method: 'get',
      url: '/items'
    }
  }
});

// Acción: Obtener elementos
export const updateItem = (id, data) => ({
  type: PUT,
  payload: {
    request: {
      method: 'put',
      url: `/items/${id}`,
      data: data
    }
  }
});

// Acción: Obtener elementos
export const deleteItem = id => ({
  type: DELETE,
  payload: {
    request: {
      method: 'delete',
      url: `/items/${id}`
    }
  }
});
