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
      padding: 1.3rem 1.6rem;
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
    align-items: color-interpolation-filters;

    .image {
      grid-area: image;
    }

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

  @media (min-width: ${DEVICE_BREAKPOINTS}) {
    /* display: flex;
    gap: 3.2rem;
    align-content: space-between;
    justify-content: flex-end;

    > button {
      width: 17.2rem;
    }*/
  }
`;
