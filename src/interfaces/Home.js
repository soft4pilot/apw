import React from 'react';
import Styled from 'styled-components';

const Container = Styled.main`
  height: 100hv;
`;

const Home = () => {

  return (
      <Container>
        <h1>Página principal</h1>
      </Container>
  );
}

export default Home;
