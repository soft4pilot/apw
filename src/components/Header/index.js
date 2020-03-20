import React from 'react';

// Componetes utilizados
import Brand from '../Brand';
import Menu from '../Menu';

// Estilos del Componente
import style from './style.module.css';

// Componente exportado
const Header = props => {

  // Estructura
  return (
    <header className={style.header}>
      <Brand />
      <Menu />
    </header>
  );

}

export default Header;
