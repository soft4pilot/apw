

import React from 'react';
import useResource from 'resources';

import Title from 'components/atoms/Title';

const Home = () => {

  // Obener los datos del recurso producto
  const [product, actions] = useResource('product', {});

  return (
    <div>
      <h1></h1>
      <Title text={product.name} />
      <button onClick={() => actions.updateResource}>Actualizar</button>
      <hr />
    </div>
  );

}

export default Home;
