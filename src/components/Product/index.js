import React from 'react';
import { connect } from 'react-redux';

// Componentes utilizados
import Title from '../Title';
import Subtitle from '../Subtitle';
import Paragraph from '../Paragraph';

// Estilos del Componente
import style from './style.module.css';

// Componente exportado
const Product = props => {

  // Propiedades
  const {
    product
  } = props;

  // Estructura
  return (
    <div className={style.product}>
      <Title inline>{product.name}</Title>
      <Subtitle inline>{product.version}</Subtitle>
      <Paragraph>{product.summary}</Paragraph>
    </div>
  );

}

// Metadatos utilizados
const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps)(Product);
