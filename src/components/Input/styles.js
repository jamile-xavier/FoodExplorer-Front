import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    border: none;
    gap: 1.4rem;
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    font-size: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    @media (min-width: 1024px) {
      margin: 0.8rem 0;
    }
  }
`;
