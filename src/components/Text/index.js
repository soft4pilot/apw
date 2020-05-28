import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Text = props => (

  <span className={style.text}>{props.children}</span>

);

export default Text;
