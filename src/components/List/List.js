import React from 'react';
import Styled from 'styled-components';

import Item from '../Item';

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
