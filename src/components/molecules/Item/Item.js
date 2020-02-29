import React from 'react';
import Styled from 'styled-components';

import { remove } from 'react-icons-kit/fa/remove'
import { check } from 'react-icons-kit/fa/check'

import Command from '../../atoms/Command';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';

// Contenedro del componente
const Container = Styled.li`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin: 2px;

  background-color: #f9f9f9;

  cursor: pointer;
`;

// Componente exportado
const Item = props => {

  // Estructura del componente
  if (props.isEditing) {
    return (
      <Container>
        <Input>{props.children}</Input>
        <div>
          <Command icon={check} doCommand={() => alert('Ouch!')} />
          <Command icon={remove} doCommand={props.onDeleteItem} />
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <Label>{props.children}</Label>
        <div>
          <Command icon={remove} doCommand={props.onDeleteItem}/>
        </div>
      </Container>
    );
  }
}

export default Item;
