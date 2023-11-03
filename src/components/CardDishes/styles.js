import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 21rem;
  height: 33.2rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    margin-top: -3rem;
  }

  > p {
    display: none;
  }

  > h2 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .FavoriteDish {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    margin-left: 14rem;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 30.4rem;
    height: 50.2rem;
    gap: 1.5rem;

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > p {
      display: -webkit-box;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      line-height: 160%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    > h2 {
      font-size: 3.2rem;
      line-height: 160%;
    }
    .FavoriteDish {
      margin-left: 22rem;
    }
  }
`;

export const EditDish = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const DetailsDish = styled(Link)`
  width: 100%;

  > h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    align-self: stretch;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > h3 {
      font-size: 2.4rem;
      line-height: 140%;
    }
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  > button {
    width: 16.2rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;

    > button {
      height: 4.8rem;
      width: 9.2rem;
    }
  }
`;
