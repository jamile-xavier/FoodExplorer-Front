import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 102.4rem;
    margin: 0 auto;
  }
`;

export const ButtonBack = styled.button`
  height: 5rem;
  background: none;
  border: none;
  border-radius: 0.5rem;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 4rem;
  }
`;

export const Form = styled.form`
  margin: 4rem auto 0;
  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    width: 100%;
    margin-top: 2rem;
    padding: 3rem;
    align-items: center;
  }
`;

export const Avatar = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  margin: -3.4rem auto;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;

    width: 10rem;
    height: 10rem;
  }

  > label {
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7.2rem;
    right: 4.8rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 50rem;
      height: 4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: -1.4rem auto;

    > img {
      width: 15rem;
      height: 15rem;
    }

    > label {
      width: 4rem;
      height: 4rem;
      bottom: 3rem;
      right: 3rem;
    }
  }
`;
