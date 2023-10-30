import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  > h2 {
    font-size: 1.8rem;
    margin: 6.2rem 0 2.4rem 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.4rem;
    > img {
      width: 20rem;
      height: 12rem;
      margin: -2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 1rem;
  margin: 2.6rem 1.6rem 2.6rem 3.2rem;
  gap: 2rem;
  height: 16rem;
  > img {
    width: 12rem;
    height: 16rem;
    margin: -2rem;
  }

  .banner_title {
    padding: 1.6rem 0.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    > img {
      width: 19.1rem;
      height: 19.9rem;
      margin-top: -6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 8rem;

    > img {
      width: 30rem;
      height: 19rem;
      margin-top: -6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-between;
    height: 26rem;

    > img {
      width: 63.2rem;
      height: 34.6rem;
      margin: -8rem 0 0 -4rem;
    }
  }
`;

export const FixedContent = styled.div``;
