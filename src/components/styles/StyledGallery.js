import styled from "styled-components";

export const StyledGallery = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  h1 {
    text-align: center;
  }

  img {
    width: 100%;
  }
`;
