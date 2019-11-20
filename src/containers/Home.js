

import React from 'react';
import useResource from 'resources';

import Title from 'components/atoms/Title';

const Home = () => {

  // Obener los datos del recurso producto
  const product = useResource('product', {});

  return (
    <div>
      <h1></h1>
      <Title text={product.data.name} />
      <button onClick={() => product.create}>Crear</button>
      <button onClick={() => product.update}>Actualizar</button>
      <button onClick={() => product.remove}>Borrar</button>
      <hr />
    </div>
  );

}

export default Home;
