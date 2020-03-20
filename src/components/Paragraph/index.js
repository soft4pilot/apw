import React from 'react';

// Estilos del Componente
import style from './style.module.css';

const Paragraph = props => (

  <p className={style.paragraph}>{props.children}</p>

);

export default Paragraph;
