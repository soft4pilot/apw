import React from 'react';
import { connect } from 'react-redux';

// Componentes utilizados
import Label from '../Label';
import Text from '../Text';
import Ola from '../Ola';

// Estilos del Componente
import Style from './style.module.css';

// Componente exportado
const Hero = props => {

  // Propiedades
  const {
    product
  } = props;

  // Estructura
  return (
    <div className={Style.Hero}>
      <div className={Style.HeroContent}>
        <h1>{product.name}</h1>
        <p>{product.summary}</p>
        <label>Versión {product.version}</label>
        <button>Descargar</button>
      </div>
      <Ola />
    </div>
  );

}

// Metadatos utilizados
const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps)(Hero);
