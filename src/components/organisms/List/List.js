import React, { useState } from 'react';
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

  const  [newValue, setNewValue] = useState(props.children);

  // Estructura del componente
  return (
    <Container>
      { props.items.map(item => (
        <Item key={item.id} doAccept={() => console.log('UPDATE CALL')} doCancel={() => props.doDelete(item.id)}>{item.name}</Item>
        ))
      }
      <Item key={'new'} doAccept={() => props.doCreate({name: newValue})} doCancel={() => console.log('')}>{newValue}</Item>
    </Container>
  );

}

export default List;
