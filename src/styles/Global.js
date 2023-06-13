import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.tryloader{
    animation: alert 1s infinite linear;

    @keyframes alert {
        from{
       transform: rotate(350deg);
    }to{
        transform: rotate(-350deg);
        }
    }
}
`;
