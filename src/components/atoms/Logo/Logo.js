import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

// Componente con estilo
const StyleImage = Styled.img`
  height: 50px;
  margin: 15px;
  cursor: pointer;
`;

const Logo = props => (
  <StyleImage src={props.logo} />
);

// Obtener datos del modelo
const mapStateToProps = state => {
  return {
    logo: state.company.logo
  }
}

export default connect(mapStateToProps)(Logo);
