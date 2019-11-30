
import { useState, useEffect } from "react";

import axios from "axios";

const useModel = (resource, value) => {

  // ...
  const api = axios.create({

    baseURL: 'http://localhost:4000/'

  });

  // Datos utilizados por el componente
  const [data, setData] = useState(value);

  // Bandera para volver a obtener el recurso
  const [updated, setUpdated] = useState(false);

  // Al montar el componente
  useEffect( () => {

    const getData = async () => {

      try {

        // Enviar solicitud GET a la API...
        const response = await api({
            method: "GET",
            url: resource
          });

        // Si puede obtenerse el recurso, cargarlo...
        if (response.status === 200) {
          console.log("Se obtuvo un recurso");
          setData(response.data);
        }

      } catch (error) {

        throw error;

      } finally {

        setUpdated(false);

      }

    }

    getData();

  // NOTA: Deshabilité temporalmente una advertencia (warning) pero es importante estudiar con cuidado el problema después.
  // eslint-disable-next-line
  }, [updated]);

  // Cargar recurso
  const read = () => {

    setUpdated(true);

  };

  // Crear un recurso nuevo
  const create = async (data) => {

    try {

      // Enviar solicitud POST a la API...
      const response = await api({
        method: "POST",
        url: resource,
        data: data
      });

      // Si puede crearse el recurso, recargarlo...
      if (response.status === 201) {
        console.log("Se creó un recurso");
        setUpdated(true);
      }

    } catch (error) {

      throw error;

    }

  };

  // Actualizar un recurso
  const update = async (data, id) => {

    try {

      // Enviar solicitud PUT a la API...
      const response = await api({
        method: "PUT",
        url: `${resource}/${id}`,
        data: data
      });

      // Si puede actualizarse el recurso, recargarlo...
      if (response.status === 200) {
        console.log("Se actualizó un recurso");
        setUpdated(true);
      }

    } catch (error) {

      throw error;

    }

  };

  // Eliminar un recurso
  const remove = async (id) => {

    try {

      // Enviar solicitud PUT a la API...
      const response = await api({
        method: "DELETE",
        url: `${resource}/${id}`,
      });

      // Si puede actualizarse el recurso, recargarlo...
      if (response.status === 200) {
        console.log("Se borró un recurso");
        setUpdated(true);
      }

    } catch (error) {

      throw error;

    }

  };

  return {data, read, create, update, remove};

};

export default useModel;
