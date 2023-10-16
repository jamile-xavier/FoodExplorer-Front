import styled from "styled-components";

export const Container = styled.div`
  margin: 2.4rem 3.2rem;
`;

export const Form = styled.form`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 50%;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.4rem;

  > a {
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
  }
`;

export const Buttons = styled.div`
  > button {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    margin-top: 2.4rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    gap: 3.2rem;
    align-content: space-between;
    justify-content: flex-end;

    > button {
      width: 17.2rem;
    }
  }
`;
