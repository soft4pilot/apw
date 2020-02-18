import React from 'react';
import Styled from 'styled-components';

import Line from '../../molecules/Line';

const Container = Styled.ul`
  padding: 20px;
  list-style: none;
`;

const Items = props => {

  // Estructura del componente
  return (
    <Container>
      { props.items.map(item => (
        <Line key={item.id}>{item.name}</Line>
        ))
      }
    </Container>
  );

}

export default Items;
