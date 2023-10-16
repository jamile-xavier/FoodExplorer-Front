import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem;

  > img {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 32rem;
  }

  @media (min-width: 1400px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const TextLogin = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;

    > h1 {
      font-size: 3.2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin: 0 6.5rem;
  font-size: 1.6rem;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    margin-top: 3.2rem;
  }

  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;
    max-width: 60rem;
  }
`;
