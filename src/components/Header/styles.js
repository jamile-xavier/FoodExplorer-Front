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
    align-items: center;

    > button {
      background-color: transparent;

      > svg {
        width: 3rem;
        height: 3rem;
      }
    }

    > img {
      width: 12rem;
    }
  }

  .header_desktop {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    .header_mobile {
      > img {
        width: 16rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .header_mobile {
      > button {
        > svg {
          width: 6rem;
          height: 6rem;
        }
      }

      > img {
        width: 22rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .header_mobile {
      display: none;
    }

    .header_desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      > label {
        width: 40rem;
      }

      > img {
        width: 15rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
      .header_desktop {
        > img {
          width: 30rem;
        }

        > label {
          width: 80rem;
        }
      }
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

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    > svg {
      width: 4rem;
      height: 4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2rem;
    > svg {
      width: 6rem;
      height: 6rem;
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  padding: 1rem;
  margin: 0 2.8rem;

  > img {
    width: 6.6rem;
    height: 6.6rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > img {
      width: 10.6rem;
      height: 10.6rem;
    }

    > span {
      font-size: 1.6rem;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 3.2rem;
    height: 3.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > svg {
      width: 6.2rem;
      height: 6.2rem;
    }
  }
`;
