import React, { useState, useEffect } from 'react';

import useService from '../services'

const Page = () => {

  // Acceso a los servicios
  const service = useService('/users');

  // Buffer para los datos
  const [data, setData] = useState([]);

  // Inicialización de la interface
  useEffect(() => {

    const loadData = async () => {

      const response = await service.read();

      if (response.status === 200) {
        setData(response.data);
      }

    };

    loadData();

  }, []);

  const delUser = (id) => {

    service.remove(id);

  }

  return (
      <main>
        <ul>
          { data.map((user, i) => (
            <li key={user.id} onClick={() => delUser(user.id)}>{user.name}</li>
          )) }
        </ul>
      </main>
  );
}

export default Page;
