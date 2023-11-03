import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  height: 3.2rem;
  padding: 0.4rem 0;
  display: inline-flex;
  justify-content: center;
  gap: 1.4rem;
  align-items: center;

  > span {
    font-size: 1.6rem;
  }

  > button {
    background: none;
    border: none;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
