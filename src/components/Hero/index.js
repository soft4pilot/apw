import React from 'react';
import { connect } from 'react-redux';

// Componentes utilizados
import Title from '../Title';
import Label from '../Label';
import Text from '../Text';

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
      <Title>{product.name}</Title>
      <Text>{product.summary}</Text>
      <Label>Versión {product.version}</Label>
      <button>Descargar</button>
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
