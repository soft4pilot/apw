import React, { useState } from 'react';

// Componentes utilizados
import Command from '../Command';

// Estilos del Componente
import style from './style.module.css';

import { check } from 'react-icons-kit/fa/check';
import { remove } from 'react-icons-kit/fa/remove';

// Componente exportado
const Item = props => {

  const {
    dataInput,
    dataChange,
    deleteRequest
  } = props;

  const [value, setValue] = useState(props.value ? props.value : '');

  return(
    <li className={style.item}>
      <input className={style.itemInput} type="text" value={value} onChange={event => setValue(event.target.value)} />
      <div>
        { dataChange && <Command icon={check} action={() => { dataChange(value); }} /> }
        { deleteRequest && <Command icon={remove} action={deleteRequest} /> }
        { dataInput && value && <Command icon={check} action={() => { dataInput(value); setValue('')}} /> }
      </div>
    </li>
  );

}

export default Item;
