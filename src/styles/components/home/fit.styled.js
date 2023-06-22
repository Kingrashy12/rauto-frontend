import styled from "styled-components";

const StyledFitImage = styled.img`
  width: ${({ index }) => (index === 0 && "300px") || (index === 3 && "250px")};
`;

export { StyledFitImage };
