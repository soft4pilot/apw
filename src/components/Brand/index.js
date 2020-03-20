import React from 'react';
import { connect } from 'react-redux';

// Componentes utilizados
import Logo from '../Logo';
import Title from '../Title';

// Estilos del Componente
import style from './style.module.css';

// Componente exportado
const Brand = props => {

  const {
    company,
  } = props;

  // Estructura del componente
  return (
    <div className={style.brand}>
      <Logo />
      <Title size='2em'>{company.name}</Title>
    </div>
  );

}

// Datos utilizados
const mapStateToProps = model => {
  return {
    company: model.company
  }
}

export default connect(mapStateToProps)(Brand);
