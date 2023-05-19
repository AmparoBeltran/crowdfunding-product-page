import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 :root {
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }

    #root{
      position: relative;
    }
    
  *{
    box-sizing: border-box;
  }
    
    body {
      margin: 0 auto;
      font-family: 'Commissioner', sans-serif;  
      background-color: hsl(0deg 0% 97.18%);
    }


    h1, h2, h3{
        font-weight: 700;
        ${({ theme }) => theme.colors.black};
    }

    h1{
        font-size: 1.5em;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size:2em;
 }
    }

    h2{
        font-size: 1.3em;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size:2em;
 }
    }

    h3{
        font-size: 1em;
        &:hover{
            color: ${({ theme }) => theme.colors.moderateCyan};
        }
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size:1.2em;
 }
    }
  
    p{
        font-size: 16px;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.darkGray};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size:1em;
 }
    }


    button{
        cursor: pointer;
    }

  button.primary{
    background-color: ${({ theme }) => theme.colors.moderateCyan};
    color: white;
    border: none;
    border-radius: 100px;
    padding:0 2.8em;
    font-size: 1em;
    font-weight: 700;

   &:hover{
    background-color: ${({ theme }) => theme.colors.darkCyan};
   }
  }


  button.bookmark{
    border: none;
    background-color: transparent;
  }

  .border{
    border: 1px solid hsl(0deg 17.64% 95.81%);
    border-radius: 20px;
  }

    `;

export default GlobalStyles;
