import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'IBM Plex Sans', sans-serif;
    overflow-y: scroll;
  }
`;
 
export default GlobalStyle;