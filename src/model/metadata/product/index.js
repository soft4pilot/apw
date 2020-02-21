// APW 1.1
// Recursos/Producto (Reductor)

import types from "./types";
import product from "./model";

// Reductor
const reducer = (state = product, {type, payload} ) => {
    switch( type ) {
        case types.GET: {
          return state;
        }
        default:
          return state;
    }
}

export default reducer;
