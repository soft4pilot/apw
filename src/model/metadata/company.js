// APW 1.1
// Modelo - Metadatos - Empresa

// Tipos de acciones
const GET = "metadata/company/GET";

// Modelo de datos
const company = {
  name: 'Empresa',
  slogan: 'Lema de la empresa',
  logo: 'http://placehold.it/50x50',
  email: 'contacto@empresa.com.mx'
};

// Reductor
export default (state = company, {type, payload} ) => {
  switch( type ) {
    // ...
    default:
      return state;
  }
}

// Creadores de acciones
// ...
