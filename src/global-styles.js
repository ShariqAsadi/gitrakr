import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --clr-black: rgb(26, 30, 34);
    --clr-white: #fff;
    --clr-white-light: rgb(246, 248, 250);
    --clr-text-blue: rgb(46,144,239);
    --clr-bg-blue: rgb(66 96 125 / 88%);
    --clr-placeholder-blue: rgb(46 144 239 / 70%);
  }
  body {
    min-height: 100vh;
    min-width: 100vw;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyles;
