import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');



*, *::before, *::after {
  margin: 0;
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 
 
}

html {
    font-size: 62.5%; 
    
  }
  
body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
   
    
}

`;

export default GlobalStyle;
