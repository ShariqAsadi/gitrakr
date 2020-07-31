import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background: #fff;
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export default GlobalStyles;
