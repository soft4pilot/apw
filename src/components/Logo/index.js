import React from 'react';

// Metadatos
import metadata from '../../metadata.json';

// Estilos
import style from './style.module.css';

// Componente
const Logo = () => (
  <img className={style.logo} src={metadata.company.logo} />
);

export default Logo;
