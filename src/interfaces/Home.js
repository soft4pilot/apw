import React from 'react';
import Styled from 'styled-components';

import Product from '../components/molecules/Product';

const Container = Styled.main`
  height: 100hv;
`;

const Home = () => {

  return (
      <Container>
        <Product />
      </Container>
  );
}

export default Home;
