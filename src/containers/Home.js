

import React from 'react';
import useResource from 'resources';

import Title from 'components/atoms/Title';

const Home = () => {

  // Obener los datos del recurso producto
  const product = useResource('product', {});

  // Manejo de eventos
  const createProduct = () => product.create(null);
  const updateProduct = () => product.update(null);
  const removeProduct = () => product.remove(null);

  return (
    <div>
      <h1></h1>
      <Title text={product.data.name} />
      <h2>{product.data.version}</h2>
      <button onClick={createProduct}>Crear</button>
      <button onClick={updateProduct}>Actualizar</button>
      <button onClick={removeProduct}>Borrar</button>
      <hr />
    </div>
  );

}

export default Home;
