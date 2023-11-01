import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  max-width: 11.6rem;
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  > input {
    height: 1.6rem;
    max-width: 8rem;
    //  padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  /* @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
  }*/
`;
