import React from 'react';

// Estilos del Componente
import Style from './style.module.css';

const Card = props => (

  <div className={Style.Card}>
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.summary}</p>
  </div>
    
);

export default Card;
