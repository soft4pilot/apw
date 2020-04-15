// APW 1.1
// Modelo - Metadatos - Recursos

// Tipos de acciones
const FILTER = "metadata/resources/FILTER";

// Modelo de datos
const resources = [
  {
    id: 'home',
    name: 'Página principal',
    byname: 'Inicio',
    access: 0,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
    route: '/'
  },{
    id: 'page',
    name: 'Página interna',
    byname: 'Página',
    access: 1,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt hendrerit imperdiet. Phasellus eget nulla vel nisi laoreet faucibus quis id neque.',
    route: '/page'
  }
];

// Reductor
export default (state = resources, {type, payload} ) => {
  switch( type ) {
    case FILTER: {
      return state.filter(access => access >= payload.access); // Seleccionar los recursos disponibles para una licencia específica
    }
    default:
      return state;
  }
}

// Acción: Filtrar recursos
export const filterResources = access => ({
  type: FILTER,
  payload: {
    access
  }
});
