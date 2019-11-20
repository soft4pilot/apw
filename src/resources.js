
import { useState, useEffect, useReducer } from "react";

import axios from "axios";

// NOTA: Obtener estos datos de un archivo de configuración...
// const call = axios.create({
//
//   baseURL: 'https://my-json-server.typicode.com/josesteva/apw-data/'
//
// });

const useResource = (resource, defaultValue) => {

  // URL para acceder a la API
  const baseURL = 'https://my-json-server.typicode.com/josesteva/apw-data/';

  // Datos utilizados por el componente
  const [data, setData] = useState(defaultValue);

  // Al montar el componente
  useEffect(() => {

    readResource();

  }, []);

  // Crear recurso
  const createResource = async (data) => {

    try {

      const url = `${baseURL}${resource}`;

      // Enviar solicitud POST a la API...
      const response = await axios({
        method: "POST",
        url: url,
        data: data
      });

      // Si puede crearse el recurso, recargarlo...
      if (response.status === 200) {
        console.log("Se creó un recurso");
        readResource();
      }

    } catch (error) {

      throw error;

    }

  };

  // Obtener recursos
  const readResource = async (id) => {

    try {

      const url = `${baseURL}${resource}${id ? `/${id}` : ""}`;

      // Enviar solicitud GET a la API...
      const response = await axios({
          method: "GET",
          url: url
        });

      // Si puede obtenerse el recurso, cargarlo...
      if (response.status === 200) {
        console.log("Se obtuvo un recurso");
        setData(response.data);
      }

    } catch (error) {

      throw error;

    }

  };

  // Actualizar recurso
  const updateResource = async (id, data) => {

    try {

      const url = `${baseURL}${resource}/${id}`;

      // Enviar solicitud PUT a la API...
      const response = await axios({
        method: "PUT",
        url: url,
        data: data
      });

      // Si puede actualizarse el recurso, recargarlo...
      if (response.status === 200) {
        console.log("Se actualizó un recurso");
        readResource();
      }

    } catch (error) {

      throw error;

    }

  };

  // Eliminar recurso
  const deleteResource = async (id) => {

    try {

      const url = `${baseURL}${resource}/${id}`;

      // Enviar solicitud PUT a la API...
      const response = await axios({
        method: "DELETE",
        url: url
      });

      // Si puede actualizarse el recurso, recargarlo...
      if (response.status === 200) {
        console.log("Se eliminó un recurso");
        readResource();
      }

    } catch (error) {

      throw error;

    }

  };

  return [data, {createResource, readResource, updateResource, deleteResource}];

};

export default useResource;
