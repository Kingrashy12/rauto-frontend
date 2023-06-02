import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 10px;
    gap: 2rem;
  }
`;

export { StyledFooter };
