import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  font-size: 1.2rem;
  height: 100vh;
  width: 100%;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  margin: 1.6rem 5.6rem;
  text-align: center;
  height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-top: 4rem;
    gap: 10rem;
    max-width: 300rem;
    margin: 0 auto;
  }
`;

export const IngredientsTags = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const PlateDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Right = styled.div`
  > h1 {
    font-size: 2.7rem;
    margin-bottom: 0.4rem;
  }

  > p {
    font-size: 1.6rem;
    text-align: center;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 1.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1 {
      font-size: 4rem;
    }

    > p {
      font-size: 2.4rem;
    }
  }

  .side {
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    gap: 1.6rem;
    margin-top: 2rem;

    > button {
      width: 100%;
      height: 4.8rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      > button {
        width: 18.8rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      > button {
        width: 22.8rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      height: 6rem;
      > button {
        height: 5rem;
      }
    }
  }
`;

export const BackPage = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > a {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
  }

  > img {
    width: 20rem;
    height: 20rem;
    margin: 2rem auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > img {
      width: 40rem;
      height: 40rem;
      margin: 6rem auto;
    }
  }
`;
