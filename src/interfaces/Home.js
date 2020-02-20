import React from 'react';
import Styled from 'styled-components';

import Product from '../components/molecules/Product';

const Container = Styled.main`
  padding: 20px;
`;

const Home = () => {

  return (
      <Container>
        <Product />
      </Container>
  );
}

export default Home;
