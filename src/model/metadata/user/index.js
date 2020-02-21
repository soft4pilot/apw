// APW 1.1
// Recursos/Recursos (Reductor)

import types from "./types";
import user from "./model";

// Reductor
const reducer = (state = user, {type, payload} ) => {
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
