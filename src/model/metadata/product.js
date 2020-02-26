// APW 1.1
// Modelo - Metadatos - Producto

// Tipos de acciones
// ...

// Modelo de datos
const product = {
  name: 'Producto',
  version: '1.1',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
  author: {
    name: 'José Esteva',
    email: 'josesteva@soft4pilot.com.mx'
  },
  license: {
    type: 'MIT',
    url: '',
    copyright: '&copy; 2019 soft4pilot.com.mx Todos los derechos reservados'
  }
};

// Creadores de acciones
// ...

// Reductor
export default (state = product, {type, payload} ) => {
  switch( type ) {
    // ...
    default:
      return state;
  }
}
