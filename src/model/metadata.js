import React, { useState, createContext } from 'react';

export const Metadata = createContext();

export const MetadataProvider = props => {

  const [metadata, setMetadata] = useState({
    company: {
      name: 'Empresa',
      slogan: 'Lema de la empresa',
      logo: 'http://placehold.it/50x50',
      email: 'contacto@empresa.com.mx'
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
        id: 'page',
        name: 'Características',
        byname: 'Características',
        access: 1,
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        route: '/page'
      },
      {
        id: 'page',
        name: 'Arquitectura',
        byname: 'Arquitectura',
        access: 1,
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        route: '/page'
      },
      {
        id: 'page',
        name: 'Tecnología',
        byname: 'Tecnología',
        access: 1,
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
        route: '/page'
      }
    ]
  });

  return (
    <Metadata.Provider value={[metadata, setMetadata]}>
      {props.children}
    </Metadata.Provider>
  )

}
