// Librerias
import React from 'react';

// Metadatos
import metadata from '../../metadata.json';

// Componentes
import Command from '../Command';
import Link from '../Link';

// Estilos
import style from './style.module.css';
import { search } from 'react-icons-kit/fa/search';

// Componente exportado
const Menu = () => (

  <nav className={style.menu}>
    { metadata.resources.map((resource, i) => (
      <Link key={i} to={resource.route}>{resource.byname}</Link>
    ))}
    <Command icon={search} action={() => alert('Ouch!')} />
  </nav>
);

export default Menu;
