import React from 'react';
import Styled from 'styled-components';

import Item from '../../molecules/Item';

const Container = Styled.ul`
  padding: 20px;
  list-style: none;
`;

const List = props => {

  // Estructura del componente
  return (
    <Container>
      { props.items.map(item => (
        <Item key={item.id} onDeleteItem={() => props.onDeleteItem(item.id)} onClick={props => props.isEditing = ! props.isEditing} deletable>{item.name}</Item>
        ))
      }
      <Item key={'NEW'} isEditing></Item>
    </Container>

  );

}

export default List;
