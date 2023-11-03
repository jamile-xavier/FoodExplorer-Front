import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  font-size: 1.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
  }
`;

export const Content = styled.div`
  margin: 0rem 2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 0rem 8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 300rem;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .category {
    display: flex;
    flex-direction: column;
    > select {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      padding: 2.5rem 1.6rem;
      border: none;
      border-radius: 0.8rem;
    }
  }

  .ingredients {
    display: flex;
    flex-direction: column;

    .ingredient {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      width: 100%;
      height: auto;
      padding: 0.4rem;

      border-radius: 0.8rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;
    grid-template-areas:
      "image name category"
      "ingredients ingredients price"
      "description description description";
    align-items: center;

    .name {
      grid-area: name;
    }

    .category {
      grid-area: category;
    }

    .ingredients {
      grid-area: ingredients;
    }

    .price {
      grid-area: price;
    }

    .description {
      grid-area: description;
    }
  }
`;

export const Image = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 12rem;
  height: 12rem;

  > img {
    border-radius: 50%;

    width: 10rem;
    height: 10rem;
  }

  > label {
    width: 3.2rem;
    height: 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    border-radius: 50%;

    position: absolute;
    bottom: 1.2rem;
    right: 0.8rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 3rem;
      height: 3rem;
      color: #ffffff;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 16rem;
    height: 16rem;

    > img {
      width: 15rem;
      height: 15rem;
    }

    > label {
      width: 3.2rem;
      height: 3.2rem;
      bottom: 1rem;
      right: 1.8rem;
    }

    > svg {
      width: 5rem;
      height: 4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-area: image;
    width: 16rem;
    height: 16rem;

    > img {
      width: 12rem;
      height: 10rem;
    }

    > label {
      bottom: 5rem;
      right: 2.8rem;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  > a {
    display: flex;
    align-items: center;
  }

  > h1 {
    font-size: 1.6rem;
    margin-top: 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
      font-size: 2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > h1 {
      font-size: 3.2rem;
    }
  }
`;

export const Buttons = styled.div`
  > button {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    margin-top: 2.4rem;
  }

  > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    margin-top: 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    gap: 3.2rem;
    justify-content: space-evenly;

    /* display: flex;
    gap: 3.2rem;
    align-content: space-between;
    justify-content: flex-end;

    > button {
      width: 17.2rem;
    }*/
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    gap: 3.2rem;
    justify-content: flex-end;

    > button {
      width: 20rem;
    }
  }
`;
