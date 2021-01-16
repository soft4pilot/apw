Soft4pilot

**APW 1.5**

Descripción de la arquitectura

*José Esteva, 9 de diciembre de 2020.*

# PRESENTACIÓN

La **Arquitectura de Productos Web versión 1.5** o simplemente **APW 1.5** es una arquitectura de software de última generación que abarca los 3 elementos fundamentales del software contemporáneo. (NOTE:  Datos, programas e interfaces.) A partir de ella pueden construirse productos Web estructurados, eficientes y escalables.

![image alt text](image_0.jpg)

Para describir la arquitectura utilizaré el modelo **C4** (NOTE:  https://c4model.com) de Simon Brown, integrado por 4 vistas jerárquicas que permiten describir de manera sencilla y precisa la estructura de un producto de software.

# CONTEXTO

La arquitectura está constituida por 3 sistemas independientes que proporcionan funcionalidad, datos y componentes reutilizables. Para crear y mantener cada uno de estos sistemas se requiere un *Diseñador* *gráfico*, un *Programador* *Web* y un *Creador* *de contenido*. 

**Figura 1.** Contexto del producto Web.

El sistema principal es el *producto* Web creado a partir de la arquitectura. En este sistema se incluye la mayor parte de la lógica de negocio y las interfaces utilizadas por el *usuario* para interactuar con el sistema.

La información que gestiona el producto se almacena en un gestor de *contenido* acéfalo* *al que se puede acceder utilizando una interfaz programática (API). A diferencia de un CMS tradicional que mezcla plantillas y datos para generar páginas Web estáticas, un gestor de contenido acéfalo proporciona únicamente datos.

<table>
  <tr>
    <td>Participante</td>
    <td>Tipo</td>
    <td>Descripción</td>
  </tr>
  <tr>
    <td>Usuario</td>
    <td>Persona</td>
    <td>Usuario del producto Web.</td>
  </tr>
  <tr>
    <td>Creador</td>
    <td>Persona</td>
    <td>Creador de contenido responsable de elaborar y mantener la información que proporciona el producto.</td>
  </tr>
  <tr>
    <td>Programador</td>
    <td>Persona</td>
    <td>Programador Web responsable de implementar y mantener funcionando el producto.</td>
  </tr>
  <tr>
    <td>Producto</td>
    <td>Sistema</td>
    <td>Aplicación Web utilizada que proporciona algún servicio de información.</td>
  </tr>
  <tr>
    <td>Contenido</td>
    <td>Sistema</td>
    <td>Gestor de contenido donde se almacena la información que proporciona el producto.</td>
  </tr>
  <tr>
    <td>Diseño</td>
    <td>Sistema</td>
    <td>Sistema de diseño que proporciona componentes y estilos reutilizables a los productos.</td>
  </tr>
</table>


**Tabla 1.** Participantes en el contexto del *producto*. 

Finalmente, el sistema de diseño permite desarrollar de forma independientemente los componentes que utiliza la interfaz gráfica y distribuirlos a los *productos* a través de un gestor de paquetes.

# CONTENEDORES

## Sistema: Producto

Todos los productos Web se basan en un patrón arquitectónico llamado **Cliente-Servidor** donde el *cliente* realiza solicitudes y el *servidor* emite respuestas.

![image alt text](image_1.png)

**Figura 2.** Contenedores utilizados por el *producto*.

Para realizar peticiones al *servidor* el usuario utiliza un navegador Web que descarga los componentes necesarios para acceder a la información que proporciona el producto. Posteriormente, el *cliente* puede establecer una conexión con el gestor de *contenido* para obtener la información que requiere el usuario. Si por alguna razón se pierde la conexión a la red, el cliente puede recurrir a una memoria *caché* para seguir operando.

<table>
  <tr>
    <td>Contenedor</td>
    <td>Tecnología</td>
    <td>Descripción</td>
  </tr>
  <tr>
    <td>Cliente</td>
    <td>W3C</td>
    <td>Navegador Web utilizado para descargar y ejecutar el programa cliente.</td>
  </tr>
  <tr>
    <td>Servidor</td>
    <td>Hostinger</td>
    <td>Servidor donde se almacenan los archivos que constituyen el producto Web.</td>
  </tr>
  <tr>
    <td>Cache</td>
    <td>Service Worker</td>
    <td>Espacio de memoria utilizado para trabajar sin conexión a red.</td>
  </tr>
</table>


**Tabla 2.** Descripción de los contenedores del *producto* Web.

## Sistema: Contenido

La información que proporciona el producto se almacena en un sistema de gestión de *contenido* acéfalo compuesto por 3 contenedores: Un *repositorio* donde se almacena el contenido, una interfaz programática para acceder al contenido y un *editor* para administrar el contenido.

**Figura 3.** Contenedores utilizados por el gestor de *contenido*.

Aunque es posible implementar un gestor de contenido propio, posiblemente es una mejor opción adoptar alguno de los gestores que existen en el mercado (NOTE:  Directus, GraphCMS, Contentful, Butter CMS, dotCMS, Strapi, Ghost, Zesty, Cockpit CMS, DatoCMS, etc.). Uno de los mejores gestores de contenido acéfalo que he encontrado es **Directus**; un sistema que envuelve la base de datos con una interfaz programática  (GraphQL o REST) para acceder al contenido y proporciona una excelente interfaz de administración para elaborar y mantener el contenido.

<table>
  <tr>
    <td>Contenedor</td>
    <td>Tecnología</td>
    <td>Descripción</td>
  </tr>
  <tr>
    <td>API</td>
    <td>Directus</td>
    <td>Interfaz programática utilizada para acceder al gestor de contenido.</td>
  </tr>
  <tr>
    <td>Editor</td>
    <td>Directus</td>
    <td>Interfaz gráfica utilizada para elaborar la información que proporciona el producto.</td>
  </tr>
  <tr>
    <td>Repositorio</td>
    <td>Directus</td>
    <td>Repositorio donde se almacena el contenido, generalmente datos pero también archivos y otros recursos digitales.</td>
  </tr>
</table>


**Tabla 3.** Descripción de los contenedores del gestor de *contenido*.

# COMPONENTES

## Contenedor: Cliente

El *cliente* está organizado en una estructura jerárquica compuesta por una *aplicación* principal y un conjunto de *contenedores* creados a partir de *componentes *reutilizables. 

![image alt text](image_2.png)

 **Figura 4.** Componentes que constituyen un *cliente*.

Adicionalmente, se incluyen un *adaptador* para acceder al gestor de *contenido* y un repositorio de *metadatos* para mantener el estado de la aplicación.

La *aplicación* principal contiene rutas a las diferentes interfaces del producto. Cada interfaz muestra la información de un tema específico. Por ejemplo, las páginas que conforman un sitio Web son consideradas *interfaces* por la arquitectura. 

<table>
  <tr>
    <td>Componente</td>
    <td>Tecnología</td>
    <td>Descripción</td>
  </tr>
  <tr>
    <td>Aplicación</td>
    <td>React</td>
    <td>Componente raíz donde se configura la aplicación y se definen las rutas a las interfaces del producto.</td>
  </tr>
  <tr>
    <td>Metadatos</td>
    <td>React - Context API</td>
    <td>Componente global que difunde el estado de la aplicación a los demás componentes.</td>
  </tr>
  <tr>
    <td>Contenedor</td>
    <td>React - Stateful</td>
    <td>Contenedor de componentes relacionados lógicamente utilizados para gestionar un tipo de información específico.</td>
  </tr>
  <tr>
    <td>Componente</td>
    <td>React - Stateless</td>
    <td>Componente interactivo que muestra la información de alguna de las entidades del modelo de datos. </td>
  </tr>
  <tr>
    <td>Adaptador</td>
    <td>Javascript</td>
    <td>Adaptador utilizado para acceder al gestor de contenido.</td>
  </tr>
</table>


**Tabla 4.** Descripción de los componentes del *cliente*.

Los *contenedores* agrupan *componentes* interactivos que pueden ser operados directamente por el usuario. Generalmente, los componentes generales se importan desde el sistema de diseño y los componentes especializados se incluyen como parte del producto. El encabezado, el pie de página y las secciones de una página son considerados *componentes* por la arquitectura.

Para acceder al gestor de contenido se utiliza un componente *adaptador*. Aunque cualquier componente puede utilizar este *adaptador* se recomienda hacerlo desde los *contenedores* y luego difundir los resultados a los *componentes*.

El estado de la aplicación contenido en los *metadatos* está disponible para todos los  componentes que conforman el cliente.

