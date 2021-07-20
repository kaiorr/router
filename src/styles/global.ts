import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('TT-Norms-Pro-Regular'), local('TT-Norms-Pro-Regular'),
       url('/fonts/TT-Norms-Pro-Regular.otf') format('otf'),
}

@font-face {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local('TT-Norms-Pro-Medium'), local('TT-Norms-Pro-Medium'),
       url('/fonts/TT-Norms-Pro-Medium.otf') format('otf'),
}

@font-face {
  font-family: 'TT Norms';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('TT-Norms-Pro-Bold'), local('TT-Norms-Pro-Bold'),
       url('/fonts/TT-Norms-Pro-Bold.otf') format('otf'),
}


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: ${({theme}) => theme.}
  }
`;

export default GlobalStyles;
