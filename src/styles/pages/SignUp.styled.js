const { default: styled } = require("styled-components");

const StyledSignUp = styled.section`
  width: 100%;
  height: 90vh;
  justify-content: center;
  display: flex;
  margin-top: 1rem;

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

export { StyledSignUp };
