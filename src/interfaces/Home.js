import React from 'react';

import Title from 'components/atoms/Title';
import Article from 'components/organisms/Article';
import Form from 'components/organisms/Form';

const Home = props => (
  <div>
    <Title text="APW 1.1" />
    <Title text="Código de ejemplo" />
    <Article
      title="Este es un artículo"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />
    <Article
      title="Este es otro artículo"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />
    <hr />
    <Title text="Este es un formulario" />
    <Form fields={formFields} buttonText="Submit" />
  </div>
);

// TEMPORAL
const formFields = [
    {
      label: 'Input 1',
      placeholder: 'Placeholder for Input 1',
    },
    {
      label: 'Input 2',
      placeholder: 'Placeholder for Input 2',
    },
];

export default Home;
