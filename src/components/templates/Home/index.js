import React from 'react';

import Title from 'components/atoms/Title';
import Article from 'components/organisms/Article';
import Form from 'components/organisms/Form';

require('./style.css');

const Home = props => (
  <div>
    <Title text="Basic React App" />
    <Title text="Example of an atomic Blog" />
    <Article
      title="This is an article"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />
    <Article
      title="This is an article"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />
    <hr />
    <Title text="Example of an Atomic Form" />
    <Form fields={fields} buttonText="Submit" />
  </div>
);

// TEMPORAL
const fields = [
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
