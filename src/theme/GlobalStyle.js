import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   html {
      font-size: 10px;
      font-family: ${({ theme }) => theme.fontFamily};
   }

   body {
      margin: 0;
      padding: 0;
      font-size: ${({ theme }) => theme.fontSize.m};
      background: ${({ theme }) => theme.bgMain};
      color: ${({ theme }) => theme.fontPrimary};
   }

   input, button, textarea {
      font-family: ${({ theme }) => theme.fontFamily};
   }


   ::selection {
      background: ${({ theme }) => theme.selectionColor};
      color: black;
   }

`

export default GlobalStyle
