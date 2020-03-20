import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Title = props => {

  const className = [
    style.title,
    props.inline ? 'inline' : '',
  ].join(' ');

  return (
    <h1 className={className}>{props.children}</h1>
  );

}

export default Title;
