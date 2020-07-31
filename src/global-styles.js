import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
    min-height: 100vh;
    color: rgb(19, 20, 21);
    min-width: 100vw;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyles;
