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
    --clr-yellow: #ffb515;
    --clr-yellow-shade: #ff9a00;
    --clr-red: #E91E63;
    --clr-red-shade1: rgba(233, 30, 99, 0.19);
    --clr-red-shade2: rgba(233, 30, 99, 0.23);
    --clr-light-grey: #f5f5f5;
  }
  html {
    font-size: 62.5%;
  }
  body {
    min-height: 100vh;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyles;
