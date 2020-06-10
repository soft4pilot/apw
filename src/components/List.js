import React from 'react';
import styled from 'styled-components';

// Dependencias
import Item from './Item';

// Estilos
const Container = styled.ul`
  padding: 20px;
  list-style: none;
`;

// Componente
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
