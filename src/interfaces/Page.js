import React, { useState, useEffect } from 'react';

import useService from '../services'

const Page = () => {

  // Acceso a los servicios
  const users = useService('/users');

  // Inicialización de la interface
  useEffect(() => {

    users.read();

  }, []);

  const delUser = (id) => {

    users.remove(id);

  }

  return (
      <main>
        <h1>Página interna</h1>
        <ul>
          { users.data.map((user, i) => (
            <li key={user.id} onClick={() => delUser(user.id)}>{user.name}</li>
          )) }
        </ul>
      </main>
  );
}

export default Page;
