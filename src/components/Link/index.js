import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Estilos del Componente
import style from './style.module.css';

const Link = props => {

  const className = [
    style.link,
    props.selected ? 'selected' : '',
    // Aquí pueden agregarse otras propiedades...
  ].join(' ');

  return (
    <RouterLink to={props.to} className={className}>{props.children}</RouterLink>
  );

}

export default Link;
