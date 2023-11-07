import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_400};
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    width: 15rem;
  }

  > h1 {
    font-size: 2.5rem;
  }

  > p {
    font-size: 1.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    > img {
      width: 30rem;
    }

    > h1 {
      font-size: 4.5rem;
    }

    > p {
      font-size: 3.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > img {
      width: 30rem;
    }

    > h1 {
      font-size: 4.5rem;
    }

    > p {
      font-size: 3.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 102.4rem;
    margin: 0 auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > img {
      width: 50rem;
    }

    > h1 {
      font-size: 9rem;
    }

    > p {
      font-size: 7rem;
    }
  }
`;
