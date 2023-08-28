import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  text-align: right;
  padding: 2.4rem;
  margin-top: 2.4rem;

  > img {
    width: 14.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
    padding: 2.4rem 12.3rem;
    margin-top: 4.6rem;

    > img {
      width: 18.6rem;
    }
  }
`;
