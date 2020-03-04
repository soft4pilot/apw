import React, { useState } from 'react';
import Styled from 'styled-components';

import { connect } from 'react-redux';

import { check } from 'react-icons-kit/fa/check'
import { remove } from 'react-icons-kit/fa/remove'

import Command from '../../atoms/Command';
import Label from '../../atoms/Label';

// Contenedro del componente
const Container = Styled.li`

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3px;
  padding: 6px;
  border-style: none;
  background-color: #f9f9f9;
  cursor: pointer;

`;

const Content = Styled.input`

  flex: auto;
  margin-right: 1em;

  background: #fdfdfd;
  border-style: none;
  font-size: ${props => props.size ? props.size : '1em'};
  line-height: ${props => props.size ? props.size + props.size / 2 : '1.5em'};

`;

// Componente exportado
const Item = props => {



  return(
  <Container>
    <Content type='text' defaultValue={props.children} />
    <div>
      <Command icon={check} action={props.doAccept} />
      <Command icon={remove} action={props.doCancel} />
    </div>
  </Container>
);

}

export default Item;
