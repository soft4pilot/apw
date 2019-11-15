
import axios from 'axios';

const useResource = resource => {

  const base = "https://my-json-server.typicode.com/josesteva/apw-data/"; // NOTA: Obtener la url base de la configuración

  // Datos
  const [data, setData] = useState();

  const get = async (id) => {

    // Determinar su regresar todos o sólo un registro (id)
    const url = `${base}${resource}${id ? `/${id}` : ""}`;

    const response = await axios({
        method: "GET",
        url: url
      });

    return response.data;

  };

  const post = async (data) => {

    const url = `${base}${resource}`;

    try {

      const response = await axios({
          method: "POST",
          url: url,
          data: data
        });

      return response.data;

    } catch (error) {

      throw error;

    }

  };

  const put = async (id, data) => {

    const url = `${base}${resource}/${id}`;

    try {

      const response = await axios({
          method: "PUT",
          url: url,
          data: data
        });

      return response.data;

    } catch (error) {

      throw error;

    }

  };

  const del = async (id) => { // La pababra "delete" está reservada por el javascript

    const url = `${base}${resource}/${id}`;

    try {

      const response = await axios({
          method: "DELETE",
          url: url
        });

      return response.data;

    } catch (error) {

      throw error;

    }

  };

  return {
    get,
    post,
    put,
    del
  };

};

export default useResource;
