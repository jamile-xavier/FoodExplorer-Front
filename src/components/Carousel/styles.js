import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  color: red;
  .swiper {
    width: 100%;
    height: 100vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    // background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 640px) {
  }
`;
