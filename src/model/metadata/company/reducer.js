// APW 1.1
// Recursos/Empresa (Reductor)

import types from "./types";
import model from "./model";

// Reductor
const reducer = (state = model, {type, payload} ) => {
    switch( type ) {
        case types.GET: {
          return state;
        }
        default:
          return null;
    }
}

export default reducer;
