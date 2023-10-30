import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  display: flex;
  font-size: 1.2rem;
`;

export const Nav = styled.header`
  width: 100%;
  padding: 2rem;

  .header_mobile {
    display: flex;
    justify-content: space-between;

    /* > button {
      width: 21.6rem;
      background-color: transparent;
    }*/

    > img {
      width: 14rem;
    }
  }

  .header_desktop {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem;
    > img {
      width: 20rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .header_mobile {
      display: none;
    }

    .header_desktop {
      display: flex;
      justify-content: space-around;
      align-items: center;

      > button {
        width: 21.6rem;
      }

      > label {
        width: 58rem;
      }
    }

    .header_desktop > img {
      width: 20rem;
    }
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 2.4rem;
    height: 1.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem;
    > svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const Profile = styled(Link)`
  width: 10rem;
  font-size: 1.6rem;
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
