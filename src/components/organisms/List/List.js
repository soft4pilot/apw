import React from 'react';
import Styled from 'styled-components';

import { plus } from 'react-icons-kit/fa/plus'

import Command from '../../atoms/Command';
import Item from '../../molecules/Item';

const Container = Styled.ul`
  padding: 20px;
  list-style: none;
`;

// Componente exportado
const List = props => {

  // Estructura del componente
  return (
    <Container>
      { props.items.map(item => (
        <Item key={item.id} value={item.text} dataChange={value => props.updateItem(item.id, {text: value})} deleteRequest={() => props.deleteItem(item.id)} />
        ))
      }
      <Item key={0} value={''} dataInput={value => { props.addItem({text: value});}} />
    </Container>
  );

}

export default List;
