import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  > a {
    > h3 {
      font-size: 1.2rem;
    }
    > svg {
      width: 2.4rem;
      margin-left: 10rem;
    }
  }

  > img {
    width: 8.8rem;
  }

  > p {
    display: none;
  }

  > h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .FavoriteDish {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > a {
      > h3 {
        font-size: 1.4rem;
      }
      > svg {
        width: 3.4rem;
      }
    }

    > img {
      width: 12.8rem;
    }

    > h2 {
      font-size: 1.4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 30.4rem;
    height: 40rem;

    > a {
      > h3 {
        font-size: 2.4rem;
      }
      > svg {
        width: 3.4rem;
        margin-left: 15rem;
      }
    }

    > img {
      width: 17.6rem;
    }

    > p {
      display: flex;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > h2 {
      font-size: 3.2rem;
    }
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > button {
    width: 16.2rem;
    height: 3.2rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;

    > button {
      height: 4.8rem;
    }
  }
`;
