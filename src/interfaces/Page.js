import React, { useState, useEffect } from 'react';

import useService from '../services'

import Items from '../components/organisms/Items'

const Page = () => {

  // Acceso a los servicios
  const items = useService('/items');

  // Inicialización de la interface
  useEffect(() => {

    items.read();

  }, []);

  const delUser = (id) => {

    items.remove(id);

  }

  return (
      <main>
        <Title>Items</Title>
        <Items items={items.data} />
      </main>
  );
}

export default Page;
