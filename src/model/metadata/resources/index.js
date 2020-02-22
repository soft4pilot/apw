// APW 1.1
// Modelo/Recursos (Reductor)

import types from "./types";
import resources from "./model";

// Reductor
const reducer = (state = resources, {type, payload} ) => {
    switch( type ) {
        case types.LIST: {
          return state;
        }
        case types.GET: {
          return state.find(id => id == payload);
        }
        default:
          return state;
    }
}

// Exportar le reductor
export default reducer;
