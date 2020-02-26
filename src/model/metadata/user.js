// APW 1.1
// Modelo - Metadatos - Usuario

// Modelo de datos
const user = {
  name: null,
  access: 0
};

// Tipos de acciones
const UPDATE = "metadata/user/UPDATE";
const DELETE = "metadata/user/DELETE";

// Reductor
export default (state = user, {type, payload} ) => {
  switch( type ) {
    case UPDATE: {
      return { ...payload };
    }
    case DELETE: {
      return {};
    }
    default:
      return state;
  }
}

// Acción: Actualizar usuario
export const updateUser = payload => ({
  type: UPDATE,
  payload
});

// Acción: Eliminar usuario
export const deleteUser = () => ({
  type: DELETE,
});
