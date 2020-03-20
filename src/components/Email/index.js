import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Email = props => {

  return (
    <a className={style.email}>{props.children}</a>
  );
}

export default Email;
