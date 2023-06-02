import styled from "styled-components";

const StyledNav = styled.nav`
  /* position: sticky; */
  /* top: 0; */
  width: 100%;
  height: 70px;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
  z-index: 98;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 40px;
    padding: 9px;
  }
`;

export { StyledNav };
