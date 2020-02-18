// APW 1.1
// Acceso a los servicios

import { useState } from 'react';

import axios from "axios";

// Definición del Hook
const useService = (resource) => {

  // Buffer para mantener los datos del recurso
  const [data, setData] = useState([]);

  // Se puede incluir también espacio para otros datos: status, header, etc.

  // Configuración del llamado al servicio
  const request = axios.create({

    //baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:3001'

    // Aquí se puede agregar seguridad, formatos aceptados, etc.

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

    const response = await doRequest(resource, 'GET');

    //if (response.status === 200)
    setData(response.data);

  };

  // Crear un recurso nuevo
  const create = async (data) => {

    const response = await doRequest(resource, 'POST', data);

    await read();

  };

  // Actualizar un recurso
  const update = async (id, data) => {

    const response = await doRequest(`${resource}/${id}`, 'PUT', data);

    await read();

  };

  // Eliminar un recurso
  const remove = async (id) => {

    const response = await doRequest(`${resource}/${id}`, 'DELETE');

    await read();

  };

  return {data, read, create, update, remove};

};

export default useService;
