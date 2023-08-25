import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
