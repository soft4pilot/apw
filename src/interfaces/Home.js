import React from 'react';
import useModel from '../model';

const Home = () => {

  // Obener los datos del recurso producto
  const product = useModel('product', {});

  return (
      <main></main>
  );
}

export default Home;
