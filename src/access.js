
import { useState, useEffect } from "react";

import axios from "axios";

const useData = (resource, initialValue) => {

  // URL del recurso
  const url = 'https://my-json-server.typicode.com/josesteva/apw-data/' + resource; // NOTA: Obtener la url base de la configuración

  // Datos utilizados por el componente
  const [data, setData] = useState(initialValue);

  // Al montar el componente
  useEffect(() => {

    // Obtener los datos utilizando la API
    const fetchData = async function() {

      try {

        // NOTA: Podría utilizar un switch para seleccionar unos de los los 4 verbos de RESTful: GET, PUT, POST, DELETE

        const response = await axios.get(url);

        if (response.status === 200) {
          setData(response.data);
        }

      } catch (error) {

        throw error;

      }

    };

    fetchData();

  }, [url]);

  return data;

};

export default useData;
