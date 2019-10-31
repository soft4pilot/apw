import React from 'react';

import Title from 'components/atoms/Title';
import Form from 'components/organisms/Form';
import ArticleList from 'components/organisms/ArticleList';

// TEMPORAL

const metadata = {
  page: "APW 1.1",
};

const listItems = [
  {
    title: "Este es un artículo",
    image: {src: "http://placehold.it/300x200", alt: "Texto alternativo"},
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus, hendrerit lectus id, pulvinar massa."
  },
  {
    title: "Este es un artículo",
    image: {src: "http://placehold.it/300x200", alt: "Texto alternativo"},
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus, hendrerit lectus id, pulvinar massa."
  },
  {
    title: "Este es un artículo",
    image: {src: "http://placehold.it/300x200", alt: "Texto alternativo"},
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus, hendrerit lectus id, pulvinar massa."
  },
  {
    title: "Este es un artículo",
    image: {src: "http://placehold.it/300x200", alt: "Texto alternativo"},
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus, hendrerit lectus id, pulvinar massa."
  },
];

const formFields = [
    {
      label: 'Usuario',
      placeholder: 'Nombre de usuario',
    },
    {
      label: 'Contraseña',
      placeholder: 'Contraseña de acceso',
    },
];

const Home = props => (
  <div>
    <Title text={metadata.page} />
    <hr />
    <ArticleList items={listItems} />
    <hr />
    <Title text="Acceso administrativo" />
    <Form fields={formFields} buttonText="Submit" />
  </div>
);

export default Home;
