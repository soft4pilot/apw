// APW 1.1
// Modelo/Recursos (Acciones)

import types from "./types";

// Obtener los metadatos de un recurso
const getResourceMetadata = (id) => ({
    type: types.GET,
    payload: id
});

// Listar los recursos disponibles
const listResourcesMetadata = () => ({
    type: types.LIST,
});

// Exportar acciones
export default {
    getResourceMetadata,
    listResourcesMetadata,
};
