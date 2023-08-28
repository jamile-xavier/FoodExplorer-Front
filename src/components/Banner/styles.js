import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  display: flex;
  align-items: center;
  margin: 3rem 1.5rem 0 3rem;

  > img {
    width: 19.1rem;
    height: 14.9rem;
    margin: -3rem 0 0 -3rem;
  }

  @media (min-width: 1024px) {
    margin: 12rem 3rem 0 6rem;

    > img {
      width: 63.2rem;
      height: 40.6rem;
      margin-top: -9rem;
    }
  }
`;

export const Text = styled.div`
  word-break: break-word;
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    margin: 6rem 3rem 0 6rem;
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
