// APW 1.1
// Modelo/Empresa (Reductor)

import types from "./types";
import items from "./model";

// Reductor
const reducer = (state = [], {type, payload} ) => {

  switch( type ) {
    case types.POST: {

    }
    case types.GET: {
      return payload.data;
    }
    case types.PUT: {

    }
    case types.DELETE: {

    }
    default:
      return state;
  }
}

export default reducer;
