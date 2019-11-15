

import React from 'react';
import useData from 'access';
import useResource from 'services';

import Title from 'components/atoms/Title';

// Utilizar: const Home = props => {
// ...
// );

const Home = () => {

  // Obener los datos del recurso producto
  const product = useData('product', {});

  return (
    <div>
      <h1></h1>
      <Title text={product.name} />
      <hr />
    </div>
  );

}

export default Home;
