import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  font-size: 1.4rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  margin-top: 2.4rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    height: 3.2rem;
    width: 100%;
    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.DARK_500};
    }
  }

  /* @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
  }*/
`;
