

import React from 'react';
import useResource from '../resources';

const Home = () => {

  // Obener los datos del recurso producto
  const product = useResource('product', {});

  // Manejo de eventos
  const createProduct = () => product.create(null);
  const updateProduct = () => product.update(null);
  const removeProduct = () => product.remove(null);

  return (
      <main></main>
  );
}

export default Home;
