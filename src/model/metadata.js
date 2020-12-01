import React, { useState, createContext } from 'react';

export const Metadata = createContext();

export const MetadataProvider = props => {

  const [metadata, setMetadata] = useState({
    company: {
      name: 'Soft4pilot',
      slogan: 'Conocimiento, información y datos aeronáuticos',
      email: 'josesteva@soft4pilot.com.mx'
    },
    product: {
      name: 'APW',
      version: '1.3',
      summary: 'Arquitectura de Productos Web',
      author: {
        name: 'José Esteva',
        email: 'josesteva@soft4pilot.com.mx'
      },
      license: {
        type: 'MIT',
        url: '',
        copyright: '&copy; 2019 soft4pilot.com.mx'
      },
      repository: ''
    },
    resources: [
      {
        label: 'Visión',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        url: '#vision'
      },
      {
        label: 'Características',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        url: '#features'
      },
      {
        label: 'Diseño',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        url: '#design'
      },
      {
        label: 'Tecnología',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        url: '#technology'
      }
    ]
  });

  return (
    <Metadata.Provider value={[metadata, setMetadata]}>
      {props.children}
    </Metadata.Provider>
  )

}
