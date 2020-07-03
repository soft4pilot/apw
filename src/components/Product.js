import React from 'react';
import styled from 'styled-components';

// Metadatos
import metadata from '../model/metadata.json';

// Componentes utilizados
// import Title from './Title';
// import Subtitle from './Subtitle';
// import Paragraph from './Paragraph';

// Recursos
import background from '../assets/background_2.jpg';

// Estilos
const Container = styled.div`

  width: 100%;
  height: 540px;
  padding: 160px 360px;
  text-align: center;
  background: url(${background});
  background-size: cover;
`;

const Name = styled.h1`

  display: inline;

  /* font-family: Nunito;
  font-style: normal; */
  font-weight: 600;
  font-size: 72px;
  line-height: 76px;

  color: #F2F2F2;
`;

const Version = styled.small`
  /* font-family: Nunito;
  font-style: normal; */
  font-weight: 600;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  text-transform: uppercase;

  color: #D6A9E0;
`;

const Summary = styled.p`

  /* font-family: Nunito;
  font-style: normal; */
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  text-align: center;

  color: #D0D7EE;
`;

const Repository = styled.button`

  margin-top: 72px;
  padding: 12px 20px;

  /* font-family: Nunito;
  font-style: normal; */
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FFFFFF;

  background: #B50FD9;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 5px 40px rgba(255, 255, 255, 0.75);
  border-radius: 10px;

  outline: none;

`;

// Componente exportado
const Product = () => (

  <Container>
    <Name inline>
      {metadata.product.name}
      <Version inline>{metadata.product.version}</Version>
    </Name>
    <Summary>{metadata.product.summary}</Summary>
    <Repository>Descargar</Repository>
  </Container>

);

export default Product;
