

import React from 'react';
import useData from 'access';

import Title from 'components/atoms/Title';

// Utilizar: const Home = props => (
// ...
// );

function Home() {

  // Obener los datos del recurso producto
  const product = useData('product', {});

  return (
    <div>
      <Title text={product.name} />
      <hr />
    </div>
  );

}

export default Home;
