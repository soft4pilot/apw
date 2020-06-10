import React from 'react';
import { connect } from 'react-redux';

// Componentes utilizados
import Email from '../Email';

// Estilos del Componente
import style from './style.module.css';

// Componente exportado
const Footer = props => {

  // Propiedades
  const {
    company,
  } = props;

  // Estructura
  return (
    <footer className={style.footer}>
      <Email href="mailto:{company.email}">{company.email}</Email>
    </footer>
  );

}

// Datos utilizados
const mapStateToProps = (state) => {
  return {
    company: state.company
  }
}

export default connect(mapStateToProps)(Footer);
