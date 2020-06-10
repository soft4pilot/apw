import React from 'react';

// Metadatos
import metadata from '../../metadata.json';

// Componentes utilizados
import Title from '../Title';
import Subtitle from '../Subtitle';
import Paragraph from '../Paragraph';

// Estilos del Componente
import style from './style.module.css';

// Componente exportado
const Product = () => (

  <div className={style.product}>
    <Title inline>{metadata.product.name}</Title>
    <Subtitle inline>{metadata.product.version}</Subtitle>
    <Paragraph>{metadata.product.summary}</Paragraph>
  </div>

);

export default Product;
