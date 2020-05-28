import React from 'react';
import { Link } from 'react-router-dom';

// Estilos del Componente
import Style from './style.module.css';

// Componente exportado
const Header = props => {

  // Estructura
  return (
    <div className={Style.Header}>
      <div className={Style.HeaderGroup}>
        <Link to="/"><img src="http://placehold.it/60x60" /></Link>
        <Link to="/page">Uno</Link>
        <Link to="/page">Dos</Link>
        <Link to="/page">Tres</Link>
      </div>
    </div>
  );

}

export default Header;
