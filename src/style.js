import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: sans-serif;
    font-size: 12px;
    background-color: #fefefe;
  }

`;

export default GlobalStyle;
