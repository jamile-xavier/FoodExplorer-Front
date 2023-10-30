import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.8rem;
  margin-bottom: 1rem;

  > label {
    margin-bottom: 0.8rem;
  }

  > input {
    width: 100%;
    height: 3.8rem;
    padding: 1.2rem 1.4rem;
    border: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > input {
      padding: 2.5rem 1.4rem;
      font-size: 1.4rem;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > input {
      font-size: 1.6rem;
    }
    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
