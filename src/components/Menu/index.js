// Librerias
import React from 'react';
import { connect } from 'react-redux';

// Componentes utilizados
import Command from '../Command';
import Link from '../Link';

// Estilos del Componente
import style from './style.module.css';
import { search } from 'react-icons-kit/fa/search';

// Componente exportado
const Menu = props => {

  // Propiedades
  const {
    resources,
  } = props;

  // Estructura
  return (
    <nav className={style.menu}>
      { resources.map((resource, i) => (
        <Link key={i} to={resource.route}>{resource.byname}</Link>
      ))}
      <Command icon={search} action={() => alert('Ouch!')} />
    </nav>
  );

}

// Datos utilizados
const mapStateToProps = model => {
  return {
    resources: model.resources,
  }
}

export default connect(mapStateToProps)(Menu);
