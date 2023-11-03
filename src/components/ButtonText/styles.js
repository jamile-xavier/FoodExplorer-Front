import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.5rem;
  border: none;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
    width: 21.6rem;
    height: 4.8rem;
  }
`;
