import React from 'react';

export const initialState = {
  company: {
    name: 'Soft4pilot',
    slogan: 'Conocimiento, información y datos para pilotos',
    logo: 'http://placehold.it/100x100',
    email: 'info@soft4pilot.com.mx'
  },
  service: {
    name: 'APW',
    version: '1.1',
    author: {
      name: 'José Esteva',
      email: 'josesteva@soft4pilot.com.mx'
    },
    license: {
      type: 'MIT',
      url: '',
      copyright: '&copy; 2019 soft4pilot.com.mx Todos los derechos reservados'
    }
  },
  resources: [
    {
      id: 'home',
      name: 'Página principal',
      byname: 'Inicio',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
      route: '/',
    },{
      id: 'page',
      name: 'Página interna',
      byname: 'Página',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
      route: '/page'
    }
  ],
  user: {
    name: null,
    privileges: 0
  }
};

export default React.createContext(initialState);
