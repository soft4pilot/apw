// APW 1.1
// Modelo/Empresa (Reductor)

import types from "./types";
import company from "./model";

// Reductor
const reducer = (state = company, {type, payload} ) => {

        switch( type ) {
        case types.GET: {
          return state;
        }
        default:
          return state;
    }
}

export default reducer;
