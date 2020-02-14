import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  * {
    /* Posición */
    /* Recuadro */
    box-sizing: border-box;
    /* Color */
    /* Texto */
    /* Otros */
  }

  body {
    /* Posición */
    /* Recuadro */
    /* Color */
    background-color: #fefefe;
    /* Texto */
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    /* Otros */
  }

`;

export default GlobalStyle;
