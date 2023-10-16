import styled from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  > a {
    font-size: 1.4rem;
  }

  > img {
    width: 8.8rem;
  }

  > p {
    display: none;
  }

  > h4 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: 1024px) {
    width: 30.4rem;
    height: 40rem;

    > a {
      font-size: 2.4rem;
    }

    > img {
      width: 8.8rem;
    }

    > p {
      display: flex;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > h4 {
      font-size: 3.2rem;
    }
  }
`;

export const Favorite = styled.div`
  margin-bottom: -2rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 2.2rem;

  > svg {
    width: 2.4rem;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > button {
    width: 16.2rem;
    height: 3.2rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;

    > button {
      height: 4.8rem;
    }
  }
`;
