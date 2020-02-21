import React from 'react';
import Styled from 'styled-components';

import Item from '../../molecules/Item';

const Container = Styled.ul`
  padding: 20px;
  list-style: none;
`;

const handleDelete = event => {

  alert('Ouch!');

}

const List = props => {

  // Estructura del componente
  return (
    <Container>
      { props.items.map(item => (
        <Item key={item.id} handleDelete={() => handleDelete(item.id)}>{item.name}</Item>
        ))
      }
    </Container>
  );

}

export default List;
