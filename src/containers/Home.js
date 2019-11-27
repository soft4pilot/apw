

import React from 'react';
import useResource from '../resources';

import Title from '../components/atoms/Title';
import Button from '../components/atoms/Button.js';

const Home = () => {

  // Obener los datos del recurso producto
  const product = useResource('product', {});

  // Manejo de eventos
  const createProduct = () => product.create(null);
  const updateProduct = () => product.update(null);
  const removeProduct = () => product.remove(null);

  return (
    <div>
      <Title text={product.data.name} />
      <h2>{product.data.version}</h2>
      <Button onClick={createProduct}>Crear</Button>
      <Button onClick={updateProduct}>Actualizar</Button>
      <Button onClick={removeProduct}>Borrar</Button>
      <hr />
    </div>
  );

}

export default Home;
