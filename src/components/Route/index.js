import React from 'react';
import { Link } from 'react-router-dom';

// Estilos del Componente
import style from './style.module.css';

const Route = props => {

  const className = [
    style.link,
    props.selected ? 'selected' : '',
    // Aquí pueden agregarse otras propiedades...
  ].join(' ');

  return (
    <Link to={props.to} className={className}>{props.children}</Link>
  );

}

export default Route;
