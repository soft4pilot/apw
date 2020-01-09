// APW 1.1
// Acceso a los servicios

import axios from "axios";

const useService = (resource) => {

  // Configuración del llamado al servicio
  const request = axios.create({

    baseURL: 'https://jsonplaceholder.typicode.com'

  });

  // LLamado al servicio
  const doRequest = async (url, method, data) => {

    try {

      // Enviar solicitud HTTP a la API...
      const response = await request({

          url: url,
          method: method,
          data: data ? data : undefined

      });

      // Regresar la respuesta HTTP recibida
      return response;

    } catch (error) {

      // Desplegar el error en la consola
      console.log(error);

    }

  }

  // Cargar recurso
  const read = async () => {

    return await doRequest(resource, 'GET');

  };

  // Crear un recurso nuevo
  const create = async (data) => {

    return await doRequest(resource, 'POST', data);

  };

  // Actualizar un recurso
  const update = async (id, data) => {

    return await doRequest(`${resource}/${id}`, 'PUT', data);

  };

  // Eliminar un recurso
  const remove = async (id) => {

    return await doRequest(`${resource}/${id}`, 'DELETE');

  };

  return {read, create, update, remove};

};

export default useService;
