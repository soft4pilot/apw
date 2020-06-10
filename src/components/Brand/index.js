// Librerias
import React from 'react';

// Metadatos
import metadata from '../../metadata.json';

// Componentes
import Logo from '../Logo';
import Title from '../Title';

// Estilos
import style from './style.module.css';

// Componente exportado
const Brand = () => (
  
  <div className={style.brand}>
    <Logo />
    <Title size='2em'>{metadata.company.name}</Title>
  </div>
);

export default Brand;
