import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --input-bg: #e5e7eb;
    --input-border: #e7e9ee;
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

  .react-modal-overlay {
    align-items: center;
    background: rgba(0, 0, 0, .5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .react-modal-content {
    background: var(--background);
    border-radius: .25rem;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 95%;
    }
  }

  .react-modal-close {
    background: transparent;
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    transition: filter .2s;

    &:hover {
      filter: brightness(.8)
    }
  }
`