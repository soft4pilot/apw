import React from 'react';
import { Icon } from 'react-icons-kit';

// Estilos del Componente
import style from './style.module.css';

const Command = props => (

  <Icon className={style.command} icon={props.icon} onClick={props.action} />

);

export default Command;
