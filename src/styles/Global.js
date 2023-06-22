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

.header{
    animation: load 3s infinite ease-in-out;
    font-size: 4rem;
    color: transparent;
  background-clip: text;
  background: linear-gradient(98.63deg, grey 0%, #000 100%);
  -webkit-background-clip: text;
  font-family: 'Share Tech Mono', monospace;
  transition: 0.55s ease-in-out;

    @keyframes load {
       
        0%{
            background: linear-gradient(98.63deg, grey 0%, #000 100%);
            color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
        }
        50%{
            background: linear-gradient(98.63deg, #fff 0%, #000 100%);
            color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
        }
        100%{
                background: linear-gradient(98.63deg, gray 0%, grey 100%);
                color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
        }
    }

    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 700px) {
        font-size: 1.5rem;
    }
}

`;
