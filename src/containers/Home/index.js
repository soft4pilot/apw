// APW 1.1
// Interfaces - Home

import React from 'react';
import { connect } from 'react-redux';

// Estilos del Componente
import Style from './style.module.css';

// Componentes utilizados
import Hero from '../../components/Hero';

import Card from '../../components/Card';

// Interfaz exportada
const Home = props => {

  // Estructura
  return (
      <main className={Style.Home}>

        <Hero />

        <div className={Style.Subjects}>

          <h2>Descripción de la arquitectura</h2>

          <div className={Style.SubjectsList}>

            <Card title="Contexto" summary="Descripción del entorno" image={require('../../assets/background-1.jpg')}/>
            <Card title="Funcionalidad" summary="Funcionalidad general" image={require('../../assets/background-2.jpg')}/>
            <Card title="Atributos" summary="Atributos de calidad" image={require('../../assets/background-7.jpg')}/>
            <Card title="Limitaciones" summary="Desciciones y limitaciones" image={require('../../assets/background-9.jpg')}/>
            <Card title="Principios" summary="Principios de diseño" image={require('../../assets/background-12.jpg')}/>
            <Card title="Código" summary="Código fuente" image={require('../../assets/background-16.jpg')}/>
            <Card title="Datos" summary="Modelo de datos" image={require('../../assets/background-19.jpg')}/>

          </div>

        </div>

      </main>
  );
}

export default Home;
