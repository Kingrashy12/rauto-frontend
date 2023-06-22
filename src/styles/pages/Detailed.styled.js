import styled from "styled-components";

const StyledDetails = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-evenly;
`;

const ListingImg = styled.img`
  width: 50rem;

  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;

export { StyledDetails, ListingImg };
