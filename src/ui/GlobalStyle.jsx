import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 0;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "Bricolage Grotesque", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
`;

export default GlobalStyle;
