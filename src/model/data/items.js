// APW 1.1
// Modelo - Datos - Items

// NOTA: EL DESAFÍO ES CONVERTIR ESTO EN UN HOOK (useData o useResource o UseApi) QUE FECIBA COMO PARÄMETROS: resource, defaultValue

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

export const ENTER_EDIT_MODE = 'data/items/ENTER_EDIT_MODE';

// Estado predeterminado
const items = [];

// Reductor
export default (state = items, {type, payload} ) => {

  switch (type) {
    case POST_SUCCESS:
      return state.concat([payload.data]); // Otra manera de hacerlo --> return [...state, payload.data ];
    case GET_SUCCESS:
      return [...payload.data];
    case PUT_SUCCESS:
      return state.map(item => {
        if (item.id !== payload.data.id) return item;
        return {
          ...item,
          text: payload.data.text
        }
      });
    case DELETE_SUCCESS:
      return state.filter(item => item.id !== payload.config.params.id);
    case DELETE_FAIL:
      return state;
    case POST_FAIL:
    case GET_FAIL:
    case PUT_FAIL:
    case DELETE_FAIL:
    console.log('ERROR in data/items/:', payload);
    default:
      return state;
  }
}

// Acción: Crear elemento
export const createItem = data => ({
  type: POST,
  payload: {
    request: {
      method: 'post',
      url: '/items',
      data
    }
  }
});

// Acción: Leer elementos
export const readItem = id => ({
  type: GET,
  payload: {
    request: {
      method: 'get',
      url: `/items/${id}`
    }
  }
});

// Acción: Leer elementos
export const readItems = () => ({
  type: GET,
  payload: {
    request: {
      method: 'get',
      url: '/items'
    }
  }
});

// Acción: Actualizar elemento
export const updateItem = (id, data) => ({
  type: PUT,
  payload: {
    request: {
      method: 'put',
      url: `/items/${id}`,
      data
    }
  }
});

// Acción: Eliminar elemento
export const deleteItem = id => ({
  type: DELETE,
  payload: {
    request: {
      method: 'delete',
      url: `/items/${id}`,
      params: {
        id
      }
    }
  }
});
