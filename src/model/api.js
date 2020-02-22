// inspired by https://leanpub.com/redux-book
import axios from "axios";

const apiMidleware = ({ dispatch }) => next => action => {

  // Verificar si exiete el objeto 'api' para acceder al contenido
  if (!action.payload.api) return;

  const {
    url,
    method,
    data,
  } = action.payload.api;

  // Configurar el llamado a la API
  const request = axios.create({

    baseURL: 'http://localhost:3001'
    // Aquí se puede agregar seguridad, formatos aceptados, etc.

  });

  // Acceder a la API
  request({
    url,
    method,
    data: data ? data : undefined
  })
  .then(({data}) => {
    //action.payload.data = data;
    next(action);
  })
  .catch(error => {
    console.log(error);
  });

};

export default apiMidleware;
