import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.8rem;

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    border: none;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  > svg {
    margin-left: 1rem;
    font-size: 2rem;
  }
`;
