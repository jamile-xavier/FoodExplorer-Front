import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
`;

export const IngredientsTags = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const PlateDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10rem;
    max-width: 120rem;
    margin: 0 auto;
  }
`;

export const Right = styled.div`
  > h1 {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }

  > p {
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
`;

export const Left = styled.div`
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
