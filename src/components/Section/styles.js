import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  margin: 0.8rem 0;

  > h2 {
    font-size: 1.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`;
