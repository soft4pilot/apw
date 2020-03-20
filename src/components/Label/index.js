import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Label = props => (

  <span className={style.label}>{props.children}</span>

);

export default Label;
