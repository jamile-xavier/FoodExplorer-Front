import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  font-size: 1.4rem;

  > img {
    width: 100%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 8rem;
    gap: 10rem;
    font-size: 1.6rem;
    > img {
      max-width: 70%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-evenly;

    > img {
      max-width: 30%;
    }
  }
`;

export const TextLogin = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    justify-content: center;

    > h1 {
      font-size: 3.2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 2rem 0;

  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;
    max-width: 60rem;
  }
`;

export const NewAcc = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;
`;
