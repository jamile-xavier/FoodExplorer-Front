import styled from "styled-components";
import search from "../../assets/search.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  display: flex;
`;

export const NavDesktop = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 3.2rem;
  padding: 2.4rem 12rem;
  > img {
    width: 19.7rem;
  }

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: 2.4rem;
    background-position: left;
    padding: 1.6rem 3rem;
    width: 58rem;
    height: 4.8rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 0.5rem;
  }

  > button {
    width: 21.6rem;
  }
`;

export const NavDesktopAdm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 3.2rem;
  padding: 2.4rem 12rem;
  > img {
    width: 19.7rem;
  }

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    background-image: url(${search});
    background-repeat: no-repeat;
    background-size: 2.4rem;
    background-position: left;
    padding: 1.6rem 3rem;
    width: 58rem;
    height: 4.8rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 0.5rem;
  }

  > button {
    width: 21.6rem;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  > img {
    width: 15rem;
  }

  > button {
    width: 21.6rem;
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavMobileAdm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  > img {
    width: 15rem;
  }

  > button {
    width: 21.6rem;
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
