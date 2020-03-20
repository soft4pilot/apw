import React from 'react';

// Componentes utilizados
import Item from '../Item';

// Estilos del Componente
import style from './style.module.css';

// Componente exportado
const List = props => {

  // Estructura del componente
  return (
    <ul className={style.list}>
      { props.items.map(item => (
        <Item key={item.id} value={item.text} dataChange={value => props.updateItem(item.id, {text: value})} deleteRequest={() => props.deleteItem(item.id)} />
        ))
      }
      <Item key={0} value={''} dataInput={value => { props.addItem({text: value});}} />
    </ul>
  );

}

export default List;
