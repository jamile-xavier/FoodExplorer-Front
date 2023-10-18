import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 20rem;

    background: ${({ theme }) => theme.COLORS.DARK_100};

    display: flex;
    align-items: center;
    padding: 0 12rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 4rem;
    }

    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 40rem;
  margin: 2rem auto 0;
  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.form`
  position: relative;
  margin: -12.4rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;

    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
