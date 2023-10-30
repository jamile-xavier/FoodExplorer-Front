import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  text-align: right;
  padding: 2.4rem;
  margin-top: 2.4rem;

  > img {
    width: 50%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.4rem;
    > img {
      width: 30%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
    padding: 2.4rem 12.3rem;
    margin-top: 4.6rem;

    > img {
      width: 18.6rem;
    }
  }
`;
