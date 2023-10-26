import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
       }

       :root {
        font-size: 62.5%;
       }


body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
}

body, button, a, h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    outline: none;
    }

 input, label, textarea, p {
    font-family: 'Roboto', sans-serif;
    outline: none;

 }

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`;
