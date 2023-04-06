import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
}

body {
    background: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

p {
    line-height: 1rem;
    letter-spacing: 0.1em;
}
`;
export default GlobalStyles;
