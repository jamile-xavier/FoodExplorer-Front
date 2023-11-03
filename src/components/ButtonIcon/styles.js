import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.5rem;
  border: none;
  gap: 0.8rem;
  justify-content: center;
  padding: 1.2rem 1.6rem;
  width: 6rem;
  height: 6rem;
  font-size: 1.6rem;

  > svg {
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 10rem;
    height: 10rem;

    > svg {
      width: 6rem;
      height: 6rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.4rem;
    width: 18.6rem;
    height: 5.6rem;
    padding: 0.2rem 1.2rem;

    > svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 25.6rem;
    padding: 4.2rem;
    font-size: 1.8rem;
    > svg {
      width: 4.2rem;
      height: 4.2rem;
    }
  }
`;
