// APW 1.1
// Modelo - Metadatos - Producto

// Tipos de acciones
// ...

// Modelo de datos
const product = {
  name: 'APW 1.2',
  version: '1.2',
  summary: 'Arquitectura de Productos Web',
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
