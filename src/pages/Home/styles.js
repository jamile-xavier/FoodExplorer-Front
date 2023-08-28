import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 1.8rem;
    margin: 6.2rem 0 2.4rem 2.4rem;
  }

  @media (min-width: 1024px) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`;

export const Foods = styled.div`
  display: flex;
  gap: 1.6rem;
`;
