import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html{
    &::-webkit-scrollbar{
      width: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: darkgray;
      border-radius: 2rem;
    }
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
  h2{
    font-family: 'Abril Fatface', cursive;
    font-size: 2rem ;
    font-weight: lighter;
    color:#375db5;
  }
  h3{
    font-size: 1.3rem;
    padding: 0.5rem;
    color: #333;
  }
  p{
    font-size: 1rem;
    color:#696969;
    line-height: 200%;
  }
  a{
    text-decoration: none;
    color: #333;
  }
`;

export default GlobalStyles;
