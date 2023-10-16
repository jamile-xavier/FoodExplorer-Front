import styled from "styled-components";

export const Container = styled.div`
  margin: 1.6rem 5.6rem;
  text-align: center;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

export const Side = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.8rem;

  > button {
    width: 50%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const PlateDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Right = styled.div`
  > h2 {
    font-size: 2.7rem;
    margin-bottom: 2.4rem;
  }

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  > button {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > button {
      display: flex;
      width: 13.1rem;
      margin-top: 4.8rem;
    }
  }
`;

export const Left = styled.div`
  > a {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
  }

  > img {
    width: 26.4rem;
  }

  @media (min-width: 1024px) {
    > a {
      margin-bottom: 4.2rem;
    }
  }
`;
