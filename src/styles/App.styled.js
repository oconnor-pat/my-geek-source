import { createGlobalStyle } from "styled-components";

const theme = {
  primary: "#032c48", // blue
  primaryLight: "#798e9c", // light blue
  secondary: "#e90c31", // red
  white: "#ffffff",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.primary};
    color: ${theme.primary};
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
