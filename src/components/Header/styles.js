import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  display: flex;
`;

export const Nav = styled.header`
  width: 100%;
  padding: 2rem;

  > img {
    width: 19.2rem;
  }

  .header_mobile {
    display: flex;
    justify-content: space-between;

    > button {
      width: 21.6rem;
      background-color: transparent;
    }
  }

  .header_desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    padding: 2.4rem 12rem;

    .header_mobile {
      display: none;
    }

    .header_desktop {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 3.2rem;

      > img {
        width: 29rem;
      }

      > input {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        background-repeat: no-repeat;
        background-size: 2.4rem;
        background-position: left;
        padding: 1.6rem 3rem;
        width: 100%;
        height: 4.8rem;
        font-size: 1.6rem;
        border: none;
        border-radius: 0.5rem;
      }

      > button {
        max-width: 50%;
      }
    }
  }
`;

export const Profile = styled(Link)`
  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
