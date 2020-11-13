// APW 1.5
// Hooks - Acceso a los datos

import { useEffect, useState } from 'react';

// Hook
const useQuery = (url, iniQuery) => {

  // Estado de la consulta
  const [query, setQuery] = useState(iniQuery);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(); // IMPORTANTE: ¡No inicializar los datos!
                                      // Se requiere un valor null para poder determiar cuando llegan los datos al componente.

  // NOTA: Utilizar el estado de la aplicación para obtener esta información!
  //const url = md ? 'https://api-us-west-2.graphcms.com/v2/ckhdv976b1nu301z726h26rag/master' : 'https://api-us-west-2.graphcms.com/v2/ckhbgkjs3afpk01z7dnqocy9j/master';

  // Parámetros para fetch()
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  // Ejecutar la consulta al montar el componente
  useEffect(() => {


    // const execQuery = async () => {

      setError(false);
      setLoading(true);

      // try {
      //   const response = await fetch(url, opts);
      //   const object = await response.json();
      //   setData(object.data);
      // } catch (error) {
      //   setError(true);
      // }

      // Enviar una petición HTTP
      fetch(url, opts)
        .then(response => response.json())      // Procesar la respuesta
        .then(object => setData(object.data))   // Obtener los datos
        .catch( error => setError(true));       // Si hubo un error, avisar al componente

      setLoading(false);

    // };
    //
    // execQuery();


  }, [query]); // Volver a ejecutar la consulta cuando cambie su estructura

  // Regresar los datos, el estado de la consulta y una función para actualizarla
  return [{loading, error, data}, setQuery];

}

export default useQuery;
