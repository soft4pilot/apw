

import React, { useState, useEffect } from 'react';

//import axios from 'axios';

import { useFetch } from '../services/fetch';

import Title from 'components/atoms/Title';

// Utilizar: const Home = props => (
// ...
// );

function Home() {

  //const [product, setProduct] = useState({});

  // useEffect(() => {
  //
  //   const getProduct = async () => {
  //
  //     const result = await axios(
  //       'https://my-json-server.typicode.com/josesteva/apw-data/product',
  //     );
  //
  //     setProduct(result.data);
  //
  //   };
  //
  //   getProduct();
  //
  // }, []);

  const api = useFetch('https://my-json-server.typicode.com/josesteva/apw-data/product', {});

  const product = api.response;

  return (
    <div>
      <Title text={product.name} />
      <hr />
    </div>
  );
}

export default Home;
