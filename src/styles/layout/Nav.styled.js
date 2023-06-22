import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: 98;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 50px;
    padding: 0;
  }
  @media (max-width: 350px) {
    padding: 0;
  }
`;

export { StyledNav };
