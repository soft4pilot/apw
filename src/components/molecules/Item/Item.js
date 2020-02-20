import React from 'react';
import Styled from 'styled-components';
import { MdClose as Icon } from "react-icons/md";

import Label from '../../atoms/Label';

// Contenedro del componente
const Container = Styled.li`
  /* Marco */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin: 2px;
  /* Color */
  background-color: #f9f9f9;
`;

// Componente exportado
const Item = props => {

  // Estructura del componente
  return (
    <Container>
      <Label>{props.children}</Label>
      <Icon onClick={props.handleDelete}/>
    </Container>
  );

}

export default Item;
