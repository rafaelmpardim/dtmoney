import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --blue: #5429CC;
    --blue-light: #6933FF:
    --red: #E52E4D;
    --shape: #FFFFFF;
    --text-body: #969CB3;
    --text-title: #363F5F;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: .6;
  }
`