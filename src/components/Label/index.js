import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Label = props => (

  <div className={style.label}>{props.children}</div>

);

export default Label;
