import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

// Estilos del Componente
import Style from './style.module.css';

// Componente exportado
const Header = props => {

  const [scrolled, setScrolled] = useState(false);

  // Agregar un manejador al evento 'scroll'
  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  // Gestionar el evento 'scroll'
  const handleScroll = e => {

     setScrolled(window.pageYOffset > 40 ? true: false);

 };

  // Estructura del componente
  return (
    <div className={scrolled ? [Style.Header, Style.HeaderScrolled].join(' ') : Style.Header }>
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
