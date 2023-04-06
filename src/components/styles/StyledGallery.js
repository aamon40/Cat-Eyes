import styled from "styled-components";

export const StyledGallery = styled.div`
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0 12px;
  h1 {
    text-align: center;
  }

  img {
    width: 100%;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: 12px;

    &:hover {
      filter: opacity(0.8);
    }
  }

  @media screen and (max-width: 990px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }

  @media screen and (max-width: 600px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
    padding: 0 12px;
  }
`;

export const PhotoModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  svg {
    position: fixed;
    cursor: pointer;
    color: #fff;
    z-index: 1000;
    font-size: 2.5rem;
  }

  .closeBtn {
    top: 2%;
    right: 2%;
  }

  .prevBtn {
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
  }

  .nextBtn {
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
  }
`;

export const FullScreen = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;

    &:hover {
      filter: opacity(1);
    }
  }
`;
