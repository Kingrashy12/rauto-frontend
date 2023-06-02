const { default: styled } = require("styled-components");

const StyledLogin = styled.section`
  width: 100%;
  height: 65vh;
  justify-content: center;
  display: flex;
  margin-top: 4.5rem;

  input {
    &:focus {
      border: 2px solid aqua;
    }
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    input {
      &:focus {
        border: 1px solid aqua;
      }
    }
  }
`;

export { StyledLogin };
