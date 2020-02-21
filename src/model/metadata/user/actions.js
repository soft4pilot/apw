// APW 1.1
// Recursos/Usuario (Acciones)

import types from "./types";

// Obtener los metadatos de un recurso
const getUserMetadata = () => ({
    type: types.GET,
});

// Listar los recursos disponibles
const setUserMetadata = (user) => ({
    type: types.UPDATE,
    payload: user
});

// Exportar acciones
export default {
    getUserMetadata,
    setUserMetadata,
};
