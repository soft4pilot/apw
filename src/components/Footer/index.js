import React from 'react';

// Metadatos
import metadata from '../../metadata.json';

// Componentes utilizados
import Email from '../Email';

// Estilos
import style from './style.module.css';

// Componente exportado
const Footer = () => (
  <footer className={style.footer}>
    <Email href="mailto:{metadata.company.email}">{metadata.company.email}</Email>
  </footer>
);

export default Footer;
