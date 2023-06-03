import styled from "styled-components";

const ErrorWrapper = styled.div`
  width: 35rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export { ErrorWrapper };
