import React from 'react';
import { connect } from 'react-redux';

// Estilos del Componente
import style from './style.module.css';

const Logo = props => (
  <img className={style.logo} src={props.logo} />
);

// Obtener datos del modelo
const mapStateToProps = state => {
  return {
    logo: state.company.logo
  }
}

export default connect(mapStateToProps)(Logo);
