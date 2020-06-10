import React, { useState } from 'react';
import styled from 'styled-components';

// Dependencias
import Command from './Command';

// Íconos
import { check } from 'react-icons-kit/fa/check';
import { remove } from 'react-icons-kit/fa/remove';

// Estilos
const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3px;
  padding: 6px;
  border-style: none;
  background-color: #f9f9f9;
  cursor: pointer;
  & > input {
    flex: auto;
    margin-right: 1em;
    background: #fdfdfd;
    border-style: none;
    font-size: 1em;
    line-height: 1.5em;
  }
`;

// Componente
const Item = props => {

  const {
    dataInput,
    dataChange,
    deleteRequest
  } = props;

  const [value, setValue] = useState(props.value ? props.value : '');

  return(
    <Container>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <div>
        { dataChange && <Command icon={check} action={() => { dataChange(value); }} /> }
        { deleteRequest && <Command icon={remove} action={deleteRequest} /> }
        { dataInput && value && <Command icon={check} action={() => { dataInput(value); setValue('')}} /> }
      </div>
    </Container>
  );

}

export default Item;
