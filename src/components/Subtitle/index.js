import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Subtitle = props => {

  const className = [
    style.subtitle,
    props.inline ? 'inline' : '',
  ].join(' ');

  return (
    <h2 className={className}>{props.children}</h2>
  );

}

export default Subtitle;
