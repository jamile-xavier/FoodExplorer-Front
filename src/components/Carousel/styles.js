import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  margin: 0 auto;

  .swiper {
    width: 100%;
    height: 36rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .swiper {
      height: 55rem;
    }

    .swiper-slide {
      font-size: 2.4rem;
    }
  }
`;
