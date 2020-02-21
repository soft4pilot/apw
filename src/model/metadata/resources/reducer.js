// APW 1.1
// Recursos/Recursos (Reductor)

import types from "./types";
import model from "./model";

// Reductor
const reducer = (state = model, {type, payload} ) => {
    switch( type ) {
        case types.LIST: {
          return state;
        }
        case types.GET: {
          return state.find(id => id == payload);
        }
        default:
          return null;
    }
}

// Exportar le reductor
export default reducer;
