// APW 1.1
// Interfaces - Page

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { getItems } from '../model/data/items';

import Title from '../components/atoms/Title'
import List from '../components/organisms/List'

const Container = Styled.main`
  padding: 20px;
`;

const Page = props => {

  // Inicialización de la interface
  useEffect(() => {

    props.getItems().then(() => {
    console.log('OK');
    })
    .catch((response) => {
      console.log('ERROR');
    });

  }, []);

  return (
      <Container>
        <Title>Lista de elementos</Title>
        <List items={props.items} />
      </Container>
  );
}

// Obtener datos del modelo
const mapStateToProps = state => {
  return {
    items: state.items
  }
}

// Obtener acciones del modelo
const mapDispatchToProps = {
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
