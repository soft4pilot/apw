// APW 1.1
// Modelo - Datos - Items

// Tipos de acciones
export const GET = 'data/items/GET';
export const GET_SUCCESS = 'data/items/GET_SUCCESS';
export const GET_FAIL = 'data/items/GET_FAIL';

// Estado predeterminado
const items = [];

// Reductor
export default (state = items, {type, payload} ) => {
  switch (type) {
    case GET:
      return [...state];
    case GET_SUCCESS:
      return [...payload.data];
    case GET_FAIL:
      console.log('ERROR');
      return [];
    default:
      return state;
  }
}

// Creadores de acciones
export const getItems = () => ({
  type: GET,
  payload: {
    request: {
      url: '/items'
    }
  }
});
